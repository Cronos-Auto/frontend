import { Building2, CheckCircle2, Network } from "lucide-react";
import { Eyebrow, Reveal } from "../reveal";

export function Expansion() {
  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto max-w-[1200px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <Reveal>
            <Eyebrow>Próximos passos</Eyebrow>
            <h2 className="mt-4 font-display text-[34px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink lg:text-[42px]">
              Começa no Bento Quirino. Não precisa parar aí.
            </h2>
            <p className="mt-5 max-w-[460px] text-[16.5px] leading-[1.65] text-ink-muted">
              A ineficiência no preparo das folhas de ponto não é exclusiva de uma
              unidade. Com a implementação validada na ETEC Bento Quirino, o
              objetivo é levar o Cronos Auto a outras unidades do Centro Paula
              Souza que enfrentam o mesmo processo manual.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-3">
              <Phase
                icon={Building2}
                phase="Fase 1 — Em desenvolvimento"
                title="ETEC Bento Quirino"
                text="Implementação e validação com a equipe administrativa da unidade."
                active
              />
              <Phase
                icon={CheckCircle2}
                phase="Fase 2"
                title="Ajuste e padronização"
                text="Refinamento do fluxo e do template a partir do uso real em campo."
              />
              <Phase
                icon={Network}
                phase="Fase 3"
                title="Outras unidades do Centro Paula Souza"
                text="Ampliação do sistema para escolas com o mesmo processo bimestral."
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Phase({
  icon: Icon,
  phase,
  title,
  text,
  active = false,
}: {
  icon: typeof Building2;
  phase: string;
  title: string;
  text: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex gap-5 rounded-[22px] border p-6 ${
        active
          ? "border-brand-100 bg-brand-50/60"
          : "border-line bg-paper"
      }`}
    >
      <span
        className={`flex size-10 shrink-0 items-center justify-center rounded-full ${
          active ? "bg-brand-800 text-white" : "bg-surface-2 text-ink-muted"
        }`}
      >
        <Icon className="size-[18px]" />
      </span>
      <div>
        <p className="text-[11.5px] font-medium uppercase tracking-[0.14em] text-ink-muted">
          {phase}
        </p>
        <h3 className="mt-1.5 font-display text-[17.5px] font-semibold text-ink">
          {title}
        </h3>
        <p className="mt-1.5 text-[14.5px] leading-[1.6] text-ink-muted">
          {text}
        </p>
      </div>
    </div>
  );
}
