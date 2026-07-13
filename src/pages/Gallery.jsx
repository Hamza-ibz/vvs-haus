import { AnimatePresence, motion } from 'framer-motion'
import {
  ChevronRight,
  Gem,
  Image as ImageIcon,
  ShieldCheck,
} from 'lucide-react'
import { useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import GalleryCard from '../components/ui/GalleryCard'
import GalleryLightbox from '../components/ui/GalleryLightbox'
import SocialIcon from '../components/ui/SocialIcon'
import TransformationCard from '../components/ui/TransformationCard'
import galleryItems, { galleryFilters, transformations } from '../data/gallery'
import { socialLinks } from '../data/socialLinks'

const trustItems = [
  {
    title: 'Real Results',
    text: 'No filters. Just detail.',
    Icon: ImageIcon,
  },
  {
    title: 'Visual Standards',
    text: 'Established 2018.',
    Icon: Gem,
  },
  {
    title: 'Trusted Quality',
    text: 'Premium products. Proven results.',
    Icon: ShieldCheck,
  },
]

const gallerySocialLinks = socialLinks.filter(({ name }) => (
  name === 'Instagram' || name === 'TikTok'
))

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="flex items-center justify-center gap-4">
        <span className="h-px w-10 bg-cyan-300/55" />
        <p className="relative text-xs font-bold uppercase tracking-[0.32em] text-cyan-300">
          {eyebrow}
          <span className="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(0,217,255,0.9)]" />
        </p>
        <span className="h-px w-10 bg-cyan-300/55" />
      </div>
      <h2 className="mt-6 font-['Orbitron'] text-2xl font-semibold uppercase tracking-[0.1em] text-white sm:text-3xl">
        {title}
      </h2>
      {copy ? (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/64 sm:text-base">
          {copy}
        </p>
      ) : null}
    </div>
  )
}

