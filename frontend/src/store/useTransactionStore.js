/**
 * useTransactionStore.js
 * ------------------------------------------------------------------
 * Owns all dashboard data: tile metrics, spending-by-category (for
 * the donut chart) and the recent-transactions list. Starts out
 * populated with config/mockDashboardData.json so the UI renders
 * pixel-complete in demo mode; `fetchAll()` swaps that for live data
 * once the Node/Postgres backend is reachable.
 * ------------------------------------------------------------------
 */
import { create } from 'zustand';
import { transactionApi, importApi } from '../services/api';
import mockData from '../config/mockDashboardData.json';

const currencyFmt = (n) =>
  `\u20b9${Number(n || 0).toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

export const useTransactionStore = create((set, get) => ({
  metrics: mockData.metrics,
  spendingByCategory: mockData.spendingByCategory,
  recentTransactions: mockData.recentTransactions,
  loading: false,
  error: null,
  isLiveData: false,

  formatCurrency: currencyFmt,

  /** Pull summary + recent transactions from the API; silently keeps
   *  demo data if the backend/DB isn't running yet. */
  async fetchAll() {
    set({ loading: true, error: null });
    try {
      const [{ data: summaryData }, { data: listData }] = await Promise.all([
        transactionApi.summary(),
        transactionApi.list({ limit: 10 }),
      ]);

      const totalIncome = Number(summaryData.totals.total_income);
      const totalExpenses = Number(summaryData.totals.total_expenses);

      set({
        isLiveData: true,
        metrics: {
          totalBalance: totalIncome - totalExpenses,
          totalBalanceChange: 0,
          totalIncome,
          totalIncomeChange: 0,
          totalExpenses,
          totalExpensesChange: 0,
          savingsThisMonth: totalIncome - totalExpenses,
          savingsThisMonthChange: 0,
        },
        spendingByCategory: summaryData.categories.map((c) => ({
          category: c.category,
          amount: Number(c.total),
        })),
        recentTransactions: listData.transactions.slice(0, 6).map((t) => ({
          id: t.id,
          name: t.name,
          category: t.category,
          amount: Number(t.amount),
          type: t.type,
          when: new Date(t.transaction_date).toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          }),
        })),
        loading: false,
      });
    } catch (err) {
      // Backend not reachable yet - keep demo data, just surface the error.
      set({ loading: false, error: err.message });
    }
  },

  async addTransaction(payload) {
    const { data } = await transactionApi.create(payload);
    await get().fetchAll();
    return data;
  },

  async importStatement(file, onProgress) {
    const { data } = await importApi.uploadStatement(file, onProgress);
    await get().fetchAll();
    return data;
  },
}));
