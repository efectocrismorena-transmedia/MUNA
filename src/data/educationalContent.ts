import { EducationalModule, EducationalStage } from '../types';

export const EDUCATIONAL_MODULES: EducationalModule[] = [
  {
    id: 'que-son-los-tca',
    title: '¿Qué son los Trastornos de la Conducta Alimentaria?',
    subtitle: 'Comprender la complejidad más allá de la comida y el peso',
    duration: '6 min de lectura',
    category: 'fundamentos',
    targetAudience: ['familia', 'docente', 'estudiante', 'comunidad'],
    characterId: 'pompon',
    summary: 'Los TCA son afecciones de salud mental y física complejas y de origen multifactorial. No son un capricho, una moda ni una cuestión de fuerza de voluntad.',
    contentSections: [
      {
        heading: 'Una mirada integral y no simplista',
        body: 'Los Trastornos de la Conducta Alimentaria (TCA) son condiciones complejas en las que se entrelazan vivencias emocionales profundas, factores neurobiológicos, pautas de interacción familiar y una intensa presión social y cultural alrededor de los cuerpos. No se reducen a lo que una persona come o deja de comer, sino a lo que la persona siente, teme o intenta tramitar a través de su relación con el alimento y su cuerpo.'
      },
      {
        heading: 'El modelo biopsicosocial',
        body: 'Ningún TCA responde a una causa única. Intervienen predisposiciones biológicas y genéticas, factores de vulnerabilidad psicológica (como la autoexigencia extrema, la baja autoestima o dificultades para regular el malestar emocional) y factores precipitantes sociales (como comentarios despectivos, burlas en la escuela, rupturas o la exposición a estándares corporales inalcanzables).',
        highlight: 'No hay culpables únicos: ni las familias ni las escuelas son las causantes automáticas. Todos somos parte del entorno que puede brindar escucha y cuidado temprano.'
      },
      {
        heading: 'Principales manifestaciones reconocidas',
        body: 'Dentro del espectro de los TCA se encuentran cuadros como la anorexia nerviosa, la bulimia nerviosa, el trastorno por atracón y otros trastornos de la conducta alimentaria especificados y no especificados. Cada uno presenta particularidades emocionales y fisiológicas, pero todos comparten un sufrimiento significativo que requiere acompañamiento interdisciplinario con profesionales de medicina, psicología y nutrición con perspectiva de salud integral.'
      }
    ],
    reflectionQuestion: '¿Cómo cambiaría nuestra forma de mirar si dejamos de asociar los TCA con la apariencia física y los entendemos como un dolor emocional que pide ser escuchado?',
    practicalTip: 'Cuando hables con alguien que la está pasando mal, enfocate en cómo se siente y no en lo que comió o cómo se ve su cuerpo.'
  },
  {
    id: 'alimentacion-autoestima-cuerpo',
    title: 'Alimentación, Autoestima e Imagen Corporal',
    subtitle: 'Desarmar la moralización de las comidas y abrazar la diversidad corporal',
    duration: '5 min de lectura',
    category: 'autoestima',
    targetAudience: ['familia', 'docente', 'estudiante'],
    characterId: 'lumi',
    summary: 'La comida nos nutre, nos reúne y nos reconforta; clasificar los alimentos como "buenos o malos" fomenta culpa y rigidez.',
    contentSections: [
      {
        heading: 'El alimento no define el valor de una persona',
        body: 'En nuestra sociedad suele etiquetarse a los alimentos con categorías morales: "comí bien", "pecé", "comida trampa" o "comida prohibida". Esta narrativa genera culpa, ansiedad y distanciamiento de las señales corporales innatas de hambre y saciedad. Una relación sana con la comida es flexible, diversa y permite el disfrute sin castigos.'
      },
      {
        heading: 'Construir imagen corporal positiva',
        body: 'La imagen corporal no es cómo nos vemos en una foto o en el espejo: es cómo sentimos, habitamos y experimentamos nuestro propio cuerpo por dentro. Fomentar una mirada de aprecio y gratitud corporal (por todo lo que nuestro cuerpo nos permite correr, crear, abrazar y pensar) protege el bienestar socioemocional de chicos y adolescentes.',
        highlight: 'La diversidad corporal es una realidad natural: no todos los cuerpos crecen al mismo ritmo ni con la misma silueta, y cada uno merece un trato digno y respetuoso.'
      }
    ],
    reflectionQuestion: '¿Qué expresiones usamos habitualmente en la mesa o en la sala de profesores que asocian el comer con la culpa o el castigo?',
    practicalTip: 'Probá celebrar lo que tu cuerpo puede hacer hoy —caminar, reír, bailar, dibujar— en lugar de calificarlo por cómo luce.'
  },
  {
    id: 'mitos-y-realidades-tca',
    title: 'Mitos y Realidades sobre los Trastornos Alimentarios',
    subtitle: 'Derribar creencias erróneas para detectar a tiempo y acompañar mejor',
    duration: '7 min de lectura',
    category: 'mitos',
    targetAudience: ['familia', 'docente', 'estudiante', 'comunidad'],
    characterId: 'mora',
    summary: 'Los mitos sobre quién padece un TCA o cómo se ve una persona afectada retrasan el pedido de ayuda y aumentan el sufrimiento silencioso.',
    contentSections: [
      {
        heading: 'Mito 1: "Los TCA solo afectan a chicas adolescentes muy delgadas"',
        body: 'REALIDAD: Los trastornos de la conducta alimentaria atraviesan a personas de todas las edades, géneros, orientaciones y cualquier contextura física o tamaño corporal. La enorme mayoría de las personas con TCA no están en extremos de peso visibles, lo que hace crucial no esperar cambios drásticos en la balanza para intervenir.',
        highlight: 'No juzgues el sufrimiento por la apariencia exterior: el malestar emocional ocurre en cualquier tipo de cuerpo.'
      },
      {
        heading: 'Mito 2: "Es solo una fase o una cuestión de vanidad"',
        body: 'REALIDAD: Los TCA son afecciones de salud mental severas, con el índice de mortalidad y complicación clínica más alto dentro de la psiquiatría. Minimizarlo como un "capricho adolescente" o una "búsqueda de llamar la atención" agrava la soledad de la persona.'
      },
      {
        heading: 'Mito 3: "La culpa es de las familias que no controlan"',
        body: 'REALIDAD: La evidencia científica internacional y las guías de la Sociedad Argentina de Pediatría (SAP) demuestran que las familias no son las culpables del TCA, sino uno de los pilares terapéuticos más potentes para la recuperación cuando son acompañadas con orientación empática.'
      }
    ],
    reflectionQuestion: '¿Alguna vez asumiste que alguien estaba bien solo porque "se veía saludable"? ¿Cómo podemos afinar la escucha?',
    practicalTip: 'Recordá siempre la frase de Mora: ¡Antes de creer un comentario o rumor sobre el cuerpo de alguien, vamos a pensarlo críticamente!'
  },
  {
    id: 'redes-sociales-y-filtros',
    title: 'Redes Sociales, Filtros y la Trampa de los Algoritmos',
    subtitle: 'Alfabetización digital y mirada crítica para la juventud y quienes educan',
    duration: '6 min de lectura',
    category: 'digital',
    targetAudience: ['estudiante', 'familia', 'docente'],
    characterId: 'lumi',
    summary: 'Las pantallas nos muestran recortes editados, filtros de distorsión y algoritmos que premian la comparación constante.',
    contentSections: [
      {
        heading: 'El espejismo de la perfección digital',
        body: 'Las redes sociales no son una ventana neutra a la realidad: son vitrinas seleccionadas, retocadas con iluminación artificial, ángulos estudiados y filtros automáticos que modifican rasgos, pieles y proporciones en tiempo real. Cuando los chicos pasan horas comparándose con estas imágenes artificiales, su percepción de la propia realidad corporal se distorsiona.'
      },
      {
        heading: 'Cómo opera la economía de la atención',
        body: 'Los algoritmos de plataformas como TikTok e Instagram detectan rápidamente búsquedas o detenciones de pantalla vinculadas al peso o rutinas de ejercicio, retroalimentando el feed con contenidos cada vez más obsesivos o restrictivos. Aprender a "limpiar el algoritmo" y dejar de seguir cuentas que generan incomodidad es una habilidad clave de autocuidado.',
        highlight: 'Si una cuenta o tendencia te hace sentir que tu cuerpo está "mal" o que tenés que cambiarlo para ser aceptado/a, silenciarla o dejarla de seguir es un acto de salud.'
      }
    ],
    reflectionQuestion: '¿Cuánto tiempo pasás mirando cuerpos en redes sociales y cómo te sentís cuando apagás la pantalla?',
    practicalTip: 'Hacé una "limpieza digital" semanal: dejá de seguir perfiles que te generen inseguridad y seguí cuentas de arte, ciencia, humor o amigos cercanos.'
  },
  {
    id: 'senales-de-alerta-y-deteccion',
    title: 'Señales de Alerta: Detección Temprana y Cautela',
    subtitle: 'Reconocer cambios persistentes sin convertirse en vigilantes ni detectives',
    duration: '8 min de lectura',
    category: 'alerta',
    targetAudience: ['familia', 'docente', 'comunidad'],
    characterId: 'blu',
    summary: 'La detección precoz mejora significativamente el pronóstico. Conocer las señales conductuales, emocionales y físicas permite actuar a tiempo.',
    contentSections: [
      {
        heading: 'Señales en la conducta y la vida social',
        body: 'Aislamiento progresivo a la hora de las comidas familiares o escolares (excusas reiteradas como "ya comí antes" o "no tengo hambre"), evitar eventos sociales donde haya comida, rituales marcados al comer (desmenuzar en exceso la comida, comer muy despacio, esconder alimentos), o un interés repentino y obsesivo por cocinar para otros sin probar los platos.'
      },
      {
        heading: 'Señales en el estado emocional y la autoestima',
        body: 'Aumento notorio de la irritabilidad, cambios anímicos bruscos, retraimiento social, ansiedad marcada al hablar de ropa o salidas, necesidad constante de aprobación sobre la apariencia o expresiones de desprecio y asco hacia la propia figura corporal.'
      },
      {
        heading: 'Señales físicas y metabólicas',
        body: 'Sensación persistente de frío (uso de abrigo excesivo en días templados), cansancio crónico, mareos o desvanecimientos, caída marcada del cabello, alteraciones en el ciclo menstrual en adolescentes, o fluctuaciones de peso sin causa médica evidente.',
        highlight: 'Importante: Ninguna señal aislada confirma un diagnóstico. Lo relevante es la persistencia de cambios que alteran el bienestar y la calidad de vida de la persona.'
      }
    ],
    reflectionQuestion: '¿De qué manera podemos notar cambios en un familiar o alumno sin hacerlo sentir espiado ni acorralado?',
    practicalTip: 'Acercate desde la preocupación afectiva: "Te noto más callado/a últimamente y me importás, ¿querés que tomemos algo y charlemos un ratito?".'
  },
  {
    id: 'como-conversar-sin-juzgar',
    title: 'Cómo Conversar sin Juzgar y Acompañar sin Culpar',
    subtitle: 'Herramientas de comunicación empática y escucha activa para adultos',
    duration: '7 min de lectura',
    category: 'comunicacion',
    targetAudience: ['familia', 'docente'],
    characterId: 'cora',
    summary: 'A veces el deseo de ayudar se traduce en debates sobre comida o comentarios bienintencionados que aumentan el aislamiento. Aprender a escuchar cambia todo.',
    contentSections: [
      {
        heading: 'La trampa del debate lógico',
        body: 'Cuando alguien manifiesta "me veo horrible" o "no quiero comer", la respuesta instintiva suele ser contradecir: "¡Pero si estás hermoso/a!" o "¿Cómo no vas a comer con todo lo que te preparé?". Aunque nace del cariño, esto invalida la vivencia interna de la persona y clausura el diálogo.'
      },
      {
        heading: 'Frases que abren puertas',
        body: 'Cambiar el foco del cuerpo hacia el sentir abre un canal seguro. Por ejemplo: "Veo que este momento te está costando mucho", "No tenés que resolver esto en soledad", "Estoy acá para escucharte el tiempo que necesites, sin juzgarte".',
        highlight: 'No necesitás tener todas las respuestas ni ser terapeuta: con brindar una presencia afectuosa, disponible y sin reproches ya estás construyendo un puente.'
      }
    ],
    reflectionQuestion: '¿Qué solés hacer cuando alguien te cuenta un dolor: intentás arreglarlo inmediatamente o le hacés espacio a lo que siente?',
    practicalTip: 'Escuchá activamente: antes de opinar o aconsejar, repetí con tus palabras lo que la persona te transmitió para verificar que la entendiste bien.'
  }
];

