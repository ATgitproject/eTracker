/**
 * useThemeStore.js
 * ------------------------------------------------------------------
 * A single Zustand store that owns theming for the whole app.
 *
 * Why Zustand + CSS variables (instead of a React Context provider)?
 *  - `theme.json` is the ONE place color tokens live. Adding a new
 *    theme (e.g. "high-contrast") only means adding a key to that
 *    JSON file - no component code changes.
 *  - `applyTheme()` pushes every token onto `document.documentElement`
 *    as a CSS custom property, so every .scss file in the app can
 *    reference `var(--color-primary)` etc. and repaint instantly
 *    when the mode changes - no re-render cost, no prop drilling.
 *  - The chosen mode is persisted to localStorage so it survives a
 *    refresh, and it can be changed at runtime from anywhere via
 *    `useThemeStore.getState().toggleTheme()`.
 * ------------------------------------------------------------------
 */
import { create } from 'zustand';
import themeConfig from '../config/theme.json';

const STORAGE_KEY = 'fintrack-theme';

function applyTheme(mode) {
  const tokens = themeConfig.themes[mode] || themeConfig.themes[themeConfig.default];
  const root = document.documentElement;
  Object.entries(tokens).forEach(([key, value]) => root.style.setProperty(key, value));
  root.setAttribute('data-theme', mode);
}

const getInitialMode = () => {
  if (typeof window === 'undefined') return themeConfig.default;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && themeConfig.themes[stored]) return stored;
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : themeConfig.default;
};

export const useThemeStore = create((set, get) => ({
  mode: getInitialMode(),
  availableThemes: Object.keys(themeConfig.themes),
  chartPalette: themeConfig.chartPalette,

  /** Apply the persisted/initial theme immediately on app boot. */
  init: () => applyTheme(get().mode),

  setTheme: (mode) => {
    if (!themeConfig.themes[mode]) return;
    applyTheme(mode);
    window.localStorage.setItem(STORAGE_KEY, mode);
    set({ mode });
  },

  toggleTheme: () => {
    const next = get().mode === 'dark' ? 'light' : 'dark';
    get().setTheme(next);
  },
}));
