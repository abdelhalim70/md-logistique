import { Routes, Route, NavLink } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import WebfleetImport from './pages/WebfleetImport';
import Drivers from './pages/Drivers';
import Planning from './pages/Planning';
import Settings from './pages/Settings';

const navItems = [
  { path: '/', label: 'Dashboard' },
  { path: '/import-webfleet', label: 'Import' },
  { path: '/chauffeurs', label: 'Chauffeurs' },
  { path: '/planning', label: 'Planning' },
  { path: '/parametres', label: 'Paramètres' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <div className="border-b border-slate-200 bg-white px-4 py-3 lg:hidden">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-semibold transition ${
                      isActive ? 'bg-mdorange text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <main className="p-6 sm:p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/import-webfleet" element={<WebfleetImport />} />
              <Route path="/chauffeurs" element={<Drivers />} />
              <Route path="/planning" element={<Planning />} />
              <Route path="/parametres" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}
