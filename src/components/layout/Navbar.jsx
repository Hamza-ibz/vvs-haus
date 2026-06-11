import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const logoSrc = '/assets/logos/vvs-haus-logo-white.png .png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  const getLinkClass = ({ isActive }) =>
    [
      'relative px-1 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition duration-300 ease-out',
      isActive
        ? 'text-white after:absolute after:inset-x-1 after:-bottom-1 after:h-px after:bg-cyan-300 after:shadow-[0_0_14px_rgba(0,217,255,0.75)]'
        : 'text-white/62 hover:text-cyan-200',
    ].join(' ')

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 rounded-full border border-white/10 bg-[#050505]/72 px-4 py-3 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-6">
        <Link
          aria-label="VVS Haus home"
          className="flex items-center"
          onClick={closeMenu}
          to="/"
        >
          <img
            alt="VVS Haus"
            className="h-8 w-auto object-contain sm:h-9"
            src={logoSrc}
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center justify-center gap-7 lg:flex"
        >
          {navLinks.map((link) => (
            <NavLink className={getLinkClass} key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden justify-end lg:flex">
          <Link
            className="inline-flex items-center justify-center rounded-full border border-cyan-300/70 bg-cyan-300 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-black shadow-[0_0_26px_rgba(0,217,255,0.24)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_38px_rgba(0,217,255,0.36)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            to="/contact"
          >
            Book Now
          </Link>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition duration-300 hover:border-cyan-300/50 hover:text-cyan-200 hover:shadow-[0_0_24px_rgba(0,217,255,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </div>

      {isOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="mx-auto mt-3 flex max-w-7xl flex-col gap-1 rounded-3xl border border-white/10 bg-[#050505]/88 p-4 shadow-[0_18px_70px_rgba(0,0,0,0.4)] backdrop-blur-xl lg:hidden"
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
            className="mt-2 inline-flex items-center justify-center rounded-full border border-cyan-300/70 bg-cyan-300 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black shadow-[0_0_26px_rgba(0,217,255,0.24)] transition duration-300 hover:bg-white"
            onClick={closeMenu}
            to="/contact"
          >
            Book Now
          </Link>
        </nav>
      ) : null}
    </header>
  )
}

export default Navbar
