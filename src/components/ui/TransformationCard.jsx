function TransformationCard({ item, onOpen }) {
  const beforeItem = {
    id: `${item.id}-before`,
    title: `${item.title} Before`,
    image: item.beforeImage,
    alt: item.beforeAlt,
    description: item.description,
  }

  const afterItem = {
    id: `${item.id}-after`,
    title: `${item.title} After`,
    image: item.afterImage,
    alt: item.afterAlt,
    description: item.description,
  }

  return (
    <article className="overflow-hidden border border-white/12 bg-[#0a0a0a] shadow-[0_18px_60px_rgba(0,0,0,0.34)] transition duration-300 hover:border-cyan-300/45 hover:shadow-[0_0_34px_rgba(0,217,255,0.12)]">
      <div className="grid md:grid-cols-2">
        <button
          aria-label={`View ${item.title} before image`}
          className="group relative aspect-[1.45] overflow-hidden bg-[#111111] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          onClick={() => onOpen(beforeItem)}
          type="button"
        >
          <img
            alt={item.beforeAlt}
            className="h-full w-full object-cover brightness-[0.7] contrast-[1.1] grayscale transition duration-700 group-hover:scale-105 group-hover:brightness-[0.85]"
            src={item.beforeImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/10 to-black/20" />
          <span className="absolute bottom-4 left-4 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-white">
            Before
          </span>
        </button>

        <button
          aria-label={`View ${item.title} after image`}
          className="group relative aspect-[1.45] overflow-hidden bg-[#111111] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          onClick={() => onOpen(afterItem)}
          type="button"
        >
          <img
            alt={item.afterAlt}
            className="h-full w-full object-cover brightness-[0.98] contrast-[1.08] transition duration-700 group-hover:scale-105 group-hover:brightness-[1.08]"
            src={item.afterImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-black/15" />
          <span className="absolute bottom-4 right-4 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-white">
            After
          </span>
        </button>
      </div>
      <div className="border-t border-white/10 p-5">
        <h3 className="font-['Orbitron'] text-sm font-semibold uppercase tracking-[0.12em] text-white">
          {item.title}
        </h3>
        {item.description ? (
          <p className="mt-3 text-sm leading-6 text-white/62">{item.description}</p>
        ) : null}
      </div>
    </article>
  )
}

export default TransformationCard
