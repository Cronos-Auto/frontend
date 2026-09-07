import { Database, FileCheck2, Printer, ShieldCheck } from "lucide-react";
import { Eyebrow, Reveal } from "../reveal";

export function Benefits() {
  return (
    <section id="beneficios" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-[1200px] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="max-w-[640px]">
            <Eyebrow>Benefícios</Eyebrow>
            <h2 className="mt-4 font-display text-[34px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink lg:text-[42px]">
              O mesmo documento oficial, sem o trabalho manual.
            </h2>
            <p className="mt-5 text-[16.5px] leading-[1.65] text-ink-muted">
              O template atual continua o mesmo — muda apenas quem o preenche.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-3 lg:grid-cols-12">
          {/* big stat card */}
          <Reveal className="lg:col-span-7" delay={0.05}>
            <div className="flex h-full flex-col rounded-[26px] border border-line bg-paper p-7 lg:p-9">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-[12px] font-medium text-brand-950">
                  Estimativa do projeto
                </span>
                <FileCheck2 className="size-5 text-brand-600" />
              </div>
              <div className="mt-10">
                <p className="font-display text-[64px] font-semibold leading-none tracking-[-0.03em] text-brand-950 lg:text-[76px]">
                  ~95%
                </p>
                <p className="mt-3 max-w-[380px] text-[16px] leading-[1.6] text-ink-muted">
                  de redução no tempo de preparação do lote bimestral de folhas de
                  ponto, comparado ao preenchimento manual do modelo.
                </p>
              </div>

              <dl className="mt-auto grid grid-cols-3 gap-4 pt-10">
                {[
                  { k: "6", v: "lotes gerados por ano" },
                  { k: "1", v: "PDF por lote, paginado" },
                  { k: "0", v: "campos digitados à mão" },
                ].map((s) => (
                  <div key={s.v} className="rounded-2xl bg-surface p-4">
                    <dt className="font-display text-[26px] font-semibold leading-none text-brand-800">
                      {s.k}
                    </dt>
                    <dd className="mt-2 text-[12.5px] leading-snug text-ink-muted">
                      {s.v}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 border-t border-line pt-6">
                <div className="mb-2 flex items-center justify-between text-[12.5px] text-ink-muted">
                  <span>Preenchimento manual</span>
                  <span>Horas de trabalho</span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-2">
                  <div className="h-full w-[92%] rounded-full bg-brand-950/80" />
                </div>
                <div className="mb-2 mt-5 flex items-center justify-between text-[12.5px] text-ink-muted">
                  <span className="font-medium text-brand-800">Cronos Auto</span>
                  <span>Minutos</span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-2">
                  <div className="h-full w-[7%] rounded-full bg-brand-400" />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-3 lg:col-span-5">
            <Reveal delay={0.12}>
              <Card
                icon={Database}
                title="Dados direto do cadastro"
                text="O sistema é alimentado pelo banco de funcionários da unidade, então nome, função e registro chegam sempre corretos."
              />
            </Reveal>
            <Reveal delay={0.18}>
              <Card
                icon={ShieldCheck}
                title="Padrão preservado"
                text="Template pré-definido e idêntico ao usado hoje — nenhuma adaptação exigida de quem recebe o documento."
              />
            </Reveal>
            <Reveal delay={0.24}>
              <Card
                icon={Printer}
                title="Um PDF, pronto para imprimir"
                text="Todas as folhas selecionadas saem em um único arquivo paginado, na ordem escolhida."
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Database;
  title: string;
  text: string;
}) {
  return (
    <div className="h-full rounded-[26px] border border-line bg-paper p-7">
      <span className="flex size-10 items-center justify-center rounded-full bg-brand-50 text-brand-800">
        <Icon className="size-[18px]" />
      </span>
      <h3 className="mt-5 font-display text-[18px] font-semibold text-ink">
        {title}
      </h3>
      <p className="mt-2 text-[15px] leading-[1.6] text-ink-muted">{text}</p>
    </div>
  );
}
