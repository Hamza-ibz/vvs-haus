import { ChevronRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const logoSrc = '/assets/logos/logo.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeMenu = () => {
    setIsOpen(false)
  }

  const getLinkClass = ({ isActive }) =>
    [
      'relative px-1 py-2 text-sm font-semibold uppercase tracking-[0.18em] transition duration-300 ease-out',
      isActive
        ? 'text-white after:absolute after:inset-x-1 after:-bottom-1 after:h-px after:bg-cyan-300 after:shadow-[0_0_14px_rgba(0,217,255,0.75)]'
        : 'text-white/62 hover:text-cyan-200',
    ].join(' ')

  return (
    <header
      className={[
        'fixed left-0 right-0 top-0 z-50 w-full px-5 py-5 transition-[background,border-color,box-shadow,backdrop-filter] duration-300 sm:px-8 lg:px-16 2xl:px-20',
        isScrolled
          ? 'border-b border-cyan-300/10 bg-[linear-gradient(180deg,rgba(0,217,255,0.055)_0%,rgba(5,5,5,0.46)_55%,rgba(5,5,5,0.34)_100%)] shadow-[0_8px_24px_rgba(0,0,0,0.18),0_1px_12px_rgba(0,217,255,0.035)] backdrop-blur-[14px] backdrop-saturate-[1.15]'
          : 'border-b border-transparent bg-transparent',
      ].join(' ')}
    >
      <div
        aria-hidden="true"
        className={[
          'pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(0,217,255,0.35),transparent)] transition-opacity duration-300',
          isScrolled ? 'opacity-35' : 'opacity-0',
        ].join(' ')}
      />
      <div className="mx-auto grid max-w-[92rem] grid-cols-[auto_1fr_auto] items-center gap-4">
        <Link
          aria-label="VVS Haus home"
          className="flex items-center"
          onClick={closeMenu}
          to="/"
        >
          <img
            alt="VVS Haus"
            className="h-auto w-[8.5rem] object-contain sm:w-[9.5rem] lg:w-[11.25rem]"
            src={logoSrc}
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center justify-center gap-9 xl:gap-10 lg:flex"
        >
          {navLinks.map((link) => (
            <NavLink className={getLinkClass} key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden justify-end lg:flex">
          <Link
            className="group inline-flex items-center justify-center gap-3 border border-cyan-300/70 bg-black/20 px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_0_20px_rgba(0,217,255,0.16)] backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-cyan-300 hover:text-black hover:shadow-[0_0_34px_rgba(0,217,255,0.32)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            to="/contact"
          >
            Book Now
            <ChevronRight
              aria-hidden="true"
              className="text-cyan-300 transition group-hover:translate-x-1 group-hover:text-black"
              size={17}
            />
          </Link>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="ml-auto inline-flex h-11 w-11 items-center justify-center border border-cyan-300/35 bg-black/30 text-white backdrop-blur-sm transition duration-300 hover:border-cyan-300/70 hover:text-cyan-200 hover:shadow-[0_0_24px_rgba(0,217,255,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </div>

      {isOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="mx-auto mt-4 flex max-w-[92rem] flex-col gap-1 border border-white/10 bg-[#050505]/90 p-4 shadow-[0_18px_70px_rgba(0,0,0,0.4)] backdrop-blur-xl lg:hidden"
        >
          {navLinks.map((link) => (
            <NavLink
              className={({ isActive }) =>
                [
                  'rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition duration-300',
                  isActive
                    ? 'bg-cyan-300/10 text-cyan-200 shadow-[inset_0_0_0_1px_rgba(0,217,255,0.26)]'
                    : 'text-white/68 hover:bg-white/[0.04] hover:text-white',
                ].join(' ')
              }
              key={link.to}
              onClick={closeMenu}
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            className="mt-2 inline-flex items-center justify-center gap-2 border border-cyan-300/70 bg-black/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_0_20px_rgba(0,217,255,0.18)] transition duration-300 hover:bg-cyan-300 hover:text-black"
            onClick={closeMenu}
            to="/contact"
          >
            Book Now
            <ChevronRight aria-hidden="true" size={16} />
          </Link>
        </nav>
      ) : null}
    </header>
  )
}

export default Navbar
