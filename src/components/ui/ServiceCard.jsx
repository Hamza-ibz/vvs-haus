import {
  Armchair,
  Droplet,
  ShieldCheck,
  Sparkles,
  Truck,
} from 'lucide-react'

const iconMap = {
  armchair: Armchair,
  droplet: Droplet,
  shield: ShieldCheck,
  sparkles: Sparkles,
  truck: Truck,
}

function ServiceCard({
  title,
  description,
  image,
  index,
  price,
  icon,
  className = '',
}) {
  const Icon = iconMap[icon] ?? Sparkles

  return (
    <article
      className={[
        'group flex min-h-full flex-col overflow-hidden border border-white/[0.12] bg-[#070707]/90 shadow-[0_18px_70px_rgba(0,0,0,0.36)] backdrop-blur-xl',
        'transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_24px_90px_rgba(0,217,255,0.16)]',
        className,
      ].join(' ')}
    >
      {image ? (
        <div className="aspect-[1.35] overflow-hidden bg-[#111111]">
          <img
            alt={title || 'VVS Haus service'}
            className="h-full w-full object-cover brightness-[1.08] contrast-[1.08] grayscale-[10%] transition duration-500 ease-out group-hover:scale-105 group-hover:brightness-[1.18] group-hover:grayscale-0"
            src={image}
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex items-center gap-3 text-cyan-300">
          <Icon aria-hidden="true" size={30} strokeWidth={1.55} />
          {typeof index === 'number' ? (
            <span className="font-['Orbitron'] text-lg font-semibold tracking-[0.12em]">
              {String(index + 1).padStart(2, '0')}
            </span>
          ) : null}
        </div>
        {title ? (
          <h3 className="font-['Orbitron'] text-sm font-semibold uppercase tracking-[0.08em] text-white sm:text-base">
            {title}
          </h3>
        ) : null}
        {description ? (
          <p className="mt-4 min-h-[4rem] text-sm leading-7 text-white/66">{description}</p>
        ) : null}
        {price ? (
          <p className="mt-auto pt-6 text-center font-['Orbitron'] text-base font-semibold uppercase tracking-[0.16em] text-cyan-300">
            {price}
          </p>
        ) : null}
      </div>
    </article>
  )
}

export default ServiceCard
