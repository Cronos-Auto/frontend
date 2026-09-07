import { ClipboardX, Clock8, Repeat2 } from "lucide-react";
import { Eyebrow, Reveal } from "../reveal";

const problems = [
  {
    icon: ClipboardX,
    title: "Preenchimento manual, funcionário por funcionário",
    text: "Nome, função, registro e período são digitados à mão dentro do modelo, repetindo dados que já existem no cadastro da unidade.",
  },
  {
    icon: Repeat2,
    title: "Retrabalho por erro de digitação",
    text: "Um campo trocado ou copiado da folha anterior obriga a refazer, reimprimir e reconferir o documento inteiro.",
  },
  {
    icon: Clock8,
    title: "Horas da equipe presas em tarefa mecânica",
    text: "A cada bimestre o trabalho começa do zero e consome tempo administrativo que deveria estar em atividades de fato importantes.",
  },
];

export function Problem() {
  return (
    <section id="problema" className="border-t border-line bg-paper">
      <div className="mx-auto max-w-[1200px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <Eyebrow>O problema hoje</Eyebrow>
            <h2 className="mt-4 font-display text-[34px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink lg:text-[42px]">
              Um processo que se repete a cada bimestre — sempre do zero.
            </h2>
            <p className="mt-5 max-w-[420px] text-[16.5px] leading-[1.65] text-ink-muted">
              A folha de ponto é um documento simples, mas preparar dezenas delas
              manualmente transforma uma rotina previsível em um gargalo
              administrativo.
            </p>
          </Reveal>

          <div className="space-y-3">
            {problems.map((p, i) => (
              <Reveal key={p.title} delay={0.08 * i}>
                <div className="group flex gap-5 rounded-[22px] border border-line bg-surface p-6 transition-colors hover:border-brand-100 hover:bg-brand-50/40 lg:p-7">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-brand-800 transition-colors group-hover:border-brand-100">
                    <p.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-[18px] font-semibold leading-snug text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-[1.6] text-ink-muted">
                      {p.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
