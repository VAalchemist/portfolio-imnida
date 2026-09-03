# AGENTS.md

## Project Overview

This is a Create React App portfolio site for `portfolio-imnida`. The app uses React 18, React Router v6, Tailwind CSS 3, `react-icons`, and `react-typed`. It is configured for GitHub Pages deployment at `http://vaalchemist.github.io/portfolio-imnida`.

## Working Directory

Run project commands from this directory:

```bash
portfolio-imnida
```

## Common Commands

```bash
npm install
npm start
npm run build
npm test
npm run deploy
```

- `npm start` runs the local CRA dev server.
- `npm run build` creates the production build in `build/`.
- `npm test` runs the CRA/Jest test runner.
- `npm run deploy` publishes `build/` with `gh-pages`; it runs `npm run build` first through `predeploy`.

## App Structure

- `src/index.js` mounts the React app.
- `src/App.jsx` defines the router and top-level routes.
- `src/components/` contains page-level components and shared UI:
  - `Navbar.jsx`
  - `Home.jsx`
  - `About.jsx`
  - `Portfolio.jsx`
  - `Contact.jsx`
  - `Resume.jsx`
  - `Error.jsx`
  - `Footer.jsx` is present but currently not rendered.
- `src/assets/` contains imported image assets used by components.
- `public/` contains static public files, including `Resume 2022.pdf`.

## Routing Notes

The app uses `BrowserRouter` from `react-router-dom`. The home route is currently `/portfolio-imnida`, matching the GitHub Pages project path. Keep this deployment path in mind when adding or changing links.

Prefer React Router links (`Link` or `NavLink`) for internal navigation. Some existing components still use plain `<a href="/portfolio">`; be careful with absolute paths because they can behave differently on GitHub Pages than in local development.

## Styling Conventions

- Styling is mostly inline Tailwind utility classes in JSX.
- Global Tailwind setup lives in `src/index.css`.
- Tailwind scans `./src/**/*.{js,jsx,ts,tsx}` as configured in `tailwind.config.js`.
- The project uses the `tailwindcss-textshadow` plugin.
- Existing design relies on muted green, teal, indigo, rose, and amber colors. When changing UI, keep the portfolio's visual identity consistent unless the task asks for a redesign.

## Component Conventions

- Components are simple function components with default exports.
- Imports generally use single quotes in components and double quotes in `App.jsx`; preserve nearby file style when editing.
- Assets are imported from `src/assets` when referenced in JSX.
- Keep page components focused and avoid broad refactors unless they are necessary for the requested change.

## Static Assets

Use `src/assets/` for images imported by React components. Use `public/` for files that should be served directly, such as the resume PDF. Existing public-file references use `process.env.PUBLIC_URL`, which is appropriate for GitHub Pages paths.

## Testing And Verification

Before finishing a code change, run the narrowest useful check:

```bash
npm run build
```

For behavior changes, also run:

```bash
npm test
```

If changing navigation or layout, start the app with `npm start` and manually verify the affected routes at desktop and mobile widths.

## Deployment Notes

Deployment uses the `gh-pages` package. Before deploying, confirm that `homepage` in `package.json` still matches the intended GitHub Pages URL and that routes/links work under `/portfolio-imnida`.

## Agent Guidance

- Read the touched component before editing it; this repo has hand-authored layout and content that should be preserved.
- Keep changes small and local to the request.
- Do not remove existing assets or commented code unless the task explicitly asks for cleanup.
- Do not change contact links, resume file names, or external project links without confirming the intended replacement.
- Watch for GitHub Pages path issues whenever changing navigation, buttons, or route definitions.
