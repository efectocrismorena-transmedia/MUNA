import React from 'react';
import { X, PhoneCall, AlertTriangle, Heart, Shield, CheckCircle2, Hospital } from 'lucide-react';
import { MunamigoAvatar } from './MunamigoAvatar';

interface AlertsGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToDirectory: () => void;
}

export const AlertsGuideModal: React.FC<AlertsGuideModalProps> = ({
  isOpen,
  onClose,
  onNavigateToDirectory
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-[#0B1440]/70 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border-4 border-[#FF6B4A]/30 my-6 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#FF6B4A] via-[#FF80C5] to-[#2B2FC7] p-6 text-white flex items-start justify-between">
          <div className="flex items-center gap-4">
            <MunamigoAvatar id="blu" size="sm" className="bg-white/20 p-1 rounded-2xl shrink-0" />
            <div>
              <span className="inline-block px-3 py-0.5 rounded-full bg-white/25 text-xs font-bold uppercase tracking-wider mb-1">
                Acompañamiento y Orientación
              </span>
              <h2 className="text-2xl md:text-3xl font-black leading-tight">
                ¿Algo te preocupa?
              </h2>
              <p className="text-xs md:text-sm text-white/90 font-medium">
                "Vamos de a poquito, no tenés que hacerlo solo." — Blu
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 text-white transition shrink-0"
            aria-label="Cerrar modal de orientación"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-[#0B1440]">
          {/* Prudence Warning */}
          <div className="bg-[#FFFBEB] border-2 border-[#FFD64A] rounded-2xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-[#FF6B4A] shrink-0 mt-0.5" />
            <div className="text-xs md:text-sm leading-relaxed">
              <strong className="text-[#0B1440] font-bold block mb-1">
                Aclaración esencial de cuidado:
              </strong>
              Los cambios en la conducta alimentaria o el estado anímico son señales complejas. Ninguna señal aislada confirma un trastorno de la conducta alimentaria (TCA), y la ausencia de cambios de peso visibles no descarta que una persona esté sufriendo. MUNA no emite diagnósticos ni calcula porcentajes de riesgo.
            </div>
          </div>

          {/* 5-Step Protocol */}
          <div>
            <h3 className="text-lg md:text-xl font-black text-[#0B1440] mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#2B2FC7] text-white flex items-center justify-center text-sm font-bold">
                5
              </span>
              Pasos orientativos para actuar con afecto y responsabilidad:
            </h3>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FF80C5] text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-sm md:text-base text-[#0B1440]">Escuchar sin juzgar</h4>
                  <p className="text-xs md:text-sm text-slate-600">
                    Creá un momento tranquilo y a solas. No interrumpas ni discutas sobre si lo que dice es "lógico" o no. Tu presencia contenedora es el primer paso.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FF6B4A] text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-sm md:text-base text-[#0B1440]">Expresar preocupación con respeto y cariño</h4>
                  <p className="text-xs md:text-sm text-slate-600">
                    Hablá desde tu sentir: "Te noto más triste o distante y me importás mucho", en lugar de señalar acusaciones ("Vos no comés nada").
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FFD64A] text-[#0B1440] font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-sm md:text-base text-[#0B1440]">Evitar comentarios sobre peso, apariencia o fuerza de voluntad</h4>
                  <p className="text-xs md:text-sm text-slate-600">
                    No digas "tenés que poner voluntad" o "no te ves mal". Un TCA no es un capricho ni se resuelve con órdenes sobre la comida.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#8AA1FF] text-[#0B1440] font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  4
                </span>
                <div>
                  <h4 className="font-bold text-sm md:text-base text-[#0B1440]">Buscar orientación profesional interdisciplinaria</h4>
                  <p className="text-xs md:text-sm text-slate-600">
                    Consultar con pediatras, médicos clínicos o psicólogos especializados en infancia y adolescencia con perspectiva integral de derechos.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  5
                </span>
                <div>
                  <h4 className="font-bold text-sm md:text-base text-rose-900">Solicitar atención urgente ante riesgo físico o vital</h4>
                  <p className="text-xs md:text-sm text-rose-800">
                    Si se presentan desmayos, vómitos reiterados, mareos severos, dolor torácico o ideas de autolesión, acudir de inmediato a la guardia médica más cercana o llamar al 107 (SAME) / 911.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Help Hotlines in Argentina */}
          <div className="bg-[#2B2FC7]/5 border-2 border-[#2B2FC7]/20 rounded-2xl p-5">
            <h4 className="font-black text-sm md:text-base text-[#2B2FC7] mb-3 flex items-center gap-2">
              <PhoneCall className="w-4 h-4" />
              Líneas gratuitas federales de atención en Argentina (24 Horas):
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#0B1440]">Línea 141</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">24 hs</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  Orientación en Salud Mental y primera escucha. Gratuita desde todo el país.
                </p>
                <a
                  href="tel:141"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#2B2FC7] hover:underline"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  Llamar gratis al 141
                </a>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#0B1440]">Línea 102</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">24 hs</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  Protección de Derechos de Niñas, Niños y Adolescentes en Argentina.
                </p>
                <a
                  href="tel:102"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#2B2FC7] hover:underline"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  Llamar gratis al 102
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            Información orientativa y preventiva — MUNA Argentina
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onNavigateToDirectory();
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2B2FC7] hover:bg-[#1f2294] text-white font-bold text-xs md:text-sm transition shadow"
            >
              <Hospital className="w-4 h-4" />
              <span>Ver Hospitales y Centros en Argentina</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-xs md:text-sm transition"
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
