# arc Team

Site institucional do produto arc Team, da Areco.

## Stack

HTML, CSS e JavaScript puros, sem framework, bundler ou etapa de build.
Hospedado como site estático no GitHub Pages.

## Estrutura

- `index.html` : página inicial
- `assets/css/style.css` : estilos e tokens do design system
- `assets/js/main.js` : animações de entrada, accordion e abas de funcionalidades
- `assets/img/` : imagens do site
- `docs/` : referências de conteúdo e design usadas na construção do site

## Design system

Tokens de cor, tipografia, espaçamento e radius definidos como CSS custom
properties no topo de `style.css`. Paleta de marca: azul-marinho (Areco Navy)
e laranja (Areco Orange) como cores de ação; verde reservado como exceção
pontual só para o botão de WhatsApp.

Tipografia fluida com `clamp()` em toda a escala de heading e corpo de
texto, para não depender de breakpoints fixos.

## Responsividade

Breakpoints definidos pelos pontos reais de quebra de cada seção, não por
uma lista genérica de dispositivos. Área de toque mínima de 44px em todo
elemento interativo. Imagens com `width`/`height` explícitos para evitar
layout shift.

## Resultado final:
- Link do site: 
