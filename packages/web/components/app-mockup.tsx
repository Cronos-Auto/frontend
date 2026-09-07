"use client";
import { motion } from "motion/react";
import { Check, Download, FileText, Search } from "lucide-react";

const employees = [
  { name: "Ana Paula Ribeiro", role: "Professora — Informática", selected: true },
  { name: "Carlos Eduardo Lima", role: "Auxiliar administrativo", selected: true },
  { name: "Fernanda Souza Alves", role: "Professora — Matemática", selected: true },
  { name: "Marcos Vinícius Rocha", role: "Coordenador de curso", selected: false },
  { name: "Juliana Teixeira", role: "Secretaria acadêmica", selected: true },
  { name: "Roberto Nogueira", role: "Professor — Química", selected: false },
];

export function AppMockup() {
  const selectedCount = employees.filter((e) => e.selected).length;

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-x-10 -top-10 bottom-0 -z-10 rounded-[48px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(94,230,126,0.22),transparent_70%)]" />

      <div className="overflow-hidden rounded-[24px] border border-line bg-paper shadow-[0_1px_2px_rgba(0,0,0,0.04),0_24px_60px_-32px_rgba(16,63,26,0.25)]">
        {/* title bar */}
        <div className="flex items-center gap-3 border-b border-line bg-surface-2/70 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-line" />
            <span className="size-2.5 rounded-full bg-line" />
            <span className="size-2.5 rounded-full bg-line" />
          </div>
          <div className="mx-auto flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-[11px] text-ink-muted">
            <span className="size-1.5 rounded-full bg-brand-400" />
            cronos-auto · folhas de ponto
          </div>
        </div>

        <div className="grid gap-0 md:grid-cols-[1.15fr_0.85fr]">
          {/* selection panel */}
          <div className="border-line p-5 md:border-r">
            <div className="flex items-center justify-between">
              <p className="font-display text-[15px] font-semibold text-ink">
                Selecionar funcionários
              </p>
              <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-medium text-brand-950">
                Bimestre 4 · 2026
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2.5 text-[13px] text-ink-muted">
              <Search className="size-3.5" />
              Buscar no banco de funcionários
            </div>

            <div className="mt-3 space-y-1.5">
              {employees.map((e, i) => (
                <motion.div
                  key={e.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.55 + i * 0.07,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 ${
                    e.selected
                      ? "border-brand-100 bg-brand-50/60"
                      : "border-transparent"
                  }`}
                >
                  <span
                    className={`flex size-4.5 shrink-0 items-center justify-center rounded-[5px] border ${
                      e.selected
                        ? "border-brand-800 bg-brand-800"
                        : "border-line bg-paper"
                    }`}
                  >
                    {e.selected && (
                      <Check className="size-3 text-white" strokeWidth={3} />
                    )}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[13px] font-medium text-ink">
                      {e.name}
                    </span>
                    <span className="block truncate text-[11.5px] text-ink-muted">
                      {e.role}
                    </span>
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
              <span className="text-[12.5px] text-ink-muted">
                {selectedCount} selecionados
              </span>
              <span className="inline-flex h-10 items-center gap-2 rounded-full bg-brand-800 px-4 text-[13px] font-medium text-white">
                <Download className="size-3.5" />
                Gerar PDF
              </span>
            </div>
          </div>

          {/* pdf preview */}
          <div className="relative bg-surface-2/50 p-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
              Pré-visualização
            </p>

            <div className="relative mt-3">
              <div className="absolute left-3 top-3 h-full w-full rounded-lg border border-line bg-paper/70" />
              <div className="absolute left-1.5 top-1.5 h-full w-full rounded-lg border border-line bg-paper/85" />
              <div className="relative rounded-lg border border-line bg-paper p-4">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[10px] font-semibold leading-tight text-brand-950">
                    ETEC BENTO QUIRINO
                    <span className="block font-sans text-[8px] font-normal text-ink-muted">
                      Centro Paula Souza
                    </span>
                  </span>
                  <FileText className="size-4 text-brand-600" />
                </div>

                <p className="mt-3 text-[9px] font-semibold uppercase tracking-wide text-ink">
                  Folha de ponto — bimestral
                </p>

                <div className="mt-2 space-y-1">
                  <MiniField label="Nome" value="Ana Paula Ribeiro" />
                  <MiniField label="Função" value="Professora — Informática" />
                  <MiniField label="Registro" value="BQ-04821" />
                </div>

                <div className="mt-3 overflow-hidden rounded border border-line">
                  <div className="grid grid-cols-4 bg-surface-2 text-[7.5px] font-medium text-ink-muted">
                    {["Dia", "Entrada", "Saída", "Assin."].map((h) => (
                      <span key={h} className="px-1.5 py-1">
                        {h}
                      </span>
                    ))}
                  </div>
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-4 border-t border-line text-[7.5px] text-ink-muted"
                    >
                      <span className="px-1.5 py-1">{String(i + 1).padStart(2, "0")}</span>
                      <span className="px-1.5 py-1 text-line">—</span>
                      <span className="px-1.5 py-1 text-line">—</span>
                      <span className="px-1.5 py-1 text-line">—</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 flex items-center gap-2.5 rounded-xl border border-brand-100 bg-brand-50 px-3.5 py-3"
            >
              <span className="flex size-6 items-center justify-center rounded-full bg-brand-800">
                <Check className="size-3.5 text-white" strokeWidth={3} />
              </span>
              <span className="text-[12px] leading-snug text-brand-950">
                <strong className="font-semibold">4 folhas preenchidas</strong> —
                prontas para impressão
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-end gap-1.5">
      <span className="text-[7.5px] uppercase tracking-wide text-ink-muted">
        {label}
      </span>
      <span className="flex-1 border-b border-dashed border-line pb-0.5 text-[8.5px] text-ink">
        {value}
      </span>
    </div>
  );
}
