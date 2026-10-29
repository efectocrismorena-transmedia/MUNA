import React, { useState, useEffect } from 'react';
import { UserProfile, ResourceItem } from './types';
import { RESOURCES_LIST } from './data/resources';
import { EDUCATIONAL_MODULES } from './data/educationalContent';

// Components
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { AlertsGuideModal } from './components/AlertsGuideModal';
import { PrintableDocumentModal } from './components/PrintableDocumentModal';
import { MunamigoAvatar } from './components/MunamigoAvatar';

// Views
import { HomeView } from './views/HomeView';
import { LearnView } from './views/LearnView';
import { FamiliesView } from './views/FamiliesView';
import { TeachersView } from './views/TeachersView';
import { StagesView } from './views/StagesView';
import { InteractiveActivitiesView } from './views/InteractiveActivitiesView';
import { ResourcesView } from './views/ResourcesView';
import { LawsView } from './views/LawsView';
import { ArgentinaHelpView } from './views/ArgentinaHelpView';
import { AboutView } from './views/AboutView';

export default function App() {
  // Hash-based web router so URLs work cleanly across reload
  const getInitialView = (): string => {
    const hash = window.location.hash.replace('#', '');
    const validViews = [
      'home',
      'learn',
      'families',
      'teachers',
      'stages',
      'activities',
      'resources',
      'laws',
      'directory',
      'about'
    ];
    return validViews.includes(hash) ? hash : 'home';
  };

  const [currentView, setCurrentView] = useState<string>(getInitialView);

  // Active user profile (stores preference in localStorage)
  const [activeProfile, setActiveProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('muna_active_profile');
    if (saved === 'familia' || saved === 'docente' || saved === 'estudiante' || saved === 'comunidad') {
      return saved;
    }
    return 'familia';
  });

  // Modals state
  const [alertsModalOpen, setAlertsModalOpen] = useState(false);
  const [activeResourceForPrint, setActiveResourceForPrint] = useState<ResourceItem | null>(null);

  // Sync hash routing on hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash !== currentView) {
        setCurrentView(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentView]);

  const handleNavigate = (viewId: string) => {
    setCurrentView(viewId);
    window.location.hash = viewId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChangeProfile = (profile: UserProfile) => {
    setActiveProfile(profile);
    localStorage.setItem('muna_active_profile', profile);
  };

  const handleOpenResource = (resourceId: string) => {
    const found = RESOURCES_LIST.find(r => r.id === resourceId);
    if (found) {
      setActiveResourceForPrint(found);
    }
  };

  const handleOpenModule = (moduleId: string) => {
    handleNavigate('learn');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFBEB] text-[#0B1440] selection:bg-[#B4F000] selection:text-[#0B1440]">
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        activeProfile={activeProfile}
        onChangeProfile={handleChangeProfile}
        onOpenAlerts={() => setAlertsModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24 md:pb-16">
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            activeProfile={activeProfile}
            onChangeProfile={handleChangeProfile}
            onOpenAlerts={() => setAlertsModalOpen(true)}
            onOpenResource={handleOpenResource}
            onOpenModule={handleOpenModule}
          />
        )}

        {currentView === 'learn' && (
          <LearnView onOpenModule={handleOpenModule} />
        )}

        {currentView === 'families' && (
          <FamiliesView
            onOpenResource={handleOpenResource}
            onOpenAlerts={() => setAlertsModalOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'teachers' && (
          <TeachersView
            onOpenResource={handleOpenResource}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'stages' && (
          <StagesView
            onOpenResource={handleOpenResource}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'activities' && (
          <InteractiveActivitiesView />
        )}

        {currentView === 'resources' && (
          <ResourcesView
            onOpenResource={handleOpenResource}
            activeProfile={activeProfile}
          />
        )}

        {currentView === 'laws' && (
          <LawsView />
        )}

        {currentView === 'directory' && (
          <ArgentinaHelpView />
        )}

        {currentView === 'about' && (
          <AboutView />
        )}
      </main>

      {/* Sensitive Guidance Modal ("¿Algo te preocupa?") */}
      <AlertsGuideModal
        isOpen={alertsModalOpen}
        onClose={() => setAlertsModalOpen(false)}
        onNavigateToDirectory={() => {
          setAlertsModalOpen(false);
          handleNavigate('directory');
        }}
      />

      {/* Real Printable Document Modal */}
      <PrintableDocumentModal
        resource={activeResourceForPrint}
        onClose={() => setActiveResourceForPrint(null)}
      />

      {/* Institutional Argentine Footer */}
      <footer className="bg-[#0B1440] text-white pt-12 pb-24 md:pb-12 border-t-4 border-[#2B2FC7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Col 1: Brand & Munamigos */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#2B2FC7] flex items-center justify-center text-2xl text-white font-wedges pt-0.5">
                  m
                </div>
                <span className="text-3xl text-white font-wedges tracking-normal">muna</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Aprender también es un gran plan. Plataforma educativa y preventiva sobre trastornos de la conducta alimentaria (TCA) para comunidades escolares y familias de la República Argentina.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <MunamigoAvatar id="pompon" size="xs" />
                <MunamigoAvatar id="lumi" size="xs" />
                <MunamigoAvatar id="mora" size="xs" />
                <MunamigoAvatar id="cora" size="xs" />
                <MunamigoAvatar id="titi" size="xs" />
                <MunamigoAvatar id="blu" size="xs" />
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="space-y-2 text-xs">
              <span className="text-[11px] font-black uppercase text-[#B4F000] tracking-wider block mb-2">
                Recorridos Educativos
              </span>
              <ul className="space-y-1.5 text-slate-300">
                <li>
                  <button onClick={() => handleNavigate('learn')} className="hover:text-white transition">
                    Aprender sobre los TCA
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('families')} className="hover:text-white transition">
                    Espacio para Familias
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('teachers')} className="hover:text-white transition">
                    Espacio para Docentes
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('stages')} className="hover:text-white transition">
                    Nivel Inicial, Primaria y Secundaria
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('activities')} className="hover:text-white transition">
                    Actividades y Simuladores
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Legal & ESI */}
            <div className="space-y-2 text-xs">
              <span className="text-[11px] font-black uppercase text-[#8AA1FF] tracking-wider block mb-2">
                Marco Legal Argentino
              </span>
              <ul className="space-y-1.5 text-slate-300">
                <li>Ley 26.396 — Trastornos Alimentarios</li>
                <li>Ley 26.150 — Programa Nacional ESI</li>
                <li>Res. CFE 340/18 — Ejes Prioritarios ESI</li>
                <li>Ley 26.061 — Derechos de NNyA</li>
                <li>Ley 26.657 — Salud Mental</li>
                <li>Ley 25.326 — Protección de Datos</li>
                <li>
                  <button onClick={() => handleNavigate('laws')} className="text-[#B4F000] font-bold hover:underline pt-1 block">
                    Ver marco normativo completo ➔
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Hotlines & Direct Emergency */}
            <div className="space-y-3 text-xs bg-white/5 p-4 rounded-2xl border border-white/10">
              <span className="text-[11px] font-black uppercase text-[#FF80C5] tracking-wider block">
                Líneas Gratuitas en Argentina (24hs)
              </span>
              <div className="space-y-2">
                <div>
                  <span className="font-bold text-white block">Línea 141 (Salud Mental)</span>
                  <p className="text-[11px] text-slate-300">Orientación y primera escucha confidencial.</p>
                </div>
                <div>
                  <span className="font-bold text-white block">Línea 102 (Niñez y Adolescencia)</span>
                  <p className="text-[11px] text-slate-300">Protección de derechos en todo el país.</p>
                </div>
                <div>
                  <span className="font-bold text-rose-300 block">SAME 107 / 911 (Emergencias)</span>
                  <p className="text-[11px] text-slate-300">Riesgo vital o descompensación física aguda.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              © {new Date().getFullYear()} MUNA Argentina. Todos los derechos reservados.
            </p>
            <p className="text-center sm:text-right text-[11px] text-slate-400 max-w-xl">
              Este sitio no emite diagnósticos médicos ni tratamientos clínicos. Su finalidad es estrictamente pedagógica y preventiva de acuerdo con la legislación argentina vigente.
            </p>
          </div>
        </div>
      </footer>

      {/* Bottom Sticky Nav for Mobile */}
      <BottomNav
        currentView={currentView}
        onNavigate={handleNavigate}
        activeProfile={activeProfile}
      />
    </div>
  );
}
