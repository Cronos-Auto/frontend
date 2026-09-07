"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { basePath } from "../lib/base-path";

const links = [
  { href: "#problema", label: "O problema" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#equipe", label: "Equipe" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-surface/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-[1200px] items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src={`${basePath}/images/cronos-mark.png`}
            alt="Cronos Auto"
            className="h-8 w-auto object-contain"
          />
          <span className="font-display text-[19px] font-semibold tracking-tight text-ink">
            Cronos <span className="text-brand-800">Auto</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] text-ink-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contato"
            className="hidden h-11 items-center rounded-full bg-brand-800 px-5 text-[15px] font-medium text-white transition-colors hover:bg-brand-950 md:inline-flex"
          >
            Falar com a equipe
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-paper text-ink md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-surface px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 text-[15px] text-ink-muted hover:bg-surface-2 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-brand-800 px-5 text-[15px] font-medium text-white"
            >
              Falar com a equipe
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
