import React from 'react';
import { MunamigoId } from '../types';

interface MunamigoAvatarProps {
  id: MunamigoId;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
  showName?: boolean;
  showQuote?: boolean;
  interactive?: boolean;
  onClick?: () => void;
}

export const MunamigoAvatar: React.FC<MunamigoAvatarProps> = ({
  id,
  size = 'md',
  className = '',
  showName = false,
  showQuote = false,
  interactive = false,
  onClick
}) => {
  const sizeMap = {
    xs: 'w-7 h-7',
    sm: 'w-11 h-11',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-36 h-36',
    hero: 'w-48 h-48 md:w-56 md:h-56'
  };

  const renderEye = (cx: number, cy: number) => (
    <g>
      <ellipse cx={cx} cy={cy} rx="3.2" ry="4.8" fill="#0B1440" />
      <circle cx={cx + 1} cy={cy - 1.6} r="1.3" fill="#FFFFFF" />
      <circle cx={cx - 1} cy={cy + 1.8} r="0.7" fill="#FFFFFF" />
    </g>
  );

  const renderSVG = () => {
    switch (id) {
      case 'pompon':
        // Pompón: 2D flat solid orange circle with cute side ear tabs and bottom stubby feet
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Left & Right side ear tabs */}
            <circle cx="21" cy="48" r="6" fill="#FF7300" />
            <circle cx="79" cy="48" r="6" fill="#FF7300" />
            {/* Feet */}
            <rect x="38" y="70" width="8" height="10" rx="4" fill="#FF7300" />
            <rect x="54" y="70" width="8" height="10" rx="4" fill="#FF7300" />
            {/* Round body */}
            <circle cx="50" cy="48" r="30" fill="#FF7300" />
            {/* Face */}
            {renderEye(42, 45)}
            {renderEye(58, 45)}
            <path d="M 45.5 53 Q 50 58 54.5 53" stroke="#0B1440" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          </svg>
        );

      case 'lumi':
        // Lumi: 2D flat solid lime green 5-pointed star with two floating circle feet
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* 5-pointed star body */}
            <polygon
              points="50,15 58.5,33.5 78,35 63.5,48.5 68,68 50,57.5 32,68 36.5,48.5 22,35 41.5,33.5"
              fill="#94E400"
            />
            {/* Two floating circle feet */}
            <circle cx="41" cy="78" r="4.5" fill="#94E400" />
            <circle cx="59" cy="78" r="4.5" fill="#94E400" />
            {/* Face */}
            {renderEye(44, 43)}
            {renderEye(56, 43)}
            <path d="M 47 49.5 Q 50 53 53 49.5" stroke="#0B1440" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          </svg>
        );

      case 'mora':
        // Mora: 2D flat solid blue geometric hexagon with two floating circle feet
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* 6-sided vertical hexagon */}
            <polygon
              points="50,15 75.5,29.5 75.5,58.5 50,73 24.5,58.5 24.5,29.5"
              fill="#2458F5"
            />
            {/* Two floating circle feet */}
            <circle cx="41" cy="81" r="4.5" fill="#2458F5" />
            <circle cx="59" cy="81" r="4.5" fill="#2458F5" />
            {/* Face */}
            {renderEye(43, 42)}
            {renderEye(57, 42)}
            <path d="M 47 49 Q 50 53 53 49" stroke="#0B1440" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          </svg>
        );

      case 'cora':
        // Cora: 2D flat solid pink heart with side horizontal bar arms and two floating circle feet
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Side horizontal bar arms */}
            <rect x="13" y="38" width="14" height="5" rx="2.5" fill="#FF3E96" />
            <rect x="73" y="38" width="14" height="5" rx="2.5" fill="#FF3E96" />
            {/* Heart body */}
            <path
              d="M 50 68 
                 C 25 50, 18 32, 28 22 
                 C 38 12, 48 20, 50 28 
                 C 52 20, 62 12, 72 22 
                 C 82 32, 75 50, 50 68 Z"
              fill="#FF3E96"
            />
            {/* Two floating circle feet */}
            <circle cx="41" cy="78" r="4.5" fill="#FF3E96" />
            <circle cx="59" cy="78" r="4.5" fill="#FF3E96" />
            {/* Face */}
            {renderEye(43, 40)}
            {renderEye(57, 40)}
            <path d="M 47 47 Q 50 51 53 47" stroke="#0B1440" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          </svg>
        );

      case 'titi':
        // Titi: 2D flat solid yellow triangle with two bottom stubby feet
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Feet */}
            <rect x="36" y="67" width="8" height="9" rx="4" fill="#FFBA00" />
            <rect x="56" y="67" width="8" height="9" rx="4" fill="#FFBA00" />
            {/* Triangle body */}
            <polygon points="50,18 78,69 22,69" fill="#FFBA00" />
            {/* Face */}
            {renderEye(44, 49)}
            {renderEye(56, 49)}
            <path d="M 47 56 Q 50 60 53 56" stroke="#0B1440" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          </svg>
        );

      case 'blu':
        // Blu: 2D flat solid light blue vertical rounded capsule/pill with two bottom stubby legs
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Legs */}
            <rect x="39" y="68" width="7" height="9" rx="3.5" fill="#33B5FF" />
            <rect x="54" y="68" width="7" height="9" rx="3.5" fill="#33B5FF" />
            {/* Compact vertical capsule/pill body */}
            <rect x="32" y="22" width="36" height="50" rx="18" fill="#33B5FF" />
            {/* Face */}
            {renderEye(43, 42)}
            {renderEye(57, 42)}
            <path d="M 47 50 Q 50 54 53 50" stroke="#0B1440" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex flex-col items-center justify-center mx-auto transition-transform ${
        interactive ? 'cursor-pointer hover:scale-105 active:scale-95' : ''
      } ${className}`}
    >
      <div className={`relative ${sizeMap[size]} flex items-center justify-center`}>
        {renderSVG()}
      </div>
      {showName && (
        <span className="mt-1 text-xs md:text-sm font-bold text-[#0B1440] capitalize tracking-wide">
          {id}
        </span>
      )}
      {showQuote && (
        <span className="text-xs text-center text-slate-600 italic max-w-xs mt-1">
          "Acompañando con cuidado"
        </span>
      )}
    </div>
  );
};
