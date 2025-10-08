// Theme toggle with persistence (cleaned)
(function () {
    const root = document.documentElement;
    const btn = document.getElementById('theme-toggle');
    const STORAGE_KEY = 'htmlnx-theme';

    const detectDefault = () => (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) ? 'light' : 'dark';

    function applyTheme(theme) {
        if (theme === 'light') root.setAttribute('data-theme', 'light');
        else root.removeAttribute('data-theme');
        if (btn) {
            btn.setAttribute('aria-pressed', theme === 'light');
            // Show an SVG icon indicating the action: sun = switch to light, moon = switch to dark
            const sunSvg = '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4V2M12 22v-2M4.93 4.93L3.51 3.51M20.49 20.49l-1.42-1.42M2 12H4M20 12h2M4.93 19.07l-1.42 1.42M20.49 3.51l-1.42 1.42M12 7a5 5 0 100 10 5 5 0 000-10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
            const moonSvg = '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
            btn.innerHTML = theme === 'light' ? moonSvg : sunSvg;
            btn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
        }
    }

    // initialize
    let theme = detectDefault();
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'light' || saved === 'dark') theme = saved;
    } catch (e) {
        /* ignore localStorage errors */
    }
    applyTheme(theme);

    if (!btn) return;

    btn.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        applyTheme(next);
        try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* ignore */ }
    });
})();
