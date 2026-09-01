import { useTransactionStore } from '../../store/useTransactionStore';
import merchantIcons from '../../config/merchantIcons.json';
import './RecentTransactions.scss';

/** Resolve a merchant "badge" (initial + colors) from merchantIcons.json by keyword match. */
function resolveBadge(name = '') {
  const lower = name.toLowerCase();
  const rule = merchantIcons.rules.find((r) => lower.includes(r.keyword));
  if (rule) return rule;
  return { initial: name.charAt(0).toUpperCase() || '?', ...merchantIcons.default };
}

export default function RecentTransactions() {
  const transactions = useTransactionStore((s) => s.recentTransactions);
  const formatCurrency = useTransactionStore((s) => s.formatCurrency);

  return (
    <div className="recent-tx">
      {transactions.length === 0 && (
        <div className="recent-tx__empty">No transactions yet. Add one or import a statement to get started.</div>
      )}

      {transactions.map((tx) => {
        const badge = resolveBadge(tx.name);
        const isCredit = tx.type === 'credit';
        return (
          <div className="recent-tx__row" key={tx.id}>
            <span className="recent-tx__icon" style={{ background: badge.bg, color: badge.fg }}>
              {badge.initial}
            </span>
            <div className="recent-tx__info">
              <span className="recent-tx__name">{tx.name}</span>
              <span className="recent-tx__category">{tx.category}</span>
            </div>
            <div className="recent-tx__amounts">
              <span className={`recent-tx__amount ${isCredit ? 'is-credit' : 'is-debit'}`}>
                {isCredit ? '+' : '-'}
                {formatCurrency(tx.amount)}
              </span>
              <span className="recent-tx__when">{tx.when}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
