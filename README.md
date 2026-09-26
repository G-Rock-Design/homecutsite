# Home Cut Barber — Astro + Vercel

Projeto Astro na **raiz deste repositório**, com geração estática. Agendamentos continuam direcionando para o AppBarber; não há backend nem variáveis de ambiente obrigatórias.

## Desenvolvimento

Use Node.js **22.12 ou superior na série 22** (na Vercel, selecione **22.x**).

```sh
npm ci
npm run dev
```

Para validar a versão de produção:

```sh
npm run build
npm run preview
```

O build gera `dist/`. Não é necessário instalar o adaptador `@astrojs/vercel` para este site estático.

## Deploy na Vercel

1. Envie o repositório, incluindo `package-lock.json`, para seu provedor Git.
2. Importe o repositório na Vercel.
3. Use **Root Directory: raiz do repositório (`.`)**. Não selecione `homecut-website`.
4. Confira **Framework Preset: Astro**, **Node.js: 22.x**, **Install Command: npm ci**, **Build Command: npm run build** e **Output Directory: dist**.
5. Clique em **Deploy**. Depois, configure o domínio em Settings → Domains, se desejar.

O arquivo `vercel.json` já define framework, instalação, build e saída. Não há redirecionamento de SPA: o Astro publica a página inicial como HTML estático.

Documentação oficial: https://docs.astro.build/en/guides/deploy/vercel/

## Onde editar

- `src/pages/index.astro`: página principal, textos e seções.
- `src/data/homecut.js`: unidades, equipes, horários e serviços.
- `src/scripts/app.js`: menu, modal, abas e animações.
- `src/styles/global.css`: estilos personalizados.
- `tailwind.config.cjs`: cores, fontes e arquivos usados para gerar as classes.
- `public/assets/`: imagens publicadas em `/assets/`.

Tailwind 3 foi mantido para compatibilidade com as classes do layout original e agora é compilado durante o build. Os ícones Lucide também são empacotados localmente. As fontes continuam sendo carregadas do Google Fonts.

A pasta `homecut-website/` preserva a versão HTML original para referência; alterações nela não afetam o novo site. As pastas de referências e fotografias originais também não são copiadas para `dist/`. Imagens em `public/` serão públicas após o deploy.

## Pendências de conteúdo

As pendências anteriores permanecem: confirmar o telefone com DDD de Botafogo, o número do endereço de Xerém e o catálogo de serviços de Xerém. Elas não impedem o build. O catálogo ausente apresenta o link de consulta e agendamento.
