'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  //const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      //setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Réalisations', path: '/project' },
    { name: 'Contact', path: '/contact' },
  ]

  const handleAnchorClick = (path: string, e: React.MouseEvent) => {
    if (path.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(path)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      }
    }
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 bg-white dark:bg-gray-950 backdrop-blur-lg`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center h-16 my-2 rounded-full md:border-black bg-white dark:bg-gray-900 shadow-lg px-6 border md:border-2 dark:border-gray-800`}>
          {/* Logo avec effet de halo */}
          <Link href="/" className="flex items-center group" aria-label="Retour à l'accueil">
            <div className="relative">
              
                <Image
                  src="/logo/orbisLogo.png" 
                  alt="Orbis Web Digital" 
                  width={132} 
                  height={55} 
                  className='p-1 flex items-center'
                  priority
                />
            
              <span className="absolute inset-0 rounded-full bg-blue-500/10 blur-md group-hover:opacity-40 opacity-0 transition-opacity duration-300"></span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-6" aria-label="Navigation principale">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={(e) => handleAnchorClick(item.path, e)}
                className={`relative px-3 py-2 text-sm font-medium transition-all ${pathname === item.path ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
                aria-current={pathname === item.path ? 'page' : undefined}
              >
                {item.name}
                {pathname === item.path && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-6 bg-blue-500 rounded-full"></span>
                )}
              </Link>
            ))}
            <Button asChild variant="default" className="ml-4 rounded-full px-6 shadow-lg hover:shadow-blue-500/20 transition-shadow">
              <Link href="/meeting" className="flex items-center gap-1">
                <span>Réserver un appel</span>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 shadow-xl">
          <div className="px-5 pt-3 pb-5 space-y-3" role="dialog" aria-modal="true">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${pathname === item.path ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'}`}
                onClick={() => setIsOpen(false)}
                aria-current={pathname === item.path ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild variant="default" className="w-full mt-2 rounded-full py-4 text-base font-medium">
              <Link href="/meeting" onClick={() => setIsOpen(false)}>
                Réserver un appel
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header