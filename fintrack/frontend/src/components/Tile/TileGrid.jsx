import tilesConfig from '../../config/dashboardTiles.json';
import { useTransactionStore } from '../../store/useTransactionStore';
import Tile from './Tile.jsx';
import './TileGrid.scss';

/**
 * TileGrid
 * ------------------------------------------------------------------
 * Reads the list of tiles to render from dashboardTiles.json (add or
 * remove a tile there - no JSX changes needed) and uses CSS
 * `grid-template-columns: repeat(auto-fit, minmax(...))` so it
 * always takes the "proper width" for however many tiles exist: 4
 * tiles fill the row evenly on desktop, fewer tiles stay evenly
 * spaced, and it wraps responsively down to 1 column on mobile.
 * ------------------------------------------------------------------
 */
export default function TileGrid() {
  const metrics = useTransactionStore((s) => s.metrics);
  const formatCurrency = useTransactionStore((s) => s.formatCurrency);

  return (
    <div
      className="tile-grid"
      style={{ '--tile-count': tilesConfig.length }}
    >
      {tilesConfig.map((tile) => (
        <Tile
          key={tile.id}
          config={tile}
          value={metrics[tile.metricKey]}
          change={metrics[tile.changeKey]}
          formatValue={tile.format === 'currency' ? formatCurrency : (v) => v}
        />
      ))}
    </div>
  );
}
