import React, { useState } from 'react';
import { EducationalStage, MunamigoId } from '../types';
import { EDUCATIONAL_STAGES_DATA } from '../data/educationalContent';
import { NEW_INTERACTIVE_RESOURCES, InteractiveResourceDef } from '../data/newInteractiveResources';
import { InteractiveResourceModal } from '../components/interactive/InteractiveResourceModal';
import { MunamigoAvatar } from '../components/MunamigoAvatar';
import { Sparkles, BookOpen, Heart, CheckCircle2, ArrowRight, Play, Clock, FileText, Gamepad2 } from 'lucide-react';

interface StagesViewProps {
  onOpenResource: (resourceId: string) => void;
  onNavigate: (view: string) => void;
}

export const StagesView: React.FC<StagesViewProps> = ({
  onOpenResource,
  onNavigate
}) => {
  const [activeStage, setActiveStage] = useState<EducationalStage>('inicial');
  const [activeInteractiveModal, setActiveInteractiveModal] = useState<InteractiveResourceDef | null>(null);

  const currentStageData = EDUCATIONAL_STAGES_DATA[activeStage];
  const stageInteractiveResources = NEW_INTERACTIVE_RESOURCES.filter(r => r.stage === activeStage);

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2B2FC7] via-[#FF6B4A] to-[#FF80C5] rounded-[2.5rem] p-6 md:p-10 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl text-center md:text-left">
          <span className="px-3 py-1 rounded-full bg-white/20 text-white font-black text-xs uppercase tracking-wide inline-block">
            Pedagogía por Etapas Evolutivas
          </span>
          <h1 className="text-3xl md:text-4xl font-black leading-tight">
            Recorridos Adaptados a Cada Momento de la Vida
          </h1>
          <p className="text-xs md:text-sm text-white/95 leading-relaxed font-medium">
            No se previene de la misma manera en la sala de 4 años que en 4to año de la secundaria. Descubrí propuestas y actividades pensadas para cada ciclo.
          </p>
        </div>
        <div className="shrink-0 bg-white/20 p-4 rounded-3xl backdrop-blur-sm">
          <MunamigoAvatar id={currentStageData.leadCharacter as MunamigoId} size="lg" />
          <p className="text-center text-[11px] font-bold text-white mt-1 capitalize">
            {currentStageData.leadCharacter} te guía
          </p>
        </div>
      </div>

      {/* Stage Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          onClick={() => setActiveStage('inicial')}
          className={`p-5 rounded-3xl border-2 transition text-left cursor-pointer flex items-center justify-between ${
            activeStage === 'inicial'
              ? 'bg-[#FF6B4A] text-white border-[#FF6B4A] shadow-md scale-[1.02]'
              : 'bg-white hover:bg-slate-50 text-[#0B1440] border-slate-200'
          }`}
        >
          <div>
            <span className="text-[11px] uppercase tracking-wider font-extrabold opacity-80 block">
              3 a 5 años
            </span>
            <h2 className="text-lg font-black">Nivel Inicial (Jardín)</h2>
          </div>
          <MunamigoAvatar id="pompon" size="xs" />
        </button>

        <button
          onClick={() => setActiveStage('primaria')}
          className={`p-5 rounded-3xl border-2 transition text-left cursor-pointer flex items-center justify-between ${
            activeStage === 'primaria'
              ? 'bg-[#2B2FC7] text-white border-[#2B2FC7] shadow-md scale-[1.02]'
              : 'bg-white hover:bg-slate-50 text-[#0B1440] border-slate-200'
          }`}
        >
          <div>
            <span className="text-[11px] uppercase tracking-wider font-extrabold opacity-80 block">
              6 a 12 años
            </span>
            <h2 className="text-lg font-black">Nivel Primario</h2>
          </div>
          <MunamigoAvatar id="lumi" size="xs" />
        </button>

        <button
          onClick={() => setActiveStage('secundaria')}
          className={`p-5 rounded-3xl border-2 transition text-left cursor-pointer flex items-center justify-between ${
            activeStage === 'secundaria'
              ? 'bg-[#0B1440] text-white border-[#0B1440] shadow-md scale-[1.02]'
              : 'bg-white hover:bg-slate-50 text-[#0B1440] border-slate-200'
          }`}
        >
          <div>
            <span className="text-[11px] uppercase tracking-wider font-extrabold opacity-80 block">
              13 a 18 años
            </span>
            <h2 className="text-lg font-black">Nivel Secundario</h2>
          </div>
          <MunamigoAvatar id="mora" size="xs" />
        </button>
      </div>

      {/* Active Stage Detailed Experience */}
      <div className="bg-white rounded-[2.5rem] p-6 md:p-10 border-2 border-slate-200 shadow-sm space-y-10 animate-fadeIn">
        {/* Objective banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl bg-[#FFFBEB] border-2 border-amber-200">
          <div className="space-y-1">
            <span className="text-xs font-black uppercase text-[#FF6B4A] tracking-wide">
              Objetivo Pedagógico Central
            </span>
            <h3 className="text-xl md:text-2xl font-black text-[#0B1440]">
              {currentStageData.leadTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              {currentStageData.objective}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MunamigoAvatar id={currentStageData.leadCharacter as MunamigoId} size="md" />
            {currentStageData.supportingCharacters.map(cId => (
              <MunamigoAvatar key={cId} id={cId as MunamigoId} size="sm" />
            ))}
          </div>
        </div>

        {/* 3 NUEVOS RECURSOS INTERACTIVOS DE ESTA ETAPA */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#2B2FC7] bg-[#2B2FC7]/10 px-3 py-1 rounded-full">
                3 Actividades Interactivas Originales
              </span>
              <h3 className="text-xl md:text-2xl font-black text-[#0B1440] mt-1.5 flex items-center gap-2">
                <Gamepad2 className="w-6 h-6 text-[#2B2FC7]" />
                <span>Recursos Educativos Digitales ({currentStageData.name})</span>
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Listas para jugar en pantalla, con retroalimentación y sin calificar
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {stageInteractiveResources.map(resource => (
              <div
                key={resource.id}
                className="bubbly-card bg-slate-50 hover:bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-[#2B2FC7] shadow-sm flex flex-col justify-between transition group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <MunamigoAvatar id={resource.leadCharacter} size="sm" />
                      <div>
                        <span className="text-xs font-black text-[#0B1440] capitalize block">
                          Con {resource.leadCharacter}
                        </span>
                        <span className="text-[10px] text-slate-500 font-bold flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{resource.estimatedMinutes} min aprox.</span>
                        </span>
                      </div>
                    </div>
                    <span className={`text-[10px] font-black px-2.5 py-1 rounded-full ${resource.badgeColor}`}>
                      {resource.format}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-black text-[#0B1440] group-hover:text-[#2B2FC7] transition leading-snug">
                      {resource.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {resource.description}
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded-2xl border border-slate-200 space-y-1.5 text-[11px]">
                    <p className="text-[#0B1440] font-bold">
                      🎯 <span className="text-slate-700 font-medium">{resource.objective}</span>
                    </p>
                    <p className="text-slate-600">
                      💡 <strong>Consigna:</strong> {resource.instructions}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/80 space-y-2">
                  <button
                    onClick={() => setActiveInteractiveModal(resource)}
                    className="w-full bubbly-btn py-2.5 px-4 bg-[#2B2FC7] hover:bg-[#1f2294] text-white font-black text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm transition"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>¡Comenzar actividad interactiva!</span>
                  </button>

                  <button
                    onClick={() => onOpenResource(resource.id)}
                    className="w-full text-center text-[11px] font-bold text-slate-500 hover:text-[#2B2FC7] transition py-1 flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <FileText className="w-3 h-3" />
                    <span>Ver ficha de clase e imprimir</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Principles */}
        <div>
          <h4 className="text-base md:text-lg font-black text-[#0B1440] mb-3">
            Ejes y conceptos clave de esta etapa:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentStageData.principles.map((pr, pIdx) => (
              <div key={pIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  {pr}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stories / Activities for this stage */}
        <div>
          <h4 className="text-base md:text-lg font-black text-[#0B1440] mb-3">
            Propuestas y dinámicas para el aula y el hogar:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentStageData.stories.map((story, sIdx) => (
              <div
                key={sIdx}
                className="p-6 rounded-3xl bg-white border-2 border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#2B2FC7] bg-[#2B2FC7]/10 px-2.5 py-0.5 rounded-full">
                      Con {story.characters}
                    </span>
                    <BookOpen className="w-4 h-4 text-slate-400" />
                  </div>
                  <h5 className="text-lg font-black text-[#0B1440] mb-2">{story.title}</h5>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {story.summary}
                  </p>
                </div>

                <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-950 font-medium">
                  <strong>Consigna recomendada:</strong> {story.activityPrompt}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grown-ups Guide Note */}
        <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200 space-y-2">
          <span className="text-xs font-black text-[#0B1440] uppercase tracking-wide block">
            Pauta de cuidado para familias y docentes de este ciclo:
          </span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
            «{currentStageData.guideForGrownUps}»
          </p>
        </div>
      </div>

      {/* Modal interactivo de la actividad */}
      <InteractiveResourceModal
        resource={activeInteractiveModal}
        onClose={() => setActiveInteractiveModal(null)}
        onNavigateToResources={() => {
          setActiveInteractiveModal(null);
          onNavigate('resources');
        }}
      />
    </div>
  );
};
