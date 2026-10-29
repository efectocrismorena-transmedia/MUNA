import { EducationalStage, MunamigoId, UserProfile } from '../types';

export interface InteractiveResourceDef {
  id: string;
  title: string;
  stage: EducationalStage;
  stageName: string;
  leadCharacter: MunamigoId;
  format: string;
  estimatedMinutes: number;
  objective: string;
  instructions: string;
  description: string;
  badgeColor: string;
  finalPositiveMessage: string;
}

export const NEW_INTERACTIVE_RESOURCES: InteractiveResourceDef[] = [
  // --- JARDÍN (NIVEL INICIAL) ---
  {
    id: 'jardin-cuerpo-maravilloso',
    title: 'Mi cuerpo hace cosas maravillosas',
    stage: 'inicial',
    stageName: 'Nivel Inicial (Jardín)',
    leadCharacter: 'pompon',
    format: 'Juego interactivo de asociación',
    estimatedMinutes: 8,
    objective: 'Reconocer que el cuerpo nos permite jugar, bailar, abrazar, aprender, descansar y explorar el mundo, sin comparaciones de peso ni tamaño.',
    instructions: 'Mirá cada dibujo o situación y elegí con qué maravillosa capacidad de tu cuerpo se relaciona.',
    description: 'Una experiencia lúdica para niños pequeños que celebra todo lo que nuestro cuerpo puede sentir, hacer y disfrutar todos los días.',
    badgeColor: 'bg-[#FF7300] text-white',
    finalPositiveMessage: '¡Tu cuerpo es único y merece cuidado, cariño y respeto todos los días!'
  },
  {
    id: 'jardin-arcoiris-emociones',
    title: 'El arcoíris de las emociones',
    stage: 'inicial',
    stageName: 'Nivel Inicial (Jardín)',
    leadCharacter: 'cora',
    format: 'Cuento interactivo con decisiones',
    estimatedMinutes: 10,
    objective: 'Ayudar a identificar emociones (alegría, tristeza, enojo, miedo, vergüenza, preocupación) y comprender que todas son válidas y merecen ser escuchadas.',
    instructions: 'Acompañá a los Munamigos en distintas situaciones. Elegí qué emoción puede estar sintiendo y cómo podemos acompañarlo con afecto.',
    description: 'Un cuento guiado por Cora donde no hay respuestas equivocadas: todas las emociones son bienvenidas y nos enseñan a cuidarnos.',
    badgeColor: 'bg-[#FF3E96] text-white',
    finalPositiveMessage: 'Podemos sentir cosas diferentes y hablar de lo que nos pasa. ¡Nunca estás solo/a con lo que sentís!'
  },
  {
    id: 'jardin-cada-uno-magia',
    title: 'Cada uno tiene su magia',
    stage: 'inicial',
    stageName: 'Nivel Inicial (Jardín)',
    leadCharacter: 'titi',
    format: 'Actividad creativa de descubrimiento personal',
    estimatedMinutes: 10,
    objective: 'Fomentar la autoestima y valorar las diferencias individuales reconociendo cualidades, gustos y talentos más allá del aspecto físico.',
    instructions: 'Elegí las cualidades y cosas que más te gusta hacer. Al final, creá tu propia tarjeta mágica ilustrada.',
    description: 'Un espacio creativo donde cada niño y niña descubre sus superpoderes cotidianos: la curiosidad, el juego, la risa y el compañerismo.',
    badgeColor: 'bg-[#FFBA00] text-[#0B1440]',
    finalPositiveMessage: 'No tenemos que ser iguales para compartir y disfrutar. ¡Tu magia es única!'
  },

  // --- PRIMARIA ---
  {
    id: 'primaria-detectives-mensajes',
    title: 'Detectives de los mensajes',
    stage: 'primaria',
    stageName: 'Nivel Primario',
    leadCharacter: 'mora',
    format: 'Juego de preguntas y pensamiento crítico',
    estimatedMinutes: 12,
    objective: 'Aprender a reconocer mensajes que transmiten estereotipos de belleza o afectan la autoestima en publicidades y conversaciones cotidianas.',
    instructions: 'Analizá cada frase o anuncio ficticio con la lupa de Mora y decidí si es respetuoso, injusto o necesita ser cuestionado.',
    description: 'Un taller de detective donde entrenamos la mirada para no dejarnos engañar por mensajes que juzgan a las personas por su apariencia.',
    badgeColor: 'bg-[#2458F5] text-white',
    finalPositiveMessage: '¡Excelente trabajo de detective! Recordá: el valor de una persona nunca se mide por cómo luce.'
  },
  {
    id: 'primaria-escudo-fortalezas',
    title: 'El escudo de mis fortalezas',
    stage: 'primaria',
    stageName: 'Nivel Primario',
    leadCharacter: 'blu',
    format: 'Taller digital interactivo',
    estimatedMinutes: 15,
    objective: 'Fortalecer la autoestima, la autoconfianza y el reconocimiento de recursos personales ante momentos difíciles o presiones externas.',
    instructions: 'Completá los 4 cuadrantes de tu escudo personal: tus fortalezas, lo que disfrutás hacer, las personas que te apoyan y lo que estás aprendiendo.',
    description: 'Creá tu escudo protector digital, personalizado y privado. Una herramienta de autoafirmación recomendada para talleres ESI.',
    badgeColor: 'bg-[#33B5FF] text-[#0B1440]',
    finalPositiveMessage: '¡Tu escudo te recuerda quién sos y con qué redes de afecto contás cada día!'
  },
  {
    id: 'primaria-palabras-cuidan',
    title: 'Palabras que cuidan',
    stage: 'primaria',
    stageName: 'Nivel Primario',
    leadCharacter: 'cora',
    format: 'Desafío interactivo de situaciones cotidianas',
    estimatedMinutes: 12,
    objective: 'Comprender el impacto que tienen los comentarios sobre el cuerpo ajeno y practicar respuestas asertivas y empáticas en el aula y el recreo.',
    instructions: 'Leé cada situación escolar y elegí la respuesta que mejor cuida la convivencia y frena las burlas o comentarios sobre el cuerpo.',
    description: 'Casos prácticos de recreos, grupos y mesas escolares para transformar la indiferencia en cuidado colectivo sin asumir culpas individuales.',
    badgeColor: 'bg-[#FF3E96] text-white',
    finalPositiveMessage: '¡Las palabras tienen poder! Cuando elegimos palabras que cuidan, la escuela es un lugar más seguro para todos.'
  },

  // --- SECUNDARIA ---
  {
    id: 'secundaria-redes-sin-filtros',
    title: 'Redes sin filtros',
    stage: 'secundaria',
    stageName: 'Nivel Secundario',
    leadCharacter: 'lumi',
    format: 'Simulador educativo de publicaciones ficticias',
    estimatedMinutes: 15,
    objective: 'Desarrollar pensamiento crítico frente a los ideales de belleza inalcanzables, la comparación social algorítmica y el uso de filtros en redes.',
    instructions: 'Explorá el feed simulado. Examiná cada publicación mediante tres preguntas clave: qué intenta vender, qué oculta y cómo nos impacta.',
    description: 'Un simulador de feed de redes sociales donde desarmamos los trucos de luces, poses forzadas, edición morfológica y economía de la atención.',
    badgeColor: 'bg-[#94E400] text-[#0B1440]',
    finalPositiveMessage: 'Las redes son un recorte editado, no el espejo de la realidad. Practicá la higiene digital y cuidá tu bienestar mental.'
  },
  {
    id: 'secundaria-mitos-bajo-lupa',
    title: 'Mitos bajo la lupa',
    stage: 'secundaria',
    stageName: 'Nivel Secundario',
    leadCharacter: 'mora',
    format: 'Cuestionario interactivo con explicaciones',
    estimatedMinutes: 15,
    objective: 'Identificar mitos y desinformación sobre los TCA, la salud mental, el peso y la alimentación, con rigor científico y enlaces a fuentes oficiales argentinas.',
    instructions: 'Respondé a cada afirmación habitual. Descubrí la explicación fundamentada en medicina pediátrica, psicología y las leyes vigentes.',
    description: 'Desarmamos las falsas creencias que retrasan la ayuda y estigmatizan a las personas que atraviesan un trastorno de la conducta alimentaria.',
    badgeColor: 'bg-[#2458F5] text-white',
    finalPositiveMessage: 'Informarse con fuentes científicas es la mejor herramienta para derribar prejuicios y acompañar sin juzgar.'
  },
  {
    id: 'secundaria-como-acompano',
    title: '¿Cómo acompaño a alguien?',
    stage: 'secundaria',
    stageName: 'Nivel Secundario',
    leadCharacter: 'pompon',
    format: 'Simulador de conversaciones con decisiones',
    estimatedMinutes: 15,
    objective: 'Aprender a reconocer cuándo un/a amigo/a atraviesa un momento difícil con su cuerpo o la comida, cómo escuchar sin ser terapeuta y cuándo buscar ayuda adulta urgente.',
    instructions: 'Elegí cómo responder en tres conversaciones complejas entre pares. Descubrí por qué la empatía abre puertas y qué límites cuidar.',
    description: 'Guía interactiva para adolescentes sobre cómo estar presente para un amigo sin juzgarlo, sin vigilarlo y sin cargar en soledad con un problema de salud.',
    badgeColor: 'bg-[#FF7300] text-white',
    finalPositiveMessage: 'Acompañar no significa tener la cura: significa estar presente, escuchar sin juzgar y tender puentes hacia la ayuda profesional.'
  }
];
