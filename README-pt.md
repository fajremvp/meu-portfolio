# 🖥️ shellfolio

Um template de portfólio que parece um sistema Linux em execução.

<p align="center">
  <a href="https://fajre.pages.dev">
    <img src="https://i.imgur.com/9AvZEks.png" alt="demo do shellfolio" width="100%">
  </a>
  <br>
  <a href="https://fajre.pages.dev"><strong>Live Demo ➜</strong></a>
</p>

## ✨ Funcionalidades

- 🐧 **Estética TUI autêntica:** Um banner hero no estilo `fastfetch` e uma animação de boot inspirada no `systemd`, ambos gerados dinamicamente a partir dos seus dados.
- ⚡ **Leve por padrão:** Sem frameworks JS, sem bibliotecas CSS. Construído com Astro, CSS puro e elementos semânticos `<details>` do HTML para seções recolhíveis.
- 🌍 **Suporte bilíngue:** Configurações em inglês e português prontas para uso, com roteamento estático simples (pode ser desativado para rodar apenas em inglês).
- 🧩 **Modular e tipado:** Ative ou desative seções pelo `site.config.ts`. Os dados do portfólio são validados com interfaces TypeScript.
- ⌨️ **Acessível e navegável pelo teclado:** Totalmente operável sem mouse, com estados de foco visíveis, suporte a `prefers-reduced-motion` e metadados OpenGraph.
- 🔑 **Para o pessoal da privacidade:** QR codes opcionais para carteiras de criptomoedas e suporte a deployments em Tor Hidden Services.

## 📁 Estrutura do projeto

```
shellfolio/
├── public/
│   ├── assets/                         # Arquivos estáticos (criados pelo usuário)
│   │   ├── qr-btc.webp                 # QR code do Bitcoin (opcional)
│   │   └── qr-xmr.webp                 # QR code do Monero (opcional)
│   ├── fonts/
│   │   ├── Terminus.woff2
│   │   └── VGA.woff2
│   ├── favicon.svg
│   └── og-image.png                    # Imagem de preview OpenGraph (criada pelo usuário)
├── src/
│   ├── components/
│   │   ├── sections/                   # Um componente por seção do portfólio
│   │   │   ├── AboutSection.astro
│   │   │   ├── ContactSection.astro
│   │   │   ├── EducationSection.astro
│   │   │   ├── ExperiencesSection.astro
│   │   │   ├── LocaleSection.astro
│   │   │   ├── ProjectsSection.astro
│   │   │   ├── RemotesSection.astro
│   │   │   ├── SkillsSection.astro
│   │   │   ├── TorSection.astro
│   │   │   └── WalletsSection.astro
│   │   ├── AsciiFace.astro             # Renderiza a arte ASCII definida em site.config.ts
│   │   ├── BootLoader.astro            # Animação de boot inspirada no systemd
│   │   ├── FastfetchHero.astro         # Banner hero (simulação do fastfetch)
│   │   └── Prompt.astro                # Linha de prompt de terminal reutilizável
│   ├── config/
│   │   └── site.config.ts              # Configurações globais, feature flags e arte ASCII
│   ├── data/
│   │   └── shellfolio.ts               # Todo o conteúdo do portfólio (tipado, bilíngue)
│   ├── layouts/
│   │   └── Layout.astro                # Shell HTML base com metatags de SEO
│   ├── pages/
│   │   ├── [lang]/
│   │   │   └── index.astro             # Página principal — carrega dados do shellfolio.ts
│   │   └── index.astro                 # Redirect raiz (detecta o idioma do navegador)
│   └── styles/
│       └── global.css                  # Variáveis CSS e classes utilitárias de TUI
├── astro.config.mjs
├── CONTRIBUTING.md
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
├── .pre-commit-config.yaml             # Hooks de higiene com Gitleaks e pre-commit
├── README.md
└── tsconfig.json
```

## 🚀 Início rápido

Você pode usar este repositório como template do GitHub ou criar um novo projeto diretamente pelo terminal.

**Opção 1: Pelo GitHub**

Clique no botão verde **"Use this template"** no canto superior direito do repositório para criar sua própria cópia sem o histórico de commits.

**Opção 2: Pelo terminal**

Se preferir configurar tudo localmente do zero, execute o comando de criação do Astro:
```bash
npm create astro@latest -- --template fajremvp/shellfolio
cd shellfolio
npm install
```

## ✏️ Arquivos para editar

A maior parte da personalização acontece nos seguintes arquivos:

| Arquivo / Pasta | Ação | Finalidade |
|---|---|---|
| `src/data/shellfolio.ts` | **Editar** | Todo o conteúdo do seu portfólio: perfil do Fastfetch, experiências, projetos, formação, habilidades, contatos e endereços de carteiras. |
| `src/config/site.config.ts` | **Editar** | Configurações globais: título do site, URL, prompt do terminal, cor do tema, opções de funcionalidades, endereço onion e arte ASCII. |
| `public/favicon.svg` | **Adicionar** | O ícone da aba do navegador. Opcional: mantenha o SVG como favicon principal e inclua um `favicon.ico` de fallback (16x16, 32x32, 48x48) para máxima compatibilidade. |
| `public/og-image.png` | **Adicionar** | Screenshot do portfólio finalizado para previews em redes sociais. Tamanho recomendado: 1200x630px. Formato recomendado: `.png`. |
| `public/assets/` | **Adicionar** | Coloque aqui as imagens de QR Code das suas criptomoedas (ex.: `qr-btc.webp`, `qr-xmr.png`). Formatos recomendados: `.webp` ou `.png`. Necessário apenas se `wallets: true`. |

