import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "../reveal";

export function CtaFooter() {
  const year = new Date().getFullYear();

  return (
    <section id="contato" className="relative overflow-hidden bg-brand-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_50%_0%,rgba(94,230,126,0.22),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1200px] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="mx-auto max-w-[720px] text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12.5px] font-medium text-brand-300">
              <span className="size-1.5 rounded-full bg-brand-300" />
              Em desenvolvimento para a ETEC Bento Quirino
            </span>

            <h2 className="mt-7 font-display text-[36px] font-semibold leading-[1.08] tracking-[-0.02em] text-white lg:text-[50px]">
              Pronto para tirar as folhas de ponto da fila de tarefas manuais?
            </h2>

            <p className="mx-auto mt-5 max-w-[520px] text-[16.5px] leading-[1.65] text-white/65">
              Fale com a equipe para acompanhar a implementação na unidade ou
              avaliar o uso do Cronos Auto na sua escola.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:contato@cronosauto.app"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-400 px-6 text-[15px] font-medium text-brand-950 transition-colors hover:bg-brand-300"
              >
                <Mail className="size-4" />
                Falar com a equipe
              </a>
              <a
                href="#como-funciona"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
              >
                Rever o funcionamento
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-20 flex flex-col items-center gap-6 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src="/images/cronos-mark-light.png"
              alt="Cronos Auto"
              className="h-7 w-auto object-contain"
            />
            <span className="font-display text-[16px] font-semibold text-white">
              Cronos <span className="text-brand-400">Auto</span>
            </span>
          </div>

          <p className="text-center text-[13px] text-white/45">
            © {year} Cronos Auto · Projeto acadêmico — ETEC Bento Quirino, Centro
            Paula Souza
          </p>
        </div>
      </div>
    </section>
  );
}
