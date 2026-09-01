import navConfig from '../../config/navConfig.json';
import { Icon } from '../../config/iconRegistry.jsx';
import './AuthLayout.scss';

/**
 * AuthLayout
 * ------------------------------------------------------------------
 * The two-panel layout shared by Login and Signup: a brand/art panel
 * on the left (built from layered CSS shapes, no image asset needed)
 * and a white form card on the right - structurally matching the
 * reference "Log In to Lucy" screen, re-skinned with the FinTrack
 * brand and copy.
 * ------------------------------------------------------------------
 */
export default function AuthLayout({ children }) {
  const { brand } = navConfig;

  return (
    <div className="auth-layout">
      <div className="auth-layout__art-panel">
        <div className="auth-layout__blob">
          <span className="auth-layout__petal auth-layout__petal--1" />
          <span className="auth-layout__petal auth-layout__petal--2" />
          <span className="auth-layout__petal auth-layout__petal--3" />
          <span className="auth-layout__petal auth-layout__petal--4" />
        </div>

        <div className="auth-layout__brand">
          <span className="auth-layout__brand-icon">
            <Icon name={brand.icon} size={22} strokeWidth={2.5} />
          </span>
          <span className="auth-layout__brand-name">{brand.name}</span>
        </div>

        <div className="auth-layout__copy">
          <h2>Track every rupee, effortlessly.</h2>
          <p>
            Import bank statements, watch your spending sort itself into categories, and see exactly
            where your money goes - all in one dashboard.
          </p>
        </div>
      </div>

      <div className="auth-layout__form-panel">
        <div className="auth-layout__form-card">{children}</div>
      </div>
    </div>
  );
}
