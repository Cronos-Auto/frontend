import { Eyebrow, Reveal } from "../reveal";

const team = [
  {
    name: "Gabriel Domingues dos Santos",
    initials: "GD",
    role: "Desenvolvimento & produto",
  },
  {
    name: "Diogo André Messias",
    initials: "DM",
    role: "Desenvolvimento & produto",
  },
];

export function Team() {
  return (
    <section id="equipe" className="border-t border-line bg-paper">
      <div className="mx-auto max-w-[1200px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Equipe</Eyebrow>
            <h2 className="mt-4 font-display text-[34px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink lg:text-[42px]">
              Quem está construindo o Cronos Auto.
            </h2>
            <p className="mt-5 max-w-[400px] text-[16.5px] leading-[1.65] text-ink-muted">
              Um projeto pensado dentro da própria unidade, a partir de um
              problema observado na rotina administrativa.
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={0.08 * i}>
                <div className="h-full rounded-[26px] border border-line bg-surface p-7">
                  <span className="flex size-14 items-center justify-center rounded-full bg-brand-950 font-display text-[17px] font-semibold text-brand-300">
                    {m.initials}
                  </span>
                  <h3 className="mt-6 font-display text-[19px] font-semibold leading-snug text-ink">
                    {m.name}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] text-ink-muted">{m.role}</p>
                  <p className="mt-5 border-t border-line pt-4 text-[13px] text-ink-muted">
                    ETEC Bento Quirino
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
