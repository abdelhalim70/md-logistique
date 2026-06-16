import { useLocation } from 'react-router-dom';

const titleMap = {
  '/': 'Dashboard',
  '/import-webfleet': 'Import Webfleet',
  '/chauffeurs': 'Chauffeurs',
  '/planning': 'Planning',
  '/parametres': 'Paramètres',
};

export default function Header() {
  const location = useLocation();
  const title = titleMap[location.pathname] || 'MD Logistique';

  return (
    <header className="flex flex-col gap-5 border-b border-slate-100 bg-white px-6 py-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-mdgray">{title}</h1>
        <p className="mt-1 text-sm muted">Gestion interne et suivi des chauffeurs MD Logistique.</p>
      </div>

      <div className="flex items-center gap-4 rounded-2xl bg-slate-50 px-4 py-2 text-sm text-slate-700">
        <div className="h-10 w-10 shrink-0 rounded-full brand-gradient text-center leading-10 text-white flex items-center justify-center font-semibold">A</div>
        <div>
          <div className="font-semibold text-slate-900">Alex</div>
          <div className="text-sm muted">Administrateur</div>
        </div>
      </div>
    </header>
  );
}
