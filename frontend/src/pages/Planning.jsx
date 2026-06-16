const tours = [
  { driver: 'Houssam Oukil', time: '06:30 - 14:30', route: 'BRUBE-LUMBE-EDNNL-BRUBE', status: 'Confirmé' },
  { driver: 'Sofia Mathers', time: '08:00 - 16:00', route: 'BRUBE-HERDE-BRUBE', status: 'Prévu' },
  { driver: 'Karim Louka', time: '18:00 - 02:00', route: 'BRUBE-KLNAP-BRUBE', status: 'Indisponible' },
];

const statusStyles = {
  Prévu: 'bg-slate-100 text-slate-700',
  Confirmé: 'bg-emerald-100 text-emerald-700',
  Indisponible: 'bg-red-100 text-red-700',
};

export default function Planning() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Planning</p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900">Vue hebdomadaire</h2>
          <p className="mt-2 text-sm text-slate-500">Organisation des tournées et statuts des chauffeurs.</p>
        </div>
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Tournées</p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900">Points clés</h2>
          <p className="mt-2 text-sm text-slate-500">Support pour les trajets BRUBE et clients réguliers.</p>
        </div>
      </section>

      <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Tournées de la semaine</p>
            <h2 className="text-xl font-semibold text-slate-900">Calendrier des chauffeurs</h2>
          </div>
          <button className="rounded-full bg-mdorange px-4 py-3 text-sm font-semibold text-white hover:bg-orange-500">
            Ajouter une tournée
          </button>
        </div>

        <div className="mt-6 space-y-4">
          {tours.map((tour) => (
            <div key={tour.driver + tour.time} className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-slate-900">{tour.driver}</p>
                <p className="mt-1 text-sm text-slate-500">{tour.time}</p>
              </div>
              <div className="text-sm text-slate-600">{tour.route}</div>
              <div className={`inline-flex rounded-full px-3 py-2 text-sm font-semibold ${statusStyles[tour.status]}`}>
                {tour.status}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
