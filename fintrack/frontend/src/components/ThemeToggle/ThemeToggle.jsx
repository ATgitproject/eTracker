import { useThemeStore } from '../../store/useThemeStore';
import { Icon } from '../../config/iconRegistry.jsx';
import './ThemeToggle.scss';

/** Accessible light/dark toggle switch, backed by useThemeStore. */
export default function ThemeToggle() {
  const mode = useThemeStore((s) => s.mode);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);
  const isDark = mode === 'dark';

  return (
    <button
      type="button"
      className={`theme-toggle${isDark ? ' theme-toggle--dark' : ''}`}
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
    >
      <span className="theme-toggle__icon theme-toggle__icon--sun">
        <Icon name="sun" size={13} />
      </span>
      <span className="theme-toggle__icon theme-toggle__icon--moon">
        <Icon name="moon" size={13} />
      </span>
      <span className="theme-toggle__knob" />
    </button>
  );
}
