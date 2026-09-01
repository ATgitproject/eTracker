import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useTransactionStore } from '../../store/useTransactionStore';
import { useThemeStore } from '../../store/useThemeStore';
import './SpendingOverview.scss';

/**
 * SpendingOverview
 * ------------------------------------------------------------------
 * Donut chart + legend for "spending by category" (recharts). Colors
 * come from theme.json's `chartPalette`, and the segment list comes
 * from useTransactionStore, which is populated either from the live
 * /transactions/summary endpoint or the demo mock data - the chart
 * itself doesn't know or care which.
 * ------------------------------------------------------------------
 */
export default function SpendingOverview() {
  const spendingByCategory = useTransactionStore((s) => s.spendingByCategory);
  const formatCurrency = useTransactionStore((s) => s.formatCurrency);
  const palette = useThemeStore((s) => s.chartPalette);

  const total = spendingByCategory.reduce((sum, c) => sum + c.amount, 0);

  return (
    <div className="spending-overview">
      <div className="spending-overview__chart">
        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={spendingByCategory}
              dataKey="amount"
              nameKey="category"
              innerRadius="68%"
              outerRadius="100%"
              paddingAngle={2}
              stroke="none"
            >
              {spendingByCategory.map((entry, i) => (
                <Cell key={entry.category} fill={palette[i % palette.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="spending-overview__center">
          <span className="spending-overview__center-label">Total</span>
          <span className="spending-overview__center-value">{formatCurrency(total)}</span>
        </div>
      </div>

      <ul className="spending-overview__legend">
        {spendingByCategory.map((entry, i) => (
          <li key={entry.category}>
            <span className="dot" style={{ background: palette[i % palette.length] }} />
            <span className="name">{entry.category}</span>
            <span className="value">{formatCurrency(entry.amount)}</span>
            <span className="pct">{total ? Math.round((entry.amount / total) * 100) : 0}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
