export default function PageHeader({ title, description, badge, action, className = '' }) {
  return (
    <div className={`rounded-[32px] border border-slate-200 bg-white/95 p-6 shadow-card transition ${className}`}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            {badge ? <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">{badge}</span> : null}
            <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{title}</h1>
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{description}</p>
        </div>

        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </div>
  );
}
