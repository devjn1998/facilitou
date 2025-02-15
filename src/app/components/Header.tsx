"use client";

import { Menu, Search, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-800 via-sky-600 to-blue-600 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-sky-200 transition duration-300"
          >
            Logo da Facilita
          </Link>

          <button
            className="md:hidden text-white hover:text-sky-200 transition duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/produtos"
                  className="text-white hover:text-sky-200 transition duration-300 font-medium"
                >
                  Área do Cliente
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias"
                  className="text-white hover:text-sky-200 transition duration-300 font-medium"
                >
                  Rede de Estabelecimentos
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-white hover:text-sky-200 transition duration-300 font-medium"
                >
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              aria-label="Pesquisar"
              className="text-white hover:text-sky-200 transition duration-300"
            >
              <Search size={24} />
            </button>
            <Link
              href="/carrinho"
              className="text-white hover:text-sky-200 transition duration-300"
            >
              <ShoppingCart size={24} />
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/pages/produtos"
                  className="text-white hover:text-sky-200 transition duration-300 font-medium block"
                >
                  Área do Cliente
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias"
                  className="text-white hover:text-sky-200 transition duration-300 font-medium block"
                >
                  Rede de Estabelecimentos
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-white hover:text-sky-200 transition duration-300 font-medium block"
                >
                  Sobre Nós
                </Link>
              </li>
              <li className="flex space-x-4">
                <button
                  aria-label="Pesquisar"
                  className="text-white hover:text-sky-200 transition duration-300"
                >
                  <Search size={24} />
                </button>
                <Link
                  href="/carrinho"
                  className="text-white hover:text-sky-200 transition duration-300"
                >
                  <ShoppingCart size={24} />
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
