import React from 'react';
import { ResourceItem } from '../types';
import { Printer, Download, X, CheckCircle2, ShieldCheck, Calendar, BookOpen } from 'lucide-react';

interface PrintableDocumentModalProps {
  resource: ResourceItem | null;
  onClose: () => void;
}

export const PrintableDocumentModal: React.FC<PrintableDocumentModalProps> = ({
  resource,
  onClose
}) => {
  if (!resource) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    let content = `====================================================\n`;
    content += `${resource.printableTitle}\n`;
    content += `Plataforma MUNA — Educación y Prevención de los TCA\n`;
    content += `Revisión: Octubre 2026 | Estado: Verificado\n`;
    content += `====================================================\n\n`;
    content += `PÚBLICO DESTINATARIO: ${resource.audience.join(', ')}\n`;
    content += `ETAPAS: ${resource.stages.join(', ')}\n`;
    content += `DURACIÓN ESTIMADA: ${resource.durationMinutes} minutos\n`;
    content += `MATERIALES NECESARIOS: ${resource.materialsNeeded}\n`;
    content += `RECOMENDACIONES DE USO: ${resource.recommendedUse}\n\n`;
    content += `----------------------------------------------------\n`;
    content += `CONTENIDO EDUCATIVO PRINCIPAL:\n`;
    content += `----------------------------------------------------\n\n`;

    resource.printableSections.forEach((sec, idx) => {
      content += `${idx + 1}. ${sec.sectionTitle.toUpperCase()}\n`;
      sec.paragraphs.forEach(p => {
        content += `${p}\n\n`;
      });
      if (sec.bulletPoints && sec.bulletPoints.length > 0) {
        sec.bulletPoints.forEach(bp => {
          content += `  • ${bp}\n`;
        });
        content += `\n`;
      }
    });

    content += `\n====================================================\n`;
    content += `LÍNEAS DE ORIENTACIÓN EN ARGENTINA (24 Horas):\n`;
    content += `• Línea 141 (Salud Mental - Gratuita y Federal)\n`;
    content += `• Línea 102 (Derechos de Niñas, Niños y Adolescentes)\n`;
    content += `• Emergencias Médicas: 107 (SAME) o 911 en todo el país\n`;
    content += `Este material es educativo y preventivo. No reemplaza el diagnóstico ni tratamiento médico/psicológico.\n`;
    content += `====================================================\n`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `MUNA_${resource.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-[#0B1440]/60 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border-4 border-[#2B2FC7]/20 my-8 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header bar (Not printed) */}
        <div className="bg-[#0B1440] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-[#B4F000] text-[#0B1440] font-black flex items-center justify-center text-sm">
              M
            </span>
            <div>
              <h3 className="font-bold text-base md:text-lg leading-tight">Documento Oficial MUNA</h3>
              <p className="text-xs text-slate-300">Formato listo para lectura o impresión institucional</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B4F000] hover:bg-[#a0d700] text-[#0B1440] font-bold text-sm shadow transition"
              title="Abrir diálogo de impresión o guardar como PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / PDF</span>
            </button>
            <button
              onClick={handleDownloadText}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition"
              title="Descargar archivo de texto formateado"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Descargar TXT</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Printable Paper Canvas */}
        <div className="p-6 md:p-10 overflow-y-auto bg-white text-[#0B1440] font-sans selection:bg-[#B4F000]">
          {/* Institutional Header */}
          <div className="border-b-2 border-slate-200 pb-6 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#2B2FC7] text-white flex items-center justify-center font-extrabold text-2xl tracking-tighter">
                  muna
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-black text-[#0B1440] leading-tight">
                    {resource.printableTitle}
                  </h1>
                  <p className="text-sm font-semibold text-[#2B2FC7]">
                    Aprender también es un gran plan — Prevención, Información y Acompañamiento en TCA
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verificado por equipo MUNA (2026)</span>
              </div>
            </div>

            {/* Metadata Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 text-xs bg-[#FFFBEB] p-3 rounded-2xl border border-amber-100">
              <div>
                <span className="text-slate-500 block font-medium">Público:</span>
                <span className="font-bold text-[#0B1440] capitalize">{resource.audience.join(', ')}</span>
              </div>
              <div>
                <span className="text-slate-500 block font-medium">Etapas:</span>
                <span className="font-bold text-[#0B1440] capitalize">{resource.stages.join(', ')}</span>
              </div>
              <div>
                <span className="text-slate-500 block font-medium">Tiempo sugerido:</span>
                <span className="font-bold text-[#0B1440]">{resource.durationMinutes} minutos</span>
              </div>
              <div>
                <span className="text-slate-500 block font-medium">Formato:</span>
                <span className="font-bold text-[#0B1440] capitalize">{resource.format}</span>
              </div>
            </div>
          </div>

          {/* Pedagogy info box */}
          <div className="mb-6 bg-slate-50 rounded-2xl p-4 border border-slate-200 text-sm">
            <p className="mb-1">
              <strong className="text-[#0B1440]">Objetivos y Materiales: </strong>
              {resource.materialsNeeded}
            </p>
            <p className="text-slate-600">
              <strong className="text-[#0B1440]">Recomendación de uso: </strong>
              {resource.recommendedUse}
            </p>
          </div>

          {/* Sections Body */}
          <div className="space-y-6 text-sm md:text-base leading-relaxed">
            {resource.printableSections.map((sec, idx) => (
              <div key={idx} className="bg-white">
                <h2 className="text-lg md:text-xl font-bold text-[#0B1440] mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#8AA1FF]/20 text-[#2B2FC7] flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </span>
                  {sec.sectionTitle}
                </h2>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-slate-700 mb-3">
                    {p}
                  </p>
                ))}
                {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                  <ul className="space-y-2 mt-3 bg-[#FFFBEB]/50 p-4 rounded-2xl border border-amber-100">
                    {sec.bulletPoints.map((bp, bpIdx) => (
                      <li key={bpIdx} className="flex items-start gap-2.5 text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-[#FF6B4A] shrink-0 mt-1" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Institutional Footer */}
          <div className="mt-8 pt-6 border-t-2 border-slate-200 text-xs text-slate-500 space-y-2 bg-slate-50 p-4 rounded-2xl">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-bold text-[#0B1440]">MUNA Argentina — Plataforma Educativa de Salud Integral</span>
              <span>Revisado conforme a Ley 26.396, Ley 26.150 (ESI) y Ley 26.061</span>
            </div>
            <p className="text-slate-600 italic">
              Aviso sanitario importante: Este material no constituye diagnóstico médico ni tratamiento nutricional o psicológico. Ante signos de alerta persistentes o riesgo físico inminente, recurrir a los servicios de salud y de emergencia (SAME 107 / 911 / Línea 141 Salud Mental las 24 horas).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
