import layoutConfig from '../../config/dashboardLayout.json';
import DashboardContainer from './DashboardContainer.jsx';
import './DashboardGrid.scss';

/**
 * DashboardGrid
 * ------------------------------------------------------------------
 * The whole dashboard body is just: sort dashboardLayout.json's
 * containers by `row`, then lay them into a 12-column CSS grid using
 * each container's `span`. Because CSS grid auto-flows in DOM order
 * and wraps once a row's spans add up to 12, containers with the
 * same `row` value naturally sit side by side (e.g. spendingOverview
 * span 7 + recentTransactions span 5 = 12 -> same row), while a
 * span-12 container (tiles) always starts its own row. Adding a new
 * container below or inline with existing ones is purely a JSON
 * edit - see registry.js for wiring up a brand-new widget type.
 * ------------------------------------------------------------------
 */
export default function DashboardGrid() {
  const containers = [...layoutConfig.containers].sort((a, b) => a.row - b.row);

  return (
    <div className="dashboard-grid">
      {containers.map((container) => (
        <DashboardContainer key={container.id} container={container} />
      ))}
    </div>
  );
}
