import React, { useState } from 'react';
import { ARGENTINE_LAWS } from '../data/argentineLaws';
import { ArgentineLaw } from '../types';
import {
  Scale,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  Sparkles,
  Info
} from 'lucide-react';

export const LawsView: React.FC = () => {
  const [selectedLaw, setSelectedLaw] = useState<ArgentineLaw>(ARGENTINE_LAWS[0]);

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0B1440] via-[#2B2FC7] to-[#0B1440] rounded-[2.5rem] p-6 md:p-10 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="px-3 py-1 rounded-full bg-[#B4F000] text-[#0B1440] font-black text-xs uppercase tracking-wide">
              Marco Normativo Nacional
            </span>
            <span className="px-3 py-1 rounded-full bg-white/20 text-white font-bold text-xs">
              Infoleg & Argentina.gob.ar
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black leading-tight">
            Leyes Argentinas, ESI y Protección de Derechos
          </h1>
          <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-medium">
            MUNA se fundamenta rigurosamente en la legislación nacional argentina sobre trastornos alimentarios (Ley 26.396), Educación Sexual Integral (Ley 26.150 y Res. CFE 340/18), salud mental (Ley 26.657) y protección integral de la niñez (Ley 26.061).
          </p>
        </div>
        <div className="shrink-0 bg-white/10 p-5 rounded-3xl border border-white/20 text-center">
          <Scale className="w-12 h-12 text-[#B4F000] mx-auto mb-2" />
          <span className="text-xl font-black text-white">8 Leyes</span>
          <p className="text-[11px] text-slate-300">Marco Federal Integrado</p>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left side list of laws */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs font-black uppercase text-slate-500 tracking-wider block px-1">
            Normativa Nacional Vigente:
          </span>

          <div className="space-y-2">
            {ARGENTINE_LAWS.map(law => {
              const isSelected = selectedLaw.id === law.id;
              return (
                <button
                  key={law.id}
                  onClick={() => setSelectedLaw(law)}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-[#2B2FC7] text-white border-[#2B2FC7] shadow-md scale-[1.01]'
                      : 'bg-white hover:bg-slate-50 text-[#0B1440] border-slate-200'
                  }`}
                >
                  <div>
                    <span
                      className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full inline-block mb-1 ${
                        isSelected ? 'bg-white/20 text-[#B4F000]' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {law.number} ({law.year})
                    </span>
                    <h3 className="font-black text-sm leading-tight">{law.name}</h3>
                  </div>

                  <span className="text-xs font-bold opacity-70">➔</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right side active law detail */}
        <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-6 md:p-8 border-2 border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold text-[#2B2FC7] uppercase tracking-wide">
                {selectedLaw.issuer}
              </span>
              <h2 className="text-2xl font-black text-[#0B1440] mt-0.5">
                {selectedLaw.number} — {selectedLaw.name}
              </h2>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Verificado oficial: {selectedLaw.lastReviewDate}</span>
            </div>
          </div>

          {/* Law Summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-black text-slate-500 uppercase tracking-wide">
              Síntesis de la Norma:
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-[#FFFBEB] p-4 rounded-2xl border border-amber-200 font-medium">
              {selectedLaw.summary}
            </p>
          </div>

          {/* ESI 5 Axes if applicable */}
          {selectedLaw.esiAxes && (
            <div className="space-y-2">
              <h4 className="text-xs font-black text-[#2B2FC7] uppercase tracking-wide flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Los 5 Ejes Conceptuales de ESI (Res. CFE 340/18):
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {selectedLaw.esiAxes.map((axis, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-bold text-[#0B1440] flex items-center gap-2"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#2B2FC7] text-white flex items-center justify-center text-[10px]">
                      {aIdx + 1}
                    </span>
                    <span>{axis}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Application inside MUNA */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-[#0B1440] uppercase tracking-wide">
              Aplicación Concreta en la Plataforma MUNA:
            </h4>
            <ul className="space-y-2">
              {selectedLaw.munaApplication.map((app, appIdx) => (
                <li
                  key={appIdx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B4A] shrink-0 mt-0.5" />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Infoleg Link button */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
            <span className="text-xs text-slate-500">
              Texto completo publicado en el Boletín Oficial de la República Argentina.
            </span>
            <a
              href={selectedLaw.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B1440] hover:bg-slate-800 text-white text-xs font-bold transition shadow"
            >
              <span>Ver texto oficial en Infoleg</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
