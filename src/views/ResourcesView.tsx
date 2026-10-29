import React, { useState, useEffect } from 'react';
import { ResourceItem, UserProfile, EducationalStage } from '../types';
import { RESOURCES_LIST } from '../data/resources';
import {
  FileText,
  Search,
  Filter,
  Printer,
  Download,
  Bookmark,
  Clock,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ResourcesViewProps {
  onOpenResource: (resourceId: string) => void;
  activeProfile: UserProfile;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({
  onOpenResource,
  activeProfile
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [audienceFilter, setAudienceFilter] = useState<string>('all');
  const [stageFilter, setStageFilter] = useState<string>('all');
  const [formatFilter, setFormatFilter] = useState<string>('all');

  // Favorites in localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('muna_favorite_resources');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return ['guia-familias-conversaciones'];
  });

  useEffect(() => {
    localStorage.setItem('muna_favorite_resources', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(f => f !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const filteredResources = RESOURCES_LIST.filter(res => {
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesAudience =
      audienceFilter === 'all' || res.audience.includes(audienceFilter as UserProfile);

    const matchesStage =
      stageFilter === 'all' || res.stages.includes(stageFilter as EducationalStage);

    const matchesFormat = formatFilter === 'all' || res.format === formatFilter;

    return matchesSearch && matchesAudience && matchesStage && matchesFormat;
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2B2FC7] via-[#0B1440] to-[#2B2FC7] rounded-[2.5rem] p-6 md:p-10 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl text-center md:text-left">
          <span className="px-3 py-1 rounded-full bg-[#B4F000] text-[#0B1440] font-black text-xs uppercase tracking-wide inline-block">
            Centro de Recursos y Descargas
          </span>
          <h1 className="text-3xl md:text-4xl font-black leading-tight">
            Materiales Prácticos, Fichas y Protocolos
          </h1>
          <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-medium">
            Todos los recursos pueden leerse en la web o abrirse en formato oficial listo para imprimir en papel o guardar en PDF. Sin enlaces vacíos ni botones decorativos.
          </p>
        </div>
        <div className="shrink-0 flex items-center gap-2 bg-white/10 p-4 rounded-3xl border border-white/20">
          <FileText className="w-10 h-10 text-[#B4F000]" />
          <div>
            <span className="text-2xl font-black text-white">{RESOURCES_LIST.length}</span>
            <p className="text-[11px] text-slate-300 font-bold">Documentos Verificados</p>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-sm space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Buscar por tema, palabra clave (ej. autoestima, publicidad, mesa)..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2B2FC7] text-sm text-[#0B1440]"
          />
        </div>

        {/* Multi-Filter Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1">
              Público destinatario:
            </label>
            <select
              value={audienceFilter}
              onChange={e => setAudienceFilter(e.target.value)}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2B2FC7] bg-white capitalize"
            >
              <option value="all">Todos los públicos</option>
              <option value="familia">Familias</option>
              <option value="docente">Docentes</option>
              <option value="estudiante">Estudiantes / Jóvenes</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1">
              Etapa educativa:
            </label>
            <select
              value={stageFilter}
              onChange={e => setStageFilter(e.target.value)}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2B2FC7] bg-white capitalize"
            >
              <option value="all">Todas las etapas</option>
              <option value="inicial">Nivel Inicial (Jardín)</option>
              <option value="primaria">Nivel Primario</option>
              <option value="secundaria">Nivel Secundario</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1">
              Formato de material:
            </label>
            <select
              value={formatFilter}
              onChange={e => setFormatFilter(e.target.value)}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2B2FC7] bg-white capitalize"
            >
              <option value="all">Todos los formatos</option>
              <option value="guia">Guías prácticas</option>
              <option value="protocolo">Protocolos escolares</option>
              <option value="actividad">Secuencias y talleres</option>
              <option value="planificador">Planificadores</option>
            </select>
          </div>
        </div>
      </div>

      {/* Resources Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.length === 0 ? (
          <div className="col-span-full p-12 text-center bg-white rounded-3xl border-2 border-dashed border-slate-300 text-slate-500 text-sm">
            No se encontraron recursos con esos filtros. Probá ajustando los criterios o la búsqueda.
          </div>
        ) : (
          filteredResources.map(res => {
            const isFav = favorites.includes(res.id);
            return (
              <div
                key={res.id}
                onClick={() => onOpenResource(res.id)}
                className="bubbly-card bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-[#2B2FC7] shadow-sm flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 uppercase tracking-wider">
                      {res.format}
                    </span>
                    <button
                      onClick={e => toggleFavorite(res.id, e)}
                      className={`p-1.5 rounded-full transition ${
                        isFav ? 'text-amber-500 fill-amber-500' : 'text-slate-400 hover:text-amber-500'
                      }`}
                      title={isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                    >
                      <Bookmark className={`w-4 h-4 ${isFav ? 'fill-amber-500' : ''}`} />
                    </button>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-[#0B1440] group-hover:text-[#2B2FC7] transition mb-2 leading-snug">
                    {res.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {res.description}
                  </p>

                  <div className="text-[11px] text-slate-500 space-y-1 mb-4">
                    <p>
                      <strong>Público:</strong> {res.audience.join(', ')}
                    </p>
                    <p className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{res.durationMinutes} min estimados</span>
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#2B2FC7] flex items-center gap-1">
                    <Printer className="w-3.5 h-3.5" />
                    <span>Ver e Imprimir</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#2B2FC7] transform group-hover:translate-x-1 transition" />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
