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

## Arquitetura e arquivos importantes

- `src/main.tsx` — entrada da aplicação
- `src/App.tsx` — componente root
- `src/components/` — UI components
- `src/redux/` — store e slices do Redux
- `vite.config.ts` — configuração do Vite (repare em `base: '/myshop/'`)

---

Desenvolvido nos cursos da Ada (Frontend em React e Elas+ Tech)
