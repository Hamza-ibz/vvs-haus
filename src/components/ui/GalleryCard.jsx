function GalleryCard({ image, title, alt, className = '' }) {
  return (
    <article
      className={[
        'group relative aspect-[2.08] overflow-hidden border border-white/10 bg-[#111111] shadow-[0_18px_70px_rgba(0,0,0,0.35)] transition duration-300 hover:border-cyan-300/45 hover:shadow-[0_0_34px_rgba(0,217,255,0.14)]',
        className,
      ].join(' ')}
    >
      {image ? (
        <img
          alt={alt || title || 'VVS Haus gallery image'}
          className="h-full w-full object-cover brightness-[0.82] contrast-[1.08] saturate-[0.9] transition duration-700 ease-out group-hover:scale-110 group-hover:brightness-100 group-hover:saturate-100"
          src={image}
        />
      ) : (
        <div className="h-full w-full bg-[radial-gradient(circle_at_50%_20%,rgba(0,217,255,0.18),transparent_32%),#111111]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      {title ? (
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.12em] text-white">
            {title}
          </h3>
        </div>
      ) : null}
    </article>
  )
}

export default GalleryCard
