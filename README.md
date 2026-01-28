# MyShop

Uma loja de exemplo construída com React + Vite + TypeScript + Redux.

Demo: https://flaviare1s.github.io/myshop/

## Sumário

- **Tecnologias:** React, TypeScript, Vite, Redux Toolkit, Styled Components
- **Scripts:** `dev`, `build`, `preview`, `test`, `lint`
- **Deploy:** GitHub Pages (workflow automático incluído)

## Visão geral

Este projeto implementa uma interface simples de e-commerce com componentes:

- `Header` — cabeçalho e carrinho
- `ProductsList` — lista de produtos
- `ProductCard` — cartão de produto
- `Cart` — estado do carrinho gerenciado por Redux

O código-fonte está em `src/` e as estilizações usam `styled-components`.

## Requisitos

- Node.js 18+ (recomendado)
- npm (ou yarn)

## Instalação

1. Clone o repositório

```bash
git clone https://github.com/flaviare1s/myshop.git
cd myshop
```

2. Instale dependências

```bash
npm install
# ou
yarn
```

## Desenvolvimento

Rode a aplicação em modo de desenvolvimento (Vite):

```bash
npm run dev
# abre em http://localhost:5173 por padrão
```

## Build e Preview

Gerar build de produção:

```bash
npm run build
```

Pré-visualizar o build localmente:

```bash
npm run preview
```

Observação: o `base` do Vite já está configurado em `vite.config.ts` como `/myshop/` para suportar o deploy em GitHub Pages.

## Testes e lint

- Rodar testes (Jest): `npm run test`
- Rodar linter (ESLint): `npm run lint`

## Deploy para GitHub Pages (automático)

Este repositório já inclui um workflow do GitHub Actions que constrói a aplicação e publica o conteúdo de `dist/` para o GitHub Pages do repositório.

Como funciona:

1. Faça commit e push nas branches protegidas (ex.: `main`).
2. O workflow `.github/workflows/gh-pages.yml` será executado, gerando o build com `npm run build`.
3. O artefato `dist` é enviado ao GitHub Pages, atualizando o site em https://flaviare1s.github.io/myshop/

Se preferir manualmente:

```bash
npm run build
# publicar o conteúdo de `dist/` na branch `gh-pages` ou usar uma ação de deploy
```

## Arquitetura e arquivos importantes

- `src/main.tsx` — entrada da aplicação
- `src/App.tsx` — componente root
- `src/components/` — UI components
- `src/redux/` — store e slices do Redux
- `vite.config.ts` — configuração do Vite (repare em `base: '/myshop/'`)

## Contribuições

Sinta-se à vontade para abrir issues ou pull requests. Para mudanças locais:

```bash
git checkout -b feat/minha-mudanca
# codar, testar, commitar
git push origin feat/minha-mudanca
```

## Observações finais

Se quiser que eu faça o deploy final (criar a branch `gh-pages` se necessário ou ajustar configurações do repositório), posso ajudar—me autorize a criar arquivos e fornecer instruções para executar qualquer passo de CI/CD adicional.

---

Documento gerado automaticamente pelo assistente.

# MyShop
