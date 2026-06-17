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
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 px-4 py-4 shadow-sm backdrop-blur-sm transition sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">MD Logistique</p>
          <h1 className="mt-2 text-xl font-semibold text-slate-900 sm:text-2xl">{title}</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Pilotage des flux, des chauffeurs et des rapports Webfleet depuis une interface premium.</p>
        </div>

        <div className="flex items-center gap-3 rounded-3xl bg-slate-50 px-4 py-3 text-sm text-slate-700 shadow-sm">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 text-white font-semibold">A</div>
          <div>
            <div className="font-semibold text-slate-900">Alex</div>
            <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Administrateur</div>
          </div>
        </div>
      </div>
    </header>
  );
}
