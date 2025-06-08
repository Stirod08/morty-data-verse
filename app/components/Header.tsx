'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 🛡️ Prevenir que se renderice antes de montar
  if (!hasMounted) return null

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

      {menuOpen && (
        <div className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4">
          <Link href="#personajes" onClick={() => setMenuOpen(false)} className="block hover:text-toxic">Personajes</Link>
          <Link href="#episodios" onClick={() => setMenuOpen(false)} className="block hover:text-toxic">Episodios</Link>
          <Link href="#universos" onClick={() => setMenuOpen(false)} className="block hover:text-toxic">Universos</Link>
        </div>
      )}
    </header>
  )
}
