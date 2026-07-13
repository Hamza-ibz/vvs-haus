import {
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
} from 'react-icons/fa'

const socialIconMap = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  Snapchat: FaSnapchatGhost,
  TikTok: FaTiktok,
}

function SocialIcon({ className = '', name }) {
  const Icon = socialIconMap[name]

  if (!Icon) return null

  return <Icon aria-hidden="true" className={className} />
}

export default SocialIcon
