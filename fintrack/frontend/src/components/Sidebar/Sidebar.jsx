import { NavLink } from 'react-router-dom';
import navConfig from '../../config/navConfig.json';
import { Icon } from '../../config/iconRegistry.jsx';
import './Sidebar.scss';

/**
 * Sidebar
 * ------------------------------------------------------------------
 * Purely presentational - every link, label and icon comes from
 * navConfig.json. Adding/removing/reordering a nav item is a JSON
 * edit, never a JSX edit.
 * ------------------------------------------------------------------
 */
export default function Sidebar() {
  const { brand, sidebarItems, sidebarFooterItems } = navConfig;

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <span className="sidebar__brand-icon">
          <Icon name={brand.icon} size={20} strokeWidth={2.5} />
        </span>
        <span className="sidebar__brand-name">{brand.name}</span>
      </div>

      <nav className="sidebar__nav">
        {sidebarItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => `sidebar__link${isActive ? ' sidebar__link--active' : ''}`}
          >
            <Icon name={item.icon} size={19} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar__footer">
        {sidebarFooterItems.map((item) => (
          <NavLink key={item.id} to={item.path} className="sidebar__link">
            <Icon name={item.icon} size={19} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
