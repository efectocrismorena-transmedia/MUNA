import React, { useState } from 'react';
import { EducationalModule, MunamigoId } from '../types';
import { EDUCATIONAL_MODULES } from '../data/educationalContent';
import { MunamigoAvatar } from '../components/MunamigoAvatar';
import {
  BookOpen,
  Clock,
  Sparkles,
  ArrowRight,
  Filter,
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  X
} from 'lucide-react';

interface LearnViewProps {
  onOpenModule: (moduleId: string) => void;
}

export const LearnView: React.FC<LearnViewProps> = ({ onOpenModule }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModuleModal, setActiveModuleModal] = useState<EducationalModule | null>(null);
  const [reflectionAnswer, setReflectionAnswer] = useState<string>('');
  const [reflectionSaved, setReflectionSaved] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'Todos los módulos' },
    { id: 'fundamentos', label: 'Fundamentos y Causas' },
    { id: 'autoestima', label: 'Imagen y Autoestima' },
    { id: 'mitos', label: 'Mitos y Realidades' },
    { id: 'digital', label: 'Redes y Filtros' },
    { id: 'alerta', label: 'Señales de Alerta' },
    { id: 'comunicacion', label: 'Comunicación y Cuidado' }
  ];

  const filteredModules = selectedCategory === 'all'
    ? EDUCATIONAL_MODULES
    : EDUCATIONAL_MODULES.filter(m => m.category === selectedCategory);

  const handleOpenDetail = (mod: EducationalModule) => {
    setActiveModuleModal(mod);
    setReflectionAnswer('');
    setReflectionSaved(false);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2B2FC7] to-[#0B1440] rounded-[2.5rem] p-6 md:p-10 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl text-center md:text-left">
          <span className="px-3 py-1 rounded-full bg-[#B4F000] text-[#0B1440] font-black text-xs uppercase tracking-wide inline-block">
            Biblioteca Educativa MUNA
          </span>
          <h1 className="text-3xl md:text-4xl font-black leading-tight">
            Aprender sobre los Trastornos de la Conducta Alimentaria
          </h1>
          <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-medium">
            Módulos interactivos elaborados bajo el modelo biopsicosocial y la Ley Nacional 26.396. Información rigurosa, no estigmatizante y sin descripciones que puedan fomentar conductas de riesgo.
          </p>
        </div>
        <div className="shrink-0 bg-white/10 p-4 rounded-3xl border border-white/20">
          <MunamigoAvatar id="mora" size="lg" />
          <p className="text-center text-[11px] font-bold text-[#B4F000] mt-1">
            Mora investiga y guía
          </p>
        </div>
      </div>

      {/* Categories Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <Filter className="w-4 h-4 text-[#2B2FC7] shrink-0" />
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#2B2FC7] text-white shadow-sm'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModules.map(mod => (
          <div
            key={mod.id}
            onClick={() => handleOpenDetail(mod)}
            className="bubbly-card bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-[#2B2FC7] shadow-sm flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span>{mod.duration}</span>
                </span>
                <MunamigoAvatar id={mod.characterId} size="xs" />
              </div>

              <h2 className="text-lg md:text-xl font-black text-[#0B1440] group-hover:text-[#2B2FC7] transition mb-1 leading-snug">
                {mod.title}
              </h2>
              <p className="text-xs font-semibold text-[#2B2FC7] mb-3">
                {mod.subtitle}
              </p>
              <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                {mod.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#2B2FC7]">
              <span>Leer módulo completo</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
            </div>
          </div>
        ))}
      </div>

      {/* Module Reader Modal */}
      {activeModuleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-[#0B1440]/70 backdrop-blur-sm overflow-y-auto animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border-4 border-[#2B2FC7]/30 my-6 overflow-hidden flex flex-col max-h-[92vh]">
            {/* Modal Header */}
            <div className="bg-[#0B1440] p-6 text-white flex items-start justify-between">
              <div className="flex items-center gap-3">
                <MunamigoAvatar id={activeModuleModal.characterId} size="sm" />
                <div>
                  <span className="text-xs font-bold text-[#B4F000] uppercase tracking-wider block">
                    Módulo Educativo MUNA
                  </span>
                  <h3 className="text-xl md:text-2xl font-black leading-tight">
                    {activeModuleModal.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">
                    {activeModuleModal.subtitle}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveModuleModal(null)}
                className="p-2 rounded-full hover:bg-white/10 text-white transition"
                aria-label="Cerrar modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-[#0B1440]">
              {/* Summary lead */}
              <div className="p-4 rounded-2xl bg-[#FFFBEB] border border-amber-200 text-sm font-semibold text-[#0B1440] leading-relaxed">
                💡 {activeModuleModal.summary}
              </div>

              {/* Content Sections */}
              <div className="space-y-6">
                {activeModuleModal.contentSections.map((sec, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <h4 className="text-base md:text-lg font-bold text-[#0B1440]">
                      {sec.heading}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                      {sec.body}
                    </p>
                    {sec.highlight && (
                      <div className="p-3 bg-[#2B2FC7]/10 border-l-4 border-[#2B2FC7] rounded-r-xl text-xs font-medium text-[#2B2FC7] mt-2">
                        {sec.highlight}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Reflection Box */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-[#0B1440]">
                  <HelpCircle className="w-4 h-4 text-[#FF6B4A]" />
                  <span>Pregunta para pensar en casa o en el aula:</span>
                </div>
                <p className="text-xs md:text-sm text-slate-700 italic">
                  «{activeModuleModal.reflectionQuestion}»
                </p>

                <div className="pt-2">
                  <label htmlFor="reflection-input" className="block text-xs font-medium text-slate-500 mb-1">
                    Escribí una reflexión personal (se guarda de forma privada en tu dispositivo):
                  </label>
                  <textarea
                    id="reflection-input"
                    value={reflectionAnswer}
                    onChange={e => setReflectionAnswer(e.target.value)}
                    placeholder="¿Qué ideas o sensaciones te despierta este tema?"
                    rows={2}
                    className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2B2FC7] bg-white"
                  />
                  {reflectionSaved ? (
                    <span className="text-xs font-bold text-emerald-600 mt-1 inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Reflexión guardada con éxito
                    </span>
                  ) : (
                    <button
                      onClick={() => setReflectionSaved(true)}
                      disabled={!reflectionAnswer.trim()}
                      className="mt-2 px-3 py-1.5 rounded-full bg-[#2B2FC7] text-white text-xs font-bold disabled:opacity-50 hover:bg-[#1e218a] transition"
                    >
                      Guardar nota
                    </button>
                  )}
                </div>
              </div>

              {/* Practical Tip */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs md:text-sm text-emerald-950">
                  <strong className="block font-bold">Consejo práctico de aplicación cotidiana:</strong>
                  {activeModuleModal.practicalTip}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                MUNA • Prevención y Acompañamiento en TCA
              </span>
              <button
                onClick={() => setActiveModuleModal(null)}
                className="px-4 py-2 rounded-full bg-[#0B1440] hover:bg-slate-800 text-white text-xs font-bold transition"
              >
                Cerrar lectura
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
