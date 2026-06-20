function PriceList({ items = [], title }) {
  if (!items.length) {
    return null
  }

  return (
    <div className="border border-white/10 bg-[#070707]/82 p-5 shadow-[0_18px_70px_rgba(0,0,0,0.28)]">
      {title ? (
        <h3 className="mb-4 font-['Orbitron'] text-sm font-semibold uppercase tracking-[0.16em] text-white">
          {title}
        </h3>
      ) : null}
      <dl className="divide-y divide-white/10">
        {items.map(({ id, price, title: itemTitle }) => (
          <div
            className="grid gap-2 py-3 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6"
            key={id}
          >
            <dt className="text-sm font-medium text-white/78">{itemTitle}</dt>
            <dd className="font-['Orbitron'] text-sm font-semibold uppercase tracking-[0.12em] text-cyan-300 sm:text-right">
              {price}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default PriceList
