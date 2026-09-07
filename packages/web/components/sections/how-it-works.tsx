import { Eyebrow, Reveal } from "../reveal";

const steps = [
  {
    n: "01",
    title: "Selecione os funcionários",
    text: "A lista vem do banco de funcionários da unidade. Marque quem precisa de folha neste bimestre.",
  },
  {
    n: "02",
    title: "O sistema busca os dados",
    text: "Nome, função, registro e período são lidos direto do cadastro — sem digitação, sem copiar e colar.",
  },
  {
    n: "03",
    title: "O template é preenchido",
    text: "Cada folha é gerada sobre o modelo oficial já usado na unidade, com os dados no lugar certo.",
  },
  {
    n: "04",
    title: "Baixe o PDF e imprima",
    text: "Um único arquivo com todas as folhas do lote, paginado e pronto para a impressora.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-t border-line bg-paper">
      <div className="mx-auto max-w-[1200px] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="max-w-[620px]">
            <Eyebrow>Como funciona</Eyebrow>
            <h2 className="mt-4 font-display text-[34px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink lg:text-[42px]">
              Quatro passos, do cadastro à impressora.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={0.07 * i}>
              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="font-display text-[13px] font-semibold tracking-[0.08em] text-brand-800">
                    {s.n}
                  </span>
                  <span className="h-px flex-1 bg-line" />
                </div>
                <h3 className="mt-5 font-display text-[19px] font-semibold leading-snug text-ink">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-[1.6] text-ink-muted">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 overflow-hidden rounded-[26px] border border-line bg-surface">
            <div className="grid divide-line md:grid-cols-3 md:divide-x">
              {[
                {
                  k: "Hoje",
                  v: "Modelo em branco preenchido manualmente para cada funcionário",
                },
                {
                  k: "Com o Cronos Auto",
                  v: "Seleção da lista + geração automática do lote completo",
                },
                {
                  k: "Resultado",
                  v: "Folhas padronizadas, sem erro de digitação, prontas para assinatura",
                },
              ].map((row) => (
                <div key={row.k} className="p-7">
                  <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ink-muted">
                    {row.k}
                  </p>
                  <p className="mt-3 text-[15.5px] leading-[1.6] text-ink">
                    {row.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
