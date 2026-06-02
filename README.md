# 🖥️ shellfolio

A portfolio template that looks like a running Linux system.

<p align="center">
  <a href="https://fajre.pages.dev">
    <img src="https://i.imgur.com/9AvZEks.png" alt="shellfolio demo" width="100%">
  </a>
  <br>
  <a href="https://fajre.pages.dev"><strong>Live Demo ➜</strong></a>
</p>

## ✨ Features

- 🐧 **Authentic TUI Aesthetic:** A realistic `fastfetch` hero banner and `systemd`-inspired bootloader animation dynamically generated from your data.
- ⚡ **Lightweight by default:** No JS framework, no CSS libraries. Built with Astro, vanilla CSS, and semantic HTML `<details>` elements for collapsible sections.
- 🌍 **Bilingual Setup:** Out-of-the-box English and Portuguese configurations with simple static routing (can be disabled to run in English-only mode).
- 🧩 **Modular & Type-Safe:** Enable or disable sections through `site.config.ts`. Portfolio data is validated with TypeScript interfaces.
- ⌨️ **Accessible & Keyboard-Friendly:** Fully navigable via keyboard, with visible focus states, `prefers-reduced-motion` support, and OpenGraph metadata.
- 🔑 **Privacy-Oriented Extras:** Optional crypto wallet QR codes and support for Tor Hidden Service deployments.

## 📁 Project Structure

```
shellfolio/
├── public/
│   ├── assets/                         # Static assets (created by user)
│   │   ├── qr-btc.webp                 # Bitcoin QR code (optional)
│   │   └── qr-xmr.webp                 # Monero QR code (optional)
│   ├── fonts/
│   │   ├── Terminus.woff2
│   │   └── VGA.woff2
│   ├── favicon.svg
│   └── og-image.png                    # OpenGraph preview image (created by user)
├── src/
│   ├── components/
│   │   ├── sections/                   # One component per portfolio section
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
│   │   ├── AsciiFace.astro             # Renders the ASCII art from site.config.ts
│   │   ├── BootLoader.astro            # Systemd-inspired boot animation
│   │   ├── FastfetchHero.astro         # Hero banner (fastfetch simulation)
│   │   └── Prompt.astro                # Reusable terminal prompt line
│   ├── config/
│   │   └── site.config.ts              # Global settings, feature flags, ASCII art
│   ├── data/
│   │   └── shellfolio.ts               # All portfolio content (typed, bilingual)
│   ├── layouts/
│   │   └── Layout.astro                # Base HTML shell with SEO meta tags
│   ├── pages/
│   │   ├── [lang]/
│   │   │   └── index.astro             # Main page — sole consumer of shellfolio.ts
│   │   └── index.astro                 # Root redirect (detects browser language)
│   └── styles/
│       └── global.css                  # CSS variables, TUI utility classes
├── astro.config.mjs
├── CONTRIBUTING.md
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
├── .pre-commit-config.yaml             # Gitleaks + pre-commit hygiene hooks
├── README.md
└── tsconfig.json
```

## 🚀 Quick Start

You can either use this repository as a GitHub template or create a new project directly from the CLI.

**Option 1: The GitHub Way**

Click the green **"Use this template"** button at the top right of this repository to create your own copy without the commit history.

**Option 2: The CLI Way**

If you prefer setting it up locally from scratch, run the Astro create command:
```bash
npm create astro@latest -- --template fajremvp/shellfolio
cd shellfolio
npm install
```

## ✏️ Files to Edit

Most customization happens in the following files:

| File / Folder | Action | Purpose |
|---|---|---|
| `src/data/shellfolio.ts` | **Edit** | All your textual content: Fastfetch profile, experiences, projects, education, skills, contacts, and wallet addresses. |
| `src/config/site.config.ts` | **Edit** | Global settings: Site title, URL, terminal prompt, theme color, feature toggles, onion address, and ASCII art. |
| `public/favicon.svg` | **Add** | The browser tab icon. Optional: keep SVG as main favicon and include fallback `favicon.ico` (16x16, 32x32, 48x48) for maximum compatibility. |
| `public/og-image.png` | **Add** | Screenshot of your finished portfolio for social media previews. Recommended size: 1200x630px. Recommended formats: `.png`. |
| `public/assets/` | **Add** | Drop your crypto QR Code images here (e.g., `qr-btc.webp`, `qr-xmr.png`). Recommended formats: `.webp` or `.png`. Only needed if `wallets: true`. |

