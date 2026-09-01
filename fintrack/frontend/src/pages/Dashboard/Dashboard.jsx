import { useEffect } from 'react';
import { useTransactionStore } from '../../store/useTransactionStore';
import DashboardGrid from '../../components/DashboardContainer/DashboardGrid.jsx';

/**
 * Dashboard
 * ------------------------------------------------------------------
 * Thin page shell: kicks off the initial data fetch, then renders
 * DashboardGrid which does all the JSON-driven layout work. Keeping
 * this page this small is intentional - it means other routes
 * (Accounts, Reports, etc.) can reuse the exact same grid/registry
 * pattern with their own layout JSON later.
 * ------------------------------------------------------------------
 */
export default function Dashboard() {
  const fetchAll = useTransactionStore((s) => s.fetchAll);

  useEffect(() => {
    fetchAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <DashboardGrid />;
}
