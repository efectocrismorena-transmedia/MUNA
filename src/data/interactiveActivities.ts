export interface ConversationScenario {
  id: string;
  context: string;
  speaker: string;
  dialogue: string;
  options: {
    text: string;
    type: 'inadecuada' | 'bienintencionada_pero_limitada' | 'empatica_recomendada';
    feedback: string;
    characterAdvice: string;
  }[];
}

export const CONVERSATION_SCENARIOS: ConversationScenario[] = [
  {
    id: 'odio-mi-cuerpo',
    context: 'Llegando la tarde, tu hijo/a adolescente está frente al placard, angustiado/a y con lágrimas en los ojos.',
    speaker: 'Adolescente',
    dialogue: '«Odio mi cuerpo. Todo me queda horrible y no quiero ir al cumpleaños de mis amigos.»',
    options: [
      {
        text: '«¡Pero si estás hermoso/a! ¡No digas tonterías, no seas exagerado/a y cambiate que llegamos tarde!»',
        type: 'bienintencionada_pero_limitada',
        feedback: 'Aunque nace del afecto y el apuro, esta respuesta invalida su dolor interno y clausura la charla. Para el adolescente, su malestar es real y siente que nadie lo comprende.',
        characterAdvice: 'Pompón recuerda: Contradecir lo que siente suele hacer que la persona se encierre todavía más.'
      },
      {
        text: '«Bueno, si no te gusta cómo te ves, el lunes arrancamos una dieta estricta o te anoto en un gimnasio.»',
        type: 'inadecuada',
        feedback: 'Esta respuesta refuerza la idea de que su cuerpo realmente "está mal" y valida la cultura de la restricción y el pesocentrismo, aumentando la ansiedad y el riesgo de conductas compensatorias.',
        characterAdvice: 'Mora advierte: Las dietas restrictivas en la adolescencia son el principal disparador de los TCA.'
      },
      {
        text: '«Lamento muchísimo que te estés sintiendo así de angustiado/a ahora. Quiero escucharte y entender qué te pasa. Si hoy necesitás un respiro, no tenés que resolverlo a solas.»',
        type: 'empatica_recomendada',
        feedback: 'Excelente. No discutís sobre su cuerpo, validás su angustia y ofrecés una presencia amorosa y disponible sin apurarlo ni juzgarlo.',
        characterAdvice: 'Blu y Cora destacan: Dar espacio al sentimiento baja la intensidad de la crisis y construye confianza.'
      }
    ]
  },
  {
    id: 'comentario-familiar',
    context: 'En un almuerzo de domingo, un familiar mira a una sobrina y comenta en voz alta delante de todos.',
    speaker: 'Familiar en la mesa',
    dialogue: '«¡Qué linda estás, Sol! ¡Se nota que adelgazaste un montón, seguí así!»',
    options: [
      {
        text: 'Asentir y decir: «Sí, la verdad que le vino bárbaro cuidarse un poco».',
        type: 'inadecuada',
        feedback: 'Asociar el adelgazamiento con el éxito o la belleza refuerza la idea de que para ser querida o aceptada debe mantenerse delgada a cualquier costo, incluso si ese cambio de peso fue producto de sufrimiento o privación.',
        characterAdvice: 'Lumi nos recuerda: Los cuerpos no son tema de conversación ni de felicitación pública.'
      },
      {
        text: 'Cambiar de tema abruptamente hablando del clima sin decir nada.',
        type: 'bienintencionada_pero_limitada',
        feedback: 'Evita la discusión en el momento, pero deja a la joven sintiendo la incomodidad sin un adulto que ponga un límite saludable a los comentarios corporales.',
        characterAdvice: 'Cora dice: A veces un silencio cómplice también duele.'
      },
      {
        text: 'Intervenir con calma y amabilidad: «En esta familia queremos a Sol por lo alegre, generosa y talentosa que es, no por su peso. Qué lindo es compartir este rato juntos».',
        type: 'empatica_recomendada',
        feedback: 'Pone un límite respetuoso pero firme, desactiva el foco en la balanza y resalta los valores humanos auténticos.',
        characterAdvice: 'Pompón celebra: ¡Eso es cuidar los vínculos y recordar que somos mucho más que nuestro envase!'
      }
    ]
  },
  {
    id: 'recreo-escolar',
    context: 'Sos docente en el patio del colegio y observás que un estudiante de 14 años se aleja a una esquina solitaria y esconde su sándwich en la mochila sin probarlo.',
    speaker: 'Situación observada',
    dialogue: 'El estudiante permanece apartado con la mirada baja mientras el resto del grupo juega.',
    options: [
      {
        text: 'Gritarle desde lejos: «¡Che, comé que te vas a desmayar y la comida no se tira!»',
        type: 'inadecuada',
        feedback: 'Exponer al alumno ante todo el curso genera vergüenza, hostilidad y mayor aislamiento.',
        characterAdvice: 'Blu advierte: La discreción es fundamental para cuidar la intimidad del estudiante.'
      },
      {
        text: 'Acercarte en privado, sentarte a su lado y decirle: «Hola, te estuve notando un poco callado/a estos días. ¿Cómo venís con las materias y con los chicos? Estoy acá si querés charlar».',
        type: 'empatica_recomendada',
        feedback: 'Excelente. No hacés foco punitivo en la comida, ofrecés un vínculo cálido y habilitás la palabra sin invadir.',
        characterAdvice: 'Cora y Blu: Construir un puente de confianza es el primer paso antes de cualquier articulación pedagógica.'
      },
      {
        text: 'Llamar de inmediato a la madre para decirle que el alumno tiene anorexia y debe ser internado.',
        type: 'inadecuada',
        feedback: 'Los docentes no diagnostican patologías ni deben generar pánico en las familias ante una primera observación. Lo indicado es registrar la conducta, dialogar con el Equipo de Orientación Escolar y planificar un acompañamiento interdisciplinario.',
        characterAdvice: 'Mora resalta: Las observaciones escolares son valiosas, pero el diagnóstico médico corresponde a profesionales de la salud.'
      }
    ]
  }
];

