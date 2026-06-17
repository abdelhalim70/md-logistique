import { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import StatCard from '../components/StatCard';
import DataTable from '../components/DataTable';
import { getAlexDashboard } from '../services/api';

const dashboardColumns = [
  {
    header: 'Chauffeur',
    accessor: (row) => row.driver?.fullName ?? '—',
  },
  {
    header: 'Fichier',
    accessor: 'fileName',
  },
  {
    header: 'Date',
    accessor: (row) => new Date(row.createdAt).toLocaleDateString('fr-FR'),
  },
  {
    header: 'Heures travaillées',
    accessor: (row) => row.summary?.heuresTravaillees?.toFixed(2) ?? '0.00',
  },
];

export default function Dashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadDashboard() {
      setLoading(true);
      setError(null);

      try {
        const response = await getAlexDashboard();
        setDashboard(response.data);
      } catch (err) {
        console.error(err);
        setError('Impossible de charger les données du tableau de bord.');
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  return (
    <div className="space-y-8">
      <PageHeader
        title="Dashboard"
        description="Suivez les indicateurs clés de la paie et des imports Webfleet d'Alex en temps réel."
        badge="Vue Alex"
      />

      {loading ? (
        <div className="rounded-[32px] border border-slate-200 bg-white p-10 text-center text-slate-600 shadow-soft">
          Chargement des données...
        </div>
      ) : error ? (
        <div className="rounded-[32px] border border-red-200 bg-red-50 p-6 text-center text-red-700 shadow-soft">
          {error}
        </div>
      ) : (
        <>
          <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard title="Nombre de chauffeurs" value={dashboard.totalDrivers} icon="👷" />
            <StatCard title="Nombre d'imports" value={dashboard.totalImports} icon="📄" />
            <StatCard title="Heures travaillées" value={dashboard.totalWorkedHours.toFixed(2)} icon="⏱️" />
            <StatCard title="Heures de conduite" value={dashboard.totalDrivingHours.toFixed(2)} icon="🚛" />
          </section>

          <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Derniers imports</p>
                <h2 className="text-2xl font-semibold text-slate-900">Activité récente</h2>
              </div>
              <p className="text-sm text-slate-500">Mis à jour automatiquement depuis le backend.</p>
            </div>

            <div className="mt-6">
              <DataTable columns={dashboardColumns} data={dashboard.lastImports} rowKey={(row) => row.id} />
            </div>
          </section>

          <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Résumé</p>
                <h2 className="text-xl font-semibold text-slate-900">Heures totales</h2>
              </div>
              <div className="rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">Données backend</div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Repos</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900">{dashboard.totalRestHours.toFixed(2)}</p>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Disponibilité</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900">{dashboard.totalDrivingHours.toFixed(2)}</p>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Total estimé</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900">{dashboard.totalWorkedHours.toFixed(2)}</p>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
