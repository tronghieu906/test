<!-- .github/copilot-instructions.md - guidance for AI coding agents -->
# Quick repository guide for AI coding agents

This is a very small static-site scaffold. The goal of this file is to capture the minimal, concrete facts an AI needs to be immediately useful when making changes.

- Project type: static HTML/CSS/JS (no build system, no package.json by default).
- Main entry: `index.html` (loads `css/style.css`, `js/main.js`).

Key files and what they mean
- `index.html` — page structure, semantic sections (`.hero`, `#features`, `#about`). Script tag: `js/main.js` is loaded with `defer`.
- `css/style.css` — design tokens and theming. Uses CSS custom properties in `:root` and overrides under `[data-theme="dark"]`.
- `js/main.js` — small IIFE that handles theme toggling and persistence.
- `assets/logo.svg` — site logo referenced in the header.
- `README.md` — brief usage note: "Open `index.html` in your browser to preview."

Concrete, discoverable conventions and patterns
- Theming
  - Theme state is stored in localStorage under the key `htmlnx-theme`.
  - The script toggles a `data-theme="dark"` attribute on the document element; the CSS dark theme lives under `[data-theme="dark"]`.
  - The toggle control has id `theme-toggle` and uses `aria-pressed` to reflect state.
- JavaScript pattern
  - `js/main.js` uses an IIFE (immediately-invoked function expression) and direct DOM access (no frameworks). Agents should preserve this style when adding small behaviors unless the change justifies introducing modules.
- Layout utilities
  - A simple `.container` class constrains width; semantic section classes (`.hero`, `.features`, `.about`) contain most UI.

How to preview / developer workflows (explicit commands)
- No build step. To preview locally open `index.html` in a browser.
- For a local static server (recommended for testing fetches or CORS behavior):

PowerShell (recommended if Python is installed):
```powershell
python -m http.server 8000
```

Or using npm (no global install required):
```powershell
npx http-server -p 8000
```

Dev and debugging tips
- Inspect the `<html>` element to see `data-theme` and current CSS variables in DevTools.
- Clear `localStorage.getItem('htmlnx-theme')` to reset persisted theme.
- The script sets `aria-pressed` on `#theme-toggle` — preserve for accessibility.

Integration points / external deps
- None by default. If you add tooling (linters, bundlers), add a `package.json` at repo root and document new commands in `README.md`.

When changing code, follow these small rules
- Preserve the defer loading of `js/main.js` or explicitly convert script to `type="module"` and update code accordingly.
- Keep theme logic tied to `data-theme` attribute and `htmlnx-theme` key — other files (CSS) rely on these names.
- Avoid introducing new global variables; prefer local IIFE/module scope.

Files to inspect for context before editing
- `index.html`, `css/style.css`, `js/main.js`, `README.md`, `assets/logo.svg`.

If anything in this file looks incomplete relative to your change, ask the repo owner which conventions to extend (for example: add a `package.json` or adopt ES modules).

---
Please review and tell me if you'd like more examples (small diffs) showing how to add a new interactive widget or how to convert `js/main.js` into an ES module.
