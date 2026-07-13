import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import useReducedMotionPreference from '../../hooks/useReducedMotionPreference'
import { cardReveal, staggerContainer } from '../../utils/animations'
import { socialLinks } from '../../data/socialLinks'
import SocialIcon from '../ui/SocialIcon'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function Footer() {
  const currentYear = new Date().getFullYear()
  const prefersReducedMotion = useReducedMotionPreference()

  return (
    <footer className="relative border-t border-white/10 bg-[#030303] px-6 py-7">
      <motion.div
        className="mx-auto flex max-w-[92rem] flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left"
        initial={prefersReducedMotion ? false : 'hidden'}
        variants={prefersReducedMotion ? undefined : staggerContainer}
        viewport={{ once: true, amount: 0.2 }}
        whileInView={prefersReducedMotion ? undefined : 'visible'}
      >
        <motion.div
          aria-hidden="true"
          className="absolute left-1/2 h-px w-[min(92rem,calc(100vw-3rem))] -translate-x-1/2 -translate-y-7 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent"
          variants={prefersReducedMotion ? undefined : {
            hidden: { opacity: 0, scaleX: 0 },
            visible: {
              opacity: 1,
              scaleX: 1,
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        />
        <motion.div className="flex items-center gap-4" variants={prefersReducedMotion ? undefined : cardReveal}>
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
        </motion.div>

        <motion.nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          variants={prefersReducedMotion ? undefined : cardReveal}
        >
          {footerLinks.map((link) => (
            <Link
              className="text-xs font-semibold uppercase tracking-[0.18em] text-white/58 transition hover:-translate-y-px hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              key={link.to}
              to={link.to}
            >
              {link.label}
            </Link>
          ))}
        </motion.nav>

        <motion.div
          className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left"
          variants={prefersReducedMotion ? undefined : cardReveal}
        >
          <div>
            <p className="font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.22em] text-white">
              Follow VVS Haus
            </p>
            <p className="mt-2 max-w-60 text-xs leading-5 text-white/45">
              Daily details, transformations and behind-the-scenes content.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            {socialLinks.map((social) => (
              <a
                aria-label={`Follow VVS Haus on ${social.name}`}
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.035] text-white/78 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/70 hover:text-cyan-200 hover:shadow-[0_0_24px_rgba(0,217,255,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                href={social.url}
                key={social.name}
                rel="noopener noreferrer"
                target="_blank"
              >
                <SocialIcon className="h-4 w-4 transition group-hover:scale-110" name={social.name} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center lg:text-right"
          variants={prefersReducedMotion ? undefined : cardReveal}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/58">
            Established 2018
          </p>
          <p className="mt-2 text-xs text-white/42">
            Setting the Standard Since 2018.
          </p>
          <p className="mt-3 text-xs text-white/35">
            © {currentYear} VVS Haus. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
