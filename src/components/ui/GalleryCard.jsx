import { Maximize2 } from 'lucide-react'

function GalleryCard({
  image,
  title,
  alt,
  description,
  onClick,
  className = '',
}) {
  return (
    <button
      aria-label={`View ${title || 'gallery'} image`}
      className={[
        'group relative aspect-[2.08] w-full overflow-hidden border border-white/10 bg-[#111111] text-left shadow-[0_18px_70px_rgba(0,0,0,0.35)] transition duration-300 hover:border-cyan-300/45 hover:shadow-[0_0_34px_rgba(0,217,255,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300',
        className,
      ].join(' ')}
      onClick={onClick}
      type="button"
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
      <div className="absolute right-3 top-3 flex items-center gap-2 border border-white/10 bg-black/50 px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/0 opacity-0 backdrop-blur-xl transition group-hover:text-white group-hover:opacity-100 group-focus-visible:text-white group-focus-visible:opacity-100">
        <Maximize2 aria-hidden="true" size={13} />
        View Image
      </div>
      {title ? (
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.12em] text-white">
            {title}
          </h3>
          {description ? (
            <p className="mt-2 text-xs leading-5 text-white/58">
              {description}
            </p>
          ) : null}
        </div>
      ) : null}
    </button>
  )
}

export default GalleryCard
