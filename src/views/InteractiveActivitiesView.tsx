import React, { useState } from 'react';
import { MunamigoAvatar } from '../components/MunamigoAvatar';
import { MYTHS_AND_REALITIES_DATA } from '../data/educationalContent';
import { NEW_INTERACTIVE_RESOURCES, InteractiveResourceDef } from '../data/newInteractiveResources';
import { InteractiveResourceModal } from '../components/interactive/InteractiveResourceModal';
import {
  CONVERSATION_SCENARIOS,
  EMOTIONAL_COMPASS_OPTIONS
} from '../data/interactiveActivities';
import {
  Sparkles,
  CheckCircle,
  XCircle,
  HelpCircle,
  RotateCcw,
  Sliders,
  Heart,
  MessageCircle,
  AlertCircle,
  Gamepad2,
  Play,
  Clock
} from 'lucide-react';

export const InteractiveActivitiesView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'recursos-etapas' | 'mitos' | 'filtros' | 'brujula' | 'conversaciones'>('recursos-etapas');
  const [activeResourceModal, setActiveResourceModal] = useState<InteractiveResourceDef | null>(null);

  // Myth Buster State
  const [revealedMyths, setRevealedMyths] = useState<Record<number, boolean>>({});

  const toggleMyth = (id: number) => {
    setRevealedMyths(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Filter Detector State
  const [filterLevel, setFilterLevel] = useState<number>(70);
  const [checkedChecklist, setCheckedChecklist] = useState<Record<string, boolean>>({
    pose: true,
    lighting: true,
    retouch: false,
    sponsorship: false
  });

  // Emotional Compass State
  const [selectedEmotion, setSelectedEmotion] = useState<number | null>(0);

  // Scenario Simulator State
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);

  const currentScenario = CONVERSATION_SCENARIOS[currentScenarioIndex];

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FF80C5] via-[#2B2FC7] to-[#0B1440] rounded-[2.5rem] p-6 md:p-10 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl text-center md:text-left">
          <span className="px-3 py-1 rounded-full bg-[#B4F000] text-[#0B1440] font-black text-xs uppercase tracking-wide inline-block">
            Interactividad Educativa Sin Competencia
          </span>
          <h1 className="text-3xl md:text-4xl font-black leading-tight">
            Aprender Jugando, Reflexionando y Sintiendo
          </h1>
          <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-medium">
            Dinámicas interactivas para fortalecer la empatía, desmitificar estereotipos y entrenar el cuidado. Sin notas, sin premios corporales y sin diagnósticos.
          </p>
        </div>
        <div className="shrink-0 bg-white/10 p-4 rounded-3xl border border-white/20 flex flex-col items-center justify-center text-center self-center min-w-[160px]">
          <MunamigoAvatar id="cora" size="lg" />
          <p className="text-center text-[11px] font-bold text-[#FF80C5] mt-2 w-full">
            Cora acompaña tus emociones
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setActiveTab('recursos-etapas')}
          className={`px-4 py-2 rounded-full text-xs font-black whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'recursos-etapas'
              ? 'bg-[#2B2FC7] text-white shadow-sm'
              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
          }`}
        >
          <Gamepad2 className="w-3.5 h-3.5" />
          <span>9 Recursos por Etapa (Jardín, Primaria, Secundaria)</span>
        </button>
        <button
          onClick={() => setActiveTab('mitos')}
          className={`px-4 py-2 rounded-full text-xs font-black whitespace-nowrap transition cursor-pointer ${
            activeTab === 'mitos'
              ? 'bg-[#2B2FC7] text-white shadow-sm'
              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
          }`}
        >
          🔍 Mitos y Realidades (con Mora)
        </button>
        <button
          onClick={() => setActiveTab('filtros')}
          className={`px-4 py-2 rounded-full text-xs font-black whitespace-nowrap transition cursor-pointer ${
            activeTab === 'filtros'
              ? 'bg-[#2B2FC7] text-white shadow-sm'
              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
          }`}
        >
          ✨ Detector de Filtros en Redes (con Lumi)
        </button>
        <button
          onClick={() => setActiveTab('brujula')}
          className={`px-4 py-2 rounded-full text-xs font-black whitespace-nowrap transition cursor-pointer ${
            activeTab === 'brujula'
              ? 'bg-[#2B2FC7] text-white shadow-sm'
              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
          }`}
        >
          🧭 Brújula Emocional (con Cora)
        </button>
        <button
          onClick={() => setActiveTab('conversaciones')}
          className={`px-4 py-2 rounded-full text-xs font-black whitespace-nowrap transition cursor-pointer ${
            activeTab === 'conversaciones'
              ? 'bg-[#2B2FC7] text-white shadow-sm'
              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
          }`}
        >
          💬 Simulador de Diálogos Empáticos
        </button>
      </div>

      {/* Tab: 9 Recursos por Etapa */}
      {activeTab === 'recursos-etapas' && (
        <div className="space-y-10 animate-fadeIn">
          {/* Nivel Inicial (Jardín) */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-[#FF6B4A]/30 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#FF6B4A]">
                  3 a 5 años
                </span>
                <h3 className="text-xl font-black text-[#0B1440]">Nivel Inicial (Jardín) — 3 Recursos</h3>
              </div>
              <span className="text-xs font-bold text-slate-500">Visuales, lúdicos y afectivos</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {NEW_INTERACTIVE_RESOURCES.filter(r => r.stage === 'inicial').map(resource => (
                <div
                  key={resource.id}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#FF6B4A] transition flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MunamigoAvatar id={resource.leadCharacter} size="xs" />
                        <span className="text-xs font-bold text-[#0B1440] capitalize">{resource.leadCharacter}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-bold">{resource.estimatedMinutes} min</span>
                    </div>
                    <h4 className="text-base font-black text-[#0B1440]">{resource.title}</h4>
                    <p className="text-xs text-slate-600 line-clamp-2">{resource.description}</p>
                    <div className="p-2 bg-white rounded-xl text-[11px] text-slate-700 border border-slate-200/80">
                      🎯 {resource.objective}
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveResourceModal(resource)}
                    className="w-full py-2 px-3 rounded-full bg-[#FF6B4A] hover:bg-[#e65a39] text-white text-xs font-black flex items-center justify-center gap-1.5 cursor-pointer shadow-sm transition"
                  >
                    <Play className="w-3 h-3 fill-white" />
                    <span>Jugar actividad</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Nivel Primario */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-[#2B2FC7]/30 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#2B2FC7]">
                  6 a 12 años
                </span>
                <h3 className="text-xl font-black text-[#0B1440]">Nivel Primario — 3 Recursos</h3>
              </div>
              <span className="text-xs font-bold text-slate-500">Autoestima, medios y convivencia</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {NEW_INTERACTIVE_RESOURCES.filter(r => r.stage === 'primaria').map(resource => (
                <div
                  key={resource.id}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#2B2FC7] transition flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MunamigoAvatar id={resource.leadCharacter} size="xs" />
                        <span className="text-xs font-bold text-[#0B1440] capitalize">{resource.leadCharacter}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-bold">{resource.estimatedMinutes} min</span>
                    </div>
                    <h4 className="text-base font-black text-[#0B1440]">{resource.title}</h4>
                    <p className="text-xs text-slate-600 line-clamp-2">{resource.description}</p>
                    <div className="p-2 bg-white rounded-xl text-[11px] text-slate-700 border border-slate-200/80">
                      🎯 {resource.objective}
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveResourceModal(resource)}
                    className="w-full py-2 px-3 rounded-full bg-[#2B2FC7] hover:bg-[#1f2294] text-white text-xs font-black flex items-center justify-center gap-1.5 cursor-pointer shadow-sm transition"
                  >
                    <Play className="w-3 h-3 fill-white" />
                    <span>Jugar actividad</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Nivel Secundario */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-[#0B1440]/30 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#0B1440]">
                  13 a 18 años
                </span>
                <h3 className="text-xl font-black text-[#0B1440]">Nivel Secundario — 3 Recursos</h3>
              </div>
              <span className="text-xs font-bold text-slate-500">Redes, evidencia científica y redes de pares</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {NEW_INTERACTIVE_RESOURCES.filter(r => r.stage === 'secundaria').map(resource => (
                <div
                  key={resource.id}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0B1440] transition flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MunamigoAvatar id={resource.leadCharacter} size="xs" />
                        <span className="text-xs font-bold text-[#0B1440] capitalize">{resource.leadCharacter}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-bold">{resource.estimatedMinutes} min</span>
                    </div>
                    <h4 className="text-base font-black text-[#0B1440]">{resource.title}</h4>
                    <p className="text-xs text-slate-600 line-clamp-2">{resource.description}</p>
                    <div className="p-2 bg-white rounded-xl text-[11px] text-slate-700 border border-slate-200/80">
                      🎯 {resource.objective}
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveResourceModal(resource)}
                    className="w-full py-2 px-3 rounded-full bg-[#0B1440] hover:bg-slate-800 text-white text-xs font-black flex items-center justify-center gap-1.5 cursor-pointer shadow-sm transition"
                  >
                    <Play className="w-3 h-3 fill-white" />
                    <span>Jugar actividad</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Activity 1: Mitos y Realidades */}
      {activeTab === 'mitos' && (
        <div className="space-y-6">
          <div className="bg-[#FFFBEB] p-4 rounded-2xl border border-amber-200 text-xs sm:text-sm text-slate-700 flex items-center justify-between flex-wrap gap-2">
            <span>
              💡 <strong>Regla de Mora:</strong> Hacé clic en cada tarjeta para darle la vuelta y descubrir la explicación científica y pedagógica.
            </span>
            <span className="text-xs font-bold text-[#2B2FC7]">
              {Object.keys(revealedMyths).length} de {MYTHS_AND_REALITIES_DATA.length} explorados
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MYTHS_AND_REALITIES_DATA.map(item => {
              const isFlipped = !!revealedMyths[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleMyth(item.id)}
                  className={`min-h-[220px] rounded-3xl p-6 border-2 transition-all cursor-pointer flex flex-col justify-between shadow-sm select-none ${
                    isFlipped
                      ? 'bg-gradient-to-br from-emerald-50 to-white border-emerald-300'
                      : 'bg-white hover:border-[#2B2FC7] border-slate-200 hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                          isFlipped
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {isFlipped ? 'Realidad Verificada' : 'Mito Frecuente'}
                      </span>
                      <MunamigoAvatar id={item.characterId as any} size="xs" />
                    </div>

                    {isFlipped ? (
                      <div className="space-y-2 animate-fadeIn">
                        <h4 className="text-sm font-black text-emerald-950">
                          {item.reality}
                        </h4>
                        <p className="text-xs text-slate-500 italic">
                          Categoría: {item.category}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <h4 className="text-base font-bold text-[#0B1440]">
                          «{item.myth}»
                        </h4>
                        <p className="text-xs text-slate-500">
                          ¿Qué pensás sobre esta afirmación? Tocá para ver la verdad.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                    <span className={isFlipped ? 'text-emerald-700' : 'text-[#2B2FC7]'}>
                      {isFlipped ? 'Volver al mito' : 'Descubrir realidad'}
                    </span>
                    <RotateCcw className="w-3.5 h-3.5 opacity-60" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Activity 2: Detector de Filtros */}
      {activeTab === 'filtros' && (
        <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <MunamigoAvatar id="lumi" size="sm" />
            <div>
              <h3 className="text-xl md:text-2xl font-black text-[#0B1440]">
                El Simulador de Distorsión Digital de Lumi
              </h3>
              <p className="text-xs text-slate-600">
                Ajustá el control deslizante para comparar cómo un contenido cambia radicalmente entre la realidad y la pantalla editada.
              </p>
            </div>
          </div>

          {/* Interactive Simulation Frame */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-50 p-6 rounded-3xl border border-slate-200">
            {/* Visual representation */}
            <div className="space-y-3">
              <div
                className="relative h-64 rounded-2xl overflow-hidden border-2 border-slate-300 shadow-inner flex flex-col items-center justify-center text-center p-6 transition-all"
                style={{
                  backgroundColor: `rgba(43, 47, 199, ${0.05 + filterLevel / 400})`,
                  filter: `saturate(${1 + filterLevel / 100}) brightness(${1 + filterLevel / 200})`
                }}
              >
                <div
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg transition-transform flex items-center justify-center font-bold text-white text-xs"
                  style={{
                    backgroundColor: filterLevel > 50 ? '#FF80C5' : '#FF6B4A',
                    transform: `scale(${1 - (filterLevel - 50) / 300})`
                  }}
                >
                  {filterLevel > 50 ? 'Filtro Activo' : 'Cuerpo Real'}
                </div>
                <p className="mt-3 text-xs font-bold text-[#0B1440]">
                  {filterLevel > 70
                    ? '✨ Modo Estética Inalcanzable (Piel de porcelana + cintura achicada por algoritmo)'
                    : filterLevel > 30
                    ? '📱 Foto con iluminación artificial y ligero retoque'
                    : '🌿 Foto real: poros, texturas, formas naturales y luz del día'}
                </p>
              </div>

              {/* Slider */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                  <span>Cuerpo Real (0%)</span>
                  <span>Intensidad de Filtros ({filterLevel}%)</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={filterLevel}
                  onChange={e => setFilterLevel(Number(e.target.value))}
                  className="w-full accent-[#2B2FC7] cursor-pointer"
                />
              </div>
            </div>

            {/* Critical thinking checklist */}
            <div className="space-y-3">
              <span className="text-xs font-black uppercase text-[#2B2FC7] tracking-wider block">
                Trucos habituales en redes para identificar:
              </span>
              <div className="space-y-2 text-xs sm:text-sm">
                <label className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checkedChecklist.pose}
                    onChange={() => setCheckedChecklist(prev => ({ ...prev, pose: !prev.pose }))}
                    className="accent-[#2B2FC7] w-4 h-4 rounded"
                  />
                  <span>
                    <strong>Poses forzadas:</strong> Hundir la panza, flexionar piernas para crear huecos y estirar la columna.
                  </span>
                </label>
                <label className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checkedChecklist.lighting}
                    onChange={() => setCheckedChecklist(prev => ({ ...prev, lighting: !prev.lighting }))}
                    className="accent-[#2B2FC7] w-4 h-4 rounded"
                  />
                  <span>
                    <strong>Iluminación de estudio:</strong> Sombras marcadas artificialmente para simular músculos o delgadez.
                  </span>
                </label>
                <label className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checkedChecklist.retouch}
                    onChange={() => setCheckedChecklist(prev => ({ ...prev, retouch: !prev.retouch }))}
                    className="accent-[#2B2FC7] w-4 h-4 rounded"
                  />
                  <span>
                    <strong>Filtros morfológicos:</strong> Apps automáticas que afinan narices, estiran ojos y deforman muebles de fondo.
                  </span>
                </label>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 italic">
                «Recordá: Nadie en la vida real camina con un filtro puesto. Lo que ves en el celular es una producción, no un estándar al que debas adaptarte.» — Lumi
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Activity 3: Brújula Emocional */}
      {activeTab === 'brujula' && (
        <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <MunamigoAvatar id="cora" size="sm" />
            <div>
              <h3 className="text-xl md:text-2xl font-black text-[#0B1440]">
                La Brújula de Emociones de Cora
              </h3>
              <p className="text-xs text-slate-600">
                A veces la relación con la comida y el cuerpo expresa un nudo emocional que todavía no pudimos nombrar. ¿Qué sentís en este momento?
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {EMOTIONAL_COMPASS_OPTIONS.map((opt, oIdx) => (
              <button
                key={oIdx}
                onClick={() => setSelectedEmotion(oIdx)}
                className={`p-4 rounded-2xl border-2 text-left transition cursor-pointer flex flex-col justify-between ${
                  selectedEmotion === oIdx
                    ? 'bg-[#FF80C5]/15 border-[#FF80C5] text-[#0B1440] shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                }`}
              >
                <span className="text-2xl mb-2">{opt.emoji}</span>
                <span className="text-xs font-bold leading-tight">{opt.emotion}</span>
              </button>
            ))}
          </div>

          {selectedEmotion !== null && (
            <div className="p-6 rounded-3xl bg-[#FFFBEB] border-2 border-amber-300 space-y-4 animate-fadeIn">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{EMOTIONAL_COMPASS_OPTIONS[selectedEmotion].emoji}</span>
                <div>
                  <h4 className="font-black text-base md:text-lg text-[#0B1440]">
                    {EMOTIONAL_COMPASS_OPTIONS[selectedEmotion].emotion}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {EMOTIONAL_COMPASS_OPTIONS[selectedEmotion].description}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-amber-200 space-y-2 text-xs sm:text-sm">
                <p className="text-[#0B1440] font-semibold">
                  💌 <strong>Abrazo de Cora: </strong>
                  {EMOTIONAL_COMPASS_OPTIONS[selectedEmotion].reassurance}
                </p>
                <p className="text-slate-700">
                  🌱 <strong>Paso chiquito de autocuidado para hoy: </strong>
                  {EMOTIONAL_COMPASS_OPTIONS[selectedEmotion].suggestion}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Activity 4: Simulador de Conversaciones Empáticas */}
      {activeTab === 'conversaciones' && (
        <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <span className="text-xs font-black uppercase text-[#2B2FC7] bg-[#2B2FC7]/10 px-2.5 py-0.5 rounded-full">
                Escenario {currentScenarioIndex + 1} de {CONVERSATION_SCENARIOS.length}
              </span>
              <h3 className="text-xl md:text-2xl font-black text-[#0B1440] mt-1">
                Simulador de Escucha y Acompañamiento
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setCurrentScenarioIndex((currentScenarioIndex - 1 + CONVERSATION_SCENARIOS.length) % CONVERSATION_SCENARIOS.length);
                  setSelectedOptionIndex(null);
                }}
                className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-xs font-bold rounded-full"
              >
                Anterior
              </button>
              <button
                onClick={() => {
                  setCurrentScenarioIndex((currentScenarioIndex + 1) % CONVERSATION_SCENARIOS.length);
                  setSelectedOptionIndex(null);
                }}
                className="px-3 py-1 bg-[#2B2FC7] hover:bg-[#1e218a] text-white text-xs font-bold rounded-full"
              >
                Siguiente
              </button>
            </div>
          </div>

          {/* Context box */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
            <strong>Contexto: </strong> {currentScenario.context}
          </div>

          {/* Speaker Dialogue */}
          <div className="p-5 rounded-2xl bg-[#FFFBEB] border-2 border-[#FF6B4A]/30 text-sm md:text-base font-bold text-[#0B1440] italic">
            {currentScenario.dialogue}
          </div>

          {/* Option Choices */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block">
              ¿Cuál de estas respuestas elegirías para acompañar?
            </span>
            {currentScenario.options.map((opt, optIdx) => {
              const isSelected = selectedOptionIndex === optIdx;
              return (
                <button
                  key={optIdx}
                  onClick={() => setSelectedOptionIndex(optIdx)}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition cursor-pointer text-xs sm:text-sm font-semibold flex items-center justify-between gap-3 ${
                    isSelected
                      ? opt.type === 'empatica_recomendada'
                        ? 'bg-emerald-50 border-emerald-400 text-emerald-950'
                        : opt.type === 'bienintencionada_pero_limitada'
                        ? 'bg-amber-50 border-amber-400 text-amber-950'
                        : 'bg-rose-50 border-rose-400 text-rose-950'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-[#0B1440]'
                  }`}
                >
                  <span>{opt.text}</span>
                  <span className="text-xs font-bold shrink-0 opacity-70">Opción {optIdx + 1}</span>
                </button>
              );
            })}
          </div>

          {/* Pedagogical Feedback if selected */}
          {selectedOptionIndex !== null && (
            <div
              className={`p-6 rounded-3xl border-2 space-y-3 animate-fadeIn ${
                currentScenario.options[selectedOptionIndex].type === 'empatica_recomendada'
                  ? 'bg-emerald-50 border-emerald-300'
                  : currentScenario.options[selectedOptionIndex].type === 'bienintencionada_pero_limitada'
                  ? 'bg-amber-50 border-amber-300'
                  : 'bg-rose-50 border-rose-300'
              }`}
            >
              <div className="flex items-center gap-2 font-black text-sm">
                {currentScenario.options[selectedOptionIndex].type === 'empatica_recomendada' ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className="text-emerald-900">¡Respuesta empática recomendada!</span>
                  </>
                ) : currentScenario.options[selectedOptionIndex].type === 'bienintencionada_pero_limitada' ? (
                  <>
                    <HelpCircle className="w-5 h-5 text-amber-600" />
                    <span className="text-amber-900">Bienintencionada, pero con limitaciones</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600" />
                    <span className="text-rose-900">Respuesta contraproducente</span>
                  </>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                {currentScenario.options[selectedOptionIndex].feedback}
              </p>

              <div className="pt-2 text-xs font-bold text-slate-700 italic border-t border-black/10">
                💡 {currentScenario.options[selectedOptionIndex].characterAdvice}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Interactive Resource Modal */}
      <InteractiveResourceModal
        resource={activeResourceModal}
        onClose={() => setActiveResourceModal(null)}
      />
    </div>
  );
};
