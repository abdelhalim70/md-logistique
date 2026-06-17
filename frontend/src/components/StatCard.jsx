export default function StatCard({ title, value, delta, icon }) {
  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{title}</p>
          <p className="mt-4 text-3xl font-semibold text-slate-900">{value}</p>
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-orange-400 text-white text-xl shadow-sm">{icon}</div>
      </div>
      {delta ? <p className="mt-4 text-sm text-slate-600">{delta}</p> : null}
    </div>
  );
}
