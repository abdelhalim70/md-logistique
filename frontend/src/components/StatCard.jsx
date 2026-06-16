export default function StatCard({ title, value, delta, icon }) {
  return (
    <div className="card-premium">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-mdmuted">{title}</p>
          <p className="mt-4 text-3xl font-bold text-mdgray">{value}</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-mdorange to-mdgold text-white shadow-sm text-lg font-semibold">{icon}</div>
      </div>
      {delta ? <p className="mt-4 text-sm muted">{delta}</p> : null}
    </div>
  );
}
