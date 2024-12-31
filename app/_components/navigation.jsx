'use client'

import { useCallback, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

export function Navigation() {
  const navItems = ['about', 'tickets', 'speakers', 'sponsors', 'gallery']
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = useCallback((e, targetId) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const headerOffset = 80
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }, [])

  return (
    <nav className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>
      <ul className={`${
        isMenuOpen ? 'flex' : 'hidden'
      } md:flex flex-col md:flex-row absolute md:relative top-full right-0 mt-2 md:mt-0 bg-black md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none space-y-2 md:space-y-0 md:space-x-6`}>
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              onClick={(e) => scrollToSection(e, item)}
              className={'block py-2 md:py-0 hover:text-[#40E0D0] transition-colors'}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
