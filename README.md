# Cronos Auto — sandbox-app-template

Monorepo: pnpm workspaces + Turborepo.

## Stack

| Camada  | Tecnologia                                              |
| ------- | -------------------------------------------------------- |
| API     | Express + Prisma + PostgreSQL (Neon)                      |
| Web     | Next.js (App Router) + Tailwind CSS v4 + TanStack Query   |
| Mobile  | Expo + React Native (expo-router)                          |

## Comandos

Os scripts do `package.json` da raiz são o contrato externo — deploy e ferramentas só chamam
esses comandos nomeados. Nunca renomeie ou remova; o que roda por trás pode mudar livremente.

| Comando                                          | Finalidade                                                      |
| ------------------------------------------------- | ----------------------------------------------------------------|
| `pnpm install`                                    | Instala as dependências de todos os pacotes do monorepo          |
| `pnpm run dev`                                    | Sobe web (Next.js) + api (Express) em modo dev                   |
| `pnpm run dev:mobile`                             | Sobe o dev server do Expo                                        |
| `pnpm run build`                                  | Builda todos os pacotes                                          |
| `pnpm run start`                                  | Sobe (ou reinicia) web + api via pm2 (idempotente)                |
| `pnpm run stop`                                   | Para web + api                                                    |
| `pnpm run lint`                                   | Convenções + oxlint                                               |
| `pnpm run typecheck`                              | Checa tipos em todos os pacotes                                   |
| `pnpm run db:generate` / `db:migrate` / `db:push` | Workflows do Prisma (packages/api)                                 |

> **Se o `pnpm run dev` (via Turborepo) falhar no Windows** sem mensagem de erro clara, rode a
> API e o Web em dois terminais separados como alternativa:
> ```
> # terminal 1
> cd packages\api && pnpm run dev
> # terminal 2
> cd packages\web && pnpm run dev
> ```

Convenções fixas que o contrato depende: o app web escuta em `$PORT` (padrão `4200`) e faz
proxy de `/api/*` para a API Express, que escuta internamente em `$API_PORT` (padrão `4201`).
Health check em `/api/health`. Segredos no `.env` da raiz. Nomes dos apps no pm2: `web-app`, `api`.

## Estrutura do projeto

```
.env                         Segredos (gitignored)
pnpm-workspace.yaml           Declaração dos workspaces (packages/*)
packages/
  api/                       API Express (servidor HTTP standalone)
    src/
      index.ts               App Express + listen — CORS, /api/health, monta as rotas
      routes/                Rotas por feature, um arquivo por feature
      db.ts                  Singleton do Prisma Client
    prisma/
      schema.prisma          Schema do Prisma (PostgreSQL via Neon)
  web/                       App Next.js (App Router)
    next.config.ts           Faz proxy de /api/* para packages/api em dev e produção
    scripts/
      run-next.mjs            Wrapper cross-platform pra porta do next dev/start
    app/
      layout.tsx             Layout raiz (Provider, estilos globais)
      page.tsx                Landing page (compõe os componentes de seção)
      globals.css             Entry do Tailwind
    components/               Componentes de UI + seções
    lib/
      api.ts                  Client de fetch tipado (chama /api/* same-origin)
      utils.ts                 Utilitários compartilhados
    queries/                  Hooks do TanStack Query, um arquivo por feature
  mobile/                    Expo + React Native + expo-router (client fino, sem server/db)
    lib/
      api.ts                  Client de fetch apontando pra packages/api (EXPO_PUBLIC_API_URL)
    queries/                  Hooks de dados (useX), um arquivo por feature
```

## Variáveis de ambiente

Segredos e credenciais ficam no `.env` da raiz do projeto (gitignored). Copie o modelo:

```
copy .env.template .env
```
*(no PowerShell: `Copy-Item .env.template .env`; no Mac/Linux: `cp .env.template .env`)*

- `PORT` — porta pública do app web Next.js (padrão `4200`)
- `API_PORT` — porta interna da API Express (padrão `4201`)
- `API_URL` — usada pelo Next.js pra fazer proxy de `/api/*` até a API (derivada de `API_PORT` por padrão)
- `DATABASE_URL` — connection string **pooled** do Postgres do Neon (queries em runtime)
- `DIRECT_URL` — connection string **unpooled** do Neon (migrations do Prisma)
- `EXPO_PUBLIC_API_URL` — URL base da API pro app mobile

Na API (Express), use `process.env.SUA_VAR`. No app web (Next.js), só variáveis com prefixo
`NEXT_PUBLIC_` ficam expostas no navegador.

> A landing page em si (`packages/web`) não usa nada disso — nenhuma seção consulta a API ou
> o banco. Essas variáveis só importam quando funcionalidades reais forem implementadas.

## Deploy no GitHub Pages

A landing page (`packages/web`) pode ser publicada como site estático no GitHub Pages —
GitHub Pages não roda Node.js, então isso serve **só a página**, sem a API/banco.

**Configuração única no repositório:**
1. Settings → Pages → em "Build and deployment", escolha **Source: GitHub Actions**.

Depois disso, todo push na branch `main` roda `.github/workflows/deploy-pages.yml`, que builda
`packages/web` em modo estático (`output: "export"`) e publica em
`https://<seu-usuario>.github.io/<nome-do-repo>/`.

Pra testar o build estático localmente antes de dar push:
```
cd packages/web
pnpm run build:gh-pages
```
Isso gera a pasta `packages/web/out/` — pode abrir num servidor estático local
(ex: `npx serve out`) pra conferir.

> Como o site de projeto do GitHub Pages fica em `/<repo>/` (não na raiz do domínio), o build
> usa `basePath`/`assetPrefix` com o nome do repositório — isso já é calculado automaticamente
> pelo workflow. Não precisa configurar nada manualmente, a não ser se você renomear o repositório.

## Banco de dados

```
cd packages/api
pnpm run db:push        # Sincroniza o schema com o banco (dev)
pnpm run db:generate    # Gera o Prisma Client
pnpm run db:migrate     # Roda migrations (produção)
```

Só é necessário depois que houver `model`s definidos em `packages/api/prisma/schema.prisma` —
hoje ele está vazio (só a configuração de conexão).

## Sobre

Landing page do **Cronos Auto**, projeto acadêmico da ETEC Bento Quirino (Centro Paula Souza).
Veja [packages/web/README.md](packages/web/README.md) para detalhes do produto e do conteúdo
da página.
