# POGOT Studio Static Site

React + Vite + Tailwind CSS v4 static site — source code originated from Figma Make and is maintained as a standalone GitHub Pages deployment.

## Package Manager

Use **npm** for all dependency and script operations.

```bash
npm install        # install dependencies
npm run dev        # start local dev server (default port 5173)
npm run build      # production build → dist/
npm run preview    # locally preview the production build
```

## Project Structure

This is the canonical project structure. Start with task-relevant files below. Only follow imports or inspect other files when required, when a documented path is missing, or when the repository contradicts this guide.

- `src/main.tsx` — React entrypoint; imports `src/index.css` and mounts `src/App.tsx` into the `#root` element
- `src/App.tsx` — Primary application component and the usual starting point for UI work
- `src/index.css` — Global CSS entrypoint and Tailwind CSS v4 import (`@import 'tailwindcss';`)
- `src/i18n.tsx` — All UI strings in English (`en`) and Indonesian (`id`); update here when copy changes
- `src/pages/` — Page-level components: `Home.tsx`, `Solutions.tsx`, `Articles.tsx`, `Contact.tsx`
- `src/components/` — Shared components (e.g. `Nav.tsx`)
- `src/content/articles/` — Markdown article files
- `index.html` — Vite HTML shell; contains `<div id="root">` and loads `src/main.tsx`
- `package.json` — Dependencies and npm scripts
- `vite.config.ts` — Vite configuration: React plugin, Tailwind CSS v4, `@` alias for `src`, and GitHub Pages `base` path
- `tsconfig.json` — TypeScript configuration

## GitHub Pages Deployment

Production builds are deployed to GitHub Pages via GitHub Actions.

- The Vite `base` config is set to match the repository name (e.g. `/PogotStudioStatic/`) so all asset paths resolve correctly under the Pages subdirectory.
- The `dist/` folder is the build output — do **not** commit it manually; CI handles deployment.
- A `.nojekyll` file should be present in `public/` (or emitted by CI) so GitHub Pages serves files with underscores correctly.

## Dependencies

- Runtime: React 19 and React DOM 19
- Styling: Tailwind CSS v4 with `@tailwindcss/vite` plugin (no `tailwind.config` file needed)
- Build tooling: Vite 8, TypeScript 5.7, `@vitejs/plugin-react`
- Icons: `lucide-react`
- Markdown: `react-markdown`, `remark-gfm`, `gray-matter`

## Styling

This project uses **Tailwind CSS v4** through the `@tailwindcss/vite` plugin configured in `vite.config.ts`. Use Tailwind utility classes directly in JSX. Global CSS and Tailwind v4 theme customisation belong in `src/index.css`. No PostCSS config or `tailwind.config.*` file is required.

`src/main.tsx` imports `src/index.css`, so global font wiring belongs there. Keep CSS `@import` statements first, then `@font-face` rules and `font-family` defaults.

## Internationalisation

All user-visible strings live in `src/i18n.tsx`. The `Strings` type defines every key; both `en` and `id` objects must have identical keys. When adding new UI text:

1. Add the key to the `Strings` type.
2. Add the English value to the `en` object.
3. Add the Indonesian translation to the `id` object.
4. Use `const { t } = useLang()` in any component to access the strings.

## Notes

- The codebase originated from Figma Make. `vite.config.ts` has been simplified to remove Figma Make-specific plugins. Do not re-add Figma-specific plugins or imports.
- The WhatsApp contact number (`WA_NUMBER`) is currently a placeholder — replace with the real number in `src/pages/Contact.tsx` and `src/pages/Home.tsx` before going live.
