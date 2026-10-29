import React, { useState } from 'react';
import { UserProfile } from '../types';
import {
  Menu,
  X,
  Heart,
  BookOpen,
  Users,
  GraduationCap,
  Sparkles,
  FileText,
  Scale,
  Hospital,
  AlertCircle,
  ChevronDown,
  Info
} from 'lucide-react';
import { MunamigoAvatar } from './MunamigoAvatar';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  activeProfile: UserProfile;
  onChangeProfile: (profile: UserProfile) => void;
  onOpenAlerts: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  activeProfile,
  onChangeProfile,
  onOpenAlerts
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const profileLabels: Record<UserProfile, { label: string; icon: string; color: string }> = {
    familia: { label: 'Soy Familia', icon: '🏡', color: 'bg-[#FF6B4A] text-white' },
    docente: { label: 'Soy Docente', icon: '🎒', color: 'bg-[#2B2FC7] text-white' },
    estudiante: { label: 'Soy Estudiante / Joven', icon: '✨', color: 'bg-[#FF80C5] text-[#0B1440]' },
    comunidad: { label: 'Quiero Aprender', icon: '🌱', color: 'bg-[#B4F000] text-[#0B1440]' }
  };

  const navItems = [
    { id: 'home', label: 'Inicio', icon: Sparkles },
    { id: 'learn', label: 'Aprender TCA', icon: BookOpen },
    { id: 'families', label: 'Familias', icon: Users },
    { id: 'teachers', label: 'Docentes', icon: GraduationCap },
    { id: 'stages', label: 'Por Etapa', icon: Sparkles },
    { id: 'activities', label: 'Actividades', icon: Heart },
    { id: 'resources', label: 'Recursos', icon: FileText },
    { id: 'laws', label: 'Leyes & ESI', icon: Scale },
    { id: 'directory', label: 'Ayuda Argentina', icon: Hospital },
    { id: 'about', label: 'MUNA', icon: Info }
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFBEB]/95 backdrop-blur-md border-b-2 border-slate-200/80 transition-all">
      {/* Top micro announcement bar */}
      <div className="bg-[#0B1440] text-white px-4 py-1 text-xs text-center font-medium flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[#B4F000] animate-pulse"></span>
        <span>
          Herramienta educativa y preventiva argentina • <strong>Línea 141 Salud Mental:</strong> Orientación telefónica gratuita y federal las 24 hs.
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2">
          {/* Brand Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            {/* Playful logo reproducing reference style */}
            <div className="relative flex items-center justify-center">
              <div className="w-12 h-12 rounded-2xl bg-[#2B2FC7] flex items-center justify-center shadow-md transform group-hover:rotate-3 transition">
                <span className="text-white font-black text-2xl tracking-tighter">m</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#B4F000] ml-0.5"></span>
              </div>
              <div className="absolute -top-1.5 -right-1.5 w-5 h-5">
                <MunamigoAvatar id="pompon" size="xs" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black text-[#0B1440] tracking-tight leading-none">
                muna
              </span>
              <span className="text-[11px] font-bold text-[#2B2FC7] tracking-wider uppercase">
                Aprender es un gran plan
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-full text-xs font-bold transition flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#2B2FC7] text-white shadow-sm'
                      : 'text-[#0B1440] hover:bg-slate-200/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2">
            {/* Profile Dropdown Selector */}
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black shadow-sm transition border border-black/10 ${profileLabels[activeProfile].color}`}
                title="Cambiar tu perfil en MUNA"
              >
                <span>{profileLabels[activeProfile].icon}</span>
                <span>{profileLabels[activeProfile].label}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-80" />
              </button>

              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border-2 border-slate-200 py-2 z-50 animate-fadeIn">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Elegí tu perfil
                  </div>
                  {(Object.keys(profileLabels) as UserProfile[]).map(pKey => (
                    <button
                      key={pKey}
                      onClick={() => {
                        onChangeProfile(pKey);
                        setProfileDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs font-bold flex items-center justify-between transition ${
                        activeProfile === pKey
                          ? 'bg-[#2B2FC7]/10 text-[#2B2FC7]'
                          : 'hover:bg-slate-100 text-[#0B1440]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{profileLabels[pKey].icon}</span>
                        <span>{profileLabels[pKey].label}</span>
                      </span>
                      {activeProfile === pKey && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#2B2FC7] text-white">
                          Activo
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Emergency / Alert Button (¿Algo te preocupa?) */}
            <button
              onClick={onOpenAlerts}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FF6B4A] hover:bg-[#e65a39] text-white text-xs md:text-sm font-extrabold shadow-md transition transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span className="whitespace-nowrap">¿Algo te preocupa?</span>
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-[#0B1440] hover:bg-slate-200/60 transition"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b-2 border-slate-200 px-4 py-4 space-y-3 shadow-xl animate-fadeIn">
          {/* Profile Selector on mobile */}
          <div className="p-3 bg-[#FFFBEB] rounded-2xl border border-amber-200">
            <span className="text-xs font-bold text-slate-500 block mb-2 uppercase tracking-wide">
              Tu perfil actual:
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {(Object.keys(profileLabels) as UserProfile[]).map(pKey => (
                <button
                  key={pKey}
                  onClick={() => onChangeProfile(pKey)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold text-left transition flex items-center gap-2 ${
                    activeProfile === pKey
                      ? 'bg-[#2B2FC7] text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span>{profileLabels[pKey].icon}</span>
                  <span className="truncate">{profileLabels[pKey].label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Nav Items List */}
          <div className="grid grid-cols-2 gap-1 pt-1">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`p-2.5 rounded-xl text-xs font-bold text-left flex items-center gap-2 transition ${
                    isActive
                      ? 'bg-[#2B2FC7] text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
