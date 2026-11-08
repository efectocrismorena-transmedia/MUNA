import React from 'react';
import { MunamigoAvatar } from '../components/MunamigoAvatar';
import {
  Lock,
  BookOpen,
  Heart,
  Users,
  AlertTriangle,
  Sparkles,
  GraduationCap,
  Lightbulb,
  Layers,
  MessageCircle,
  Compass,
  CheckCircle2,
  Info
} from 'lucide-react';

export const AboutView: React.FC = () => {
  const sources = [
    {
      entity: 'Sociedad Argentina de Pediatría (SAP)',
      scope: 'Comité de Adolescencia y Nutrición Infanto-Juvenil',
      topics: 'Guías de detección temprana de trastornos de la conducta alimentaria en pediatría.'
    },
    {
      entity: 'Ministerio de Salud de la Nación Argentina',
      scope: 'Dirección Nacional de Salud Mental y Adicciones',
      topics: 'Lineamientos de atención integral y comunitaria para los TCA y marco de la Ley 26.657.'
    },
    {
      entity: 'Ministerio de Capital Humano / Educación de la Nación',
      scope: 'Programa Nacional de Educación Sexual Integral (ESI)',
      topics: 'Resolución CFE 340/18 y Núcleos de Aprendizajes Prioritarios por nivel escolar.'
    },
    {
      entity: 'Organización Mundial de la Salud (OMS) & UNICEF',
      scope: 'Área de Salud del Adolescente y Alfabetización Digital',
      topics: 'Recomendaciones sobre bienestar psicosocial, imagen corporal y uso de tecnologías.'
    }
  ];

  const munamigosTeam = [
    { id: 'pompon' as const, name: 'Pompón' },
    { id: 'lumi' as const, name: 'Lumi' },
    { id: 'mora' as const, name: 'Mora' },
    { id: 'cora' as const, name: 'Cora' },
    { id: 'titi' as const, name: 'Titi' },
    { id: 'blu' as const, name: 'Blu' }
  ];

  return (
    <div className="space-y-12 pb-20">
      {/* 1. Encabezado principal de Sobre MUNA */}
      <div className="bg-gradient-to-r from-[#0B1440] via-[#2B2FC7] to-[#0B1440] rounded-[2.5rem] p-6 md:p-10 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="px-3 py-1 rounded-full bg-[#B4F000] text-[#0B1440] font-black text-xs uppercase tracking-wide inline-block">
              Proyecto Educativo MUNA
            </span>
            <span className="px-3 py-1 rounded-full bg-white/20 text-white font-bold text-xs inline-flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              Origen Universitario • UBA
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black leading-tight">
            Sobre Nosotros, Rigor Científico y Privacidad
          </h1>
          <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-medium">
            Una plataforma educativa y de concientización desarrollada en el ámbito universitario para cuidar la salud emocional, corporal y vincular de las infancias y juventudes de Argentina.
          </p>
        </div>
        <div className="shrink-0 flex items-center -space-x-3 bg-white/10 p-4 rounded-3xl border border-white/20">
          <MunamigoAvatar id="pompon" size="sm" />
          <MunamigoAvatar id="lumi" size="sm" />
          <MunamigoAvatar id="mora" size="sm" />
        </div>
      </div>

      {/* 2. El origen de MUNA */}
      <section className="bg-white rounded-[2.5rem] p-6 md:p-10 border-2 border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#2B2FC7]">
          <Sparkles className="w-4 h-4" />
          <span>El Origen de MUNA</span>
        </div>
        
        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl md:text-3xl font-black text-[#0B1440]">
            MUNA nació de una idea compartida
          </h2>
          <p className="text-sm md:text-base font-bold text-[#2B2FC7]">
            Un proyecto universitario que busca transformar la comunicación en una herramienta de concientización.
          </p>
        </div>

        <div className="bg-[#FFFBEB] p-6 md:p-8 rounded-3xl border-2 border-amber-200/80 space-y-4 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
          <p>
            MUNA es un proyecto educativo y de concientización desarrollado por estudiantes de la <strong>Licenciatura en Ciencias de la Comunicación Social de la Universidad de Buenos Aires (UBA)</strong>, en el marco de la materia <strong>Taller Transmedia</strong>.
          </p>
          <p>
            El proyecto nació cuando, como estudiantes de Comunicación, identificamos la necesidad de abordar una problemática social compleja: los trastornos de la conducta alimentaria (TCA) y los mensajes que influyen en nuestra relación con el cuerpo, la alimentación y la imagen personal.
          </p>
          <p>
            Nos preguntamos cómo podíamos utilizar las herramientas de la comunicación, la creatividad y las nuevas tecnologías para aportar una mirada diferente.
          </p>
          <p className="text-[#0B1440] font-bold text-sm sm:text-base bg-white/80 p-4 rounded-2xl border border-amber-200">
            Así surgió MUNA: una propuesta que busca acercar información, promover el pensamiento crítico y generar espacios educativos más empáticos y respetuosos.
          </p>
        </div>
      </section>

      {/* 3. Detrás de MUNA hay personas */}
      <section className="bg-gradient-to-br from-[#FFFBEB] via-white to-pink-50/40 rounded-[2.5rem] p-6 md:p-10 border-2 border-slate-200 shadow-sm space-y-8">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF6B4A]">
          <Users className="w-4 h-4" />
          <span>Dimensión Humana y Colectiva</span>
        </div>

        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl md:text-3xl font-black text-[#0B1440]">
            Detrás de MUNA hay personas, ideas y mucho trabajo en equipo
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              Somos estudiantes de Comunicación Social de la UBA y creemos que comunicar también implica asumir una responsabilidad frente a las problemáticas de nuestra sociedad.
            </p>
            <p>
              MUNA es el resultado de un proceso colectivo de investigación, intercambio de ideas, debates, creatividad y diseño.
            </p>
            <p>
              Detrás de cada Munamigo, recurso educativo y experiencia interactiva hay un equipo que se hizo preguntas, buscó información y trabajó para convertir una inquietud en una propuesta concreta.
            </p>
            <div className="p-4 rounded-2xl bg-white border-2 border-slate-200 text-[#0B1440] font-medium">
              <strong className="text-[#2B2FC7] block mb-1">Aclaración sobre nuestro rol:</strong>
              No somos un equipo clínico ni pretendemos reemplazar el trabajo de profesionales de la salud. Nuestro aporte nace desde la comunicación: buscamos crear herramientas que ayuden a informar, reflexionar y abrir conversaciones necesarias.
            </div>
          </div>

          {/* Munamigos Showcase Row */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border-2 border-slate-200 shadow-sm flex flex-col items-center text-center space-y-4">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#2B2FC7]">
              Los 6 Munamigos del Proyecto
            </span>
            <div className="grid grid-cols-3 gap-3 w-full">
              {munamigosTeam.map(friend => (
                <div
                  key={friend.id}
                  className="group p-3 rounded-2xl bg-[#FFFBEB] border border-amber-200/80 flex flex-col items-center justify-center transition-all hover:scale-105 hover:border-amber-300 hover:shadow-sm cursor-pointer select-none"
                >
                  <MunamigoAvatar id={friend.id} size="sm" />
                  <span className="text-xs font-black text-[#0B1440] mt-1.5 transition-colors group-hover:text-[#2B2FC7]">{friend.name}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              Ilustraciones 2D creadas para acompañar cada área pedagógica y emocional.
            </p>
          </div>
        </div>
      </section>

      {/* 4. ¿Por qué creamos MUNA? */}
      <section className="bg-white rounded-[2.5rem] p-6 md:p-10 border-2 border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF6B4A]">
          <Heart className="w-4 h-4" />
          <span>La Motivación Inicial</span>
        </div>

        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl md:text-3xl font-black text-[#0B1440]">
            Una problemática que nos movilizó
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="space-y-4">
            <p>
              Vivimos rodeados de mensajes sobre cómo deberíamos vernos, qué cuerpos son aceptados y qué ideales de belleza debemos alcanzar.
            </p>
            <p>
              Estos discursos circulan en redes sociales, medios de comunicación y conversaciones cotidianas, y pueden influir en la manera en que las personas construyen su autoestima y su imagen corporal.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              Como estudiantes de Comunicación, entendimos que era importante cuestionar esos mensajes y pensar nuevas formas de comunicar.
            </p>
            <p>
              Por eso decidimos crear MUNA, un espacio educativo que utiliza recursos interactivos, personajes y experiencias digitales para abordar la prevención y la concientización sobre los TCA desde una perspectiva respetuosa y accesible.
            </p>
          </div>
        </div>

        <div className="bg-[#2B2FC7]/5 border-2 border-[#2B2FC7]/20 p-5 rounded-2xl">
          <p className="text-xs sm:text-sm font-bold text-[#2B2FC7] text-center md:text-left">
            «Nuestro propósito es contribuir a que más personas cuenten con herramientas para reflexionar, acompañar y construir entornos de mayor cuidado.»
          </p>
        </div>
      </section>

      {/* 5. Nuestro enfoque transmedia */}
      <section className="bg-white rounded-[2.5rem] p-6 md:p-10 border-2 border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#2B2FC7]">
          <Layers className="w-4 h-4" />
          <span>Perspectiva Pedagógica y Comunicacional</span>
        </div>

        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl md:text-3xl font-black text-[#0B1440]">
            Una idea, muchas formas de comunicar
          </h2>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            MUNA fue desarrollado en el marco de <strong>Taller Transmedia</strong>, una materia de la Licenciatura en Ciencias de la Comunicación Social de la UBA.
          </p>
          <p>
            Desde una mirada transmedia, buscamos construir un universo educativo que pueda expandirse a través de diferentes formatos, recursos, personajes y experiencias.
          </p>
          <p>
            Los Munamigos, las actividades interactivas y los materiales educativos forman parte de una misma identidad comunicacional.
          </p>
          <div className="p-4 rounded-2xl bg-[#FFFBEB] border border-amber-200 font-semibold text-[#0B1440]">
            Cada elemento tiene un propósito: acercar contenidos importantes de manera clara, creativa, participativa y adecuada a diferentes edades.
          </div>
        </div>
      </section>

      {/* 6. Lo que nos mueve */}
      <section className="bg-white rounded-[2.5rem] p-6 md:p-10 border-2 border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF6B4A]">
          <Compass className="w-4 h-4" />
          <span>Nuestros Principios</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#0B1440]">
          Lo que nos mueve
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Tarjeta 1 */}
          <div className="p-6 rounded-3xl bg-[#EEF3FF] border-2 border-[#2458F5]/30 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#2458F5] text-white flex items-center justify-center shadow-sm">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#0B1440]">
                Comunicar para concientizar
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Creemos en el poder de la comunicación para cuestionar estereotipos, compartir información responsable y generar conversaciones necesarias.
              </p>
            </div>
            <span className="text-[11px] font-black text-[#2458F5] uppercase tracking-wide">
              Voz responsable
            </span>
          </div>

          {/* Tarjeta 2 */}
          <div className="p-6 rounded-3xl bg-[#FFF0F7] border-2 border-[#FF3E96]/30 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FF3E96] text-white flex items-center justify-center shadow-sm">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#0B1440]">
                Crear desde la empatía
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Buscamos desarrollar experiencias educativas que respeten las diferencias, acompañen las emociones y promuevan el cuidado colectivo.
              </p>
            </div>
            <span className="text-[11px] font-black text-[#FF3E96] uppercase tracking-wide">
              Cuidado colectivo
            </span>
          </div>

          {/* Tarjeta 3 */}
          <div className="p-6 rounded-3xl bg-[#F3FEE7] border-2 border-[#7FD800]/40 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#5BA800] text-white flex items-center justify-center shadow-sm">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#0B1440]">
                Transformar ideas en acciones
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                MUNA representa nuestra decisión de convertir una problemática identificada en una propuesta de comunicación educativa con propósito social.
              </p>
            </div>
            <span className="text-[11px] font-black text-[#5BA800] uppercase tracking-wide">
              Compromiso social
            </span>
          </div>
        </div>
      </section>

      {/* 7. Ciencia, Pedagogía y Diseño Inclusivo (Sección existente reformulada con rigor) */}
      <section className="bg-white rounded-[2.5rem] p-6 md:p-8 border-2 border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#2B2FC7]">
          <BookOpen className="w-4 h-4" />
          <span>Fundamentos Disciplinares y Pedagógicos</span>
        </div>
        <h2 className="text-xl md:text-2xl font-black text-[#0B1440]">
          Ciencia, Pedagogía y Diseño Inclusivo
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          Como estudiantes de Comunicación Social, desarrollamos MUNA tomando rigurosamente como referencia los conocimientos, marcos conceptuales y lineamientos de estas disciplinas esenciales para abordar la temática de manera responsable:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-1">
            <span className="font-bold text-[#0B1440] block">Pediatría y Salud Mental</span>
            <p className="text-slate-600">Enfoque no pesocentrista, detección temprana prudente y desestigmatización.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-1">
            <span className="font-bold text-[#0B1440] block">Especialistas en ESI</span>
            <p className="text-slate-600">Adecuación curricular a la Res. CFE 340/18 en Inicial, Primaria y Secundaria.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-1">
            <span className="font-bold text-[#0B1440] block">Educación Argentina</span>
            <p className="text-slate-600">Articulación con Equipos de Orientación Escolar (EOE/DOAITE) y normativa local.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-1">
            <span className="font-bold text-[#0B1440] block">Diseño Inclusivo</span>
            <p className="text-slate-600">Accesibilidad universal, lectura clara y lenguaje cálido con los Munamigos.</p>
          </div>
        </div>
      </section>

      {/* 8. Fuentes y Evidencia Científica (Sección existente conservada completa) */}
      <section className="bg-white rounded-[2.5rem] p-6 md:p-8 border-2 border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF6B4A]">
          <BookOpen className="w-4 h-4" />
          <span>Fuentes y Evidencia Científica</span>
        </div>
        <h2 className="text-xl md:text-2xl font-black text-[#0B1440]">
          Rigor Sanitario sin Citas Inventadas
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          Todos los conceptos desarrollados en la web app se basan en publicaciones y documentos oficiales de organismos de salud y educación reconocidos:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {sources.map((s, idx) => (
            <div key={idx} className="p-4 bg-[#FFFBEB] rounded-2xl border border-amber-200 space-y-1 text-xs">
              <span className="font-bold text-[#0B1440] text-sm block">{s.entity}</span>
              <p className="font-semibold text-[#2B2FC7]">{s.scope}</p>
              <p className="text-slate-600">{s.topics}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Privacidad desde el Diseño (Sección existente conservada completa) */}
      <section className="bg-white rounded-[2.5rem] p-6 md:p-8 border-2 border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-700">
          <Lock className="w-4 h-4" />
          <span>Privacidad desde el Diseño (Ley 25.326 y Ley 26.061)</span>
        </div>
        <h2 className="text-xl md:text-2xl font-black text-[#0B1440]">
          Protección Irrestricta de Menores y Datos Sensibles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm pt-2">
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
            <span className="font-bold text-emerald-950 block">Cero datos corporales</span>
            <p className="text-emerald-900">
              Nunca pedimos peso, talla, fotos ni registros alimentarios. No creamos expedientes de riesgo ni perfiles clínicos de alumnos.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
            <span className="font-bold text-emerald-950 block">Acceso sin registro</span>
            <p className="text-emerald-900">
              Todos los contenidos educativos y recursos descargables se consultan de forma libre, anónima y gratuita sin necesidad de crear cuenta.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
            <span className="font-bold text-emerald-950 block">Sin publicidad invasiva</span>
            <p className="text-emerald-900">
              Cero anuncios comerciales, rastreadores publicitarios ni cookies de terceros que perfilen el comportamiento de niños y adolescentes.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Descargo de Responsabilidad Sanitaria (Sección existente conservada completa) */}
      <section className="bg-amber-50 border-2 border-amber-300 rounded-[2.5rem] p-6 md:p-8 space-y-2 text-[#0B1440]">
        <div className="flex items-center gap-2 font-black text-sm text-amber-900">
          <AlertTriangle className="w-5 h-5 text-amber-700" />
          <span>Descargo de Responsabilidad Sanitaria (Ley 26.529 de Derechos del Paciente)</span>
        </div>
        <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
          MUNA es una plataforma digital de educación, concientización y prevención comunitaria. <strong>No es un servicio médico ni psicológico, no emite diagnósticos clínicos ni prescribe planes nutricionales o farmacológicos</strong>. Si vos o alguien de tu familia o escuela atraviesa un momento difícil con la alimentación o su cuerpo, recurrí a profesionales de la salud matriculados o a los centros hospitalarios públicos de referencia en Argentina.
        </p>
      </section>

      {/* 11. Cierre humano */}
      <section className="bg-gradient-to-br from-[#0B1440] via-[#2B2FC7] to-[#0B1440] text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border-4 border-white/10 space-y-6 text-center">
        <div className="max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B4F000] text-[#0B1440] font-black text-xs uppercase tracking-wide">
            <Heart className="w-3.5 h-3.5 fill-[#0B1440]" />
            Compromiso y Vocación
          </div>
          <h2 className="text-2xl md:text-3xl font-black">
            MUNA es mucho más que una plataforma
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Es una idea que nació de preguntas, creció con el trabajo de un equipo y se convirtió en un proyecto educativo.
          </p>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Somos estudiantes, comunicadores en formación y personas que creen que la comunicación puede ayudar a generar cambios.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20">
          <p className="text-sm md:text-base font-black text-[#B4F000]">
            «Porque detrás de MUNA hay un equipo humano que decidió transformar una preocupación en una propuesta para concientizar, educar y acompañar.»
          </p>
        </div>

        <div className="max-w-2xl mx-auto pt-4 border-t border-white/15 space-y-1.5">
          <p className="text-xs font-semibold text-slate-300 italic">
            Proyecto académico desarrollado por estudiantes de la Licenciatura en Ciencias de la Comunicación Social de la Universidad de Buenos Aires (UBA), para la materia Taller Transmedia.
          </p>
          <p className="text-[11px] text-slate-400">
            Esta mención describe el contexto académico del proyecto y no implica aval institucional oficial de la universidad.
          </p>
        </div>
      </section>
    </div>
  );
};
