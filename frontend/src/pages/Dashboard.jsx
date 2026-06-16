import StatCard from '../components/StatCard';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Chauffeurs" value="86" delta="+7 ce mois" icon="👷" />
        <StatCard title="Fichiers importés" value="34" delta="+4 aujourd'hui" icon="📄" />
        <StatCard title="Heures travaillées" value="1 342" delta="Mois en cours" icon="⏱️" />
        <StatCard title="Alertes documents" value="5" delta="2 bientôt expirés" icon="⚠️" />
      </section>

      <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Derniers imports Webfleet</p>
            <h2 className="text-2xl font-semibold text-slate-900">Historique des fichiers</h2>
          </div>
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-mdorange">5 imports récents</span>
        </div>

        <div className="mt-6 space-y-4">
          {[
            { driver: 'Houssam Oukil', date: '16/06/2026', status: 'Terminé', total: '194h' },
            { driver: 'Sofia Mathers', date: '14/06/2026', status: 'En attente', total: '162h' },
            { driver: 'Karim Louka', date: '12/06/2026', status: 'Terminé', total: '177h' },
          ].map((item) => (
            <div key={item.date + item.driver} className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-slate-900">{item.driver}</p>
                <p className="text-sm text-slate-500">{item.date}</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-600">
                <span className="rounded-full bg-white px-3 py-2 text-slate-700 shadow-sm">{item.status}</span>
                <span className="font-semibold text-slate-900">{item.total}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
