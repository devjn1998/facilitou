"use client";

import {
  Home,
  Menu as MenuIcon,
  Package,
  Settings,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavigationMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`min-h-screen bg-blue-800 text-white transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="p-4 flex justify-between items-center">
        {!isCollapsed && (
          <h1 className="text-xl font-bold">Painel de Controle</h1>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
        >
          {isCollapsed ? <MenuIcon size={24} /> : <X size={24} />}
        </button>
      </div>

      <nav className="mt-6">
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboardEstabelecimento"
              className={`flex items-center px-4 py-2 hover:bg-blue-700 transition-colors ${
                isCollapsed ? "justify-center" : "space-x-3"
              }`}
            >
              <Home size={24} />
              {!isCollapsed && <span>Início</span>}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboardEstabelecimento/produtos"
              className={`flex items-center px-4 py-2 hover:bg-blue-700 transition-colors ${
                isCollapsed ? "justify-center" : "space-x-3"
              }`}
            >
              <Package size={24} />
              {!isCollapsed && <span>Produtos</span>}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboardEstabelecimento/clientes"
              className={`flex items-center px-4 py-2 hover:bg-blue-700 transition-colors ${
                isCollapsed ? "justify-center" : "space-x-3"
              }`}
            >
              <Users size={24} />
              {!isCollapsed && <span>Clientes</span>}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboardEstabelecimento/configuracoes"
              className={`flex items-center px-4 py-2 hover:bg-blue-700 transition-colors ${
                isCollapsed ? "justify-center" : "space-x-3"
              }`}
            >
              <Settings size={24} />
              {!isCollapsed && <span>Configurações</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationMenu;
