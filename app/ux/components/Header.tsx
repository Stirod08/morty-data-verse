'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useScrolled } from '@/app/ux/hooks/useScrolled';
import { useHasMounted } from '@/app/ux/hooks/useHasMounted';
import { MobileMenu } from './MobileMenu';

export default function Header() {
  const scrolled = useScrolled();
  const hasMounted = useHasMounted();
  const [menuOpen, setMenuOpen] = useState(false);

  if (!hasMounted) return null;

  return (
    <header
      className={`w-full z-50 fixed top-0 left-0 transition-all duration-300 ${
        scrolled ? 'bg-black/10 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-toxic font-rickMorty">
          MDT
        </Link>

        <nav className="hidden md:flex space-x-6 text-white font-medium">
          <Link href="#personajes" className="hover:text-toxic transition">Personajes</Link>
          <Link href="#episodios" className="hover:text-toxic transition">Episodios</Link>
          <Link href="#universos" className="hover:text-toxic transition">Universos</Link>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </header>
  );
}
