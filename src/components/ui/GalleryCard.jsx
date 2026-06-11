function GalleryCard({ image, title, alt, className = '' }) {
  return (
    <article
      className={[
        'group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-[0_18px_70px_rgba(0,0,0,0.35)]',
        className,
      ].join(' ')}
    >
      {image ? (
        <img
          alt={alt || title || 'VVS Haus gallery image'}
          className="h-full w-full object-cover opacity-90 transition duration-700 ease-out group-hover:scale-110 group-hover:opacity-100"
          src={image}
        />
      ) : (
        <div className="h-full w-full bg-[radial-gradient(circle_at_50%_20%,rgba(0,217,255,0.18),transparent_32%),#111111]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      {title ? (
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-['Orbitron'] text-base font-semibold uppercase tracking-[0.08em] text-white">
            {title}
          </h3>
        </div>
      ) : null}
    </article>
  )
}

export default GalleryCard
