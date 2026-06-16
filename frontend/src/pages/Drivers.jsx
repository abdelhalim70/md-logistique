const drivers = [
  { name: 'Houssam Oukil', phone: '+32 498 12 34 56', vehicle: 'Renault T', documents: { permis: '2027-05-12', code95: '2026-12-03', medical: '2026-09-15' } },
  { name: 'Sofia Mathers', phone: '+32 473 45 67 89', vehicle: 'Volvo FH', documents: { permis: '2028-01-31', code95: '2027-06-22', medical: '2026-10-08' } },
  { name: 'Karim Louka', phone: '+32 468 55 77 21', vehicle: 'Mercedes Actros', documents: { permis: '2025-11-12', code95: '2026-05-02', medical: '2026-01-14' } },
];

const getStatus = (dateString) => {
  const today = new Date();
  const date = new Date(dateString);
  const diffDays = Math.ceil((date - today) / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    return { label: 'Expiré', color: 'bg-red-100 text-red-700' };
  }
  if (diffDays <= 30) {
    return { label: 'Bientôt expiré', color: 'bg-orange-100 text-orange-700' };
  }
  return { label: 'Valide', color: 'bg-emerald-100 text-emerald-700' };
};

export default function Drivers() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Chauffeurs</p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900">Liste active</h2>
          <p className="mt-2 text-sm text-slate-500">Suivez les documents et véhicules en cours.</p>
        </div>
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Documents</p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900">Permis, Code 95 et médical</h2>
          <p className="mt-2 text-sm text-slate-500">Statut de conformité des certifications chauffeurs.</p>
        </div>
      </section>

      <section className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft">
        <table className="min-w-full text-left text-sm text-slate-700">
          <thead className="border-b border-slate-200 bg-slate-50">
            <tr>
              <th className="px-6 py-4">Nom</th>
              <th className="px-6 py-4">Téléphone</th>
              <th className="px-6 py-4">Véhicule</th>
              <th className="px-6 py-4">Permis</th>
              <th className="px-6 py-4">Code 95</th>
              <th className="px-6 py-4">Certificat médical</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver) => (
              <tr key={driver.name} className="border-b border-slate-200 hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-900">{driver.name}</td>
                <td className="px-6 py-4">{driver.phone}</td>
                <td className="px-6 py-4">{driver.vehicle}</td>
                {['permis', 'code95', 'medical'].map((doc) => {
                  const status = getStatus(driver.documents[doc]);
                  return (
                    <td key={doc} className="px-6 py-4">
                      <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${status.color}`}>
                        {status.label}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
