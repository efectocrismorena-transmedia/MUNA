import { Munamigo, MunamigoId } from '../types';

export const MUNAMIGOS: Record<MunamigoId, Munamigo> = {
  pompon: {
    id: 'pompon',
    name: 'Pompón',
    shape: 'Redondo',
    personality: 'Tierno, cercano y contenedor',
    roleTitle: 'El compañero incondicional',
    colorName: 'Naranja Intenso',
    hexColor: '#FF7300',
    accentColor: '#FFBA00',
    officialQuote: 'Estoy acá para acompañarte, tal como sos.',
    bio: 'Pompón es cálido y siempre está dispuesto a escuchar. Nos recuerda que no tenemos que tener todo resuelto para merecer cariño. Acompaña cuando aparecen dudas, vergüenza o inseguridades, sin juzgar y sin comparar.',
    functions: [
      'Dar la bienvenida cálida a las familias y estudiantes',
      'Acompañar los momentos de contención y duda',
      'Introducir actividades sobre autoestima y aceptación',
      'Recordar que pedir ayuda es un acto de valentía y cuidado'
    ],
    pedagogicalRole: 'Aceptación incondicional, pertenencia y validación afectiva sin juicios sobre el cuerpo.'
  },
  lumi: {
    id: 'lumi',
    name: 'Lumi',
    shape: 'Estrella',
    personality: 'Curiosa, optimista y reflexiva',
    roleTitle: 'La curiosa que ilumina',
    colorName: 'Verde Lima',
    hexColor: '#94E400',
    accentColor: '#0B1440',
    officialQuote: '¿Y si miramos las cosas de otra manera?',
    bio: 'Lumi siempre quiere descubrir cosas nuevas y hacer preguntas interesantes. Ayuda a cuestionar los mensajes que vemos en redes, los ideales irreales de belleza y las comparaciones constantes.',
    functions: [
      'Introducir actividades sobre diversidad corporal y respeto',
      'Explorar críticamente cómo se construyen los ideales de belleza',
      'Cuestionar la presión estética en redes sociales y filtros',
      'Proponer nuevas perspectivas sobre el bienestar integral'
    ],
    pedagogicalRole: 'Curiosidad activa, diversidad corporal y pensamiento reflexivo ante la cultura estética.'
  },
  mora: {
    id: 'mora',
    name: 'Mora',
    shape: 'Hexágono',
    personality: 'Observadora, ingeniosa y crítica',
    roleTitle: 'La que piensa antes de creer',
    colorName: 'Azul Intenso',
    hexColor: '#2458F5',
    accentColor: '#8AA1FF',
    officialQuote: 'Antes de creerlo, ¡vamos a pensarlo!',
    bio: 'Mora es despierta y le encanta investigar a fondo. Ayuda a detectar consejos dañinos, mitos sobre dietas y contenidos desinformativos en internet. Nos invita a buscar fuentes oficiales y confiar en profesionales.',
    functions: [
      'Presentar actividades dinámicas de mitos y realidades sobre los TCA',
      'Enseñar a identificar desinformación sobre dietas mágicas y modas nocivas',
      'Analizar anuncios publicitarios ficticios para entrenar la mirada crítica',
      'Fomentar la alfabetización mediática y la consulta con adultos de confianza'
    ],
    pedagogicalRole: 'Alfabetización mediática y científica, desmontaje de mitos y pensamiento crítico.'
  },
  cora: {
    id: 'cora',
    name: 'Cora',
    shape: 'Corazón',
    personality: 'Empática, sensible y comprensiva',
    roleTitle: 'La experta en emociones',
    colorName: 'Rosa Brillante',
    hexColor: '#FF3E96',
    accentColor: '#FFFBEB',
    officialQuote: 'Lo que sentís importa y merece ser escuchado.',
    bio: 'Cora sabe que todas las emociones merecen un lugar: la alegría, la tristeza, el enojo, el miedo y la confusión. Ayuda a poner en palabras lo que sentimos y recuerda que no hace falta atravesar los momentos difíciles en soledad.',
    functions: [
      'Guiar actividades para reconocer y nombrar lo que sentimos',
      'Enseñar formas respetuosas y asertivas de comunicar el malestar',
      'Acompañar la educación socioemocional y la empatía en la escuela',
      'Promover la escucha activa y validar sentimientos sin juzgarlos'
    ],
    pedagogicalRole: 'Educación socioemocional, validación de la afectividad y comunicación empática.'
  },
  titi: {
    id: 'titi',
    name: 'Titi',
    shape: 'Triángulo',
    personality: 'Alegre, creativa y espontánea',
    roleTitle: 'La exploradora de posibilidades',
    colorName: 'Amarillo Brillante',
    hexColor: '#FFBA00',
    accentColor: '#FF7300',
    officialQuote: '¡Hay un montón de formas de disfrutar!',
    bio: 'Titi disfruta jugar, inventar y probar actividades nuevas. Nos muestra que el bienestar se construye con amistades, juegos, hobbies, descanso y movimiento placentero, recordándonos que somos muchísimo más que nuestro aspecto físico.',
    functions: [
      'Proponer juegos creativos y experiencias lúdicas compartidas',
      'Fomentar el disfrute del movimiento corporal libre de exigencias o compensaciones',
      'Explorar talentos, pasiones y vínculos más allá de la apariencia física',
      'Incentivar pausas saludables, risas y convivencia en el aula y el hogar'
    ],
    pedagogicalRole: 'Bienestar no pesocentrista, movimiento placentero, creatividad y disfrute libre de exigencias.'
  },
  blu: {
    id: 'blu',
    name: 'Blu',
    shape: 'Cápsula redondeada',
    personality: 'Tranquilo, paciente y confiable',
    roleTitle: 'La calma que acompaña',
    colorName: 'Celeste Brillante',
    hexColor: '#33B5FF',
    accentColor: '#2458F5',
    officialQuote: 'Vamos de a poquito, no tenés que hacerlo solo.',
    bio: 'Blu transmite calma cuando todo parece demasiado abrumador. Propone respirar, hacer una pausa y buscar ayuda si algo nos preocupa. No busca solucionar todo de golpe: enseña que dar un paso a la vez está muy bien.',
    functions: [
      'Presentar guías paso a paso para familias y docentes',
      'Explicar con cautela y respeto las señales de alerta sin generar pánico',
      'Brindar orientación clara sobre cuándo y dónde buscar apoyo profesional',
      'Facilitar el acceso al directorio de servicios de salud de Argentina'
    ],
    pedagogicalRole: 'Orientación prudente, serenidad, detección temprana responsable y acceso a la ayuda.'
  }
};

export const MUNAMIGOS_LIST = Object.values(MUNAMIGOS);
