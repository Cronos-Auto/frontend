import { ArrowRight } from "lucide-react";
import { AppMockup } from "../app-mockup";
import { LoadIn, Pill } from "../reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.6]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e6e8e6 1px, transparent 1px), linear-gradient(to bottom, #e6e8e6 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(70% 55% at 50% 0%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(70% 55% at 50% 0%, black, transparent 75%)",
        }}
      />

      <div className="mx-auto max-w-[1200px] px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div>
            <LoadIn delay={0.05}>
              <Pill>
                <span className="size-1.5 rounded-full bg-brand-600" />
                Projeto ETEC Bento Quirino · Centro Paula Souza
              </Pill>
            </LoadIn>

            <LoadIn delay={0.12}>
              <h1 className="mt-6 font-display text-[42px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[52px] lg:text-[60px]">
                Folhas de ponto bimestrais em{" "}
                <span className="relative whitespace-nowrap text-brand-800">
                  minutos
                  <svg
                    className="absolute -bottom-1.5 left-0 w-full"
                    height="10"
                    viewBox="0 0 200 10"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 7C40 3 120 2 198 5"
                      stroke="#5EE67E"
                      strokeWidth="3.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                ,<br className="hidden sm:block" /> não em dias.
              </h1>
            </LoadIn>

            <LoadIn delay={0.19}>
              <p className="mt-6 max-w-[520px] text-[17px] leading-[1.65] text-ink-muted">
                O Cronos Auto se conecta ao banco de funcionários da unidade,
                preenche o modelo oficial da folha de ponto e devolve um único PDF
                pronto para impressão. A secretaria só escolhe quem entra na
                lista — o resto é automático.
              </p>
            </LoadIn>

            <LoadIn delay={0.26}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#como-funciona"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-800 px-6 text-[15px] font-medium text-white transition-colors hover:bg-brand-950"
                >
                  Ver como funciona
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#problema"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-paper px-6 text-[15px] font-medium text-ink transition-colors hover:bg-surface-2"
                >
                  Entender o problema
                </a>
              </div>
            </LoadIn>

            <LoadIn delay={0.33}>
              <dl className="mt-12 grid max-w-[460px] grid-cols-3 gap-6 border-t border-line pt-6">
                {[
                  { k: "1 clique", v: "para gerar o lote" },
                  { k: "0", v: "campos digitados à mão" },
                  { k: "6x/ano", v: "processo repetido" },
                ].map((s) => (
                  <div key={s.k}>
                    <dt className="font-display text-[22px] font-semibold leading-none text-brand-950">
                      {s.k}
                    </dt>
                    <dd className="mt-1.5 text-[13px] leading-snug text-ink-muted">
                      {s.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </LoadIn>
          </div>

          <LoadIn delay={0.4} y={24}>
            <AppMockup />
          </LoadIn>
        </div>
      </div>
    </section>
  );
}
