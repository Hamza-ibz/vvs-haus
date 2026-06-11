function ServiceCard({ title, description, image, index, className = '' }) {
  return (
    <article
      className={[
        'group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl',
        'transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-300/45 hover:shadow-[0_24px_90px_rgba(0,217,255,0.15)]',
        className,
      ].join(' ')}
    >
      {image ? (
        <div className="aspect-[4/3] overflow-hidden bg-[#111111]">
          <img
            alt={title || 'VVS Haus service'}
            className="h-full w-full object-cover opacity-85 transition duration-500 ease-out group-hover:scale-105 group-hover:opacity-100"
            src={image}
          />
        </div>
      ) : null}
      <div className="flex flex-col gap-4 p-6 sm:p-7">
        {typeof index === 'number' ? (
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
            {String(index + 1).padStart(2, '0')}
          </span>
        ) : null}
        {title ? (
          <h3 className="font-['Orbitron'] text-xl font-semibold uppercase tracking-[0.08em] text-white">
            {title}
          </h3>
        ) : null}
        {description ? (
          <p className="text-sm leading-7 text-white/62">{description}</p>
        ) : null}
      </div>
    </article>
  )
}

export default ServiceCard
