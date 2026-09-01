import { Icon } from '../../config/iconRegistry.jsx';
import './Tile.scss';

/**
 * Tile
 * ------------------------------------------------------------------
 * Renders one summary card. Fully driven by the config object passed
 * in (see dashboardTiles.json) plus the live metrics object from
 * useTransactionStore - no hardcoded copy or numbers here.
 * ------------------------------------------------------------------
 */
export default function Tile({ config, value, change, formatValue }) {
  const isPositive = (change ?? 0) >= 0;

  return (
    <div className="tile">
      <div className="tile__top">
        <span className="tile__label">{config.label}</span>
        <span className={`tile__icon tile__icon--${config.iconTone}`}>
          <Icon name={config.icon} size={20} />
        </span>
      </div>

      <div className="tile__value">{formatValue(value)}</div>

      {change !== undefined && change !== null && (
        <div className={`tile__change ${isPositive ? 'tile__change--up' : 'tile__change--down'}`}>
          <span className="tile__change-arrow">{isPositive ? '↑' : '↓'}</span>
          <span className="tile__change-pct">{Math.abs(change).toFixed(1)}%</span>
          <span className="tile__change-label">vs last month</span>
        </div>
      )}
    </div>
  );
}
