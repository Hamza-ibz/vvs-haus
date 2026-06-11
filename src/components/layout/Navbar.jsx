import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  return (
    <header>
      <Link to="/">VVS Haus</Link>
      <nav aria-label="Main navigation">
        {navLinks.map((link) => (
          <NavLink key={link.to} to={link.to}>
            {link.label}
          </NavLink>
        ))}
      </nav>
      <Link to="/contact">Book Now</Link>
    </header>
  )
}

export default Navbar