export const EDUCATIONAL_STAGES_DATA = {
  inicial: {
    id: 'inicial' as EducationalStage,
    name: 'Nivel Inicial (Jardín)',
    ages: '3 a 5 años',
    leadCharacter: 'pompon',
    supportingCharacters: ['cora', 'titi'],
    leadTitle: 'Cuerpos diversos, emociones y juego compartido',
    color: '#FF6B4A',
    bgBadge: 'bg-[#FF6B4A]/10 text-[#FF6B4A]',
    objective: 'Promover el respeto por la diversidad corporal, el reconocimiento de emociones y sensaciones de hambre y saciedad sin reglas rígidas.',
    principles: [
      'Todos los cuerpos merecen cuidado, cariño y respeto.',
      'Las personas somos diferentes y esa variedad enriquece el aula.',
      'Aprender a nombrar sensaciones de hambre, sed, cansancio y descanso.',
      'Cero burlas ni apodos sobre aspectos físicos en los juegos.'
    ],
    stories: [
      {
        title: 'La gran ronda de los Munamigos',
        characters: 'Pompón y Titi',
        summary: 'En el bosque de MUNA, cada amigo tiene talentos, ritmos y gustos diferentes. Juntos descubren que para armar la mejor ronda se necesita de cada uno de ellos.',
        activityPrompt: 'Invitar a los chicos a dibujarse haciendo lo que más les divierte: saltar, abrazar, correr o pintar.'
      },
      {
        title: 'El monstruito de los ruidos de panza',
        characters: 'Cora y Pompón',
        summary: 'Aprender qué nos dice nuestro cuerpo cuando tiene hambre y cuándo ya está satisfecho, sin obligar a terminar platos a la fuerza ni usar la comida como premio o castigo.',
        activityPrompt: 'Juego de mímica: ¿cómo camina un oso con sueño? ¿cómo salta una rana con energía?'
      }
    ],
    guideForGrownUps: 'Evitá hablar de "comida chatarra" versus "comida sana" con moralina punitiva. Evitá festejar o comentar si un nene "está más gordito o flaquito". Festejá su risa, su curiosidad y su juego.'
  },
  primaria: {
    id: 'primaria' as EducationalStage,
    name: 'Nivel Primario',
    ages: '6 a 12 años',
    leadCharacter: 'lumi',
    supportingCharacters: ['mora', 'titi', 'blu'],
    leadTitle: 'Crecimiento, autoestima y pensamiento crítico',
    color: '#2B2FC7',
    bgBadge: 'bg-[#2B2FC7]/10 text-[#2B2FC7]',
    objective: 'Fortalecer la autoestima, prevenir el bullying escolar por aspecto físico y desarrollar una mirada crítica ante publicidades y estereotipos.',
    principles: [
      'El crecimiento en la pubertad es diverso y tiene tiempos particulares para cada persona.',
      'Desarmar apodos y burlas: ningún comentario sobre el cuerpo ajeno es un chiste inocente.',
      'Diferenciar entre lo que una publicidad vende y lo que realmente necesitamos para estar bien.',
      'Saber a qué adulto de confianza recurrir en la escuela o en casa si algo duele o preocupa.'
    ],
    stories: [
      {
        title: 'La lupa de Mora: ¿Qué nos quieren vender?',
        characters: 'Mora y Lumi',
        summary: 'Un taller interactivo donde se analizan afiches publicitarios ficticios de "bebidas mágicas" y "cuerpos perfectos" descubriendo los trucos de luces, retoques y frases engañosas.',
        activityPrompt: 'Crear en grupos un afiche de un producto que venda "amistad sincera", "risas de recreo" o "ganas de aprender".'
      },
      {
        title: 'El pacto del aula: Las palabras que cuidan',
        characters: 'Cora y Blu',
        summary: 'Una historieta interactiva sobre cómo reaccionar cuando un compañero es blanco de burlas por su peso, altura o anteojos, transformando el silencio cómplice en acompañamiento.',
        activityPrompt: 'Buzón de cumplidos no físicos: escribir papelitos destacando lo generoso, ocurrente, buen amigo o divertido de cada compañero.'
      }
    ],
    guideForGrownUps: 'En las clases de educación física, evitá mediciones públicas de peso y talla ante todo el grupo. Abordá cualquier comentario denigrante en el acto, sin minimizarlo como "cosas de chicos".'
  },
  secundaria: {
    id: 'secundaria' as EducationalStage,
    name: 'Nivel Secundario',
    ages: '13 a 18 años',
    leadCharacter: 'mora',
    supportingCharacters: ['blu', 'cora', 'pompon'],
    leadTitle: 'Presión estética, redes, salud mental y redes de apoyo',
    color: '#0B1440',
    bgBadge: 'bg-[#0B1440]/10 text-[#0B1440]',
    objective: 'Promover la alfabetización digital profunda, el reconocimiento de señales de alerta en pares, el autocuidado y canales confidenciales de ayuda.',
    principles: [
      'Los ideales de belleza hegemónicos son construcciones sociohistóricas y de mercado, no leyes biológicas.',
      'El perfeccionismo y la autoexigencia extrema son factores de riesgo que precisan atención.',
      'Acompañar a un amigo/a sin asumir el rol de terapeuta ni guardar secretos que pongan en peligro su vida.',
      'Conocer los recursos gratuitos y confidenciales de salud mental en Argentina (Línea 141 y hospitales públicos).'
    ],
    stories: [
      {
        title: 'Detrás de la pantalla: Algoritmos y filtros',
        characters: 'Lumi y Mora',
        summary: 'Análisis de cómo los filtros faciales modifican la autoimagen, cómo se gesta la dismorfia corporal digital y cómo romper con la comparación en redes.',
        activityPrompt: 'Debate en rueda: ¿Qué cuentas seguimos que nos inspiran y cuáles nos hacen sentir que no somos suficiente?'
      },
      {
        title: 'Cómo ayudar a un amigo sin desgastarte',
        characters: 'Blu y Pompón',
        summary: 'Guía práctica para situaciones donde un amigo/a no come, expresa desprecio por su cuerpo o hace ejercicio compulsivo: qué decirle, qué no hacer y cómo acudir a un adulto responsable.',
        activityPrompt: 'Simulación de rol con tarjetas de respuestas asertivas y no invasivas.'
      }
    ],
    guideForGrownUps: 'Validá el sufrimiento adolescente. No descartes sus angustias estéticas con "ya se te va a pasar". Informá a los estudiantes sobre centros de salud mental de acceso gratuito y confidencial.'
  }
};

