import React from 'react';
import { MunamigoAvatar } from '../components/MunamigoAvatar';
import {
  ShieldCheck,
  Lock,
  BookOpen,
  Heart,
  Scale,
  Users,
  AlertTriangle,
  Award,
  Sparkles
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

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0B1440] via-[#2B2FC7] to-[#0B1440] rounded-[2.5rem] p-6 md:p-10 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl text-center md:text-left">
          <span className="px-3 py-1 rounded-full bg-[#B4F000] text-[#0B1440] font-black text-xs uppercase tracking-wide inline-block">
            Proyecto Educativo MUNA
          </span>
          <h1 className="text-3xl md:text-4xl font-black leading-tight">
            Sobre Nosotros, Rigor Científico y Privacidad
          </h1>
          <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-medium">
            Una plataforma construida por un equipo interdisciplinario para cuidar la salud emocional, corporal y vincular de las infancias y juventudes de Argentina.
          </p>
        </div>
        <div className="shrink-0 flex items-center -space-x-3 bg-white/10 p-4 rounded-3xl border border-white/20">
          <MunamigoAvatar id="pompon" size="sm" />
          <MunamigoAvatar id="lumi" size="sm" />
          <MunamigoAvatar id="mora" size="sm" />
        </div>
      </div>

      {/* Interdisciplinary Team Presentation */}
      <section className="bg-white rounded-[2.5rem] p-6 md:p-8 border-2 border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#2B2FC7]">
          <Users className="w-4 h-4" />
          <span>Equipo Interdisciplinario Responsable</span>
        </div>
        <h2 className="text-xl md:text-2xl font-black text-[#0B1440]">
          Ciencia, Pedagogía y Diseño Inclusivo
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          MUNA nace de la articulación directa entre profesionales de la salud mental y la pediatría con trayectoria en TCA, especialistas en educación y ESI para los distintos ciclos evolutivos, y diseñadores UX/UI enfocados en accesibilidad digital.
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

      {/* Sources & Scientific Backing */}
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

      {/* Privacy Constitution & Minor Protection */}
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

      {/* Explicit Disclaimer */}
      <section className="bg-amber-50 border-2 border-amber-300 rounded-[2.5rem] p-6 md:p-8 space-y-2 text-[#0B1440]">
        <div className="flex items-center gap-2 font-black text-sm text-amber-900">
          <AlertTriangle className="w-5 h-5 text-amber-700" />
          <span>Descargo de Responsabilidad Sanitaria (Ley 26.529 de Derechos del Paciente)</span>
        </div>
        <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
          MUNA es una plataforma digital de educación, concientización y prevención comunitaria. <strong>No es un servicio médico ni psicológico, no emite diagnósticos clínicos ni prescribe planes nutricionales o farmacológicos</strong>. Si vos o alguien de tu familia o escuela atraviesa un momento difícil con la alimentación o su cuerpo, recurrí a profesionales de la salud matriculados o a los centros hospitalarios públicos de referencia en Argentina.
        </p>
      </section>
    </div>
  );
};
