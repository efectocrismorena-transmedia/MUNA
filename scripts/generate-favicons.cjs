const fs = require('fs');
const zlib = require('zlib');

// CRC32 calculation table
const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let c = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    c = crcTable[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
  }
  return (c ^ 0xFFFFFFFF) >>> 0;
}

function makeChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);
  const crc = crc32(chunk.subarray(4, 8 + len));
  chunk.writeUInt32BE(crc, 8 + len);
  return chunk;
}

function createPng(width, height, renderPixel) {
  const signature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
  
  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // 8 bits per channel
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  const ihdrChunk = makeChunk('IHDR', ihdr);

  // Raw image data with scanline filter bytes
  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(rowSize * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // Filter None
    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const [r, g, b, a] = renderPixel(x, y, width, height);
      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a;
    }
  }

  const compressed = zlib.deflateSync(rawData);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Distance to rounded rectangle
function roundedRectSDF(x, y, w, h, rx, ry) {
  const cx = w / 2;
  const cy = h / 2;
  const dx = Math.abs(x - cx) - (cx - rx);
  const dy = Math.abs(y - cy) - (cy - ry);
  const ax = Math.max(dx, 0);
  const ay = Math.max(dy, 0);
  const dist = Math.sqrt(ax * ax + ay * ay) + Math.min(Math.max(dx, dy), 0) - rx;
  return dist;
}

// Render MUNA brand tile: Royal blue (#2B2FC7), white "m" character strokes, and lime dot (#B4F000)
function renderMunaPixel(x, y, size) {
  const normX = (x / size) * 64;
  const normY = (y / size) * 64;

  // Background rounded square
  const cornerRadius = 16;
  const distBg = roundedRectSDF(normX, normY, 64, 64, cornerRadius, cornerRadius);
  
  if (distBg > 0.8) {
    return [0, 0, 0, 0]; // Transparent outside
  }
  
  let alphaBg = 1;
  if (distBg > -0.8) {
    alphaBg = Math.max(0, Math.min(1, (-distBg + 0.8) / 1.6));
  }

  // Base background color: #2B2FC7 (43, 47, 199)
  let r = 43;
  let g = 47;
  let b = 199;
  let a = Math.round(255 * alphaBg);

  // Subtle lighter top-left border
  if (distBg >= -2.5 && distBg <= 0.2) {
    r = 67; g = 72; b = 232;
  }

  // Lime accent dot at bottom-right of 'm': center ~ (53, 44), radius ~ 4
  const dotDx = normX - 52.5;
  const dotDy = normY - 44;
  const dotDist = Math.sqrt(dotDx * dotDx + dotDy * dotDy) - 3.8;
  if (dotDist <= 0) {
    // #B4F000 -> (180, 240, 0)
    return [180, 240, 0, 255];
  } else if (dotDist < 1.2) {
    const t = 1 - (dotDist / 1.2);
    r = Math.round(r * (1 - t) + 180 * t);
    g = Math.round(g * (1 - t) + 240 * t);
    b = Math.round(b * (1 - t) + 0 * t);
    return [r, g, b, 255];
  }

  // Little Pompón peeking accent at top-right (x ~ 48..58, y ~ 8..18)
  const pomDx = normX - 52;
  const pomDy = normY - 14;
  const pomDist = Math.sqrt(pomDx * pomDx + pomDy * pomDy) - 6.5;
  if (pomDist <= 0) {
    // Orange #FF7300 -> (255, 115, 0)
    // Eyes: (50, 13) and (54, 13)
    const eye1Dist = Math.hypot(normX - 50, normY - 13);
    const eye2Dist = Math.hypot(normX - 54, normY - 13);
    if (eye1Dist < 1.2 || eye2Dist < 1.2) {
      return [11, 20, 64, 255]; // dark navy
    }
    return [255, 115, 0, 255];
  }

  // White "m" strokes:
  // Stem 1: x from 12.5 to 19, y from 22 to 45
  // Arch 1: center arch around x=26, top y=21
  // Stem 2: x from 26.5 to 33, y from 22 to 45
  // Arch 2: center arch around x=41, top y=21
  // Stem 3: x from 41 to 47.5, y from 22 to 44
  const inStem1 = normX >= 13 && normX <= 19.5 && normY >= 23 && normY <= 45;
  const inStem2 = normX >= 27 && normX <= 33.5 && normY >= 24 && normY <= 45;
  const inStem3 = normX >= 41 && normX <= 47.5 && normY >= 24 && normY <= 44;
  
  // Arch 1 connecting stem1 to stem2 (y between 21 and 29)
  const inArch1 = normX >= 17 && normX <= 33.5 && normY >= 21 && normY <= 29 && (
    normY <= 26 || normX <= 21 || normX >= 29.5
  );
  // Arch 2 connecting stem2 to stem3 (y between 21 and 29)
  const inArch2 = normX >= 31 && normX <= 47.5 && normY >= 21 && normY <= 29 && (
    normY <= 26 || normX <= 35 || normX >= 43.5
  );

  if (inStem1 || inStem2 || inStem3 || inArch1 || inArch2) {
    return [255, 255, 255, 255];
  }

  return [r, g, b, a];
}

// Generate files
const png32 = createPng(32, 32, (x, y) => renderMunaPixel(x, y, 32));
const png16 = createPng(16, 16, (x, y) => renderMunaPixel(x, y, 16));
const png180 = createPng(180, 180, (x, y) => renderMunaPixel(x, y, 180));

fs.writeFileSync('public/favicon-32x32.png', png32);
fs.writeFileSync('public/favicon-16x16.png', png16);
fs.writeFileSync('public/apple-touch-icon.png', png180);

// Create .ico wrapping the 32x32 and 16x16 PNG images
function createIco(images) {
  // images: array of { width, height, buffer }
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(count, 4); // number of images

  let offset = 6 + (16 * count);
  const dirEntries = [];
  const buffers = [];

  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry[0] = img.width >= 256 ? 0 : img.width;
    entry[1] = img.height >= 256 ? 0 : img.height;
    entry[2] = 0; // color palette
    entry[3] = 0; // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // size of image data
    entry.writeUInt32LE(offset, 12); // offset of image data

    dirEntries.push(entry);
    buffers.push(img.buffer);
    offset += img.buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...buffers]);
}

const ico = createIco([
  { width: 32, height: 32, buffer: png32 },
  { width: 16, height: 16, buffer: png16 }
]);

fs.writeFileSync('public/favicon.ico', ico);
console.log('Favicons generated successfully!');
