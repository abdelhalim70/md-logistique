import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const navItems = [
  {
    path: '/',
    label: 'Dashboard',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 12h7V3H3v9Zm0 9h7v-7H3v7Zm11 0h7V12h-7v9Zm0-18v7h7V3h-7Z" />
      </svg>
    ),
  },
  {
    path: '/import-webfleet',
    label: 'Import Webfleet',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v12m0 0l4-4m-4 4l-4-4" />
        <path d="M5 21h14" />
      </svg>
    ),
  },
  {
    path: '/chauffeurs',
    label: 'Chauffeurs',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5.5 20h13a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2Z" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    path: '/planning',
    label: 'Planning',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="5" width="16" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M4 11h16" />
      </svg>
    ),
  },
  {
    path: '/parametres',
    label: 'Paramètres',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
        <path d="M19.4 15a1.88 1.88 0 0 0 .4 2.1 1.92 1.92 0 0 1-2.7 2.7 1.88 1.88 0 0 0-2.1-.4 1.88 1.88 0 0 0-1.2 1.8v2.3a1 1 0 0 1-2 0v-2.3a1.88 1.88 0 0 0-1.2-1.8 1.88 1.88 0 0 0-2.1.4 1.92 1.92 0 0 1-2.7-2.7 1.88 1.88 0 0 0 .4-2.1 1.88 1.88 0 0 0-1.8-1.2H2.6a1 1 0 0 1 0-2h2.3a1.88 1.88 0 0 0 1.8-1.2 1.88 1.88 0 0 0-.4-2.1 1.92 1.92 0 0 1 2.7-2.7 1.88 1.88 0 0 0 2.1.4h.1a1.88 1.88 0 0 0 1.2-1.8V2.6a1 1 0 0 1 2 0v2.3a1.88 1.88 0 0 0 1.2 1.8 1.88 1.88 0 0 0 2.1-.4 1.92 1.92 0 0 1 2.7 2.7 1.88 1.88 0 0 0-.4 2.1 1.88 1.88 0 0 0 1.8 1.2h2.3a1 1 0 0 1 0 2h-2.3a1.88 1.88 0 0 0-1.8 1.2Z" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-80 shrink-0 border-r border-slate-200 bg-white px-6 py-8 lg:flex lg:flex-col">
      <div className="mb-10 flex items-center gap-4">
        <div className="overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-500 to-orange-400 p-1 shadow-card">
          <img src={logo} alt="MD Logistique" className="h-14 w-14 rounded-2xl bg-white p-2" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-slate-500">MD Logistique</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">Pilotage</p>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
              }`
            }
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition group-hover:bg-slate-200">
              {item.icon}
            </span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto rounded-[28px] bg-slate-50 p-5 shadow-soft">
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Astuce</p>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          Importez vos rapports Webfleet pour générer automatiquement les totaux de conduite, travail et repos.
        </p>
      </div>
    </aside>
  );
}