Everything else is internal implementation and does not need to be modified.

> **Tip:** Want to see a fully configured example? Check out my personal shellfolio repository: [fajremvp/fajre-shellfolio](https://github.com/fajremvp/fajre-shellfolio).

### ⚙️ Customization Guide

The following files control most of the site's content and behavior.

#### 1. `src/config/site.config.ts` (Behavior & UI)
This file controls the global settings, SEO, and which sections are rendered on the screen.

- **Branding & SEO:** Update `author`, `title`, `description`, and `siteUrl` so link previews look correct when shared.
- **Terminal Prompt:** Change the `user` and `host` to customize the green prompt string (e.g., `fajre@shellfolio`).
- **Feature Toggles:** Enable or disable entire sections of the portfolio by flipping the booleans in the `features` object (e.g., set `wallets: false` to hide the crypto section).
- **Single Language Mode:** Set `translations: false` to disable the Portuguese locale, keeping the site strictly in English and removing the language switcher.
- **ASCII Art:** Replace the `asciiArt` template literal with your own text art.

  > 💡 **Tip:** Want to generate ASCII art from a profile picture? Remove the background of a profile picture and use a tool like `jp2a` to convert it to ASCII:
  > ```bash
  > jp2a my-face-nobg.png
  > ```

#### 2. `src/data/shellfolio.ts` (Your Content)
This file contains the content displayed throughout the portfolio. It is strictly typed with TypeScript interfaces to ensure you don't miss any required fields. Scroll down past the `// --- Data ---` to find the data you need to edit:

* **Global Arrays (`contactLinks` & `paymentMethods`):** Update these lists with your own social handles, URLs, and crypto addresses.
* **The `data` Object:** This contains your localized content. You will see two main blocks: `en` (English) and `pt` (Portuguese). If you set `translations: false` in your config, you can safely delete the entire `pt` block!
* **Filling the fields:** Inside each language block, fill out your `profile`, `skills`, `experiences`, `projects`, and `education`.
* **Line Breaks:** For long text blocks (like the `about` or `content` fields), you can use `\n` to force line breaks in the terminal output.

#### 3. Run Locally
Once your data is in place, start the development server to see your new portfolio live:
```bash
npm run dev
```

## 🌐 Deployment (Cloudflare Pages)

Because shellfolio generates static files, it can be deployed directly to platforms such as Cloudflare Pages.

**1. Push your code to a GitHub repository**

**2. Create a new Pages project**

Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Pages** → **Create application** → **Connect to Git** → authorize GitHub and select your repository.

**3. Configure the build**

| Field | Value |
|---|---|
| Project name | Your name or handle — this becomes your default URL: `yourname.pages.dev` |
| Production branch | `main` |
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build output directory | `dist` |

**4. Set the Node.js version (Critical for Astro 4+)**

Before deploying, go to **Settings → Environment variables** and add the following variable to both **Production** and **Preview**:

| Variable | Value |
|---|---|
| `NODE_VERSION` | `22.12.0` |

**5. Deploy**

Click **Save and Deploy**. If the build log shows `Installing nodejs 22.12.0`, everything is correct. Your site will be live at `yourname.pages.dev`.

**6. Custom domain (optional)**

Go to **Custom Domains** → **Set up a custom domain**. Cloudflare handles DNS and SSL automatically.

> After the initial setup, every push to `main` automatically triggers a new deployment.

## 🔐 Self-Hosting & Tor / Nostr

shellfolio can be self-hosted, including deployments on Tor Hidden Services.

- **Tor Hidden Service:** If you enable `features: { torMirror: true }`, the template will automatically generate a `<section>` rendering the `cat /etc/tor/shellfolio/hostname` output.

- **Nostr Identity (NIP-05):** While not a built-in feature of this template, because shellfolio is statically generated, you can easily use it to host and validate your Nostr identifier. See the official [NIP-05 specification](https://github.com/nostr-protocol/nips/blob/master/05.md) to learn how to map your Nostr keys to DNS-based internet identifiers.

## 📜 Credits & License

- **[Terminus Font](http://terminus-font.sourceforge.net/)** by Dimitar Zhekov, the monospace typeface used for prose and body text.
- **[The Ultimate Oldschool PC Font Pack](https://int10h.org/oldschool-pc-fonts/)** by VileR, the authentic CRT/TUI typeface used for the VGA terminal elements.
- **[Astro.js](https://astro.build/)**, the static site generator powering the build.

Released under the [MIT License](./LICENSE).
