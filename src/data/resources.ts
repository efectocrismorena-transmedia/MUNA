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
  },
  // --- 9 NUEVOS RECURSOS EDUCATIVOS MUNA ---
  // 1. Jardín: Mi cuerpo hace cosas maravillosas
  {
    id: 'jardin-cuerpo-maravilloso',
    title: 'Mi cuerpo hace cosas maravillosas',
    description: 'Juego interactivo de asociación para reconocer que el cuerpo permite jugar, bailar, abrazar, aprender, descansar y explorar el mundo, sin comparaciones de peso ni tamaño.',
    audience: ['familia', 'docente', 'estudiante'],
    stages: ['inicial'],
    category: 'Cuidado y valoración corporal',
    format: 'actividad',
    durationMinutes: 8,
    materialsNeeded: 'Dispositivo digital o tarjetas ilustradas para el aula de nivel inicial.',
    recommendedUse: 'Dinámica grupal o familiar para celebrar las capacidades del cuerpo sin juzgar la apariencia.',
    printableTitle: 'MUNA — Ficha Inicial: Mi Cuerpo Hace Cosas Maravillosas',
    printableSections: [
      {
        sectionTitle: 'Objetivo y mensaje central',
        paragraphs: [
          'Reconocer que el cuerpo humano es un compañero de aventuras que nos permite sentir, abrazar, correr, reír y descansar.',
          'Mensaje final: «Tu cuerpo merece cuidado y respeto todos los días».'
        ],
        bulletPoints: [
          'Celebrar lo que el cuerpo hace en lugar de clasificarlo por tamaño o forma.',
          'Enseñar que el descanso es fundamental para crecer fuertes y sanos.',
          'Fomentar abrazos y juegos compartidos en la sala de jardín.'
        ]
      }
    ],
    isVerified: true,
    isPopular: true
  },
  // 2. Jardín: El arcoíris de las emociones
  {
    id: 'jardin-arcoiris-emociones',
    title: 'El arcoíris de las emociones',
    description: 'Cuento interactivo con decisiones guiado por Cora para identificar emociones (alegría, tristeza, enojo, miedo, vergüenza) y validar lo que sentimos.',
    audience: ['familia', 'docente', 'estudiante'],
    stages: ['inicial'],
    category: 'Educación socioemocional temprana',
    format: 'actividad',
    durationMinutes: 10,
    materialsNeeded: 'Cuento digital o títeres de Munamigos.',
    recommendedUse: 'Para rondas de diálogo matutinas en el jardín o antes de dormir en el hogar.',
    printableTitle: 'MUNA — Cuento Inicial: El Arcoíris de las Emociones con Cora',
    printableSections: [
      {
        sectionTitle: 'Educación emocional sin respuestas incorrectas',
        paragraphs: [
          'Todas las emociones merecen un lugar seguro: el enojo ante la frustración, el miedo ante lo desconocido y la alegría de compartir.',
          'Mensaje final: «Podemos sentir cosas diferentes y hablar de lo que nos pasa».'
        ],
        bulletPoints: [
          'Acompañar sin forzar sonrisas inmediatas.',
          'Aprender a buscar la mano de una persona adulta de confianza.',
          'Validar la tristeza o el cansancio con paciencia.'
        ]
      }
    ],
    isVerified: true,
    isPopular: true
  },
  // 3. Jardín: Cada uno tiene su magia
  {
    id: 'jardin-cada-uno-magia',
    title: 'Cada uno tiene su magia',
    description: 'Actividad creativa de descubrimiento personal con Titi para valorar las cualidades, habilidades y la diversidad de cada niño y niña.',
    audience: ['familia', 'docente', 'estudiante'],
    stages: ['inicial'],
    category: 'Autoestima y convivencia',
    format: 'actividad',
    durationMinutes: 10,
    materialsNeeded: 'Tarjetas de cualidades ilustradas o versión interactiva digital.',
    recommendedUse: 'Actividad de integración grupal en salas de 4 y 5 años.',
    printableTitle: 'MUNA — Taller Inicial: Cada Uno Tiene Su Magia',
    printableSections: [
      {
        sectionTitle: 'Descubrir superpoderes cotidianos',
        paragraphs: [
          'Cada persona es especial por su curiosidad, su risa, su ternura y sus ganas de jugar, no por su apariencia física.',
          'Mensaje final: «No tenemos que ser iguales para compartir y disfrutar».'
        ],
        bulletPoints: [
          'Reconocer talentos variados: cantar, escuchar, compartir, dibujar.',
          'Desterrar la necesidad de ser iguales para pertenecer al grupo.',
          'Estimular la autoestima desde el afecto y la aceptación.'
        ]
      }
    ],
    isVerified: true
  },
  // 4. Primaria: Detectives de los mensajes
  {
    id: 'primaria-detectives-mensajes',
    title: 'Detectives de los mensajes',
    description: 'Juego de preguntas y pensamiento crítico con Mora para reconocer estereotipos en publicidades y comentarios sobre la comida o el peso.',
    audience: ['docente', 'estudiante', 'familia'],
    stages: ['primaria'],
    category: 'Alfabetización mediática',
    format: 'actividad',
    durationMinutes: 12,
    materialsNeeded: 'Lupa de detective Mora o proyector escolar.',
    recommendedUse: 'Para clases de Ciencias Sociales, Formación Ética y Ciudadana o semanas ESI.',
    printableTitle: 'MUNA — Taller Primaria: Detectives de los Mensajes con Mora',
    printableSections: [
      {
        sectionTitle: 'Preguntas guía para pensar antes de creer',
        paragraphs: [
          'Aprender a preguntarse: ¿Quién creó este mensaje? ¿Es justo para todos? ¿Cómo podría hacernos sentir?',
          'Mensaje final: «El valor de una persona nunca se mide por cómo luce».'
        ],
        bulletPoints: [
          'Desmontar la promesa engañosa de productos mágicos.',
          'Frenar la fiscalización del plato o vianda de los compañeros.',
          'Valorar el esfuerzo colectivo por sobre las apariencias.'
        ]
      }
    ],
    isVerified: true,
    isPopular: true
  },
  // 5. Primaria: El escudo de mis fortalezas
  {
    id: 'primaria-escudo-fortalezas',
    title: 'El escudo de mis fortalezas',
    description: 'Taller digital interactivo con Blu para construir un escudo protector con 4 cuadrantes: fortalezas, disfrute, redes de afecto y aprendizajes.',
    audience: ['docente', 'estudiante', 'familia'],
    stages: ['primaria'],
    category: 'Autoestima y resiliencia',
    format: 'actividad',
    durationMinutes: 15,
    materialsNeeded: 'Plantilla de escudo imprimible o versión interactiva.',
    recommendedUse: 'Actividad individual reflexiva para fortalecer la autoconfianza escolar.',
    printableTitle: 'MUNA — Taller Primaria: El Escudo de Mis Fortalezas con Blu',
    printableSections: [
      {
        sectionTitle: 'Los cuatro cuadrantes de protección',
        paragraphs: [
          'Un escudo personal que recuerda nuestras herramientas internas y los vínculos que nos cuidan.',
          'Mensaje final: «Tu escudo te recuerda quién sos y con qué redes de afecto contás cada día».'
        ],
        bulletPoints: [
          'Cuadrante 1: Mis fortalezas (creatividad, perseverancia, escucha).',
          'Cuadrante 2: Lo que disfruto (música, juegos, aire libre).',
          'Cuadrante 3: Personas que me acompañan (familia, amigos, docentes).',
          'Cuadrante 4: Cosas que estoy aprendiendo (poner límites, pedir ayuda).'
        ]
      }
    ],
    isVerified: true,
    isPopular: true
  },
  // 6. Primaria: Palabras que cuidan
  {
    id: 'primaria-palabras-cuidan',
    title: 'Palabras que cuidan',
    description: 'Desafío interactivo de situaciones cotidianas con Cora para frenar burlas, apodos corporales y comentarios sobre la comida en la escuela.',
    audience: ['docente', 'estudiante', 'familia'],
    stages: ['primaria'],
    category: 'Convivencia y empatía',
    format: 'actividad',
    durationMinutes: 12,
    materialsNeeded: 'Tarjetas de situaciones y acta simbólica de convivencia.',
    recommendedUse: 'Taller de convivencia escolar y prevención del acoso.',
    printableTitle: 'MUNA — Taller Primaria: Palabras que Cuidan con Cora',
    printableSections: [
      {
        sectionTitle: 'El poder de las palabras en el aula',
        paragraphs: [
          'Las palabras pueden herir o pueden cuidar. Elegir respuestas empáticas transforma el clima del aula.',
          'Mensaje final: «Cuando elegimos palabras que cuidan, la escuela es un lugar más seguro para todos».'
        ],
        bulletPoints: [
          'No sumarse a apodos ni risas cómplices sobre los cuerpos.',
          'Intervenir con amabilidad y poner límites sin agresión.',
          'Saber cuándo acudir al equipo docente o directivo.'
        ]
      }
    ],
    isVerified: true
  },
  // 7. Secundaria: Redes sin filtros
  {
    id: 'secundaria-redes-sin-filtros',
    title: 'Redes sin filtros',
    description: 'Simulador educativo de publicaciones ficticias con Lumi para analizar ideales inalcanzables, trucos de edición y algoritmos en redes sociales.',
    audience: ['estudiante', 'docente', 'familia'],
    stages: ['secundaria'],
    category: 'Alfabetización digital y pensamiento crítico',
    format: 'actividad',
    durationMinutes: 15,
    materialsNeeded: 'Dispositivo con acceso a la app MUNA o fichas de debate.',
    recommendedUse: 'Secuencia didáctica para talleres ESI en ciclo básico y superior.',
    printableTitle: 'MUNA — Taller Secundaria: Redes sin Filtros con Lumi',
    printableSections: [
      {
        sectionTitle: 'Desarmar la ilusión digital',
        paragraphs: [
          'Las redes sociales presentan recortes milimétricamente producidos y editados. Aprender a detectarlo protege nuestra salud mental.',
          'Mensaje final: «Las redes son un recorte editado, no el espejo de la realidad. Practicá la higiene digital y cuidá tu bienestar».'
        ],
        bulletPoints: [
          'Detectar poses forzadas, iluminación artificial y filtros automáticos.',
          'Cuestionar la asociación entre estética corporal y éxito personal.',
          'Hacer limpieza periódica de cuentas que generen inseguridad.'
        ]
      }
    ],
    isVerified: true,
    isPopular: true
  },
  // 8. Secundaria: Mitos bajo la lupa
  {
    id: 'secundaria-mitos-bajo-lupa',
    title: 'Mitos bajo la lupa',
    description: 'Cuestionario interactivo con explicaciones fundamentadas con Mora sobre la complejidad médica y psicológica de los TCA.',
    audience: ['estudiante', 'docente', 'familia'],
    stages: ['secundaria'],
    category: 'Salud mental y desmitificación',
    format: 'guia',
    durationMinutes: 15,
    materialsNeeded: 'Ficha de debate y acceso al directorio oficial de salud.',
    recommendedUse: 'Para centros de estudiantes, tutorías y jornadas de salud integral.',
    printableTitle: 'MUNA — Guía Secundaria: Mitos bajo la Lupa con Mora',
    printableSections: [
      {
        sectionTitle: 'Verdades científicas sobre los TCA',
        paragraphs: [
          'Información rigurosa basada en la Sociedad Argentina de Pediatría (SAP), la OMS y la Ley 26.396.',
          'Mensaje final: «Informarse con fuentes científicas es la mejor herramienta para derribar prejuicios y acompañar sin juzgar».'
        ],
        bulletPoints: [
          'Los TCA atraviesan a personas de todos los géneros, edades y contexturas.',
          'No se diagnostica a nadie por su aspecto exterior.',
          'La recuperación requiere un equipo de salud interdisciplinario, no simple voluntad.'
        ]
      }
    ],
    isVerified: true,
    isPopular: true
  },
  // 9. Secundaria: ¿Cómo acompaño a alguien?
  {
    id: 'secundaria-como-acompano',
    title: '¿Cómo acompaño a alguien?',
    description: 'Simulador de conversaciones con decisiones con Pompón y Cora para saber cómo estar presente para una amistad sin asumir el rol de terapeuta.',
    audience: ['estudiante', 'docente', 'familia'],
    stages: ['secundaria'],
    category: 'Redes de pares y cuidado',
    format: 'guia',
    durationMinutes: 15,
    materialsNeeded: 'Simulador interactivo MUNA.',
    recommendedUse: 'Para tutorías, centros de estudiantes y talleres de pares.',
    printableTitle: 'MUNA — Ficha Juvenil: ¿Cómo Acompaño a Alguien? con Pompón y Cora',
    printableSections: [
      {
        sectionTitle: 'Acompañar con afecto y responsabilidad',
        paragraphs: [
          'Estar cerca no significa solucionar todo solos: significa escuchar sin juzgar y ser puente hacia adultos de confianza y profesionales.',
          'Mensaje final: «Acompañar no significa tener la cura: significa estar presente, escuchar sin juzgar y tender puentes hacia la ayuda profesional».'
        ],
        bulletPoints: [
          'Validar el dolor sin discutir sobre peso ni comida.',
          'No vigilar ni fiscalizar platos ajenos.',
          'Saber cuándo pedir ayuda urgente (Línea 141 y SAME 107 / 911).'
        ]
      }
    ],
    isVerified: true,
    isPopular: true
  }
];

