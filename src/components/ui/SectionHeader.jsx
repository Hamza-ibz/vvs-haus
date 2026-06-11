function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div className={['flex max-w-3xl flex-col gap-4', alignment, className].join(' ')}>
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-300">
          {eyebrow}
        </span>
      ) : null}
      {title ? (
        <h2 className="font-['Orbitron'] text-3xl font-semibold uppercase tracking-[0.08em] text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeader
