const statusMap = {
  valid: 'bg-emerald-100 text-emerald-700',
  warning: 'bg-orange-100 text-orange-700',
  expired: 'bg-red-100 text-red-700',
  planned: 'bg-slate-100 text-slate-700',
  confirmed: 'bg-emerald-100 text-emerald-700',
  unavailable: 'bg-red-100 text-red-700',
};

export default function StatusBadge({ label, variant = 'planned', className = '' }) {
  const styles = statusMap[variant] || statusMap.planned;
  return (
    <span className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] ${styles} ${className}`}>
      {label}
    </span>
  );
}
