import { ResourceItem } from '../types';

export const RESOURCES_LIST: ResourceItem[] = [
  {
    id: 'guia-familias-conversaciones',
    title: 'Guía para Familias: Conversaciones en la Mesa sin Estigmas',
    description: 'Manual práctico para transformar la mesa familiar en un espacio seguro, desterrar comentarios sobre calorías y responder con afecto.',
    audience: ['familia'],
    stages: ['primaria', 'secundaria'],
    category: 'Comunicación en el hogar',
    format: 'guia',
    durationMinutes: 15,
    materialsNeeded: 'Lectura familiar, disposición para la escucha atenta y ganas de revisar hábitos cotidianos.',
    recommendedUse: 'Lectura para adultos a cargo, ideal para comentar en pareja o entre tutores antes de las comidas familiares.',
    printableTitle: 'MUNA — Guía Práctica para Familias: Cuidar las Palabras en la Mesa',
    printableSections: [
      {
        sectionTitle: '1. El clima alrededor de la comida',
        paragraphs: [
          'La mesa familiar debe ser un espacio de encuentro, afecto y descanso. Cuando la comida se convierte en un tribunal de juicio o en un campo de batalla de reproches y comparaciones, aumenta el estrés y se deteriora la relación con el propio cuerpo.',
          'Reemplazá preguntas sobre cantidades ("¿Vas a comer todo eso?", "¿No comiste demasiado poco?") por preguntas sobre su día, intereses y vivencias.'
        ],
        bulletPoints: [
          'Evitá hacer comentarios sobre el cuerpo propio o ajeno durante las comidas.',
          'No dividas la comida entre "premio" (el postre) y "castigo" (la verdura).',
          'Permití que los chicos reconozcan cuándo están satisfechos sin forzar platos vacíos.',
          'Si notas incomodidad en alguien, conversalo en privado más tarde, nunca exponiéndolo frente a todos.'
        ]
      },
      {
        sectionTitle: '2. Frases para desterrar vs. Frases que acompañan',
        paragraphs: [
          'A veces expresiones que consideramos inofensivas pueden calar hondo en un adolescente que atraviesa inseguridades corporales.'
        ],
        bulletPoints: [
          'A evitar: "Qué flaco/a estás, ¡te felicito!" -> Mensaje recibido: Mi valor depende de adelgazar.',
          'A usar: "Qué lindo verte sonreír hoy, me alegra compartir este rato con vos".',
          'A evitar: "Ese pantalón te hace ver más rellenita".',
          'A usar: "Lo importante es que te sientas cómodo/a con lo que usás".',
          'A evitar: "Mañana compenso en el gimnasio lo que comí hoy".',
          'A usar: "Nos movemos porque nos hace bien, no para castigarnos por comer".'
        ]
      },
      {
        sectionTitle: '3. ¿Qué hacer si tu hijo o hija expresa desprecio por su cuerpo?',
        paragraphs: [
          'Si un adolescente te dice "Odio mi cuerpo", la respuesta automática suele ser "¡Pero si sos hermoso/a!". Aunque nace del amor, esto invalida su sentir.',
          'Respuesta recomendada de Pompón y Blu: "Lamento mucho que te estés sintiendo así de angustiado/a. Quiero entender qué te está pasando y cómo puedo acompañarte. No tenés que pasarlo a solas".'
        ]
      }
    ],
    isVerified: true,
    isPopular: true
  },
  {
    id: 'protocolo-docente-actuacion',
    title: 'Protocolo Orientativo Escolar: Detección y Acompañamiento sin Diagnosticar',
    description: 'Pautas de actuación pedagógica para docentes y equipos de orientación escolar ante señales de alerta de TCA en el aula.',
    audience: ['docente'],
    stages: ['primaria', 'secundaria'],
    category: 'Protocolo Institucional',
    format: 'protocolo',
    durationMinutes: 20,
    materialsNeeded: 'Cuaderno de orientaciones institucionales y coordinación con el Equipo de Orientación Escolar (EOE/DOAITE).',
    recommendedUse: 'Para ser leído en reuniones de departamento, jornadas institucionales ESI y acuerdos de convivencia.',
    printableTitle: 'MUNA — Protocolo de Actuación Escolar: Pedagogía del Cuidado y TCA',
    printableSections: [
      {
        sectionTitle: '1. Límites del rol pedagógico vs. rol clínico',
        paragraphs: [
          'La escuela no es un centro de salud ni el docente es terapeuta. La función institucional es la detección precoz de señales de malestar, la contención socioafectiva, la preservación de la intimidad y la oportuna articulación con la familia y el sistema de salud.'
        ],
        bulletPoints: [
          'No diagnosticar ni etiquetar al alumno frente a sus compañeros.',
          'No investigar invasivamente ni controlar los almuerzos o viandas en forma de vigilancia.',
          'No pedir diarios de comidas detallados como tareas de ciencias o salud.',
          'Registrar observaciones descriptivas y respetuosas en el equipo de orientación.'
        ]
      },
      {
        sectionTitle: '2. Pautas concretas para el aula',
        paragraphs: [
          'El ambiente escolar debe ser un territorio seguro libre de gordofobia, burlas y comparaciones corporales.'
        ],
        bulletPoints: [
          'Prohibir rotundamente mediciones de peso, talla o pliegues corporales en público en Educación Física.',
          'Intervenir de inmediato ante chistes sobre la figura o apodos vinculados al cuerpo.',
          'Cuidar los contenidos curriculares: no moralizar nutrientes ni promover dietas restrictivas.',
          'Abordar la ESI desde sus cinco ejes fundamentales (Res. CFE 340/18).'
        ]
      },
      {
        sectionTitle: '3. Circuito institucional de derivación',
        paragraphs: [
          '1. Notificación pedagógica discreta al Equipo de Orientación Escolar o directivo.',
          '2. Entrevista empática con la familia: expresar preocupación por el bienestar anímico y escolar del alumno, evitando emitir diagnósticos.',
          '3. Brindar información sobre efectores públicos de salud de la jurisdicción (servicios pediátricos o de salud mental infanto-juvenil).'
        ]
      }
    ],
    isVerified: true,
    isPopular: true
  },
  {
    id: 'taller-primaria-publicidad',
    title: 'Secuencia Didáctica ESI: Cazadores de Filtros y Mitos en la Publicidad',
    description: 'Actividad de 2 módulos de 40 minutos para trabajar en el aula de primaria la alfabetización visual y la diversidad corporal.',
    audience: ['docente'],
    stages: ['primaria'],
    category: 'Secuencias didácticas',
    format: 'actividad',
    durationMinutes: 40,
    materialsNeeded: 'Afiches de revistas o recortes impresos, marcadores de colores, hojas blancas y la Lupa de Mora.',
    recommendedUse: 'Secuencia aplicable en Prácticas del Lenguaje, Formación Ética y Ciudadana o semanas de la ESI.',
    printableTitle: 'MUNA — Secuencia Didáctica: Desarmando Estereotipos en los Medios',
    printableSections: [
      {
        sectionTitle: 'Objetivos pedagógicos',
        paragraphs: [
          'Que las y los estudiantes reconozcan que las imágenes publicitarias son construcciones intencionadas y no reflejos neutros de la realidad, y fortalezcan el aprecio por las diversas formas de crecer.'
        ],
        bulletPoints: [
          'Identificar técnicas de retoque, iluminación y trucos visuales en anuncios comerciales.',
          'Reflexionar sobre cómo los mandatos de belleza generan malestar y exclusión.',
          'Producir mensajes colectivos que celebren la diversidad y la empatía en la convivencia.'
        ]
      },
      {
        sectionTitle: 'Desarrollo paso a paso',
        paragraphs: [
          'Momento 1 (15 min): Presentación de la consigna con Lumi y Mora. Proyectar o repartir imágenes de publicidades y debatir en ronda: ¿Qué personas aparecen? ¿Todos los chicos son iguales en la vida real? ¿Por qué?',
          'Momento 2 (20 min): Trabajo grupal "La contra-publicidad". Los alumnos crean un anuncio publicitario que no prometa magia ni belleza hegemónica, sino diversión compartida, juego al aire libre o talentos artísticos.',
          'Momento 3 (10 min): Puesta en común y reflexión de Cora: ¿Cómo nos sentimos cuando vemos que todas las formas y colores tienen lugar en el aula?'
        ]
      }
    ],
    isVerified: true
  },
  {
    id: 'cuadernillo-inicial-emociones',
    title: 'Ficha para Jardín: Mi Cuerpo es Mío y Siente un Montón',
    description: 'Propuesta lúdica para Nivel Inicial con Pompón, Cora y Titi sobre el registro de sensaciones y el respeto por las diferencias.',
    audience: ['docente', 'familia'],
    stages: ['inicial'],
    category: 'Educación socioemocional temprana',
    format: 'actividad',
    durationMinutes: 25,
    materialsNeeded: 'Espejo seguro, música suave, crayones gruesos y hojas grandes.',
    recommendedUse: 'Para docentes de salas de 4 y 5 años o para realizar en familia un fin de semana.',
    printableTitle: 'MUNA — Ficha Inicial: Explorando Nuestras Emociones y Sensaciones',
    printableSections: [
      {
        sectionTitle: '1. El cuerpo que juega y siente',
        paragraphs: [
          'En el Nivel Inicial, la relación con el cuerpo se construye a través del movimiento placentero, el tacto respetuoso y la palabra que nombra lo que pasa adentro.',
          'Con Pompón descubrimos que no hay cuerpos "mejores" ni "peores": cada cuerpito nos permite trepar, cantar, reír y dar abrazos fuertes.'
        ],
        bulletPoints: [
          'Juego del espejo: mirarse y sonreír juntos.',
          'Ronda de sensaciones: ¿Cómo avisa la panza que tiene hambre? ¿Y cuándo tiene sueño?',
          'Validación: si un nene está enojado o triste, se le da un lugar seguro para calmarse.'
        ]
      }
    ],
    isVerified: true
  },
  {
    id: 'guia-adolescentes-amigo',
    title: 'Ficha para Adolescentes: ¿Cómo Acompañar a un/a Amigo/a sin Desgastarte?',
    description: 'Herramientas claras para saber qué decir, qué evitar y cómo pedir ayuda confidencial cuando te preocupa la salud de alguien cercano.',
    audience: ['estudiante'],
    stages: ['secundaria'],
    category: 'Redes de pares y autocuidado',
    format: 'guia',
    durationMinutes: 10,
    materialsNeeded: 'Lectura personal o en grupo de amigos.',
    recommendedUse: 'Para centros de estudiantes, carteleras escolares o consulta individual de adolescentes.',
    printableTitle: 'MUNA — Ficha Juvenil: Ayudar a un Amigo/a Cuidando tus Propios Límites',
    printableSections: [
      {
        sectionTitle: '1. No sos su terapeuta, sos su amigo/a',
        paragraphs: [
          'Ver que un amigo no come, vomita en el baño o llora frente al espejo duele mucho y genera desesperación. Sin embargo, no podés cargar en soledad con su recuperación.',
          'Tu rol más valioso es escuchar, acompañar sin juzgar y ser el puente hacia un adulto de confianza o profesional de salud.'
        ],
        bulletPoints: [
          'Lo que SÍ suma: "Me preocupás porque te quiero y te veo triste. ¿Querés que hablemos con alguien que sepa?"',
          'Lo que NO suma: Interrogarlo sobre lo que comió, vigilarlo en los recreos o decirle "comé un poquito por mí".',
          'Los pactos de silencio: si tu amigo/a te pide que guardes el secreto pero su vida o salud corren peligro, romper ese pacto para pedir ayuda es un acto de amor y cuidado, no una traición.'
        ]
      },
      {
        sectionTitle: '2. ¿A quién acudir en Argentina?',
        paragraphs: [
          'Podés llamar gratis y confidencialmente a la Línea 141 de Salud Mental las 24 horas, o a la Línea 102 de Derechos de la Niñez y Adolescencia. No te van a juzgar ni a pedir datos comprometedores.'
        ]
      }
    ],
    isVerified: true,
    isPopular: true
  },
  {
    id: 'planificador-docente-esi',
    title: 'Planificador Docente: Matriz Trimestral de Convivencia y Prevención ESI',
    description: 'Plantilla de planificación pedagógica para articular los 5 ejes de la Res. CFE 340/18 con la autoestima y la imagen corporal.',
    audience: ['docente'],
    stages: ['inicial', 'primaria', 'secundaria'],
    category: 'Planificador y gestión',
    format: 'planificador',
    durationMinutes: 30,
    materialsNeeded: 'Plantilla interactiva MUNA o versión para imprimir.',
    recommendedUse: 'Planificación curricular anual o de proyectos integrados de salud y ESI.',
    printableTitle: 'MUNA — Matriz Curricular Docente: ESI y Prevención de los TCA',
    printableSections: [
      {
        sectionTitle: 'Estructura de planificación por ejes (Res. CFE 340/18)',
        paragraphs: [
          'Organizador de actividades escolares respetando la privacidad (sin recopilar información personal ni historias clínicas de estudiantes).'
        ],
        bulletPoints: [
          'Eje 1: Cuidar el cuerpo y la salud -> Alimentación diversa sin moralina; descanso y placer corporal.',
          'Eje 2: Valorar la afectividad -> Reconocer emociones complejas (ansiedad, tristeza, autoexigencia).',
          'Eje 3: Garantizar la equidad de género -> Cuestionar mandatos de belleza diferenciados para varones y mujeres.',
          'Eje 4: Respetar la diversidad -> Todas las contexturas, alturas y corporalidades son dignas y valiosas.',
          'Eje 5: Ejercer nuestros derechos -> Acceso a la salud, a la ESI y a ser escuchados sin discriminación.'
        ]
      }
    ],
    isVerified: true
  }
];
