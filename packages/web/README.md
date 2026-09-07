# Cronos Auto — Landing Page

Landing page de apresentação do **Cronos Auto**, projeto acadêmico da ETEC
Bento Quirino (Centro Paula Souza) que propõe automatizar o preenchimento
das folhas de ponto bimestrais da unidade.

> Este pacote (`packages/web`) contém apenas a página institucional/de
> divulgação do projeto — não o sistema de automação em si. Veja
> [Escopo atual](#escopo-atual) abaixo.

## O problema

Hoje, a folha de ponto de cada funcionário é preenchida manualmente,
funcionário por funcionário, repetindo dados que já existem no cadastro da
unidade (nome, função, registro, período). Isso gera:

- Retrabalho quando um campo é digitado ou copiado errado
- Horas de trabalho administrativo gastas numa tarefa mecânica, repetida a
  cada bimestre

## A proposta

O Cronos Auto se conectaria ao banco de funcionários da unidade, preencheria
o modelo oficial da folha de ponto automaticamente e devolveria um único PDF
pronto para impressão — a secretaria só escolheria quem entra na lista.

Fluxo proposto (seção "Como funciona" da página):

1. Selecionar os funcionários que precisam de folha naquele bimestre
2. O sistema busca os dados direto do cadastro (sem digitação manual)
3. O template oficial já usado na unidade é preenchido automaticamente
4. Baixar um único PDF paginado, pronto para impressão

## Roadmap apresentado na página

| Fase | Descrição |
|---|---|
| 1 — Em desenvolvimento | Implementação e validação na ETEC Bento Quirino |
| 2 | Ajuste e padronização do fluxo a partir do uso real |
| 3 | Expansão para outras unidades do Centro Paula Souza |

## Equipe

- **Gabriel Domingues dos Santos** — Desenvolvimento & produto
- **Diogo André Messias** — Desenvolvimento & produto

## Estrutura da página

Seções renderizadas em `app/page.tsx`, cada uma em `components/sections/`:

| Seção | Arquivo | Conteúdo |
|---|---|---|
| Nav | `components/nav.tsx` | Menu com âncoras para as seções |
| Hero | `sections/hero.tsx` | Chamada principal + mockup visual do app |
| Problema | `sections/problem.tsx` | Os três problemas do processo manual atual |
| Benefícios | `sections/benefits.tsx` | Estimativa de redução de tempo (~95%) e vantagens |
| Como funciona | `sections/how-it-works.tsx` | Os 4 passos do fluxo proposto |
| Próximos passos | `sections/expansion.tsx` | Roadmap de expansão em 3 fases |
| Equipe | `sections/team.tsx` | Cards dos integrantes |
| Contato | `sections/cta-footer.tsx` | CTA final + link de contato (mailto) |

## Escopo atual

O que existe hoje é **só a página institucional** — estática, sem
funcionalidades de produto:

- ❌ Sem cadastro/login
- ❌ Sem geração real de folha de ponto ou PDF
- ❌ O "mockup" do app no Hero é decorativo (dados fixos no código)
- ❌ O botão de contato é um `mailto:contato@cronosauto.app`, não um
  formulário com backend

O `packages/api` (Express) e o Prisma (`packages/api/prisma/schema.prisma`)
já estão na stack, prontos para quando as funcionalidades reais do Cronos
Auto começarem a ser implementadas.

## Rodando localmente

Ver o [README na raiz do monorepo](../../README.md) para instruções completas
de instalação e execução (`pnpm install`, variáveis de ambiente, etc.). Em
resumo:

```
cd packages/web
pnpm run dev
```

Abre em `http://localhost:4200`.
