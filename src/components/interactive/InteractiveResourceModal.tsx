import React, { useState } from 'react';
import { InteractiveResourceDef } from '../../data/newInteractiveResources';
import { MunamigoAvatar } from '../MunamigoAvatar';
import {
  X,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Heart,
  Share2,
  Printer,
  Shield,
  HelpCircle,
  ThumbsUp,
  Sliders,
  Compass,
  MessageCircle,
  Eye,
  Check,
  Award
} from 'lucide-react';

interface InteractiveResourceModalProps {
  resource: InteractiveResourceDef | null;
  onClose: () => void;
  onNavigateToResources?: () => void;
}

export const InteractiveResourceModal: React.FC<InteractiveResourceModalProps> = ({
  resource,
  onClose,
  onNavigateToResources
}) => {
  if (!resource) return null;

  // --- STATE FOR ALL 9 ACTIVITIES ---

  // Recurso 1 (Jardín): Mi cuerpo hace cosas maravillosas
  const [jardinStep, setJardinStep] = useState(0);
  const [jardinAnswer, setJardinAnswer] = useState<number | null>(null);

  // Recurso 2 (Jardín): El arcoíris de las emociones
  const [emocionStep, setEmocionStep] = useState(0);
  const [selectedEmocion, setSelectedEmocion] = useState<string | null>(null);
  const [selectedAccion, setSelectedAccion] = useState<string | null>(null);

  // Recurso 3 (Jardín): Cada uno tiene su magia
  const [magiaQualities, setMagiaQualities] = useState<string[]>([]);
  const [magiaColor, setMagiaColor] = useState<string>('#FFFBEB');
  const [magiaComplete, setMagiaComplete] = useState(false);

  // Recurso 4 (Primaria): Detectives de los mensajes
  const [detectiveStep, setDetectiveStep] = useState(0);
  const [detectiveAnswer, setDetectiveAnswer] = useState<string | null>(null);

  // Recurso 5 (Primaria): El escudo de mis fortalezas
  const [escudoFortalezas, setEscudoFortalezas] = useState<string[]>([]);
  const [escudoDisfrute, setEscudoDisfrute] = useState<string[]>([]);
  const [escudoApoyo, setEscudoApoyo] = useState<string[]>([]);
  const [escudoAprendizaje, setEscudoAprendizaje] = useState<string[]>([]);
  const [escudoTheme, setEscudoTheme] = useState<'azul' | 'verde' | 'rosa' | 'naranja'>('azul');
  const [escudoFinalizado, setEscudoFinalizado] = useState(false);

  // Recurso 6 (Primaria): Palabras que cuidan
  const [palabrasStep, setPalabrasStep] = useState(0);
  const [palabrasChoice, setPalabrasChoice] = useState<number | null>(null);
  const [compromisoFirmado, setCompromisoFirmado] = useState(false);

  // Recurso 7 (Secundaria): Redes sin filtros
  const [feedPostIndex, setFeedPostIndex] = useState(0);
  const [feedAnswer, setFeedAnswer] = useState<string | null>(null);

  // Recurso 8 (Secundaria): Mitos bajo la lupa
  const [mitosStep, setMitosStep] = useState(0);
  const [mitosAnswer, setMitosAnswer] = useState<'verdadero' | 'falso' | null>(null);

  // Recurso 9 (Secundaria): ¿Cómo acompaño a alguien?
  const [acompanoStep, setAcompanoStep] = useState(0);
  const [acompanoChoice, setAcompanoChoice] = useState<number | null>(null);

  // Reset helper
  const handleReset = () => {
    setJardinStep(0);
    setJardinAnswer(null);
    setEmocionStep(0);
    setSelectedEmocion(null);
    setSelectedAccion(null);
    setMagiaQualities([]);
    setMagiaComplete(false);
    setDetectiveStep(0);
    setDetectiveAnswer(null);
    setEscudoFortalezas([]);
    setEscudoDisfrute([]);
    setEscudoApoyo([]);
    setEscudoAprendizaje([]);
    setEscudoFinalizado(false);
    setPalabrasStep(0);
    setPalabrasChoice(null);
    setCompromisoFirmado(false);
    setFeedPostIndex(0);
    setFeedAnswer(null);
    setMitosStep(0);
    setMitosAnswer(null);
    setAcompanoStep(0);
    setAcompanoChoice(null);
  };

  // ----------------------------------------------------
  // DATA FOR JARDÍN 1: Mi cuerpo hace cosas maravillosas
  // ----------------------------------------------------
  const jardinCards = [
    {
      situation: '🎶 Cuando suena una música linda y alegre en la sala...',
      options: [
        { text: 'Nuestros pies y manos pueden bailar, saltar y divertirse', correct: true },
        { text: 'Nos tenemos que quedar quietos como piedras sin movernos', correct: false }
      ],
      feedback: '¡Exacto! El movimiento libre nos permite jugar, reír y disfrutar de nuestro cuerpo con alegría.'
    },
    {
      situation: '🧸 Cuando un amigo está triste y necesita cariño...',
      options: [
        { text: 'Nuestros brazos pueden dar un abrazo suave y contenedor', correct: true },
        { text: 'Le damos la espalda y nos vamos corriendo', correct: false }
      ],
      feedback: '¡Hermoso! El cuerpo también es una herramienta de afecto y ternura para cuidar a los demás.'
    },
    {
      situation: '📖 Cuando abrimos un libro grande de cuentos...',
      options: [
        { text: 'Nuestros ojos y deditos exploran dibujos y palabras mágicas', correct: true },
        { text: 'Tapamos el libro y no lo miramos más', correct: false }
      ],
      feedback: '¡Maravilloso! Nuestros ojos, oídos y manos nos conectan con el mundo y nos ayudan a aprender cosas nuevas.'
    },
    {
      situation: '🌙 Cuando llega la noche después de un día lleno de juegos...',
      options: [
        { text: 'Nuestro cuerpo descansa, sueña y recarga energías', correct: true },
        { text: 'Nos exigimos seguir despiertos hasta que duela', correct: false }
      ],
      feedback: '¡Totalmente! El descanso es un derecho de nuestro cuerpo: mientras dormimos, crecemos y nos recuperamos.'
    }
  ];

  // ----------------------------------------------------
  // DATA FOR JARDÍN 2: El arcoíris de las emociones
  // ----------------------------------------------------
  const emocionMoments = [
    {
      character: 'pompon' as const,
      story: 'Afuera hay una tormenta con truenos muy fuertes. Pompón se tapó hasta la nariz con una mantita y tiene los ojos bien abiertos.',
      emociones: ['Tiene miedo por el ruido', 'Siente sorpresa por los rayos', 'Siente preocupación'],
      acciones: [
        'Sentarnos a su lado en silencio y decirle con calma: "Acá estoy con vos"',
        'Buscar a una persona adulta para que nos acompañe y prender una luz suave',
        'Cantar una canción tranquila para calmar el corazón'
      ],
      reflection: 'El miedo nos avisa que necesitamos protección. Acompañar con paciencia hace que el miedo sea más chiquito.'
    },
    {
      character: 'titi' as const,
      story: 'Titi estaba armando una torre muy alta de bloques de colores y de repente se cayó toda al piso.',
      emociones: ['Siente enojo porque se rompió', 'Siente ganas de llorar de frustración', 'Siente tristeza'],
      acciones: [
        'Dejarlo respirar unos minutos sin obligarlo a sonreír de inmediato',
        'Preguntarle: "¿Querés que te ayude a juntar los bloques cuando estés listo?"',
        'Darle un espacio tranquilo para que exprese lo que siente con palabras'
      ],
      reflection: 'Todas las emociones merecen su lugar: enojarse o frustrarse no nos hace "malos niños". Lo importante es tener tiempo para calmarse.'
    },
    {
      character: 'lumi' as const,
      story: 'Lumi practicó mucho y logró dar tres saltos seguidos y atarse los cordones sola.',
      emociones: ['Siente alegría y entusiasmo', 'Siente orgullo por su esfuerzo', 'Siente ganas de compartirlo'],
      acciones: [
        'Festejar juntos con una sonrisa grande y chocar los cinco',
        'Decirle: "¡Qué lindo verte tan contenta con lo que lograste!"',
        'Aprender que festejar lo de los demás nos hace bien a todos'
      ],
      reflection: '¡Celebrar nuestros logros y los de nuestros compañeros llena el día de colores!'
    }
  ];

  // ----------------------------------------------------
  // DATA FOR JARDÍN 3: Cada uno tiene su magia
  // ----------------------------------------------------
  const magiaOptions = [
    'Me gusta dibujar y pintar con colores',
    'Soy curioso/a y me gusta preguntar',
    'Doy abrazos calentitos a quien lo necesita',
    'Me encanta bailar y moverme con la música',
    'Comparto mis juguetes en los juegos',
    'Sé escuchar cuando alguien me habla',
    'Hago reír a mis compañeros con ocurrencias',
    'Me gusta inventar cuentos y personajes',
    'Soy cariñoso/a con los animales y plantas'
  ];

  // ----------------------------------------------------
  // DATA FOR PRIMARIA 4: Detectives de los mensajes
  // ----------------------------------------------------
  const detectiveCases = [
    {
      author: 'Publicidad comercial en redes',
      message: '«¡Comprá este jugo mágico! Vas a ser la más linda de la escuela y todos van a querer ser tus amigos.»',
      isFair: false,
      explanation: 'Mensaje engañoso. Los comerciales inventan fórmulas mágicas para vender productos, haciéndonos creer que para ser queridos o tener amigos necesitamos vernos de cierta manera. ¡El valor de una persona y la verdadera amistad nunca dependen de un batido!'
    },
    {
      author: 'Comentario en la fila del kiosco',
      message: '«¿Otra vez vas a comer eso? Cuidate que te vas a poner pesada para Educación Física.»',
      isFair: false,
      explanation: 'Comentario juzgador sobre el cuerpo y la comida ajena. Opinar sobre el plato o el peso de un compañero genera culpa e incomodidad. Cada cuerpo es diferente y nadie tiene derecho a fiscalizar lo que come otra persona.'
    },
    {
      author: 'Nota del docente en el pizarrón',
      message: '«¡Felicitaciones a todo el grupo por el respeto, la escucha y el esfuerzo colectivo en el trabajo de hoy!»',
      isFair: true,
      explanation: 'Mensaje respetuoso y constructivo. Reconoce el compañerismo, la dedicación y el valor del trabajo en equipo, sin hacer comparaciones corporales ni distinciones injustas.'
    },
    {
      author: 'Tendencia viral en internet',
      message: '«Desafío del talle único: si no te entra este pantalón, no estás a la moda.»',
      isFair: false,
      explanation: 'Mandato estético excluyente. Los cuerpos humanos son naturalmente diversos en contextura, altura y proporciones. La ropa debe adaptarse a los cuerpos reales de las personas, ¡nunca los cuerpos sufrir para entrar en una prenda!'
    }
  ];

  // ----------------------------------------------------
  // DATA FOR PRIMARIA 6: Palabras que cuidan
  // ----------------------------------------------------
  const palabrasScenarios = [
    {
      scene: 'En el patio, un grupo de chicos le pone un apodo denigrante a un compañero por su contextura.',
      options: [
        {
          text: 'Frenar la burla con calma: «No nos llamamos con apodos sobre el cuerpo. En esta escuela nos respetamos» y avisar al docente.',
          recommended: true,
          feedback: '¡Excelente intervención! Ponés un límite sin agresiones, cuidás la dignidad de tu compañero y pedís apoyo a un adulto responsable.'
        },
        {
          text: 'Reírse para no quedar afuera del grupo.',
          recommended: false,
          feedback: 'El silencio o la risa cómplice aumentan el dolor de quien sufre la burla. Todos podemos elegir no sumarnos al acoso.'
        },
        {
          text: 'Empezar a insultar a los otros chicos con otros apodos peores.',
          recommended: false,
          feedback: 'Responder con más agresión escala el conflicto. La mejor manera es poner un límite firme y acudir al equipo docente.'
        }
      ]
    },
    {
      scene: 'En el aula, una compañera expresa angustia porque un buzo nuevo le parece que le queda "muy apretado".',
      options: [
        {
          text: 'Acompañar con afecto: «Te queda re lindo el color y lo más importante es que estés cómoda vos. ¿Querés que vayamos al recreo juntas?»',
          recommended: true,
          feedback: '¡Hermosa respuesta! Desactivás el foco en el talle, resaltás la comodidad personal y ofrecés un momento compartido.'
        },
        {
          text: 'Decirle: «Y bueno, empezá una dieta estricta el lunes».',
          recommended: false,
          feedback: 'Recomendar dietas a compañeros refuerza la idea de que su cuerpo "está mal" y puede abrir la puerta a conductas de riesgo alimentario.'
        }
      ]
    }
  ];

  // ----------------------------------------------------
  // DATA FOR SECUNDARIA 7: Redes sin filtros
  // ----------------------------------------------------
  const feedPosts = [
    {
      account: '@fit_mindset_99',
      avatar: 'lumi' as const,
      caption: '5:00 AM. 10 km en ayunas + batido proteico. Cero excusas. Tu cuerpo es el reflejo de tu disciplina mental. Si no lo lográs es porque no querés lo suficiente. #NoExcuses #Grind',
      analysisQuestions: {
        intent: 'Vender una idea de productividad y control corporal extremo como único sinónimo de éxito.',
        hidden: 'Oculta el agotamiento físico, la rigidez obsesiva y el costo en salud mental y aislamiento social.',
        impact: 'Genera culpa y sensación de insuficiencia en adolescentes que tienen ritmos y realidades diferentes.'
      },
      careAction: 'Recordá: El valor personal no se mide en kilómetros ni en privaciones. Silenciá cuentas que te hagan sentir culpable.'
    },
    {
      account: '@summer_aesthetic',
      avatar: 'mora' as const,
      caption: 'Día de playa natural 🌊 Sin poses, sin retoques, solo disfrutando del sol. #NaturalGlow #GoldenHour',
      analysisQuestions: {
        intent: 'Presentar una imagen de supuesta "espontaneidad" que en realidad requirió decenas de tomas y filtros.',
        hidden: 'Oculta la pose arqueada forzada para marcar curvas, edición de piel y selección intencionada de la luz.',
        impact: 'Crea una expectativa inalcanzable de cómo "debería" verse un cuerpo relajado en verano.'
      },
      careAction: 'Hacé una "limpieza de feed": seguí cuentas que compartan arte, ciencia, humor o amigos reales en vez de catálogos de perfección.'
    }
  ];

  // ----------------------------------------------------
  // DATA FOR SECUNDARIA 8: Mitos bajo la lupa
  // ----------------------------------------------------
  const mitosQuestions = [
    {
      statement: 'Los trastornos de la conducta alimentaria solo afectan a mujeres adolescentes con muy bajo peso visible.',
      isTrue: false,
      explanation: 'MITO PELIGROSO. Los TCA atraviesan a personas de todas las identidades de género, edades y contexturas físicas. De hecho, la gran mayoría de las personas con bulimia, atracón o TCA atípicos presentan pesos normativos o altos. Esperar ver delgadez extrema retrasa el diagnóstico y la ayuda temprana.'
    },
    {
      statement: 'No es posible conocer la salud mental o física de una persona únicamente mirándola al pasar.',
      isTrue: true,
      explanation: 'VERDADERO. El peso corporal no es un indicador directo de bienestar psicológico, felicidad ni hábitos saludables. Los TCA son patologías complejas que se expresan en el dolor emocional y en conductas internas que no se ven a simple vista.'
    },
    {
      statement: 'Felicitar a alguien porque "está más flaco/a" siempre es algo positivo y motivador.',
      isTrue: false,
      explanation: 'MITO. Opinar sobre el cuerpo ajeno, incluso con supuesta "buena intención", refuerza la idea de que adelgazar es la única vía para ser aceptado o valorado. Además, ese descenso de peso puede deberse a una enfermedad, depresión, duelo o restricción alimentaria.'
    },
    {
      statement: 'Un TCA no se cura con simple "fuerza de voluntad": requiere un equipo interdisciplinario de salud.',
      isTrue: true,
      explanation: 'VERDADERO. Los TCA no son caprichos ni elecciones. La evidencia médica y las guías de la Sociedad Argentina de Pediatría (SAP) indican que se requiere acompañamiento de pediatras/médicos clínicos, psicólogos y nutricionistas con perspectiva integral de derechos.'
    }
  ];

  // ----------------------------------------------------
  // DATA FOR SECUNDARIA 9: ¿Cómo acompaño a alguien?
  // ----------------------------------------------------
  const acompanoCases = [
    {
      context: 'Tu mejor amiga se saltea reiteradamente los almuerzos escolares, dice que nada le queda bien y la notás cada vez más aislada y triste.',
      options: [
        {
          text: 'Acercarte en privado y decirle: «Te noto más callada y preocupada últimamente. Me importás un montón y te quiero escuchar sin juzgarte. ¿Querés que busquemos a alguien de confianza?»',
          recommended: true,
          reasoning: 'Excelente. No discutís sobre calorías ni sobre su cuerpo, validás su angustia y ofrecés un puente seguro de escucha y derivación.'
        },
        {
          text: 'Controlar todo lo que come en el almuerzo y obligarla a comer delante tuyo para que no adelgace.',
          recommended: false,
          reasoning: 'Vigilar la comida o asumir el rol de fiscal genera más resistencia, vergüenza y aislamiento. No tenés que ser su policía ni su terapeuta.'
        },
        {
          text: 'Guardar el secreto pase lo que pase, aunque notes que se desmaya o está en riesgo físico.',
          recommended: false,
          reasoning: 'Romper un pacto de silencio cuando la salud o la vida de un amigo corren peligro es un acto de amor y cuidado, no una traición. Hay que acudir a un adulto responsable.'
        }
      ]
    },
    {
      context: 'Un compañero del grupo de fútbol entrena horas extras de manera compulsiva, consume suplementos sin receta y se siente desesperado si no entrena un día.',
      options: [
        {
          text: 'Conversar con empatía sobre su nivel de autoexigencia y sugerirle hablar con el médico del club o con su familia.',
          recommended: true,
          reasoning: 'Muy bien. La dismorfia muscular y la compensación con ejercicio físico también son formas de TCA que requieren acompañamiento médico.'
        },
        {
          text: 'Festejarle que "tiene una disciplina de hierro" y pedirle los suplementos.',
          recommended: false,
          reasoning: 'Normalizar la obsesión física refuerza el daño. El movimiento debe ser placentero y no una obligación punitiva.'
        }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-[#0B1440]/75 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border-4 border-[#2B2FC7]/20 my-6 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-[#0B1440] p-6 text-white flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <MunamigoAvatar id={resource.leadCharacter} size="sm" />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${resource.badgeColor}`}>
                  {resource.stageName}
                </span>
                <span className="text-xs text-slate-300 font-bold">
                  {resource.format} • {resource.estimatedMinutes} min
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-black leading-tight">
                {resource.title}
              </h2>
              <p className="text-xs text-slate-300 mt-0.5">
                Objetivo: {resource.objective}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition shrink-0"
            aria-label="Cerrar actividad"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Canvas */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-[#0B1440]">
          {/* Instructions banner */}
          <div className="p-4 rounded-2xl bg-[#FFFBEB] border-2 border-amber-200 text-xs sm:text-sm font-semibold flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-[#FF7300] shrink-0" />
            <span><strong>Cómo participar: </strong>{resource.instructions}</span>
          </div>

          {/* ==================================================== */}
          {/* RECURSO 1: Mi cuerpo hace cosas maravillosas (Jardín) */}
          {/* ==================================================== */}
          {resource.id === 'jardin-cuerpo-maravilloso' && (
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#FF7300] uppercase tracking-wide">
                    Paso {jardinStep + 1} de {jardinCards.length}
                  </span>
                  <MunamigoAvatar id="pompon" size="xs" />
                </div>

                <h3 className="text-lg md:text-xl font-black text-[#0B1440]">
                  {jardinCards[jardinStep].situation}
                </h3>

                <div className="space-y-3">
                  {jardinCards[jardinStep].options.map((opt, oIdx) => (
                    <button
                      key={oIdx}
                      onClick={() => setJardinAnswer(oIdx)}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition cursor-pointer text-sm font-bold flex items-center justify-between gap-3 ${
                        jardinAnswer === oIdx
                          ? opt.correct
                            ? 'bg-emerald-50 border-emerald-400 text-emerald-950 shadow-sm'
                            : 'bg-amber-50 border-amber-300 text-amber-950'
                          : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      <span>{opt.text}</span>
                      {jardinAnswer === oIdx && opt.correct && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                    </button>
                  ))}
                </div>

                {jardinAnswer !== null && (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 font-medium animate-fadeIn">
                    🎉 {jardinCards[jardinStep].feedback}
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (jardinStep > 0) {
                        setJardinStep(jardinStep - 1);
                        setJardinAnswer(null);
                      }
                    }}
                    disabled={jardinStep === 0}
                    className="px-4 py-2 rounded-full bg-slate-200 disabled:opacity-40 text-xs font-bold text-slate-700"
                  >
                    Anterior
                  </button>

                  {jardinStep < jardinCards.length - 1 ? (
                    <button
                      onClick={() => {
                        setJardinStep(jardinStep + 1);
                        setJardinAnswer(null);
                      }}
                      disabled={jardinAnswer === null}
                      className="bubbly-btn px-5 py-2.5 bg-[#FF7300] hover:bg-[#e66700] disabled:opacity-40 text-white text-xs font-black shadow"
                    >
                      Siguiente situación
                    </button>
                  ) : (
                    <div className="p-4 rounded-2xl bg-[#FFFBEB] border-2 border-amber-300 text-center font-bold text-sm text-[#0B1440]">
                      ⭐ {resource.finalPositiveMessage}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* RECURSO 2: El arcoíris de las emociones (Jardín) */}
          {/* ==================================================== */}
          {resource.id === 'jardin-arcoiris-emociones' && (
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#FF3E96] uppercase tracking-wide">
                    Momento {emocionStep + 1} de {emocionMoments.length}
                  </span>
                  <MunamigoAvatar id={emocionMoments[emocionStep].character} size="xs" />
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 text-sm sm:text-base font-bold text-[#0B1440] leading-relaxed">
                  «{emocionMoments[emocionStep].story}»
                </div>

                {/* Question 1: What could they be feeling? */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-600 block">
                    ¿Qué emoción podría estar sintiendo? (Todas son válidas):
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {emocionMoments[emocionStep].emociones.map((em, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedEmocion(em)}
                        className={`p-3 rounded-2xl border-2 text-xs font-bold text-left transition cursor-pointer ${
                          selectedEmocion === em
                            ? 'bg-[#FF3E96]/15 border-[#FF3E96] text-[#FF3E96]'
                            : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        {em}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question 2: How can we accompany them? */}
                {selectedEmocion && (
                  <div className="space-y-2 pt-2 animate-fadeIn">
                    <span className="text-xs font-bold text-slate-600 block">
                      ¿Cómo podemos acompañarlo/a con afecto?:
                    </span>
                    <div className="space-y-2">
                      {emocionMoments[emocionStep].acciones.map((acc, aIdx) => (
                        <button
                          key={aIdx}
                          onClick={() => setSelectedAccion(acc)}
                          className={`w-full text-left p-3 rounded-xl border-2 text-xs font-bold transition cursor-pointer ${
                            selectedAccion === acc
                              ? 'bg-emerald-50 border-emerald-400 text-emerald-900 shadow-sm'
                              : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
                          }`}
                        >
                          {acc}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {selectedAccion && (
                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-950 font-medium animate-fadeIn">
                    💖 <strong>Reflexión de Cora: </strong>{emocionMoments[emocionStep].reflection}
                  </div>
                )}

                <div className="pt-3 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (emocionStep > 0) {
                        setEmocionStep(emocionStep - 1);
                        setSelectedEmocion(null);
                        setSelectedAccion(null);
                      }
                    }}
                    disabled={emocionStep === 0}
                    className="px-4 py-2 rounded-full bg-slate-200 disabled:opacity-40 text-xs font-bold text-slate-700"
                  >
                    Anterior
                  </button>

                  {emocionStep < emocionMoments.length - 1 ? (
                    <button
                      onClick={() => {
                        setEmocionStep(emocionStep + 1);
                        setSelectedEmocion(null);
                        setSelectedAccion(null);
                      }}
                      disabled={!selectedAccion}
                      className="bubbly-btn px-5 py-2.5 bg-[#FF3E96] hover:bg-[#e02d84] disabled:opacity-40 text-white text-xs font-black shadow"
                    >
                      Siguiente historia
                    </button>
                  ) : (
                    <div className="p-3 bg-amber-100 rounded-2xl text-xs font-black text-[#0B1440]">
                      🌈 {resource.finalPositiveMessage}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* RECURSO 3: Cada uno tiene su magia (Jardín) */}
          {/* ==================================================== */}
          {resource.id === 'jardin-cada-uno-magia' && (
            <div className="space-y-6">
              {!magiaComplete ? (
                <div className="space-y-4 bg-slate-50 p-6 rounded-3xl border-2 border-slate-200">
                  <div className="flex items-center gap-2">
                    <MunamigoAvatar id="titi" size="xs" />
                    <h3 className="font-black text-sm md:text-base text-[#0B1440]">
                      Elegí tus cualidades favoritas (podés elegir hasta 4):
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                    {magiaOptions.map((q, qIdx) => {
                      const isSelected = magiaQualities.includes(q);
                      return (
                        <button
                          key={qIdx}
                          onClick={() => {
                            if (isSelected) {
                              setMagiaQualities(magiaQualities.filter(item => item !== q));
                            } else if (magiaQualities.length < 4) {
                              setMagiaQualities([...magiaQualities, q]);
                            }
                          }}
                          className={`p-3.5 rounded-2xl border-2 text-xs font-bold text-left transition cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#FFBA00] text-[#0B1440] border-[#FFBA00] shadow-sm'
                              : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
                          }`}
                        >
                          <span>{q}</span>
                          {isSelected && <Check className="w-4 h-4 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-2 flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-bold text-slate-500">
                      {magiaQualities.length} de 4 cualidades seleccionadas
                    </span>

                    <button
                      onClick={() => setMagiaComplete(true)}
                      disabled={magiaQualities.length === 0}
                      className="bubbly-btn px-6 py-2.5 bg-[#FFBA00] hover:bg-[#e6a800] text-[#0B1440] font-black text-xs disabled:opacity-40 shadow cursor-pointer"
                    >
                      ¡Crear mi Tarjeta Mágica! 🌟
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 animate-fadeIn">
                  {/* Generated Magic Card */}
                  <div className="max-w-md mx-auto p-8 rounded-3xl border-4 border-[#FFBA00] bg-gradient-to-br from-[#FFFBEB] to-amber-50 shadow-xl text-center space-y-4">
                    <div className="flex justify-center">
                      <MunamigoAvatar id="titi" size="lg" />
                    </div>

                    <h4 className="text-2xl font-black text-[#0B1440] tracking-tight">
                      La Magia de un Amigo de MUNA
                    </h4>

                    <div className="space-y-2 py-2">
                      {magiaQualities.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 bg-white rounded-xl shadow-sm border border-amber-200 text-xs font-bold text-slate-800"
                        >
                          ✨ {item}
                        </div>
                      ))}
                    </div>

                    <p className="text-xs font-semibold text-slate-600 italic">
                      «{resource.finalPositiveMessage}»
                    </p>
                  </div>

                  <div className="text-center pt-2">
                    <button
                      onClick={() => setMagiaComplete(false)}
                      className="px-4 py-2 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold"
                    >
                      Modificar mis cualidades
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ==================================================== */}
          {/* RECURSO 4: Detectives de los mensajes (Primaria) */}
          {/* ==================================================== */}
          {resource.id === 'primaria-detectives-mensajes' && (
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#2458F5] uppercase tracking-wide">
                    Caso Detective {detectiveStep + 1} de {detectiveCases.length}
                  </span>
                  <MunamigoAvatar id="mora" size="xs" />
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">
                    Fuente: {detectiveCases[detectiveStep].author}
                  </span>
                  <div className="p-4 rounded-2xl bg-white border-2 border-slate-300 text-sm md:text-base font-bold text-[#0B1440] italic">
                    {detectiveCases[detectiveStep].message}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-600 block">
                    ¿Qué dice la lupa de Mora sobre este mensaje?:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => setDetectiveAnswer('respetuoso')}
                      className={`p-3.5 rounded-2xl border-2 text-xs font-bold text-left transition cursor-pointer ${
                        detectiveAnswer === 'respetuoso'
                          ? detectiveCases[detectiveStep].isFair
                            ? 'bg-emerald-50 border-emerald-400 text-emerald-950 shadow'
                            : 'bg-rose-50 border-rose-300 text-rose-950'
                          : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      👍 Mensaje justo y respetuoso para todos
                    </button>

                    <button
                      onClick={() => setDetectiveAnswer('cuestionable')}
                      className={`p-3.5 rounded-2xl border-2 text-xs font-bold text-left transition cursor-pointer ${
                        detectiveAnswer === 'cuestionable'
                          ? !detectiveCases[detectiveStep].isFair
                            ? 'bg-emerald-50 border-emerald-400 text-emerald-950 shadow'
                            : 'bg-rose-50 border-rose-300 text-rose-950'
                          : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      🔍 Mensaje engañoso o que promueve estereotipos
                    </button>
                  </div>
                </div>

                {detectiveAnswer !== null && (
                  <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-950 leading-relaxed animate-fadeIn">
                    🕵️ <strong>Explicación de Mora: </strong>
                    {detectiveCases[detectiveStep].explanation}
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (detectiveStep > 0) {
                        setDetectiveStep(detectiveStep - 1);
                        setDetectiveAnswer(null);
                      }
                    }}
                    disabled={detectiveStep === 0}
                    className="px-4 py-2 rounded-full bg-slate-200 disabled:opacity-40 text-xs font-bold text-slate-700"
                  >
                    Anterior
                  </button>

                  {detectiveStep < detectiveCases.length - 1 ? (
                    <button
                      onClick={() => {
                        setDetectiveStep(detectiveStep + 1);
                        setDetectiveAnswer(null);
                      }}
                      disabled={detectiveAnswer === null}
                      className="bubbly-btn px-5 py-2.5 bg-[#2458F5] hover:bg-[#1a44c9] disabled:opacity-40 text-white text-xs font-black shadow"
                    >
                      Siguiente caso
                    </button>
                  ) : (
                    <div className="p-3 bg-amber-100 rounded-2xl text-xs font-black text-[#0B1440]">
                      ⭐ {resource.finalPositiveMessage}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* RECURSO 5: El escudo de mis fortalezas (Primaria) */}
          {/* ==================================================== */}
          {resource.id === 'primaria-escudo-fortalezas' && (
            <div className="space-y-6">
              {!escudoFinalizado ? (
                <div className="space-y-6 bg-slate-50 p-6 rounded-3xl border-2 border-slate-200">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="font-black text-sm md:text-base text-[#0B1440]">
                      Completá los 4 cuadrantes de tu Escudo Personal:
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                      <span>Color del borde:</span>
                      <button
                        onClick={() => setEscudoTheme('azul')}
                        className={`w-6 h-6 rounded-full bg-[#2458F5] ${escudoTheme === 'azul' ? 'ring-2 ring-black' : ''}`}
                      />
                      <button
                        onClick={() => setEscudoTheme('verde')}
                        className={`w-6 h-6 rounded-full bg-[#94E400] ${escudoTheme === 'verde' ? 'ring-2 ring-black' : ''}`}
                      />
                      <button
                        onClick={() => setEscudoTheme('rosa')}
                        className={`w-6 h-6 rounded-full bg-[#FF3E96] ${escudoTheme === 'rosa' ? 'ring-2 ring-black' : ''}`}
                      />
                      <button
                        onClick={() => setEscudoTheme('naranja')}
                        className={`w-6 h-6 rounded-full bg-[#FF7300] ${escudoTheme === 'naranja' ? 'ring-2 ring-black' : ''}`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Cuadrante 1: Fortalezas */}
                    <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-2">
                      <span className="text-xs font-black text-[#2458F5] uppercase block">
                        1. Mis Fortalezas
                      </span>
                      <div className="flex flex-wrap gap-1.5 text-xs">
                        {['Soy buen compañero/a', 'Sé escuchar', 'Soy curioso/a', 'Tengo perseverancia', 'Soy creativo/a'].map(f => (
                          <button
                            key={f}
                            onClick={() => {
                              if (escudoFortalezas.includes(f)) {
                                setEscudoFortalezas(escudoFortalezas.filter(item => item !== f));
                              } else {
                                setEscudoFortalezas([...escudoFortalezas, f]);
                              }
                            }}
                            className={`px-2.5 py-1 rounded-xl font-bold cursor-pointer transition ${
                              escudoFortalezas.includes(f)
                                ? 'bg-[#2458F5] text-white'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            {f}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Cuadrante 2: Lo que disfruto */}
                    <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-2">
                      <span className="text-xs font-black text-[#FFBA00] uppercase block">
                        2. Lo que disfruto hacer
                      </span>
                      <div className="flex flex-wrap gap-1.5 text-xs">
                        {['Dibujar o pintar', 'Bailar o correr libremente', 'Escuchar música', 'Estar con mascotas', 'Aprender historias'].map(d => (
                          <button
                            key={d}
                            onClick={() => {
                              if (escudoDisfrute.includes(d)) {
                                setEscudoDisfrute(escudoDisfrute.filter(item => item !== d));
                              } else {
                                setEscudoDisfrute([...escudoDisfrute, d]);
                              }
                            }}
                            className={`px-2.5 py-1 rounded-xl font-bold cursor-pointer transition ${
                              escudoDisfrute.includes(d)
                                ? 'bg-[#FFBA00] text-[#0B1440]'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            {d}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Cuadrante 3: Red de apoyo */}
                    <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-2">
                      <span className="text-xs font-black text-[#FF3E96] uppercase block">
                        3. Personas que me acompañan
                      </span>
                      <div className="flex flex-wrap gap-1.5 text-xs">
                        {['Mi familia', 'Mis amigos de la escuela', 'Docentes y preceptores', 'Alguien de confianza en el barrio'].map(a => (
                          <button
                            key={a}
                            onClick={() => {
                              if (escudoApoyo.includes(a)) {
                                setEscudoApoyo(escudoApoyo.filter(item => item !== a));
                              } else {
                                setEscudoApoyo([...escudoApoyo, a]);
                              }
                            }}
                            className={`px-2.5 py-1 rounded-xl font-bold cursor-pointer transition ${
                              escudoApoyo.includes(a)
                                ? 'bg-[#FF3E96] text-white'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            {a}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Cuadrante 4: Aprendiendo */}
                    <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-2">
                      <span className="text-xs font-black text-[#94E400] uppercase block">
                        4. Cosas que estoy aprendiendo
                      </span>
                      <div className="flex flex-wrap gap-1.5 text-xs">
                        {['Poner límites con respeto', 'Pedir ayuda sin vergüenza', 'No compararme con fotos de redes', 'Descansar cuando lo necesito'].map(l => (
                          <button
                            key={l}
                            onClick={() => {
                              if (escudoAprendizaje.includes(l)) {
                                setEscudoAprendizaje(escudoAprendizaje.filter(item => item !== l));
                              } else {
                                setEscudoAprendizaje([...escudoAprendizaje, l]);
                              }
                            }}
                            className={`px-2.5 py-1 rounded-xl font-bold cursor-pointer transition ${
                              escudoAprendizaje.includes(l)
                                ? 'bg-[#94E400] text-[#0B1440]'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            {l}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-center pt-2">
                    <button
                      onClick={() => setEscudoFinalizado(true)}
                      className="bubbly-btn px-6 py-3 bg-[#33B5FF] hover:bg-[#209ddf] text-[#0B1440] font-black text-xs shadow cursor-pointer"
                    >
                      🛡️ ¡Visualizar mi Escudo de Fortalezas!
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 animate-fadeIn text-center">
                  {/* Generated Shield Visual */}
                  <div className="max-w-xl mx-auto p-8 rounded-[2.5rem] bg-white border-4 border-[#33B5FF] shadow-2xl space-y-4 text-left">
                    <div className="flex items-center justify-between border-b pb-3">
                      <div className="flex items-center gap-2">
                        <MunamigoAvatar id="blu" size="xs" />
                        <h4 className="font-black text-lg text-[#0B1440]">
                          Escudo Protector de Fortalezas
                        </h4>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        Privado y Personal
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-blue-50 rounded-2xl border border-blue-200">
                        <strong className="text-[#2458F5] block mb-1">Mis Fortalezas:</strong>
                        <ul className="space-y-1">
                          {escudoFortalezas.length > 0 ? escudoFortalezas.map((f, i) => <li key={i}>• {f}</li>) : <li>• Sé escuchar y compartir</li>}
                        </ul>
                      </div>

                      <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200">
                        <strong className="text-amber-800 block mb-1">Lo que Disfruto:</strong>
                        <ul className="space-y-1">
                          {escudoDisfrute.length > 0 ? escudoDisfrute.map((d, i) => <li key={i}>• {d}</li>) : <li>• Música y juegos al aire libre</li>}
                        </ul>
                      </div>

                      <div className="p-3 bg-rose-50 rounded-2xl border border-rose-200">
                        <strong className="text-rose-800 block mb-1">Mi Red de Apoyo:</strong>
                        <ul className="space-y-1">
                          {escudoApoyo.length > 0 ? escudoApoyo.map((a, i) => <li key={i}>• {a}</li>) : <li>• Familia y amigos</li>}
                        </ul>
                      </div>

                      <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200">
                        <strong className="text-emerald-800 block mb-1">Estoy Aprendiendo:</strong>
                        <ul className="space-y-1">
                          {escudoAprendizaje.length > 0 ? escudoAprendizaje.map((l, i) => <li key={i}>• {l}</li>) : <li>• No compararme con fotos</li>}
                        </ul>
                      </div>
                    </div>

                    <p className="text-xs text-center text-slate-500 italic pt-2">
                      «{resource.finalPositiveMessage}»
                    </p>
                  </div>

                  <button
                    onClick={() => setEscudoFinalizado(false)}
                    className="px-4 py-2 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold cursor-pointer"
                  >
                    Editar contenido del escudo
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ==================================================== */}
          {/* RECURSO 6: Palabras que cuidan (Primaria) */}
          {/* ==================================================== */}
          {resource.id === 'primaria-palabras-cuidan' && (
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#FF3E96] uppercase tracking-wide">
                    Escena {palabrasStep + 1} de {palabrasScenarios.length}
                  </span>
                  <MunamigoAvatar id="cora" size="xs" />
                </div>

                <div className="p-4 rounded-2xl bg-[#FFFBEB] border-2 border-amber-300 text-sm md:text-base font-bold text-[#0B1440]">
                  «{palabrasScenarios[palabrasStep].scene}»
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-600 block">
                    ¿Cuál de estas respuestas es la más empática y protectora?:
                  </span>
                  <div className="space-y-2">
                    {palabrasScenarios[palabrasStep].options.map((opt, optIdx) => (
                      <button
                        key={optIdx}
                        onClick={() => setPalabrasChoice(optIdx)}
                        className={`w-full text-left p-3.5 rounded-2xl border-2 text-xs sm:text-sm font-semibold transition cursor-pointer flex items-center justify-between gap-3 ${
                          palabrasChoice === optIdx
                            ? opt.recommended
                              ? 'bg-emerald-50 border-emerald-400 text-emerald-950 shadow'
                              : 'bg-rose-50 border-rose-300 text-rose-950'
                            : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        <span>{opt.text}</span>
                        {palabrasChoice === optIdx && (
                          opt.recommended ? <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /> : <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {palabrasChoice !== null && (
                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-950 font-medium animate-fadeIn">
                    💬 <strong>Consejo de Cora: </strong>
                    {palabrasScenarios[palabrasStep].options[palabrasChoice].feedback}
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (palabrasStep > 0) {
                        setPalabrasStep(palabrasStep - 1);
                        setPalabrasChoice(null);
                      }
                    }}
                    disabled={palabrasStep === 0}
                    className="px-4 py-2 rounded-full bg-slate-200 disabled:opacity-40 text-xs font-bold text-slate-700"
                  >
                    Anterior
                  </button>

                  {palabrasStep < palabrasScenarios.length - 1 ? (
                    <button
                      onClick={() => {
                        setPalabrasStep(palabrasStep + 1);
                        setPalabrasChoice(null);
                      }}
                      disabled={palabrasChoice === null}
                      className="bubbly-btn px-5 py-2.5 bg-[#FF3E96] hover:bg-[#e02d84] disabled:opacity-40 text-white text-xs font-black shadow"
                    >
                      Siguiente escena
                    </button>
                  ) : (
                    <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-300 text-center space-y-2">
                      <span className="text-xs font-black text-emerald-900 block">
                        🤝 Compromiso de Convivencia:
                      </span>
                      <p className="text-xs text-emerald-950 italic">
                        «Elijo no hacer chistes ni comentarios sobre el cuerpo de mis compañeros y tender una mano cuando alguien lo necesite.»
                      </p>
                      <button
                        onClick={() => setCompromisoFirmado(true)}
                        className={`px-4 py-1.5 rounded-full text-xs font-black transition ${
                          compromisoFirmado ? 'bg-emerald-600 text-white' : 'bg-white text-emerald-800 border border-emerald-300 hover:bg-emerald-100'
                        }`}
                      >
                        {compromisoFirmado ? '✓ ¡Compromiso Firmado!' : 'Firmar compromiso voluntario'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* RECURSO 7: Redes sin filtros (Secundaria) */}
          {/* ==================================================== */}
          {resource.id === 'secundaria-redes-sin-filtros' && (
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#94E400] uppercase tracking-wide">
                    Simulación de Feed {feedPostIndex + 1} de {feedPosts.length}
                  </span>
                  <MunamigoAvatar id="lumi" size="xs" />
                </div>

                {/* Simulated Social Post */}
                <div className="max-w-md mx-auto bg-white rounded-3xl border-2 border-slate-300 shadow-sm overflow-hidden">
                  <div className="p-3 border-b flex items-center justify-between text-xs font-bold text-slate-800">
                    <span className="text-[#2458F5]">{feedPosts[feedPostIndex].account}</span>
                    <span className="text-[10px] text-slate-400">Publicación Simulada</span>
                  </div>
                  <div className="p-6 bg-slate-100 text-center font-bold text-slate-700 text-sm">
                    📷 [Imagen con iluminación artificial, ángulo forzado y edición morfológica]
                  </div>
                  <div className="p-4 text-xs text-slate-800 space-y-1">
                    <p className="leading-relaxed font-medium">{feedPosts[feedPostIndex].caption}</p>
                  </div>
                </div>

                {/* Analysis Questions */}
                <div className="space-y-2 bg-white p-4 rounded-2xl border border-slate-200 text-xs">
                  <strong className="text-[#0B1440] block">🔍 Preguntas de análisis crítico guiadas por Lumi:</strong>
                  <p>• <strong>¿Qué intenta transmitir?: </strong>{feedPosts[feedPostIndex].analysisQuestions.intent}</p>
                  <p>• <strong>¿Qué oculta detrás de la foto?: </strong>{feedPosts[feedPostIndex].analysisQuestions.hidden}</p>
                  <p>• <strong>¿Cómo puede influir en quien lo mira?: </strong>{feedPosts[feedPostIndex].analysisQuestions.impact}</p>
                </div>

                <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-950 font-medium">
                  🌱 <strong>Acción de Autocuidado Digital: </strong>{feedPosts[feedPostIndex].careAction}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => setFeedPostIndex(Math.max(0, feedPostIndex - 1))}
                    disabled={feedPostIndex === 0}
                    className="px-4 py-2 rounded-full bg-slate-200 disabled:opacity-40 text-xs font-bold text-slate-700"
                  >
                    Anterior post
                  </button>

                  {feedPostIndex < feedPosts.length - 1 ? (
                    <button
                      onClick={() => setFeedPostIndex(feedPostIndex + 1)}
                      className="bubbly-btn px-5 py-2.5 bg-[#94E400] hover:bg-[#85ce00] text-[#0B1440] text-xs font-black shadow"
                    >
                      Analizar siguiente post
                    </button>
                  ) : (
                    <div className="p-3 bg-amber-100 rounded-2xl text-xs font-black text-[#0B1440]">
                      ✨ {resource.finalPositiveMessage}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* RECURSO 8: Mitos bajo la lupa (Secundaria) */}
          {/* ==================================================== */}
          {resource.id === 'secundaria-mitos-bajo-lupa' && (
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#2458F5] uppercase tracking-wide">
                    Afirmación {mitosStep + 1} de {mitosQuestions.length}
                  </span>
                  <MunamigoAvatar id="mora" size="xs" />
                </div>

                <div className="p-5 rounded-2xl bg-white border-2 border-slate-300 text-sm md:text-base font-bold text-[#0B1440]">
                  «{mitosQuestions[mitosStep].statement}»
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-600 block">
                    ¿Esta afirmación es Verdadera o un Mito?:
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setMitosAnswer('verdadero')}
                      className={`p-3.5 rounded-2xl border-2 text-xs font-bold text-center transition cursor-pointer ${
                        mitosAnswer === 'verdadero'
                          ? mitosQuestions[mitosStep].isTrue
                            ? 'bg-emerald-50 border-emerald-400 text-emerald-950 shadow'
                            : 'bg-rose-50 border-rose-300 text-rose-950'
                          : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      Verdadero
                    </button>

                    <button
                      onClick={() => setMitosAnswer('falso')}
                      className={`p-3.5 rounded-2xl border-2 text-xs font-bold text-center transition cursor-pointer ${
                        mitosAnswer === 'falso'
                          ? !mitosQuestions[mitosStep].isTrue
                            ? 'bg-emerald-50 border-emerald-400 text-emerald-950 shadow'
                            : 'bg-rose-50 border-rose-300 text-rose-950'
                          : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      Mito / Falso
                    </button>
                  </div>
                </div>

                {mitosAnswer !== null && (
                  <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-950 leading-relaxed animate-fadeIn">
                    📖 <strong>Fundamentación de Mora: </strong>
                    {mitosQuestions[mitosStep].explanation}
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (mitosStep > 0) {
                        setMitosStep(mitosStep - 1);
                        setMitosAnswer(null);
                      }
                    }}
                    disabled={mitosStep === 0}
                    className="px-4 py-2 rounded-full bg-slate-200 disabled:opacity-40 text-xs font-bold text-slate-700"
                  >
                    Anterior
                  </button>

                  {mitosStep < mitosQuestions.length - 1 ? (
                    <button
                      onClick={() => {
                        setMitosStep(mitosStep + 1);
                        setMitosAnswer(null);
                      }}
                      disabled={mitosAnswer === null}
                      className="bubbly-btn px-5 py-2.5 bg-[#2458F5] hover:bg-[#1a44c9] disabled:opacity-40 text-white text-xs font-black shadow"
                    >
                      Siguiente afirmación
                    </button>
                  ) : (
                    <div className="p-3 bg-amber-100 rounded-2xl text-xs font-black text-[#0B1440]">
                      🎯 {resource.finalPositiveMessage}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* RECURSO 9: ¿Cómo acompaño a alguien? (Secundaria) */}
          {/* ==================================================== */}
          {resource.id === 'secundaria-como-acompano' && (
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#FF7300] uppercase tracking-wide">
                    Situación {acompanoStep + 1} de {acompanoCases.length}
                  </span>
                  <MunamigoAvatar id="pompon" size="xs" />
                </div>

                <div className="p-4 rounded-2xl bg-[#FFFBEB] border-2 border-amber-300 text-xs sm:text-sm font-semibold text-[#0B1440]">
                  «{acompanoCases[acompanoStep].context}»
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-600 block">
                    ¿Qué respuesta elegirías para estar presente sin asumir el rol de terapeuta?:
                  </span>
                  <div className="space-y-2">
                    {acompanoCases[acompanoStep].options.map((opt, optIdx) => (
                      <button
                        key={optIdx}
                        onClick={() => setAcompanoChoice(optIdx)}
                        className={`w-full text-left p-3.5 rounded-2xl border-2 text-xs sm:text-sm font-semibold transition cursor-pointer flex items-center justify-between gap-3 ${
                          acompanoChoice === optIdx
                            ? opt.recommended
                              ? 'bg-emerald-50 border-emerald-400 text-emerald-950 shadow'
                              : 'bg-rose-50 border-rose-300 text-rose-950'
                            : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        <span>{opt.text}</span>
                        {acompanoChoice === optIdx && (
                          opt.recommended ? <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /> : <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {acompanoChoice !== null && (
                  <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-xs sm:text-sm text-orange-950 font-medium animate-fadeIn">
                    🧡 <strong>Consejo de Pompón y Cora: </strong>
                    {acompanoCases[acompanoStep].options[acompanoChoice].reasoning}
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (acompanoStep > 0) {
                        setAcompanoStep(acompanoStep - 1);
                        setAcompanoChoice(null);
                      }
                    }}
                    disabled={acompanoStep === 0}
                    className="px-4 py-2 rounded-full bg-slate-200 disabled:opacity-40 text-xs font-bold text-slate-700"
                  >
                    Anterior
                  </button>

                  {acompanoStep < acompanoCases.length - 1 ? (
                    <button
                      onClick={() => {
                        setAcompanoStep(acompanoStep + 1);
                        setAcompanoChoice(null);
                      }}
                      disabled={acompanoChoice === null}
                      className="bubbly-btn px-5 py-2.5 bg-[#FF7300] hover:bg-[#e66700] disabled:opacity-40 text-white text-xs font-black shadow"
                    >
                      Siguiente situación
                    </button>
                  ) : (
                    <div className="p-3 bg-amber-100 rounded-2xl text-xs font-black text-[#0B1440]">
                      🤝 {resource.finalPositiveMessage}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Repeat and Return buttons */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Volver a intentarlo / Reiniciar</span>
          </button>

          <div className="flex items-center gap-2">
            {onNavigateToResources && (
              <button
                onClick={() => {
                  onClose();
                  onNavigateToResources();
                }}
                className="px-4 py-2 rounded-full bg-[#2B2FC7] hover:bg-[#1a44c9] text-white font-bold text-xs transition shadow"
              >
                Volver a la Biblioteca de Recursos
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full bg-[#0B1440] hover:bg-slate-800 text-white font-bold text-xs transition"
            >
              Cerrar actividad
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
