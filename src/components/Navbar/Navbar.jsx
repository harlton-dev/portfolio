import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Awards', href: '#awards' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const handleScroll = (e, href) => {
  e.preventDefault()
  const target = document.querySelector(href)
  if (target) target.scrollIntoView({ behavior: 'smooth' })
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const handleLinkClick = (e, href) => {
    handleScroll(e, href)
    setMenuOpen(false)
  }

  return (
    <nav className={`relative sticky top-0 z-[100] flex items-center justify-between px-5 sm:px-22 h-[60px] transition-all duration-300${scrolled ? ' bg-[#2672e0]/95 backdrop-blur-md shadow-lg shadow-black/30' : ' bg-transparent'}`}>

      <a
        className="text-white font-semibold text-base tracking-tight no-underline"
        href="#home"
        onClick={(e) => handleScroll(e, '#home')}
      >
        Harlton
      </a>

      {/* Desktop nav links */}
      <ul className="hidden sm:flex items-center gap-1 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              className="text-white/60 text-sm font-medium px-3 py-[6px] rounded-md no-underline transition-colors duration-200 hover:text-white hover:bg-white/[0.08] whitespace-nowrap"
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger button — mobile only */}
      <button
        className="sm:hidden relative w-7 h-5 cursor-pointer bg-transparent border-none p-0"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span
          className={`absolute left-0 block h-0.5 bg-white w-full transition-all duration-300 ${
            menuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
          }`}
        />
        <span
          className={`absolute left-0 top-1/2 -translate-y-1/2 block h-0.5 bg-white w-full transition-all duration-300 ${
            menuOpen ? 'opacity-0 scale-x-0' : ''
          }`}
        />
        <span
          className={`absolute left-0 block h-0.5 bg-white w-full transition-all duration-300 ${
            menuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
          }`}
        />
      </button>

      {/* Mobile dropdown menu */}
      <div
        className={`sm:hidden absolute top-full left-0 right-0 bg-blue-900/95 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-80 py-2' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col list-none px-4 m-0 p-0 py-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className="block text-white/70 text-sm font-medium px-3 py-2.5 rounded-md no-underline transition-colors duration-200 hover:text-white hover:bg-white/10"
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