export const MYTHS_AND_REALITIES_DATA = [
  {
    id: 1,
    myth: 'Los trastornos alimentarios son solo una cuestión de vanidad o ganas de verse bien.',
    reality: 'Son patologías complejas de salud mental y médica con alto sufrimiento subjetivo. Detrás de la restricción o el atracón hay emociones difíciles, dolor o necesidad de control.',
    characterId: 'mora',
    category: 'Causas y prejuicios'
  },
  {
    id: 2,
    myth: 'Si una persona no tiene un peso extremadamente bajo, no puede tener un TCA.',
    reality: 'La enorme mayoría de las personas con bulimia, atracón o TCA atípicos presentan normopeso o contexturas diversas. Esperar delgadez extrema para intervenir es un error peligroso.',
    characterId: 'mora',
    category: 'Diagnóstico y cuerpo'
  },
  {
    id: 3,
    myth: 'Hablar de los trastornos alimentarios en la escuela o en casa puede darles "malas ideas".',
    reality: 'Hablar de prevención, autoestima y emociones protege. Lo que sí debe evitarse es dar cifras de peso, calorías o describir métodos lesivos. La educación responsable salva vidas.',
    characterId: 'lumi',
    category: 'Escuela y prevención'
  },
  {
    id: 4,
    myth: 'Los padres y madres son los principales culpables de que su hijo desarrolle un TCA.',
    reality: 'La evidencia científica concluye que las familias no originan la enfermedad de forma lineal. Al contrario: cuando reciben contención y psicoeducación, son el mayor soporte de recuperación.',
    characterId: 'pompon',
    category: 'Familias'
  },
  {
    id: 5,
    myth: 'Una persona con TCA se cura simplemente con "fuerza de voluntad" y comiendo bien.',
    reality: 'No es una elección. Se requiere un tratamiento interdisciplinario coordinado: médico clínico/pediatra, psicoterapeuta y nutricionista con enfoque integral no restrictivo.',
    characterId: 'blu',
    category: 'Tratamiento'
  }
];
