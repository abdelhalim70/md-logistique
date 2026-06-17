import PageHeader from '../components/PageHeader';
import PremiumCard from '../components/PremiumCard';
import StatusBadge from '../components/StatusBadge';
import StatCard from '../components/StatCard';
import DataTable from '../components/DataTable';

const history = [
  { driver: 'Houssam Oukil', date: '16/06/2026', status: 'Terminé', total: '194h' },
  { driver: 'Sofia Mathers', date: '14/06/2026', status: 'En attente', total: '162h' },
  { driver: 'Karim Louka', date: '12/06/2026', status: 'Terminé', total: '177h' },
];

const metrics = [
  { label: 'Conduite', value: '248h', accent: 'bg-orange-50', icon: '🚚' },
  { label: 'Travail', value: '582h', accent: 'bg-slate-50', icon: '🧑‍🏭' },
  { label: 'Heures travaillées', value: '1 342h', accent: 'bg-slate-50', icon: '⏱️' },
  { label: 'Repos', value: '324h', accent: 'bg-slate-50', icon: '🛌' },
  { label: 'Disponibilité', value: '56h', accent: 'bg-orange-50', icon: '📶' },
  { label: 'Total', value: '2 550h', accent: 'bg-slate-50', icon: '📦' },
];

const tableColumns = [
  { header: 'Chauffeur', accessor: 'driver' },
  { header: 'Date', accessor: 'date' },
  {
    header: 'Statut',
    cell: (row) => {
      const variant = row.status === 'Terminé' ? 'confirmed' : row.status === 'En attente' ? 'planned' : 'warning';
      return <StatusBadge label={row.status} variant={variant} />;
    },
  },
  { header: 'Total', accessor: 'total' },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Dashboard"
        description="Suivez les flux, les chauffeurs et l'état des imports Webfleet dans un tableau de bord moderne."
        badge="Vue générale"
      />

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Chauffeurs" value="86" delta="+7 ce mois" icon="👷" />
        <StatCard title="Fichiers importés" value="34" delta="+4 aujourd'hui" icon="📄" />
        <StatCard title="Heures travaillées" value="1 342" delta="Mois en cours" icon="⏱️" />
        <StatCard title="Alertes documents" value="5" delta="2 bientôt expirés" icon="⚠️" />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
        <PremiumCard
          title="Derniers imports Webfleet"
          description="Suivez vos fichiers importés récemment, avec leur statut et leurs totaux clefs."
          action={<StatusBadge label="5 imports récents" variant="planned" />}
        >
          <DataTable columns={tableColumns} data={history} rowKey={(row) => row.driver} />
        </PremiumCard>

        <div className="grid gap-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{metric.label}</p>
                  <p className="mt-4 text-2xl font-semibold text-slate-900">{metric.value}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-orange-50 text-lg">{metric.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
