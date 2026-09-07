# Cronos Auto — Design System

Landing page institucional do Cronos Auto: sistema que automatiza a preparação das folhas de ponto bimestrais da ETEC Bento Quirino (Centro Paula Souza).

Público: gestores e direção da escola (tomadores de decisão). Tom: minimalista, profissional, confiável, sem exageros de "startup hype".

## Referência visual

Layout claro e arejado, grid tipo bento com cards arredondados e borda fina, badges em pílula, muito espaço em branco, seção final escura para o CTA. Nada de sombras pesadas, nada de gradientes roxos.

## Cores

Marca (verdes):

| Token | Hex | Uso |
|---|---|---|
| `--brand-50` | `#E5FFEA` | fundos suaves, badges, highlights |
| `--brand-300` | `#59FF85` | acento vivo (detalhes, glow na seção escura) |
| `--brand-400` | `#5EE67E` | acento, ícones sobre fundo escuro |
| `--brand-600` | `#53B668` | hover, gráficos |
| `--brand-800` | `#326A3D` | primária de ações e links |
| `--brand-950` | `#103F1A` | texto forte, seção escura |

Neutros:

- `--paper` `#FFFFFF` — cards
- `--surface` `#FAFAFA` — fundo da página
- `--surface-2` `#F4F5F4` — blocos alternados
- `--line` `#E6E8E6` — bordas 1px
- `--ink` `#14181A` — texto principal
- `--ink-muted` `#6B7370` — texto secundário

Regra: verde é acento e identidade, não preenchimento. Superfícies são neutras; verde aparece em badges, ícones, números-chave, botões e na seção escura final.

## Tipografia

- Display: **Sora** (600/700) — headlines, números, nomes de seção. `tracking-tight`, line-height 1.05–1.15.
- Corpo: **DM Sans** (400/500) — parágrafos, labels, UI. line-height 1.6.
- Eyebrow/labels: DM Sans 500, 12px, `uppercase`, `tracking-[0.14em]`, cor `--ink-muted`.
- Escala: hero 56–76px, h2 36–44px, h3 20–22px, corpo 16–18px, small 14px.
- Fontes self-hosted em `public/fonts/` (woff2, `font-display: swap`).

## Layout

- Container central 1200px, padding lateral 24px (mobile) / 40px (desktop).
- Ritmo vertical: seções com 96–140px de padding.
- Bento grid: 12 colunas, cards ocupando 4/5/7/8 colunas para quebrar a simetria — nunca 3 cards idênticos em fila sem variação de tamanho.
- Cards: `bg-paper`, `border border-line`, raio 20–28px, padding 28–36px, sem sombra (ou sombra mínima `0 1px 2px rgba(0,0,0,0.04)`).
- Badges/pílulas: raio full, `bg-brand-50`, texto `brand-950`, borda `#CFF3D8`.

## Componentes

- **Nav**: sticky, fundo translúcido com blur, borda inferior 1px, logo à esquerda, links no centro (desktop), CTA sólido à direita.
- **Botões**: primário `bg-brand-800` texto branco, hover `brand-950`; secundário `bg-paper` + borda `line`, hover `bg-surface-2`. Altura 48px, raio full, peso 500.
- **Mockup do sistema**: recriado em React/CSS (janela com barra de título, lista de funcionários com checkbox, botão "Gerar PDF", preview da folha) — não usar screenshot falso.
- **Stat card**: número em Sora 48–64px `brand-950`, label em DM Sans 14px muted.
- **Passos**: numeração `01–04` em Sora, linha conectora vertical/horizontal 1px `line`.
- **Seção escura (CTA + footer)**: `bg-brand-950`, texto branco, glow radial `brand-400/20`, botão `bg-brand-400` com texto `brand-950`.

## Motion (biblioteca Motion)

- Um load orquestrado: hero com stagger de 60ms (eyebrow → headline → subtítulo → botões → mockup), y 16px → 0, opacidade 0 → 1, duração 0.6s, ease `[0.22, 1, 0.36, 1]`.
- Seções revelam ao entrar na viewport (`whileInView`, `once: true`), mesmo easing.
- Hover: transform sutil (translateY -2px) e mudança de cor. Sem bounce, sem paralaxe.
- Respeitar `prefers-reduced-motion`.

## Conteúdo — regras

- Idioma: português do Brasil.
- Não inventar dados oficiais. Métricas de ganho são apresentadas como estimativa/objetivo do projeto (ex. "estimativa do projeto").
- Seções: Nav · Hero · O problema · Benefícios (bento com métricas) · Como funciona (4 passos) · Expansão (Bento Quirino → Centro Paula Souza) · Equipe · CTA escuro + footer.
- Equipe: Gabriel Domingues dos Santos, Diogo André Messias.