export const EMOTIONAL_COMPASS_OPTIONS = [
  {
    emotion: 'Presión por cumplir expectativas',
    emoji: '🌀',
    description: 'Sentir que tenés que ser perfecto/a en la escuela, con tu familia o con tu imagen.',
    characterId: 'cora',
    reassurance: 'La perfección no existe y es agotadora. Tu valor no depende de tus notas ni de tu apariencia.',
    suggestion: 'Hacé una pausa de 5 minutos, respirá hondo y escribí 3 cosas que disfrutás hacer aunque no seas "el/la mejor" en ellas.'
  },
  {
    emotion: 'Inseguridad o descontento con el cuerpo',
    emoji: '🪞',
    description: 'Mirarse al espejo y sentir que algo no encaja o compararse con fotos en redes.',
    characterId: 'lumi',
    reassurance: 'Recordá que los filtros y las poses alteran la realidad. Los cuerpos cambian constantemente y merecen respeto en cada etapa.',
    suggestion: 'Cerrá las redes por una tarde. Salí a caminar sintiendo el viento o poné música que te guste y bailá libremente.'
  },
  {
    emotion: 'Vergüenza de pedir ayuda',
    emoji: '🌱',
    description: 'Creer que si decís lo que te pasa vas a ser una carga o se van a burlar.',
    characterId: 'pompon',
    reassurance: 'Pedir ayuda no es rendirse: es la muestra de valentía más grande que existe.',
    suggestion: 'Elegí a una persona adulta en la que confíes (un familiar, profe o preceptor) y mandale un mensaje sencillo: "¿Podemos hablar un ratito hoy?".'
  },
  {
    emotion: 'Tristeza o confusión sin causa clara',
    emoji: '☁️',
    description: 'Tener ganas de llorar o sentir un nudo en el pecho sin saber exactamente por qué.',
    characterId: 'blu',
    reassurance: 'Todas las emociones son válidas. No necesitás justificar por qué estás triste para recibir un abrazo.',
    suggestion: 'Tomate un vaso de agua fresca, tapate con una mantita y date permiso para descansar.'
  }
];
