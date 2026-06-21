import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#030303] px-6 py-7">
      <div className="mx-auto flex max-w-[92rem] flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">
        <div className="flex items-center gap-4">
          <img
            alt="VVS Haus"
            className="h-auto w-16 object-contain sm:w-20"
            src="/assets/logos/logo.png"
          />
          <div>
            <p className="font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.28em] text-white">
              VVS Haus
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">
              Visual Vehicle Standards
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/58">
              Professional Mobile Detailing
            </p>
          </div>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {footerLinks.map((link) => (
            <Link
              className="text-xs font-semibold uppercase tracking-[0.18em] text-white/58 transition hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              key={link.to}
              to={link.to}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="text-center lg:text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/58">
            Established 2018
          </p>
          <p className="mt-2 text-xs text-white/42">
            Setting the Standard Since 2018.
          </p>
          <p className="mt-3 text-xs text-white/35">
            © {currentYear} VVS Haus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
