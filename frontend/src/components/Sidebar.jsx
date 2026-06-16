import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const navItems = [
  { path: '/', label: 'Dashboard' },
  { path: '/import-webfleet', label: 'Import Webfleet' },
  { path: '/chauffeurs', label: 'Chauffeurs' },
  { path: '/planning', label: 'Planning' },
  { path: '/parametres', label: 'Paramètres' },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-transparent bg-white px-6 py-8 lg:block">
      <div className="mb-10 flex items-center gap-3">
        <div className="brand-gradient overflow-hidden rounded-3xl p-1 shadow-premium">
          <img src={logo} alt="MD Logistique" className="h-14 w-14 object-contain bg-white p-1 rounded-2xl" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-mdmuted">MD Logistique</p>
          <p className="text-lg font-semibold text-mdgray">Dashboard</p>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? 'bg-gradient-to-r from-mdorange to-mdgold text-white shadow-premium'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-14 rounded-3xl bg-slate-50 p-5 shadow-soft">
        <p className="text-xs uppercase tracking-[0.25em] text-mdmuted">Astuce</p>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          Importez les rapports Webfleet pour générer automatiquement les totaux de conduite, travail et repos.
        </p>
      </div>
    </aside>
  );
}
