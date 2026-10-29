import React, { useState } from 'react';
import { MunamigoAvatar } from '../components/MunamigoAvatar';
import {
  Heart,
  MessageCircle,
  HelpCircle,
  Shield,
  PhoneCall,
  Check,
  X as XIcon,
  ChevronDown,
  ChevronUp,
  School,
  Stethoscope,
  Sparkles
} from 'lucide-react';

interface FamiliesViewProps {
  onOpenResource: (resourceId: string) => void;
  onOpenAlerts: () => void;
  onNavigate: (view: string) => void;
}

export const FamiliesView: React.FC<FamiliesViewProps> = ({
  onOpenResource,
  onOpenAlerts,
  onNavigate
}) => {
  const [activeTab, setActiveTab] = useState<'frases' | 'situaciones' | 'escuela' | 'consulta' | 'faq'>('frases');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const phrasesComparison = [
    {
      avoid: '«¡Qué flaca/o estás, qué bien te ves!»',
      whyAvoid: 'Enseña que el valor, la aceptación y el cariño están condicionados a bajar de peso, reforzando la obsesión con la balanza.',
      prefer: '«¡Qué alegría verte sonreír hoy, me encanta compartir la tarde con vos!»',
      whyPrefer: 'Valora la presencia afectiva, el vínculo y los sentimientos, dejando el cuerpo fuera del juicio.'
    },
    {
      avoid: '«¿Vas a comer todo eso? Te vas a poner rellenita/o.»',
      whyAvoid: 'Siembra culpa inmediata, vergüenza e inhibe las señales biológicas de hambre y autorregulación alimentaria.',
      prefer: '«Comé tranquilo/a hasta donde sientas que tu cuerpo tiene hambre y está satisfecho.»',
      whyPrefer: 'Promueve la conexión interna con la saciedad sin moralizar las cantidades ni amenazar con el aspecto corporal.'
    },
    {
      avoid: '«Odio mis piernas, mañana empiezo una dieta líquida para desintoxicarme.»',
      whyAvoid: 'Los hijos absorben las conductas de autodesprecio de los adultos de referencia. Normaliza las dietas restrictivas y la insatisfacción corporal.',
      prefer: '«Hoy estoy cansada/o, voy a prepararme una comida rica y descansar.»',
      whyPrefer: 'Modela el autocuidado, el placer del alimento y el respeto hacia el propio cuerpo.'
    },
    {
      avoid: '«Tenés que poner fuerza de voluntad y comer como la gente normal.»',
      whyAvoid: 'Los TCA no son una elección ni un capricho. Tratarlo como "falta de voluntad" genera aislamiento y culpa profunda.',
      prefer: '«Veo que este momento te cuesta mucho dolor. No estás solo/a, quiero entender qué sentís y ayudarte a buscar un profesional.»',
      whyPrefer: 'Reconoce la complejidad de la salud mental y abre el camino al tratamiento médico y psicológico.'
    }
  ];

  const faqs = [
    {
      q: '¿Cómo reconozco señales de alerta sin convertirme en un vigilante de mi hijo/a?',
      a: 'La clave está en observar el bienestar general y el clima anímico, no en medir milímetros ni fiscalizar el plato con lupa. Notá si abandona salidas con amigos, si se aísla sistemáticamente a la hora de comer con excusas repetidas, o si muestra una angustia desmedida al vestirse. Acercate siempre desde el afecto: "Te noto triste o más distante, y me importás mucho", nunca desde el interrogatorio policial.'
    },
    {
      q: '¿Qué hago si parientes o abuelos hacen comentarios sobre el cuerpo de mi hijo/a en reuniones familiares?',
      a: 'Poné un límite claro y amoroso en el momento: "En nuestra casa no opinamos sobre el cuerpo de nadie ni felicitamos por adelgazar o engordar". Si es necesario, hablá con esos familiares en privado antes de los encuentros para pedirles expresamente que dejen los temas de dietas, peso o apariencia fuera de la conversación con los chicos.'
    },
    {
      q: '¿Cómo coordino con la escuela si sospecho que mi hijo/a la está pasando mal?',
      a: 'Pedí una reunión reservada con el Equipo de Orientación Escolar (EOE/DOAITE) o tutor de curso. Planteá tu preocupación por su bienestar emocional y solicitá que los docentes cuiden el clima en los recreos y en Educación Física, asegurando que no se realicen mediciones de peso públicas ni comentarios estigmatizantes.'
    },
    {
      q: '¿A qué tipo de profesional debemos acudir en una primera consulta?',
      a: 'El primer paso ideal es el pediatra de cabecera o médico generalista de confianza, junto con un psicólogo/a infanto-juvenil con experiencia en trastornos alimentarios y salud mental. En el sistema público argentino podés consultar en hospitales pediátricos como el Gutiérrez, Garrahan, Elizalde o los centros de salud mental de tu provincia.'
    }
  ];

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FF6B4A] via-[#FF80C5] to-[#2B2FC7] rounded-[2.5rem] p-6 md:p-10 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl text-center md:text-left">
          <span className="px-3 py-1 rounded-full bg-white/25 text-white font-black text-xs uppercase tracking-wide inline-block">
            Espacio Exclusivo para Familias
          </span>
          <h1 className="text-3xl md:text-4xl font-black leading-tight">
            Acompañar con Amor, Escucha y Sin Juicios
          </h1>
          <p className="text-xs md:text-sm text-white/95 leading-relaxed font-medium">
            Respuestas prácticas, frases cotidianas y orientaciones para madres, padres y cuidadores en Argentina. Porque el hogar puede ser el refugio más seguro.
          </p>
        </div>
        <div className="shrink-0 bg-white/20 p-4 rounded-3xl backdrop-blur-sm">
          <MunamigoAvatar id="pompon" size="lg" />
          <p className="text-center text-[11px] font-bold text-white mt-1">
            Pompón te abraza y acompaña
          </p>
        </div>
      </div>

      {/* Featured Empathy Box: "No necesitás tener todas las respuestas para acompañar" */}
      <section className="bg-white rounded-[2.5rem] p-6 md:p-8 border-3 border-[#FF6B4A]/30 shadow-sm flex flex-col lg:flex-row items-center gap-6">
        <div className="shrink-0">
          <MunamigoAvatar id="blu" size="xl" />
        </div>
        <div className="space-y-3 flex-1 text-center lg:text-left">
          <span className="text-xs font-black px-3 py-1 rounded-full bg-[#8AA1FF]/20 text-[#2B2FC7] uppercase tracking-wider">
            Mensaje del corazón de MUNA
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-[#0B1440]">
            No necesitás tener todas las respuestas para acompañar
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Como mamás, papás o tutores, a veces sentimos una culpa inmensa o nos desesperamos por resolver todo ya. La ciencia confirma que <strong className="text-[#0B1440]">las familias no son culpables de los TCA</strong>. No tenés que ser psicólogo/a ni saber el manual perfecto: tu mayor regalo es sentarte al lado de tu hijo/a, abrazarlo/a y decirle: <em>«No sé exactamente cómo se soluciona esto, pero no estás solo/a y vamos a buscar la ayuda adecuada juntos»</em>.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 justify-center lg:justify-start">
            <button
              onClick={() => onOpenResource('guia-familias-conversaciones')}
              className="px-4 py-2 rounded-full bg-[#FF6B4A] hover:bg-[#e65a39] text-white text-xs font-bold transition shadow"
            >
              Descargar Guía Imprimible para la Mesa
            </button>
            <button
              onClick={onOpenAlerts}
              className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0B1440] text-xs font-bold transition"
            >
              ¿Necesitás orientación inmediata?
            </button>
          </div>
        </div>
      </section>

      {/* Subnavigation Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setActiveTab('frases')}
          className={`px-4 py-2 rounded-full text-xs font-black whitespace-nowrap transition cursor-pointer ${
            activeTab === 'frases'
              ? 'bg-[#2B2FC7] text-white shadow-sm'
              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
          }`}
        >
          💬 Frases que ayudan vs. a evitar
        </button>
        <button
          onClick={() => setActiveTab('situaciones')}
          className={`px-4 py-2 rounded-full text-xs font-black whitespace-nowrap transition cursor-pointer ${
            activeTab === 'situaciones'
              ? 'bg-[#2B2FC7] text-white shadow-sm'
              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
          }`}
        >
          🎭 Situaciones reales en el hogar
        </button>
        <button
          onClick={() => setActiveTab('escuela')}
          className={`px-4 py-2 rounded-full text-xs font-black whitespace-nowrap transition cursor-pointer ${
            activeTab === 'escuela'
              ? 'bg-[#2B2FC7] text-white shadow-sm'
              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
          }`}
        >
          🎒 Cómo hablar con la escuela
        </button>
        <button
          onClick={() => setActiveTab('consulta')}
          className={`px-4 py-2 rounded-full text-xs font-black whitespace-nowrap transition cursor-pointer ${
            activeTab === 'consulta'
              ? 'bg-[#2B2FC7] text-white shadow-sm'
              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
          }`}
        >
          🩺 Preparar la consulta médica
        </button>
        <button
          onClick={() => setActiveTab('faq')}
          className={`px-4 py-2 rounded-full text-xs font-black whitespace-nowrap transition cursor-pointer ${
            activeTab === 'faq'
              ? 'bg-[#2B2FC7] text-white shadow-sm'
              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
          }`}
        >
          ❓ Preguntas Frecuentes
        </button>
      </div>

      {/* Tab 1: Frases Comparativas */}
      {activeTab === 'frases' && (
        <div className="space-y-4">
          <div className="bg-[#FFFBEB] p-4 rounded-2xl border border-amber-200 text-xs sm:text-sm text-slate-700 font-medium">
            💡 Las palabras que escuchamos en la infancia y adolescencia construyen el diálogo interno con el que nos hablaremos de adultos. Cambiar pequeñas expresiones cotidianas crea un escudo protector.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {phrasesComparison.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-sm space-y-4">
                {/* A Evitar */}
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-1">
                  <div className="flex items-center gap-2 text-rose-700 font-black text-xs uppercase tracking-wide">
                    <XIcon className="w-4 h-4" />
                    <span>Conviene evitar decir:</span>
                  </div>
                  <p className="text-sm font-bold text-rose-950 italic">
                    {item.avoid}
                  </p>
                  <p className="text-xs text-rose-800 pt-1">
                    <strong>Por qué:</strong> {item.whyAvoid}
                  </p>
                </div>

                {/* A Preferir */}
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                  <div className="flex items-center gap-2 text-emerald-700 font-black text-xs uppercase tracking-wide">
                    <Check className="w-4 h-4" />
                    <span>Respuesta empática que suma:</span>
                  </div>
                  <p className="text-sm font-bold text-emerald-950 italic">
                    {item.prefer}
                  </p>
                  <p className="text-xs text-emerald-800 pt-1">
                    <strong>Impacto positivo:</strong> {item.whyPrefer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Situaciones Reales */}
      {activeTab === 'situaciones' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xl md:text-2xl font-black text-[#0B1440]">
              Ejemplo práctico: Un adolescente expresa odio hacia su cuerpo
            </h3>

            <div className="p-4 rounded-2xl bg-[#FFFBEB] border-l-4 border-[#FF6B4A] text-sm">
              <strong className="text-[#0B1440] block mb-1">Situación cotidiana:</strong>
              Tu hijo/a adolescente sale del probador de ropa llorando y dice: <em>«Odio mi cuerpo, nada me entra, soy un desastre»</em>.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-2">
                <span className="font-bold text-rose-800 uppercase tracking-wide block">
                  Reacción instintiva habitual:
                </span>
                <p className="italic text-rose-950 font-semibold">
                  «¡Pero si no estás gordo/a, estás loco/a! Mirá qué lindo pantalón, no seas exagerado/a que nos tenemos que ir.»
                </p>
                <p className="text-slate-600">
                  <strong>Por qué no ayuda:</strong> Niega lo que la persona siente. Para el adolescente, el sufrimiento es real; decirle que "no es nada" lo hace sentir incomprendido y solo con su angustia.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                <span className="font-bold text-emerald-800 uppercase tracking-wide block">
                  Respuesta sugerida por MUNA:
                </span>
                <p className="italic text-emerald-950 font-semibold">
                  «Lamento tanto que te estés sintiendo así de angustiado/a. Quiero escucharte y entender qué te está pasando. No tenés que resolverlo a solas ni hoy mismo.»
                </p>
                <p className="text-slate-600">
                  <strong>Por qué es más útil:</strong> Pone el foco en el dolor afectivo y no en discutir sobre la ropa o el talle. Abre la puerta a la confianza sin forzar una solución mágica.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#2B2FC7]/10 border border-[#2B2FC7]/20 flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs font-bold text-[#2B2FC7]">
                ¿Querés practicar más escenarios interactivos con feedback paso a paso?
              </span>
              <button
                onClick={() => onNavigate('activities')}
                className="px-4 py-2 rounded-full bg-[#2B2FC7] text-white font-bold text-xs hover:bg-[#1e218a] transition shadow"
              >
                Ir al Simulador de Conversaciones
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Cómo hablar con la escuela */}
      {activeTab === 'escuela' && (
        <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#2B2FC7]/10 rounded-2xl text-[#2B2FC7]">
              <School className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-black text-[#0B1440]">
                Diálogo Constructivo entre Familia y Escuela
              </h3>
              <p className="text-xs text-slate-600">
                Pautas para articular con el equipo directivo y docente sin estigmatizar al alumno.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-[#0B1440] block">1. Solicitar reunión privada</span>
              <p className="text-slate-600">
                Pedir entrevista con el Equipo de Orientación Escolar (EOE/gabinete) o preceptor de confianza en un espacio reservado para cuidar la intimidad (Ley 26.061).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-[#0B1440] block">2. Compartir preocupaciones</span>
              <p className="text-slate-600">
                Describir cambios observados en el ánimo, aislamiento en recreos o sensibilidad con la comida, sin exigir que la escuela asuma un rol médico.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-[#0B1440] block">3. Acuerdos de cuidado</span>
              <p className="text-slate-600">
                Pedir expresamente que no se hagan mediciones públicas de peso ni comentarios sobre el cuerpo del alumno en Educación Física ni en el aula.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Consulta Médica */}
      {activeTab === 'consulta' && (
        <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-100 rounded-2xl text-emerald-700">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-black text-[#0B1440]">
                Cómo Prepararse para la Consulta Profesional
              </h3>
              <p className="text-xs text-slate-600">
                Llegar a la entrevista médica o psicológica con claridad y resguardando los derechos del paciente (Ley 26.529).
              </p>
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              • <strong>Anotá conductas concretas:</strong> Anotar fechas aproximadas en las que notaste cambios persistentes en la energía, el sueño, la relación con las comidas o la vida social.
            </p>
            <p>
              • <strong>Pedir una consulta previa a solas con el profesional:</strong> Como adulto/a podés pedir unos minutos iniciales a solas con el médico o terapeuta para plantear tus sospechas sin que tu hijo/a se sienta expuesto/a o juzgado/a.
            </p>
            <p>
              • <strong>Exigir trato digno y sin pesocentrismo:</strong> Tenés derecho a solicitar que el pesaje se realice de espaldas a la balanza si esto genera pánico o angustia, y que el profesional enfoque la salud desde una perspectiva integral y no solo desde los kilos.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('directory')}
              className="px-4 py-2.5 rounded-full bg-[#2B2FC7] hover:bg-[#1f2294] text-white font-bold text-xs transition shadow flex items-center gap-2"
            >
              <span>Ver Hospitales y Centros Públicos Especializados en Argentina</span>
            </button>
          </div>
        </div>
      )}

      {/* Tab 5: FAQs */}
      {activeTab === 'faq' && (
        <div className="space-y-3">
          {faqs.map((f, fIdx) => (
            <div
              key={fIdx}
              className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden shadow-sm transition"
            >
              <button
                onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm md:text-base text-[#0B1440] hover:bg-slate-50 transition cursor-pointer"
              >
                <span>{f.q}</span>
                {openFaq === fIdx ? (
                  <ChevronUp className="w-5 h-5 text-[#2B2FC7] shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              {openFaq === fIdx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed bg-[#FFFBEB]/40">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
