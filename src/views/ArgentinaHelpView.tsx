import React, { useState } from 'react';
import { ARGENTINE_DIRECTORY } from '../data/argentineDirectory';
import { ArgentineHelpCenter } from '../types';
import {
  Hospital,
  PhoneCall,
  Clock,
  ShieldCheck,
  MapPin,
  ExternalLink,
  AlertTriangle,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { MunamigoAvatar } from '../components/MunamigoAvatar';

export const ArgentinaHelpView: React.FC = () => {
  const [selectedJurisdiction, setSelectedJurisdiction] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  const jurisdictions = [
    { id: 'all', label: 'Todo el país (Federal)' },
    { id: 'Nacional', label: 'Líneas Nacionales' },
    { id: 'CABA', label: 'CABA (Buenos Aires)' },
    { id: 'Buenos Aires', label: 'Provincia de Buenos Aires' },
    { id: 'Córdoba', label: 'Córdoba' },
    { id: 'Santa Fe', label: 'Santa Fe' },
    { id: 'Mendoza', label: 'Mendoza' }
  ];

  const filteredCenters = ARGENTINE_DIRECTORY.filter(item => {
    const matchesJurisdiction =
      selectedJurisdiction === 'all' || item.jurisdiction === selectedJurisdiction;

    const matchesType =
      typeFilter === 'all' ||
      (typeFilter === 'emergencia' && item.isEmergency) ||
      (typeFilter === 'linea' && item.type === 'linea_telefonica') ||
      (typeFilter === 'hospital' && item.type === 'hospital_publico');

    return matchesJurisdiction && matchesType;
  });

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2B2FC7] via-[#0B1440] to-[#FF6B4A] rounded-[2.5rem] p-6 md:p-10 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="px-3 py-1 rounded-full bg-[#B4F000] text-[#0B1440] font-black text-xs uppercase tracking-wide">
              Directorio Oficial Argentina
            </span>
            <span className="px-3 py-1 rounded-full bg-white/20 text-white font-bold text-xs">
              Verificado • Octubre 2026
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black leading-tight">
            Recursos de Salud y Acompañamiento en Argentina
          </h1>
          <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-medium">
            Instituciones públicas, hospitales pediátricos, servicios de salud mental y líneas gratuitas federales con datos reales y verificados. Sin teléfonos ficticios.
          </p>
        </div>
        <div className="shrink-0 bg-white/10 p-4 rounded-3xl border border-white/20 flex flex-col items-center justify-center text-center self-center min-w-[160px]">
          <MunamigoAvatar id="blu" size="lg" />
          <p className="text-center text-[11px] font-bold text-[#8AA1FF] mt-2 w-full">
            Blu acompaña en la búsqueda
          </p>
        </div>
      </div>

      {/* Emergency Guidance Banner */}
      <div className="bg-rose-50 border-3 border-rose-300 rounded-[2.5rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-rose-600 text-white rounded-2xl shrink-0 mt-1">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg md:text-xl font-black text-rose-950">
              ¿Hay un riesgo físico inmediato o descompensación?
            </h3>
            <p className="text-xs sm:text-sm text-rose-900 leading-relaxed">
              Ante desmayos, convulsiones, vómitos incesantes, debilidad extrema o crisis psiquiátrica aguda, no esperes un turno programado: <strong>llamá de inmediato al SAME 107 (CABA) o 911 en todo el país</strong>, o acudí a la guardia pediátrica o general más cercana.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 shrink-0 w-full md:w-auto">
          <a
            href="tel:107"
            className="px-5 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-black text-center shadow transition flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Llamar SAME 107</span>
          </a>
          <a
            href="tel:141"
            className="px-5 py-3 rounded-full bg-[#2B2FC7] hover:bg-[#1e218a] text-white text-xs font-black text-center shadow transition flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Línea 141 Salud Mental</span>
          </a>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-sm space-y-4">
        {/* Jurisdiction Filter */}
        <div className="space-y-2">
          <span className="text-xs font-black text-slate-500 uppercase tracking-wide block">
            Filtrar por Jurisdicción / Provincia:
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {jurisdictions.map(jur => (
              <button
                key={jur.id}
                onClick={() => setSelectedJurisdiction(jur.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  selectedJurisdiction === jur.id
                    ? 'bg-[#2B2FC7] text-white shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {jur.label}
              </button>
            ))}
          </div>
        </div>

        {/* Type Filter */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100 flex-wrap">
          <span className="text-xs font-bold text-slate-500">Tipo de atención:</span>
          <button
            onClick={() => setTypeFilter('all')}
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              typeFilter === 'all' ? 'bg-[#0B1440] text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setTypeFilter('linea')}
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              typeFilter === 'linea' ? 'bg-[#0B1440] text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            Líneas Telefónicas 24hs
          </button>
          <button
            onClick={() => setTypeFilter('hospital')}
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              typeFilter === 'hospital' ? 'bg-[#0B1440] text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            Hospitales Públicos
          </button>
          <button
            onClick={() => setTypeFilter('emergencia')}
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              typeFilter === 'emergencia' ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            Con Guardia 24hs
          </button>
        </div>
      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCenters.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:border-[#2B2FC7] transition"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-[#2B2FC7]/10 text-[#2B2FC7] font-black text-xs">
                  {item.jurisdiction}
                </span>
                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verificado: {item.lastVerifiedDate}</span>
                </div>
              </div>

              <h2 className="text-lg md:text-xl font-black text-[#0B1440] leading-snug">
                {item.name}
              </h2>

              <p className="text-xs text-slate-600">
                <strong>Destinatarios: </strong> {item.audience}
              </p>

              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-1.5 text-slate-700">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#FF6B4A] shrink-0 mt-0.5" />
                  <span>{item.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#2B2FC7] shrink-0" />
                  <span><strong>Horarios: </strong>{item.hours}</span>
                </div>
                <p className="pt-1 text-slate-600">
                  <strong>Acceso: </strong>{item.accessRequirements}
                </p>
              </div>

              {item.notes && (
                <p className="text-xs text-slate-500 italic bg-[#FFFBEB] p-2.5 rounded-xl border border-amber-200">
                  ℹ️ {item.notes}
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 flex-wrap">
              <a
                href={`tel:${item.phone.replace(/[^0-9]/g, '')}`}
                className="px-4 py-2 rounded-full bg-[#2B2FC7] hover:bg-[#1e218a] text-white text-xs font-bold transition flex items-center gap-1.5 shadow"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Llamar: {item.phone}</span>
              </a>

              {item.website && (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0B1440] text-xs font-semibold transition flex items-center gap-1"
                >
                  <span>Sitio Web</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
