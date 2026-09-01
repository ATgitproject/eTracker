import { Icon } from '../../config/iconRegistry.jsx';
import './FloatingAddButton.scss';

/** Fixed-position FAB, opens the AddTransaction modal (owned by AppLayout). */
export default function FloatingAddButton({ onClick }) {
  return (
    <button type="button" className="fab" onClick={onClick} aria-label="Add transaction" title="Add transaction">
      <Icon name="plus" size={24} strokeWidth={2.5} />
    </button>
  );
}
