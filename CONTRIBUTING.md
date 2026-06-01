# Contributing Guide

Contributions are welcome. To keep the codebase clean and the commit history easy to follow, all changes must go through a **Pull Request**. The `main` branch is protected and does not accept direct commits.

---

## 🏗️ Development Guidelines

When contributing, please follow the architectural principles of shellfolio:

- Keep components modular and reusable.
- Avoid introducing unnecessary JavaScript.
- Prefer Astro-native solutions whenever possible.
- Maintain keyboard accessibility and responsive layouts.
- Keep the TUI/terminal aesthetic consistent across all sections.
- Do not hardcode personal information into the template.
- New features should be configurable through `site.config.ts` whenever applicable.

## 🛠️ Prerequisites

Before starting, ensure you have the following installed on your machine:
- **Node.js** (v22.12.0 or higher)
- **Git**
- **pre-commit (optional)** - Used to run Git hooks such as `gitleaks` and formatting checks before commits. Not required, but recommended. See https://pre-commit.com

## 🚀 Development Workflow

Open your terminal in the project folder and follow this sequence of commands:

### 1. Update your local environment

Before starting any new feature or fix, always ensure your local `main` branch is synchronized with the upstream repository:

```bash
git checkout main
git pull origin main
```

### 2. Create a new branch

Never code directly on the `main` branch. Create a dedicated branch for your task. Use the prefix `feat/` for new features or `fix/` for bug fixes:

```bash
git checkout -b feat/your-feature-name
```

### 3. Install dependencies & Start Development

Install the dependencies and run the local development server:

```bash
npm install
npm run dev
```

Make your changes following the decoupled architecture (`src/config/site.config.ts` for settings, `src/data/shellfolio.ts` for content).

> **Architecture rule:** `src/pages/[lang]/index.astro` is the only file that imports from `shellfolio.ts` directly. All section components receive data exclusively via props. Keep this data flow intact.

### 4. Atomic Commits & Conventional Commits

We follow the **Conventional Commits** specification to keep the commit history consistent and easy to navigate.

* **feat:** New feature or functionality (e.g., `feat: add new portfolio section component`).
* **fix:** Bug fix (e.g., `fix: resolve mobile layout overflow`).
* **docs:** Documentation changes only (e.g., `docs: update deployment guide for Cloudflare Pages`).
* **chore:** Maintenance tasks, tooling, or repository configuration (e.g., `chore: update pre-commit hooks`).
* **refactor:** Code improvements without changing behavior (e.g., `refactor: extract reusable section component`).
* **test:** Adding or updating tests (e.g., `test: add smoke test for static build output`).
* **style:** Formatting or code style changes that do not affect functionality (e.g., `style: normalize indentation in global styles`).
* **build:** Changes to build system or dependencies (e.g., `build: upgrade astro to latest version`).
* **ci:** Continuous Integration workflows and automation (e.g., `ci: add GitHub Actions build workflow`).

**Atomic Commits Rule:** Each commit must represent a single logical change. Avoid combining unrelated fixes, features, or refactors into a single commit.

### 5. Validate and Push

When you commit, our project uses `pre-commit` hooks to validate code hygiene and run `gitleaks` to prevent accidental exposure of private keys or secrets.

Before pushing your changes, make sure everything builds successfully:

```bash
git add .
git commit -m "feat: add white theme preset"
npm run build
git push -u origin feat/your-feature-name
```

## ✅ Before Opening a Pull Request

Before opening a PR, make sure that:

- The project builds successfully (Test it by running `npm run build`).
- No TypeScript or Astro syntax errors are present (Verify by running `npx astro check`).
- Existing functionality remains unaffected.
- Documentation has been updated when necessary.
- No secrets, API keys, private URLs, or personal information were introduced.
- Commit messages follow the Conventional Commits specification.

## 🔀 Submitting a Pull Request (PR)

1. Go to the main page of the repository on GitHub.
2. Click on the green **Compare & pull request** button that automatically appears for your recently pushed branch.
3. Provide a clear title and a brief description explaining what you changed or solved.
4. Click **Create pull request**.
5. Wait for the review. If any adjustments are needed, you can push new commits directly to your feature branch, and the PR will update automatically!
