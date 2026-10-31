import React, { useState, useEffect } from 'react';
import { EducationalStage, MunamigoId, TeacherActivityPlan } from '../types';
import { MunamigoAvatar } from '../components/MunamigoAvatar';
import {
  GraduationCap,
  Calendar,
  CheckCircle,
  XCircle,
  Plus,
  Trash2,
  BookOpen,
  Scale,
  ShieldAlert,
  FileText
} from 'lucide-react';

interface TeachersViewProps {
  onOpenResource: (resourceId: string) => void;
  onNavigate: (view: string) => void;
}

export const TeachersView: React.FC<TeachersViewProps> = ({
  onOpenResource,
  onNavigate
}) => {
  const [activeTab, setActiveTab] = useState<'fundamentos' | 'que-hacer' | 'planificador' | 'protocolo'>('fundamentos');

  // Teacher Activity Planner State (stored in localStorage for real persistence)
  const [plans, setPlans] = useState<TeacherActivityPlan[]>(() => {
    const saved = localStorage.getItem('muna_teacher_plans');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return [
      {
        id: 'plan-1',
        title: 'Taller de Publicidad Engañosa y Filtros en Redes',
        stage: 'primaria',
        topic: 'Alfabetización digital y estereotipos estéticos',
        scheduledDate: '2026-11-10',
        characterId: 'mora',
        notes: 'Secuencia de 2 módulos de 40 min en Formación Ética. Cero exposición personal.'
      },
      {
        id: 'plan-2',
        title: 'Ronda de Emociones y Diversidad Corporal',
        stage: 'inicial',
        topic: 'Identificación de sensaciones y no discriminación',
        scheduledDate: '2026-11-18',
        characterId: 'pompon',
        notes: 'Actividad lúdica con títeres de Pompón y Cora.'
      }
    ];
  });

  const [newTitle, setNewTitle] = useState('');
  const [newStage, setNewStage] = useState<EducationalStage>('primaria');
  const [newTopic, setNewTopic] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newCharacter, setNewCharacter] = useState<MunamigoId>('lumi');
  const [newNotes, setNewNotes] = useState('');

  useEffect(() => {
    localStorage.setItem('muna_teacher_plans', JSON.stringify(plans));
  }, [plans]);

  const handleAddPlan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newPlan: TeacherActivityPlan = {
      id: `plan-${Date.now()}`,
      title: newTitle.trim(),
      stage: newStage,
      topic: newTopic.trim() || 'Educación socioemocional y prevención ESI',
      scheduledDate: newDate || '2026-11-20',
      characterId: newCharacter,
      notes: newNotes.trim()
    };

    setPlans([newPlan, ...plans]);
    setNewTitle('');
    setNewTopic('');
    setNewNotes('');
  };

  const handleDeletePlan = (id: string) => {
    setPlans(plans.filter(p => p.id !== id));
  };

  const doAndAvoidRules = [
    {
      do: 'Cuestionar y frenar de inmediato cualquier burla o apodo sobre el cuerpo, altura o contextura de cualquier estudiante.',
      avoid: 'Minimizar las burlas como "chistes de chicos" o pedirle al agredido que "no sea tan susceptible".'
    },
    {
      do: 'Promover la actividad física como disfrute lúdico, juego en equipo y salud integral.',
      avoid: 'Realizar pesajes grupales, mediciones públicas de índice de masa corporal (IMC) o tablas comparativas en Educación Física.'
    },
    {
      do: 'Abordar la alimentación desde la variedad, los saberes culturales y el disfrute, sin culpas.',
      avoid: 'Pedir tareas donde los chicos deban anotar todo lo que comen durante la semana (diarios calóricos) o clasificar alimentos como "buenos vs. basura".'
    },
    {
      do: 'Notificar con prudencia al Equipo de Orientación Escolar (EOE) ante cambios anímicos o aislamiento persistente.',
      avoid: 'Diagnosticar a un estudiante o afirmar ante la familia que el alumno "padece anorexia o bulimia".'
    }
  ];

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2B2FC7] via-[#0B1440] to-[#2B2FC7] rounded-[2.5rem] p-6 md:p-10 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl text-center md:text-left">
          <span className="px-3 py-1 rounded-full bg-[#B4F000] text-[#0B1440] font-black text-xs uppercase tracking-wide inline-block">
            Panel para Docentes y Equipos Escolares
          </span>
          <h1 className="text-3xl md:text-4xl font-black leading-tight">
            Prevención de los TCA en la Escuela Argentina
          </h1>
          <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-medium">
            Herramientas pedagógicas, secuencias ESI y protocolos orientativos de actuación escolar. El aula como espacio de cuidado, convivencia y respeto por la diversidad.
          </p>
        </div>
        <div className="shrink-0 bg-white/10 p-4 rounded-3xl border border-white/20 flex flex-col items-center justify-center text-center self-center min-w-[160px]">
          <MunamigoAvatar id="mora" size="lg" />
          <p className="text-center text-[11px] font-bold text-[#B4F000] mt-2 w-full">
            Mora y la pedagogía crítica
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setActiveTab('fundamentos')}
          className={`px-4 py-2 rounded-full text-xs font-black whitespace-nowrap transition cursor-pointer ${
            activeTab === 'fundamentos'
              ? 'bg-[#2B2FC7] text-white shadow-sm'
              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
          }`}
        >
          🏫 Rol Pedagógico vs. Clínico
        </button>
        <button
          onClick={() => setActiveTab('que-hacer')}
          className={`px-4 py-2 rounded-full text-xs font-black whitespace-nowrap transition cursor-pointer ${
            activeTab === 'que-hacer'
              ? 'bg-[#2B2FC7] text-white shadow-sm'
              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
          }`}
        >
          ✅ Qué hacer y qué evitar en el aula
        </button>
        <button
          onClick={() => setActiveTab('planificador')}
          className={`px-4 py-2 rounded-full text-xs font-black whitespace-nowrap transition cursor-pointer ${
            activeTab === 'planificador'
              ? 'bg-[#2B2FC7] text-white shadow-sm'
              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
          }`}
        >
          🗓️ Planificador Docente de Actividades
        </button>
        <button
          onClick={() => setActiveTab('protocolo')}
          className={`px-4 py-2 rounded-full text-xs font-black whitespace-nowrap transition cursor-pointer ${
            activeTab === 'protocolo'
              ? 'bg-[#2B2FC7] text-white shadow-sm'
              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
          }`}
        >
          📋 Protocolo de Actuación Institucional
        </button>
      </div>

      {/* Tab 1: Fundamentos */}
      {activeTab === 'fundamentos' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl md:text-2xl font-black text-[#0B1440]">
              La distinción esencial: Rol pedagógico vs. Competencia sanitaria
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              La escuela es uno de los espacios de socialización más decisivos para la detección temprana. Sin embargo, los y las docentes <strong className="text-[#0B1440]">no deben diagnosticar, no deben realizar tratamientos ni deben investigar invasivamente</strong> las conductas de sus alumnos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-[#2B2FC7]/5 border-2 border-[#2B2FC7]/20 space-y-3">
                <span className="font-black text-sm text-[#2B2FC7] uppercase tracking-wide block">
                  La función pedagógica escolar sí abarca:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2B2FC7] font-bold">✓</span>
                    <span>Generar un clima escolar libre de violencia estética, burlas y discriminación corporal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2B2FC7] font-bold">✓</span>
                    <span>Desarrollar la alfabetización mediática frente a filtros y algoritmos en redes sociales.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2B2FC7] font-bold">✓</span>
                    <span>Articular la ESI en sus 5 ejes conceptuales (Res. CFE 340/18).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2B2FC7] font-bold">✓</span>
                    <span>Registrar observaciones conductuales en el Equipo de Orientación Escolar de forma confidencial.</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-rose-50 border-2 border-rose-200 space-y-3">
                <span className="font-black text-sm text-rose-800 uppercase tracking-wide block">
                  Lo que excede la función pedagógica:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-rose-950">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">✗</span>
                    <span>Diagnosticar anorexia, bulimia u otro trastorno alimentario.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">✗</span>
                    <span>Fiscalizar o inspeccionar de forma policial las viandas o almuerzos de los estudiantes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">✗</span>
                    <span>Pedir a los alumnos que expongan su peso o hábitos alimentarios personales en clase.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">✗</span>
                    <span>Dar indicaciones de dietas o planes nutricionales individualizados.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-[#FFFBEB] rounded-2xl border border-amber-200 flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs font-bold text-slate-800">
                Podés descargar el Protocolo Institucional imprimible para compartir en sala de profesores:
              </span>
              <button
                onClick={() => onOpenResource('protocolo-docente-actuacion')}
                className="px-4 py-2 rounded-full bg-[#2B2FC7] text-white text-xs font-bold hover:bg-[#1e218a] transition shadow"
              >
                Abrir Protocolo Oficial
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Qué hacer y qué evitar */}
      {activeTab === 'que-hacer' && (
        <div className="space-y-4">
          <div className="bg-[#FFFBEB] p-4 rounded-2xl border border-amber-200 text-xs sm:text-sm text-slate-700">
            💡 Las pautas cotidianas en el patio, el aula y el gimnasio escolar marcan la diferencia entre un ambiente hostil y un refugio protector.
          </div>

          <div className="space-y-4">
            {doAndAvoidRules.map((rule, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                  <span className="text-emerald-800 font-black text-xs uppercase flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Qué hacer en el aula:
                  </span>
                  <p className="text-xs sm:text-sm text-emerald-950 font-semibold leading-relaxed">
                    {rule.do}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-1">
                  <span className="text-rose-800 font-black text-xs uppercase flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-600" />
                    Qué conviene evitar estrictamente:
                  </span>
                  <p className="text-xs sm:text-sm text-rose-950 font-semibold leading-relaxed">
                    {rule.avoid}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Planificador Docente */}
      {activeTab === 'planificador' && (
        <div className="space-y-8">
          {/* Privacy Note */}
          <div className="bg-[#FFFBEB] border-2 border-amber-300 rounded-2xl p-4 text-xs text-slate-700 flex items-start gap-2">
            <span className="font-bold text-base">🔒</span>
            <div>
              <strong className="text-[#0B1440] font-bold block mb-0.5">
                Cumplimiento de Privacidad y Ley 25.326:
              </strong>
              Este planificador organiza secuencias curriculares por curso y fecha. No almacena nombres de estudiantes, expedientes individuales de riesgo ni información de salud. Todo se guarda exclusivamente en tu navegador.
            </div>
          </div>

          {/* Form to add a new lesson plan */}
          <form
            onSubmit={handleAddPlan}
            className="bg-white rounded-3xl p-6 md:p-8 border-2 border-slate-200 shadow-sm space-y-4"
          >
            <h3 className="text-lg md:text-xl font-black text-[#0B1440]">
              Planificar Nueva Secuencia Pedagógica ESI / Prevención
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  Título de la actividad / Taller:
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                  placeholder="Ej: Análisis de mandatos corporales en series"
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2B2FC7]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  Nivel Educativo:
                </label>
                <select
                  value={newStage}
                  onChange={e => setNewStage(e.target.value as EducationalStage)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2B2FC7] bg-white capitalize"
                >
                  <option value="inicial">Nivel Inicial (Jardín)</option>
                  <option value="primaria">Nivel Primario</option>
                  <option value="secundaria">Nivel Secundario</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  Fecha estimada:
                </label>
                <input
                  type="date"
                  value={newDate}
                  onChange={e => setNewDate(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2B2FC7] bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  Tema curricular ESI / Salud:
                </label>
                <input
                  type="text"
                  value={newTopic}
                  onChange={e => setNewTopic(e.target.value)}
                  placeholder="Ej: Autoestima, diversidad corporal, redes"
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2B2FC7]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  Munamigo guía del taller:
                </label>
                <select
                  value={newCharacter}
                  onChange={e => setNewCharacter(e.target.value as MunamigoId)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2B2FC7] bg-white capitalize"
                >
                  <option value="pompon">Pompón (Afecto y Autoestima)</option>
                  <option value="lumi">Lumi (Diversidad y Redes)</option>
                  <option value="mora">Mora (Pensamiento Crítico)</option>
                  <option value="cora">Cora (Emociones)</option>
                  <option value="titi">Titi (Juego y Creatividad)</option>
                  <option value="blu">Blu (Calma y Convivencia)</option>
                </select>
              </div>

              <div className="sm:col-span-2 lg:col-span-1">
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  Observaciones pedagógicas:
                </label>
                <input
                  type="text"
                  value={newNotes}
                  onChange={e => setNewNotes(e.target.value)}
                  placeholder="Materiales, consigna sin exposición íntima..."
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2B2FC7]"
                />
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="bubbly-btn px-5 py-2.5 bg-[#2B2FC7] hover:bg-[#1e218a] text-white text-xs font-black shadow flex items-center gap-2 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Agregar a mi Planificador</span>
              </button>
            </div>
          </form>

          {/* List of saved plans */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-[#0B1440] uppercase tracking-wide">
              Secuencias programadas ({plans.length})
            </h4>

            {plans.length === 0 ? (
              <div className="p-8 text-center bg-white rounded-3xl border-2 border-dashed border-slate-300 text-slate-500 text-xs">
                No tenés secuencias programadas aún. Creá la primera con el formulario superior.
              </div>
            ) : (
              plans.map(p => (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl p-5 border-2 border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <MunamigoAvatar id={p.characterId} size="xs" className="mt-1" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#2B2FC7]/10 text-[#2B2FC7] uppercase">
                          {p.stage}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {p.scheduledDate}
                        </span>
                      </div>
                      <h5 className="font-bold text-sm text-[#0B1440]">{p.title}</h5>
                      <p className="text-xs text-slate-600">Tema: {p.topic}</p>
                      {p.notes && <p className="text-xs text-slate-500 italic">«{p.notes}»</p>}
                    </div>
                  </div>

                  <button
                    onClick={() => handleDeletePlan(p.id)}
                    className="p-2 text-rose-500 hover:bg-rose-50 rounded-xl transition self-end sm:self-center"
                    title="Eliminar secuencia"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Tab 4: Protocolo */}
      {activeTab === 'protocolo' && (
        <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-slate-200 shadow-sm space-y-6">
          <h3 className="text-xl md:text-2xl font-black text-[#0B1440]">
            Circuito Institucional ante Señales de Alerta
          </h3>
          <p className="text-xs sm:text-sm text-slate-700">
            Pasos orientativos para actuar con prudencia dentro de la normativa de la escuela argentina:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="w-6 h-6 rounded-full bg-[#2B2FC7] text-white flex items-center justify-center font-bold text-xs mb-2">
                1
              </span>
              <strong className="block text-[#0B1440]">Registro Pedagógico</strong>
              <p className="text-slate-600">
                Anotar fechas y conductas observables (aislamiento, mareos frecuentes, negación a comer en salidas escolares).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="w-6 h-6 rounded-full bg-[#2B2FC7] text-white flex items-center justify-center font-bold text-xs mb-2">
                2
              </span>
              <strong className="block text-[#0B1440]">Consulta con EOE</strong>
              <p className="text-slate-600">
                Reunión con el Equipo de Orientación Escolar o vicedirección para articular una estrategia de acompañamiento.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="w-6 h-6 rounded-full bg-[#2B2FC7] text-white flex items-center justify-center font-bold text-xs mb-2">
                3
              </span>
              <strong className="block text-[#0B1440]">Entrevista con la Familia</strong>
              <p className="text-slate-600">
                Transmitir preocupación afectiva por el bienestar del alumno sin culpabilizar ni sentenciar diagnósticos.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="w-6 h-6 rounded-full bg-[#2B2FC7] text-white flex items-center justify-center font-bold text-xs mb-2">
                4
              </span>
              <strong className="block text-[#0B1440]">Derivación a Salud</strong>
              <p className="text-slate-600">
                Facilitar información sobre efectores pediátricos y de salud mental pública de la jurisdicción.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