Todo o restante é implementação interna e não precisa ser modificado.

> **Dica:** Quer ver um exemplo totalmente configurado? Confira meu repositório pessoal do shellfolio: [fajremvp/fajre-shellfolio](https://github.com/fajremvp/fajre-shellfolio).

### ⚙️ Guia de personalização

Os arquivos a seguir controlam a maior parte do conteúdo e do comportamento do site.

#### 1. `src/config/site.config.ts` (Comportamento e interface)

Este arquivo controla as configurações globais, o SEO e quais seções são renderizadas na tela.

- **Identidade e SEO:** Atualize `author`, `title`, `description` e `siteUrl` para que os previews de link fiquem corretos ao compartilhar.
- **Prompt do terminal:** Altere `user` e `host` para personalizar o texto do prompt verde (ex.: `fajre@shellfolio`).
- **Ativação de funcionalidades:** Ative ou desative seções inteiras do portfólio alterando os booleanos no objeto `features` (ex.: defina `wallets: false` para ocultar a seção de criptomoedas).
- **Modo monolíngue:** Defina `translations: false` para desativar o locale em português, mantendo o site estritamente em inglês e removendo o seletor de idioma.
- **Arte ASCII:** Substitua o template literal `asciiArt` pela sua própria arte em texto.

  > 💡 **Dica:** Quer gerar arte ASCII a partir de uma foto de perfil? Remova o fundo da imagem e use uma ferramenta como `jp2a` para convertê-la:
  > ```bash
  > jp2a meu-rosto-nobg.png
  > ```

#### 2. `src/data/shellfolio.ts` (Seu conteúdo)

Este arquivo contém o conteúdo exibido em todo o portfólio. Ele é estritamente tipado com interfaces TypeScript para garantir que nenhum campo obrigatório seja esquecido. Role para baixo até o comentário `// --- Data ---` para encontrar os dados que precisam ser editados:

* **Arrays globais (`contactLinks` e `paymentMethods`):** Atualize essas listas com seus próprios handles de redes sociais, URLs e endereços de criptomoedas.
* **O objeto `data`:** Contém seu conteúdo de cada idioma. Você verá dois blocos principais: `en` (inglês) e `pt` (português). Se você definiu `translations: false` na configuração, pode apagar o bloco `pt` com segurança!
* **Preenchendo os campos:** Dentro de cada seção de idioma, preencha `profile`, `skills`, `experiences`, `projects` e `education`.
* **Quebras de linha:** Para blocos de texto mais longos (como os campos `about` ou `content`), use `\n` para forçar quebras de linha na saída do terminal.

#### 3. Rodar localmente

Com os dados preenchidos, inicie o servidor de desenvolvimento para ver seu novo portfólio:
```bash
npm run dev
```

## 🌐 Deploy (Cloudflare Pages)

Como o shellfolio gera apenas arquivos estáticos, ele pode ser publicado diretamente em plataformas como o Cloudflare Pages.

**1. Envie seu código para um repositório no GitHub**

**2. Crie um novo projeto no Pages**

Acesse o [Painel do Cloudflare](https://dash.cloudflare.com/) → **Workers & Pages** → **Pages** → **Create application** → **Connect to Git** → autorize o GitHub e selecione seu repositório.

**3. Configure o build**

| Campo | Valor |
|---|---|
| Project name | Seu nome ou handle — este será o domínio padrão: `seunome.pages.dev` |
| Production branch | `main` |
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build output directory | `dist` |

**4. Defina a versão do Node.js (essencial para Astro 4+)**

Antes de fazer o deploy, vá em **Settings → Environment variables** e adicione a seguinte variável em **Production** e **Preview**:

| Variável | Valor |
|---|---|
| `NODE_VERSION` | `22.12.0` |

**5. Faça o deploy**

Clique em **Save and Deploy**. Se o log de build exibir `Installing nodejs 22.12.0`, está tudo certo. Seu site estará disponível em `seunome.pages.dev`.

**6. Domínio personalizado (opcional)**

Vá em **Custom Domains** → **Set up a custom domain**. O Cloudflare cuida automaticamente do DNS e do SSL.

> Após a configuração inicial, todo push para `main` dispara um novo deploy automaticamente.

## 🔐 Self-hosting e Tor / Nostr

O shellfolio pode ser hospedado no seu próprio servidor/homelab, incluindo deployments em Tor Hidden Services.

- **Tor Hidden Service:** Se você ativar `features: { torMirror: true }`, o template gerará automaticamente uma `<section>` exibindo a saída de `cat /etc/tor/shellfolio/hostname`.

- **Identidade Nostr (NIP-05):** Embora não seja uma funcionalidade nativa deste template, como o shellfolio é gerado de forma estática, você pode usá-lo facilmente para hospedar e validar seu identificador Nostr. Consulte a [especificação oficial do NIP-05](https://github.com/nostr-protocol/nips/blob/master/05.md) para saber como mapear suas chaves Nostr a identificadores de internet baseados em DNS.

## 📜 Créditos e licença

- **[Terminus Font](http://terminus-font.sourceforge.net/)** por Dimitar Zhekov, a fonte monoespaçada usada para prosa e corpo de texto.
- **[The Ultimate Oldschool PC Font Pack](https://int10h.org/oldschool-pc-fonts/)** por VileR, a fonte autêntica de CRT/TUI usada nos elementos de terminal VGA.
- **[Astro.js](https://astro.build/)**, o gerador de sites estáticos utilizado pelo projeto.

Distribuído sob a [Licença MIT](./LICENSE).
