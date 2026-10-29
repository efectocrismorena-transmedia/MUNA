import React, { useState } from 'react';
import { UserProfile, MunamigoId } from '../types';
import { MUNAMIGOS_LIST, MUNAMIGOS } from '../data/characters';
import { EDUCATIONAL_MODULES } from '../data/educationalContent';
import { RESOURCES_LIST } from '../data/resources';
import { MunamigoAvatar } from '../components/MunamigoAvatar';
import {
  Sparkles,
  ArrowRight,
  Heart,
  Users,
  GraduationCap,
  BookOpen,
  ShieldAlert,
  PhoneCall,
  CheckCircle,
  HelpCircle,
  ChevronRight,
  Sparkle
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: string) => void;
  activeProfile: UserProfile;
  onChangeProfile: (profile: UserProfile) => void;
  onOpenAlerts: () => void;
  onOpenResource: (resourceId: string) => void;
  onOpenModule: (moduleId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  activeProfile,
  onChangeProfile,
  onOpenAlerts,
  onOpenResource,
  onOpenModule
}) => {
  const [selectedMunamigo, setSelectedMunamigo] = useState<MunamigoId>('pompon');

  const currentCharacter = MUNAMIGOS[selectedMunamigo];

  const featuredModule = EDUCATIONAL_MODULES[0];
  const weeklyPicks = RESOURCES_LIST.slice(0, 3);

  return (
    <div className="space-y-12 md:space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#FFFBEB] via-[#8AA1FF]/20 to-[#FFFBEB] border-4 border-[#2B2FC7]/15 p-6 md:p-12 shadow-sm">
        {/* Subtle decorative background organic blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#B4F000]/25 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF80C5]/20 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Hero Text */}
          <div className="text-center lg:text-left space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B4F000] text-[#0B1440] font-black text-xs md:text-sm tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>Comunidad Educativa Argentina</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0B1440] tracking-tight leading-[1.08]">
              Aprender también es un <span className="text-[#2B2FC7] underline decoration-[#B4F000] decoration-wavy">gran plan</span>.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-700 font-semibold leading-relaxed">
              Herramientas confiables para <strong className="text-[#0B1440]">prevenir</strong>,{' '}
              <strong className="text-[#0B1440]">comprender</strong> y{' '}
              <strong className="text-[#0B1440]">acompañar</strong> de forma responsable en relación con los trastornos de la conducta alimentaria (TCA).
            </p>

            {/* Hero Quick Role Selection Buttons */}
            <div className="pt-2 flex flex-wrap gap-2.5 justify-center lg:justify-start">
              <button
                onClick={() => {
                  onChangeProfile('familia');
                  onNavigate('families');
                }}
                className="bubbly-btn px-5 py-3 bg-[#FF6B4A] hover:bg-[#e65a39] text-white shadow-md flex items-center gap-2 cursor-pointer text-sm"
              >
                <Users className="w-4 h-4" />
                <span>Soy familia</span>
              </button>

              <button
                onClick={() => {
                  onChangeProfile('docente');
                  onNavigate('teachers');
                }}
                className="bubbly-btn px-5 py-3 bg-[#2B2FC7] hover:bg-[#1f2294] text-white shadow-md flex items-center gap-2 cursor-pointer text-sm"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Soy docente</span>
              </button>

              <button
                onClick={() => onNavigate('learn')}
                className="bubbly-btn px-5 py-3 bg-[#B4F000] hover:bg-[#a1d700] text-[#0B1440] shadow-md flex items-center gap-2 cursor-pointer text-sm font-black"
              >
                <BookOpen className="w-4 h-4" />
                <span>Quiero aprender</span>
              </button>
            </div>

            {/* Sensitive Help Shortcut */}
            <div className="pt-3 flex items-center justify-center lg:justify-start gap-3">
              <button
                onClick={onOpenAlerts}
                className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-[#FF6B4A] hover:text-[#d94f31] underline underline-offset-4 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-[#FF6B4A]" />
                <span>¿Sentís que alguien cercano necesita ayuda? Hacé clic acá</span>
              </button>
            </div>
          </div>

          {/* Hero Visual: Munamigos Group Banner */}
          <div className="relative w-full max-w-sm lg:max-w-md flex flex-col items-center">
            <div className="relative w-full p-6 bg-white/90 rounded-[2.5rem] shadow-xl border-4 border-white flex flex-col items-center">
              {/* Characters showcase row (all 6 flat 2D Munamigos side by side) */}
              <div className="grid grid-cols-6 gap-2 sm:gap-3 items-end justify-center py-3 w-full">
                <div className="flex flex-col items-center">
                  <MunamigoAvatar id="pompon" size="sm" interactive onClick={() => setSelectedMunamigo('pompon')} />
                  <span className="text-[10px] font-bold text-slate-700 mt-1">Pompón</span>
                </div>
                <div className="flex flex-col items-center">
                  <MunamigoAvatar id="lumi" size="sm" interactive onClick={() => setSelectedMunamigo('lumi')} />
                  <span className="text-[10px] font-bold text-slate-700 mt-1">Lumi</span>
                </div>
                <div className="flex flex-col items-center">
                  <MunamigoAvatar id="mora" size="sm" interactive onClick={() => setSelectedMunamigo('mora')} />
                  <span className="text-[10px] font-bold text-slate-700 mt-1">Mora</span>
                </div>
                <div className="flex flex-col items-center">
                  <MunamigoAvatar id="cora" size="sm" interactive onClick={() => setSelectedMunamigo('cora')} />
                  <span className="text-[10px] font-bold text-slate-700 mt-1">Cora</span>
                </div>
                <div className="flex flex-col items-center">
                  <MunamigoAvatar id="titi" size="sm" interactive onClick={() => setSelectedMunamigo('titi')} />
                  <span className="text-[10px] font-bold text-slate-700 mt-1">Titi</span>
                </div>
                <div className="flex flex-col items-center">
                  <MunamigoAvatar id="blu" size="sm" interactive onClick={() => setSelectedMunamigo('blu')} />
                  <span className="text-[10px] font-bold text-slate-700 mt-1">Blu</span>
                </div>
              </div>

              {/* Character speech bubble */}
              <div className="mt-2 w-full bg-[#FFFBEB] p-3 rounded-2xl border-2 border-amber-200 text-center">
                <p className="text-xs font-bold text-[#0B1440]">
                  «No necesitás tener todas las respuestas para empezar a acompañar.»
                </p>
                <span className="text-[11px] font-semibold text-[#2B2FC7] block mt-0.5">
                  — Munamigos
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Munamigos Meet & Greet Bar */}
      <section className="bg-white rounded-[2.5rem] p-6 md:p-8 border-2 border-slate-200 shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-xs font-black uppercase tracking-wider text-[#2B2FC7] bg-[#2B2FC7]/10 px-3 py-1 rounded-full">
            Nuestros Compañeros Educativos
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-[#0B1440] mt-2">
            Conocé a los 6 Munamigos
          </h2>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Cada personaje acompaña un área pedagógica distinta: afecto, curiosidad, pensamiento crítico, emociones, disfrute y calma.
          </p>
        </div>

        {/* Characters Tabs matching Reference 2 */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 md:gap-3 mb-6">
          {MUNAMIGOS_LIST.map(friend => {
            const isSelected = selectedMunamigo === friend.id;
            return (
              <button
                key={friend.id}
                onClick={() => setSelectedMunamigo(friend.id)}
                className={`py-3 px-3 rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#FFFBEB] border-2 border-[#FFBA00] shadow-sm scale-105'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
                }`}
              >
                <MunamigoAvatar id={friend.id} size="sm" />
                <span
                  className={`text-xs font-black mt-2 capitalize ${
                    isSelected ? 'text-[#FF7300]' : 'text-slate-800'
                  }`}
                >
                  {friend.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Munamigo Detail Box */}
        <div
          className="rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 border-2 transition-all"
          style={{ backgroundColor: `${currentCharacter.hexColor}15`, borderColor: currentCharacter.hexColor }}
        >
          <div className="shrink-0 flex flex-col items-center">
            <MunamigoAvatar id={currentCharacter.id} size="xl" />
          </div>

          <div className="space-y-3 text-center md:text-left flex-1">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span
                className="px-3 py-1 rounded-full text-xs font-black text-white"
                style={{ backgroundColor: currentCharacter.hexColor === '#B4F000' ? '#0B1440' : currentCharacter.hexColor }}
              >
                {currentCharacter.roleTitle}
              </span>
            </div>

            <h3 className="text-2xl font-black text-[#0B1440]">{currentCharacter.name}</h3>

            <p className="text-sm font-semibold text-[#0B1440] italic bg-white/70 p-3 rounded-2xl border border-white">
              «{currentCharacter.officialQuote}»
            </p>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentCharacter.bio}
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold text-[#0B1440] block mb-1.5">
                Función pedagógica en MUNA:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentCharacter.functions.map((fn, fIdx) => (
                  <span
                    key={fIdx}
                    className="text-[11px] bg-white px-2.5 py-1 rounded-xl font-medium text-slate-700 border border-slate-200"
                  >
                    ✓ {fn}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recorridos Educativos por Etapa (Centros neurálgicos de MUNA) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#FF6B4A] bg-[#FF6B4A]/10 px-3 py-1 rounded-full">
              Currícula y Evolución
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#0B1440] mt-2">
              Recorridos por Etapa Educativa
            </h2>
            <p className="text-xs md:text-sm text-slate-600">
              Contenidos, dinámicas y vocabulario adaptados al momento de desarrollo de cada grupo.
            </p>
          </div>
          <button
            onClick={() => onNavigate('stages')}
            className="text-xs font-bold text-[#2B2FC7] hover:underline flex items-center gap-1"
          >
            <span>Ver los 3 recorridos completos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Nivel Inicial */}
          <div
            onClick={() => onNavigate('stages')}
            className="bubbly-card bg-white rounded-3xl p-6 border-2 border-[#FF6B4A]/30 hover:border-[#FF6B4A] shadow-sm flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#FF6B4A]/15 text-[#FF6B4A] font-black text-xs">
                  3 a 5 años
                </span>
                <MunamigoAvatar id="pompon" size="sm" />
              </div>
              <h3 className="text-xl font-black text-[#0B1440] mb-2 group-hover:text-[#FF6B4A] transition">
                Nivel Inicial (Jardín)
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Descubrir que todos los cuerpos merecen respeto, reconocer sensaciones corporales (hambre/saciedad) y aprender a nombrar emociones sin reglas rígidas.
              </p>
              <div className="text-xs text-slate-500 space-y-1">
                <p>• «Mi cuerpo hace cosas maravillosas» (con Pompón)</p>
                <p>• «El arcoíris de las emociones» (con Cora)</p>
                <p>• «Cada uno tiene su magia» (con Titi)</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#FF6B4A]">
              <span>Explorar 3 actividades de Jardín</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Nivel Primario */}
          <div
            onClick={() => onNavigate('stages')}
            className="bubbly-card bg-white rounded-3xl p-6 border-2 border-[#2B2FC7]/30 hover:border-[#2B2FC7] shadow-sm flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#2B2FC7]/15 text-[#2B2FC7] font-black text-xs">
                  6 a 12 años
                </span>
                <MunamigoAvatar id="lumi" size="sm" />
              </div>
              <h3 className="text-xl font-black text-[#0B1440] mb-2 group-hover:text-[#2B2FC7] transition">
                Nivel Primario
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Crecimiento corporal en la pubertad, prevención del bullying y burlas por apariencia, y análisis crítico de la publicidad y mandatos de belleza.
              </p>
              <div className="text-xs text-slate-500 space-y-1">
                <p>• «Detectives de los mensajes» (con Mora)</p>
                <p>• «El escudo de mis fortalezas» (con Blu)</p>
                <p>• «Palabras que cuidan» (con Cora)</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#2B2FC7]">
              <span>Explorar 3 actividades de Primaria</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Nivel Secundario */}
          <div
            onClick={() => onNavigate('stages')}
            className="bubbly-card bg-white rounded-3xl p-6 border-2 border-[#0B1440]/30 hover:border-[#0B1440] shadow-sm flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#0B1440]/15 text-[#0B1440] font-black text-xs">
                  13 a 18 años
                </span>
                <MunamigoAvatar id="mora" size="sm" />
              </div>
              <h3 className="text-xl font-black text-[#0B1440] mb-2 group-hover:text-[#0B1440] transition">
                Nivel Secundario
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Presión social, filtros en redes, algoritmos, perfeccionismo, cómo acompañar a un amigo/a sin ponerse en rol de terapeuta y dónde buscar ayuda confidencial.
              </p>
              <div className="text-xs text-slate-500 space-y-1">
                <p>• «Redes sin filtros» (con Lumi)</p>
                <p>• «Mitos bajo la lupa» (con Mora)</p>
                <p>• «¿Cómo acompaño a alguien?» (con Pompón)</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0B1440]">
              <span>Explorar 3 actividades de Secundaria</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Weekly Resources & Modules */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Module Highlight */}
        <div className="lg:col-span-1 bg-gradient-to-br from-[#2B2FC7] to-[#0B1440] text-white rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between shadow-md">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#B4F000] text-[#0B1440] font-black text-xs">
                Módulo Destacado
              </span>
              <span className="text-xs text-slate-300">{featuredModule.duration}</span>
            </div>
            <h3 className="text-2xl font-black leading-tight mb-2">
              {featuredModule.title}
            </h3>
            <p className="text-xs text-slate-200 leading-relaxed mb-4">
              {featuredModule.summary}
            </p>
            <div className="bg-white/10 rounded-2xl p-4 border border-white/10 text-xs text-slate-100 italic">
              «{featuredModule.reflectionQuestion}»
            </div>
          </div>

          <button
            onClick={() => onOpenModule(featuredModule.id)}
            className="mt-6 w-full bubbly-btn py-3 bg-[#B4F000] hover:bg-[#a0d700] text-[#0B1440] font-black text-sm flex items-center justify-center gap-2 cursor-pointer transition shadow"
          >
            <span>Comenzar lectura guiada</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Weekly Picks (Descargables e imprimibles reales) */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-6 md:p-8 border-2 border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#2B2FC7] bg-[#2B2FC7]/10 px-3 py-1 rounded-full">
                  Biblioteca Práctica
                </span>
                <h3 className="text-xl md:text-2xl font-black text-[#0B1440] mt-1">
                  Recursos Destacados de la Semana
                </h3>
              </div>
              <button
                onClick={() => onNavigate('resources')}
                className="text-xs font-bold text-[#2B2FC7] hover:underline"
              >
                Ver todos
              </button>
            </div>

            <div className="space-y-3">
              {weeklyPicks.map(rec => (
                <div
                  key={rec.id}
                  onClick={() => onOpenResource(rec.id)}
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-[#FFFBEB] border border-slate-200 hover:border-amber-300 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-800 text-[10px] font-bold uppercase">
                        {rec.format}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {rec.durationMinutes} min de lectura
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-[#0B1440] group-hover:text-[#2B2FC7] transition">
                      {rec.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-1">{rec.description}</p>
                  </div>

                  <button
                    onClick={e => {
                      e.stopPropagation();
                      onOpenResource(rec.id);
                    }}
                    className="shrink-0 px-3 py-1.5 rounded-full bg-white group-hover:bg-[#2B2FC7] group-hover:text-white border border-slate-300 text-xs font-bold text-slate-700 transition flex items-center gap-1.5 self-start sm:self-center"
                  >
                    <span>Ver e Imprimir</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Todos los documentos incluyen versión para imprimir en papel o guardar como PDF.</span>
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          </div>
        </div>
      </section>

      {/* Sensible Ethical Manifesto Banner */}
      <section className="bg-[#FFFBEB] rounded-[2.5rem] p-6 md:p-8 border-2 border-amber-300 text-[#0B1440]">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="shrink-0 p-3 bg-amber-100 rounded-3xl">
            <MunamigoAvatar id="blu" size="md" />
          </div>
          <div className="space-y-2 text-center md:text-left flex-1">
            <h3 className="text-xl md:text-2xl font-black text-[#0B1440]">
              La salud es un derecho, no una competencia
            </h3>
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
              En MUNA <strong className="text-[#0B1440]">nunca</strong> te vamos a pedir tu peso, registros de lo que comiste ni fotos de tu cuerpo. No usamos sistemas de puntos ni recompensas por cambiar la apariencia. Creemos en una educación respetuosa, basada en la evidencia científica y alineada con la Ley 26.396 de Trastornos Alimentarios y la Ley 26.150 de Educación Sexual Integral.
            </p>
          </div>
          <button
            onClick={() => onNavigate('about')}
            className="shrink-0 px-5 py-2.5 rounded-full bg-[#0B1440] hover:bg-slate-800 text-white font-bold text-xs transition cursor-pointer"
          >
            Conocé nuestro enfoque ético
          </button>
        </div>
      </section>
    </div>
  );
};
