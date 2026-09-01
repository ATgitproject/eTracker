/**
 * registry.js
 * ------------------------------------------------------------------
 * The lookup table DashboardContainer uses to turn a `type` string
 * from dashboardLayout.json into an actual React component. To add
 * a brand-new dashboard widget:
 *   1. Build the component (e.g. components/BudgetGoals/BudgetGoals.jsx)
 *   2. Register it here: budgetGoals: BudgetGoals
 *   3. Add `{ "id": "budgetGoals", "type": "budgetGoals", "row": 3, "span": 6 }`
 *      to dashboardLayout.json
 * No other file needs to change - it will appear inline or stacked
 * exactly where the JSON places it.
 * ------------------------------------------------------------------
 */
import TileGrid from '../Tile/TileGrid.jsx';
import SpendingOverview from '../SpendingOverview/SpendingOverview.jsx';
import RecentTransactions from '../RecentTransactions/RecentTransactions.jsx';

export const CONTAINER_REGISTRY = {
  tileGrid: TileGrid,
  spendingOverview: SpendingOverview,
  recentTransactions: RecentTransactions,
};
