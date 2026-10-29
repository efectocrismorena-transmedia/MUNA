import React from 'react';
import { Sparkles, BookOpen, Users, FileText, PhoneCall } from 'lucide-react';
import { UserProfile } from '../types';

interface BottomNavProps {
  currentView: string;
  onNavigate: (view: string) => void;
  activeProfile: UserProfile;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentView,
  onNavigate,
  activeProfile
}) => {
  const getSpaceLabel = () => {
    if (activeProfile === 'docente') return 'Docentes';
    if (activeProfile === 'estudiante') return 'Jóvenes';
    return 'Familias';
  };

  const getSpaceView = () => {
    if (activeProfile === 'docente') return 'teachers';
    if (activeProfile === 'estudiante') return 'activities';
    return 'families';
  };

  const navItems = [
    { id: 'home', label: 'Inicio', icon: Sparkles },
    { id: 'learn', label: 'Aprender', icon: BookOpen },
    { id: getSpaceView(), label: getSpaceLabel(), icon: Users },
    { id: 'resources', label: 'Recursos', icon: FileText },
    { id: 'directory', label: 'Ayuda', icon: PhoneCall }
  ];

  return (
    <nav className="xl:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-slate-200/80 px-2 py-2 shadow-2xl">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all ${
                isActive
                  ? 'text-[#2B2FC7] font-black scale-105'
                  : 'text-slate-500 hover:text-[#0B1440]'
              }`}
            >
              <div
                className={`p-1.5 rounded-xl transition ${
                  isActive ? 'bg-[#2B2FC7]/10 text-[#2B2FC7]' : 'text-slate-500'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight font-bold">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
