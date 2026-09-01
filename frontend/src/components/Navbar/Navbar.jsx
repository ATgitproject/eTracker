import navConfig from '../../config/navConfig.json';
import { Icon } from '../../config/iconRegistry.jsx';
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx';
import { useAuthStore } from '../../store/useAuthStore';
import './Navbar.scss';

/**
 * Navbar
 * ------------------------------------------------------------------
 * Greeting text and which controls are visible (Import button, theme
 * toggle) are driven by navConfig.json's `navbar` block.
 * ------------------------------------------------------------------
 */
export default function Navbar({ onImportClick }) {
  const { navbar } = navConfig;
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  return (
    <header className="navbar">
      <div className="navbar__greeting">
        <h1>
          {navbar.greeting} <span className="navbar__wave">👋</span>
        </h1>
        <p>{navbar.subtitle}</p>
      </div>

      <div className="navbar__actions">
        {navbar.showImportButton && (
          <button type="button" className="navbar__import-btn" onClick={onImportClick}>
            <Icon name="upload" size={16} />
            <span>{navbar.importButtonLabel}</span>
          </button>
        )}

        {navbar.showThemeToggle && <ThemeToggle />}

        {user && (
          <button type="button" className="navbar__avatar" onClick={logout} title="Log out">
            {user.name?.charAt(0).toUpperCase() || 'U'}
          </button>
        )}
      </div>
    </header>
  );
}
