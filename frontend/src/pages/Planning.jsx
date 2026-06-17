import PageHeader from '../components/PageHeader';
import PremiumCard from '../components/PremiumCard';
import StatusBadge from '../components/StatusBadge';

const tours = [
  { driver: 'Houssam Oukil', time: '06:30 - 14:30', route: 'BRUBE-LUMBE-EDNNL-BRUBE', status: 'Confirmé' },
  { driver: 'Sofia Mathers', time: '08:00 - 16:00', route: 'BRUBE-HERDE-BRUBE', status: 'Prévu' },
  { driver: 'Karim Louka', time: '18:00 - 02:00', route: 'BRUBE-KLNAP-BRUBE', status: 'Indisponible' },
];

const statusMap = {
  Prévu: { label: 'Prévu', variant: 'planned' },
  Confirmé: { label: 'Confirmé', variant: 'confirmed' },
  Indisponible: { label: 'Indisponible', variant: 'unavailable' },
};

export default function Planning() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Planning"
        description="Organisez les tournées et suivez l'état des chauffeurs avec une vue claire et performante."
        badge="Opérations"
      />

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <PremiumCard title="Tournées prévues" description="Visibilité instantanée sur le planning de la semaine.">3</PremiumCard>
        <PremiumCard title="Confirmées" description="Tournées validées et prêtes à être lancées.">1</PremiumCard>
        <PremiumCard title="Disponibilité" description="Chauffeurs disponibles pour les prochains créneaux.">2</PremiumCard>
      </section>

      <PremiumCard title="Tournées de la semaine" description="Liste des prochaines missions avec statut et horaires." action={<button type="button" className="btn-primary">Ajouter une tournée</button>}>
        <div className="space-y-4">
          {tours.map((tour) => (
            <div key={`${tour.driver}-${tour.time}`} className="flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-slate-50 p-5 transition hover:border-orange-200 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-900">{tour.driver}</p>
                <p className="mt-1 text-sm text-slate-500">{tour.time}</p>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <p>{tour.route}</p>
                <StatusBadge label={statusMap[tour.status].label} variant={statusMap[tour.status].variant} />
              </div>
            </div>
          ))}
        </div>
      </PremiumCard>
    </div>
  );
}