function EmptyState() {
  return (
    <div className="border border-white/10 bg-[#0a0a0a]/90 px-6 py-12 text-center shadow-[0_0_44px_rgba(0,217,255,0.08)]">
      <p className="font-['Orbitron'] text-sm font-semibold uppercase tracking-[0.18em] text-white">
        More VVS Haus results are coming soon.
      </p>
    </div>
  )
}

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxItems, setLightboxItems] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  const filteredItems = useMemo(() => (
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)
  ), [activeFilter])

  const transformationLightboxItems = useMemo(() => (
    transformations.flatMap((item) => [
      {
        id: `${item.id}-before`,
        title: `${item.title} Before`,
        image: item.beforeImage,
        alt: item.beforeAlt,
        description: item.description,
      },
      {
        id: `${item.id}-after`,
        title: `${item.title} After`,
        image: item.afterImage,
        alt: item.afterAlt,
        description: item.description,
      },
    ])
  ), [])

  const openLightbox = useCallback((item, items = filteredItems) => {
    setLightboxItems(items)
    setSelectedItem(item)
  }, [filteredItems])

  const closeLightbox = useCallback(() => {
    setSelectedItem(null)
    setLightboxItems([])
  }, [])

  const showNextImage = useCallback(() => {
    setSelectedItem((current) => {
      if (!current || lightboxItems.length === 0) return current
      const currentIndex = lightboxItems.findIndex((item) => item.id === current.id)
      const nextIndex = (currentIndex + 1) % lightboxItems.length
      return lightboxItems[nextIndex]
    })
  }, [lightboxItems])

  const showPreviousImage = useCallback(() => {
    setSelectedItem((current) => {
      if (!current || lightboxItems.length === 0) return current
      const currentIndex = lightboxItems.findIndex((item) => item.id === current.id)
      const previousIndex = (currentIndex - 1 + lightboxItems.length) % lightboxItems.length
      return lightboxItems[previousIndex]
    })
  }, [lightboxItems])

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#050505] pt-32 sm:pt-36 lg:pt-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#050505]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050505] to-transparent"
        />

        <div className="relative mx-auto grid min-h-[29rem] max-w-[92rem] items-center gap-8 px-6 pb-9 sm:px-8 lg:grid-cols-[0.66fr_1fr] lg:px-16 2xl:px-20">
          <motion.div
            animate="visible"
            className="max-w-xl pt-8 lg:pt-12"
            initial="hidden"
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.p
              className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-cyan-300"
              variants={fadeUp}
            >
              Our Gallery
            </motion.p>
            <motion.h1
              className="font-['Orbitron'] text-4xl font-semibold uppercase leading-[1.16] tracking-[0.05em] text-white sm:text-5xl lg:text-[3.4rem]"
              variants={fadeUp}
            >
              Results That Speak
              <br />
              For <span className="text-cyan-300">Themselves.</span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-md text-base leading-8 text-white/78 sm:text-lg"
              variants={fadeUp}
            >
              Explore real transformations, interior and exterior detailing results, and the professional mobile setup behind VVS Haus.
            </motion.p>
            <motion.p
              className="mt-4 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300/80"
              variants={fadeUp}
            >
              Visual Vehicle Standards
            </motion.p>

            <motion.div
              className="mt-9 grid gap-4 sm:grid-cols-3"
              variants={fadeUp}
            >
              {trustItems.map(({ Icon, text, title }) => (
                <div className="flex items-center gap-3 border-r border-white/10 pr-4 last:border-r-0" key={title}>
                  <Icon aria-hidden="true" className="shrink-0 text-cyan-300" size={30} strokeWidth={1.45} />
                  <div>
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white">
                      {title}
                    </p>
                    <p className="mt-1 text-xs text-white/62">{text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, x: 0, scale: 1 }}
            className="relative hidden self-end lg:block"
            initial={{ opacity: 0, x: 28, scale: 1.02 }}
            transition={{ delay: 0.12, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative ml-auto h-[25rem] overflow-hidden">
              <img
                alt="VVS Haus van and Mercedes showcasing gallery results"
                className="h-full w-full object-cover object-center brightness-[1.14] contrast-[1.08] saturate-[1.05]"
                src="/assets/images/van-car.jpg"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0)_18%,rgba(5,5,5,0)_78%,#050505_100%)]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,#050505_0%,rgba(5,5,5,0)_18%,rgba(5,5,5,0)_76%,#050505_100%)]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {transformations.length ? (
        <section className="relative overflow-hidden border-b border-white/10 bg-[#050505] px-6 py-12 sm:px-8 lg:px-16 2xl:px-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,217,255,0.1),transparent_24rem),linear-gradient(135deg,#050505_0%,#070707_44%,#111111_68%,#050505_100%)]"
          />
          <div className="relative mx-auto max-w-[92rem]">
            <SectionHeading
              copy="Every result reflects our commitment to quality, consistency, and attention to detail."
              eyebrow="Transformations"
              title="See The VVS Difference."
            />
            <motion.div
              className="mt-9 grid gap-5 lg:grid-cols-2"
              initial="hidden"
              transition={{ staggerChildren: 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              whileInView="visible"
            >
              {transformations.map((item) => (
                <motion.div key={item.id} variants={fadeUp}>
                  <TransformationCard
                    item={item}
                    onOpen={(lightboxItem) => openLightbox(lightboxItem, transformationLightboxItems)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ) : null}

      <section className="relative overflow-hidden bg-[#050505] px-6 py-12 sm:px-8 lg:px-16 2xl:px-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_8%,rgba(0,217,255,0.1),transparent_26rem),linear-gradient(225deg,#050505_0%,#070707_42%,#111111_66%,#050505_100%)]"
        />
        <div className="relative mx-auto max-w-[92rem]">
          <SectionHeading
            copy="Browse VVS Haus results by transformation work, interior cleaning, exterior cleaning, and the professional setup behind each appointment."
            eyebrow="Gallery"
            title="Clean Work. Clear Standards."
          />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {galleryFilters.map((filter) => {
              const isActive = activeFilter === filter.id

              return (
                <motion.button
                  aria-pressed={isActive}
                  className={[
                    'min-w-28 border px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300',
                    isActive
                      ? 'border-cyan-300/70 bg-cyan-300/10 text-cyan-100 shadow-[0_0_22px_rgba(0,217,255,0.16)]'
                      : 'border-white/10 bg-black/20 text-white/70 hover:border-cyan-300/45 hover:text-cyan-200',
                  ].join(' ')}
                  key={filter.id}
                  layout
                  onClick={() => setActiveFilter(filter.id)}
                  type="button"
                  whileTap={{ scale: 0.97 }}
                >
                  {filter.label}
                </motion.button>
              )
            })}
          </div>

          <AnimatePresence mode="popLayout">
            {filteredItems.length ? (
              <motion.div
                className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
                initial="hidden"
                key={activeFilter}
                layout
                transition={{ staggerChildren: 0.05 }}
                viewport={{ once: true, amount: 0.12 }}
                whileInView="visible"
              >
                {filteredItems.map((item) => (
                  <motion.div
                    exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.18 } }}
                    key={item.id}
                    layout
                    variants={fadeUp}
                  >
                    <GalleryCard
                      {...item}
                      onClick={() => openLightbox(item, filteredItems)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="mt-8"
                exit={{ opacity: 0, y: -10 }}
                initial={{ opacity: 0, y: 12 }}
                key="empty-gallery"
                animate={{ opacity: 1, y: 0 }}
              >
                <EmptyState />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 py-10 sm:px-8 lg:px-16 2xl:px-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(0,217,255,0.12),transparent_24rem),radial-gradient(circle_at_86%_60%,rgba(0,217,255,0.08),transparent_22rem)]"
        />
        <motion.div
          className="relative mx-auto flex max-w-[92rem] flex-col items-start justify-between gap-7 border border-cyan-300/18 bg-black/45 p-6 shadow-[0_0_40px_rgba(0,217,255,0.08)] sm:p-8 lg:flex-row lg:items-center"
          initial={{ opacity: 0, y: 18 }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">
              Follow The Finish
            </p>
            <h2 className="mt-4 font-['Orbitron'] text-2xl font-semibold uppercase tracking-[0.08em] text-white sm:text-3xl">
              Want To See More <span className="text-cyan-300">Transformations?</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
              Follow VVS Haus for our latest details, before-and-after results and behind-the-scenes content.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            {gallerySocialLinks.map((social) => (
              <a
                aria-label={`Open VVS Haus ${social.name} in a new tab`}
                className="group inline-flex min-h-14 min-w-56 items-center justify-center gap-3 border border-cyan-300/55 bg-cyan-300/[0.055] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-300/[0.09] hover:shadow-[0_0_30px_rgba(0,217,255,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                href={social.url}
                key={social.name}
                rel="noopener noreferrer"
                target="_blank"
              >
                <SocialIcon className="h-4 w-4 text-cyan-300 transition group-hover:scale-110 group-hover:text-cyan-100" name={social.name} />
                {social.name === 'Instagram' ? 'View Instagram' : 'Watch on TikTok'}
                <ChevronRight aria-hidden="true" className="text-cyan-300 transition group-hover:translate-x-1" size={17} />
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 px-6 py-7 sm:px-8 lg:px-16 2xl:px-20">
        <div className="absolute inset-0 opacity-55" aria-hidden="true">
          <img
            alt=""
            className="h-full w-full object-cover object-center brightness-[1.05] contrast-[1.1]"
            src="/assets/images/mercedes-back.jpg"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.86)_0%,rgba(5,5,5,0.62)_48%,rgba(5,5,5,0.88)_100%)]"
        />
        <div className="relative mx-auto flex max-w-[92rem] flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="font-['Orbitron'] text-2xl font-semibold uppercase tracking-[0.1em] text-white sm:text-3xl">
              Your Vehicle Deserves The <span className="text-cyan-300">VVS Finish.</span>
            </h2>
            <p className="mt-3 text-base text-white/72">
              Professional mobile detailing built around quality, convenience, and attention to detail.
            </p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300/85">
              Setting the Standard Since 2018.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Link
              className="group inline-flex min-w-72 items-center justify-center gap-3 border border-cyan-300/70 bg-black/35 px-9 py-5 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_28px_rgba(0,217,255,0.16)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-[0_0_38px_rgba(0,217,255,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              to="/contact"
            >
              Book Your Detail
              <ChevronRight aria-hidden="true" className="text-cyan-300 transition group-hover:translate-x-1" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <GalleryLightbox
        item={selectedItem}
        items={lightboxItems}
        onClose={closeLightbox}
        onNext={showNextImage}
        onPrevious={showPreviousImage}
      />
    </div>
  )
}

export default Gallery
