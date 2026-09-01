import { Icon } from '../../config/iconRegistry.jsx';
import './Modal.scss';

/** Simple overlay + centered card modal shell, reused by TransactionModal and ImportModal. */
export default function Modal({ title, onClose, children, width = 460 }) {
  return (
    <div className="modal-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-card" style={{ maxWidth: width }}>
        <div className="modal-card__header">
          <h3>{title}</h3>
          <button type="button" className="modal-card__close" onClick={onClose} aria-label="Close">
            <Icon name="x" size={18} />
          </button>
        </div>
        <div className="modal-card__body">{children}</div>
      </div>
    </div>
  );
}
