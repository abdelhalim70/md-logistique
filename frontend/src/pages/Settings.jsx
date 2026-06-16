export default function Settings() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Adresses clients</p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900">Points de livraison</h2>
          <p className="mt-2 text-sm text-slate-500">Gérez les adresses de vos clients et leurs codes.</p>
        </div>
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Règles de calcul</p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900">Paramètres RH</h2>
          <p className="mt-2 text-sm text-slate-500">Configurez les règles de conversion entre disponibilité, repos et travail.</p>
        </div>
      </section>

      <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Domicile & périmètre</p>
            <h2 className="text-xl font-semibold text-slate-900">Zones chauffeurs</h2>
          </div>
          <button className="rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800">
            Modifier
          </button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-5">
            <h3 className="text-sm font-semibold text-slate-900">Rayon domicile</h3>
            <p className="mt-2 text-sm text-slate-600">15 km</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-5">
            <h3 className="text-sm font-semibold text-slate-900">Adresses de base</h3>
            <p className="mt-2 text-sm text-slate-600">Bruxelles, Louvain, Herdecke</p>
          </div>
        </div>
      </section>
    </div>
  );
}
