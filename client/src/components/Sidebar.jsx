import {
  LayoutDashboard,
  Radio,
  BarChart3,
  TrendingUp,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {
  const navItem =
    "flex items-center gap-3 rounded-xl px-4 py-3 transition";

  return (
    <aside className="w-64 min-h-screen border-r border-gray-200 bg-white p-6 flex flex-col">
      <div>
        <h2 className="mb-10 text-3xl font-bold text-pink-600">
          Myntra
        </h2>

        <nav>
          <ul className="space-y-3">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${navItem} ${
                    isActive
                      ? "bg-pink-100 text-pink-600 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <LayoutDashboard size={20} />
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/live-studio"
                className={({ isActive }) =>
                  `${navItem} ${
                    isActive
                      ? "bg-pink-100 text-pink-600 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <Radio size={20} />
                Live Studio
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/analytics"
                className={({ isActive }) =>
                  `${navItem} ${
                    isActive
                      ? "bg-pink-100 text-pink-600 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <BarChart3 size={20} />
                Analytics
              </NavLink>
            </li>

            <li className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-400 cursor-not-allowed">
              <TrendingUp size={20} />
              Growth Score
            </li>
          </ul>
        </nav>
      </div>

      <div className="mt-auto pt-10 border-t border-gray-200">
        <p className="text-xs text-gray-400">
          Hackathon Prototype
        </p>

        <p className="mt-1 text-sm font-semibold text-pink-600">
          v1.0
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;