import { motion } from 'framer-motion'
import {
  CheckCircle,
  Gem,
  Heart,
  Home,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import FeatureCard from '../components/ui/FeatureCard'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const storySections = [
  {
    title: 'Founded With A Purpose',
    points: ['Founded in 2018', 'Mission to raise the standard of vehicle care', 'Meaning of Visual Vehicle Standards'],
    paragraphs: [
      'VVS Haus was founded in 2018 with a simple mission: to raise the standard of vehicle care.',
      'VVS stands for Visual Vehicle Standards, a name that reflects what we believe every vehicle deserves: professional attention, exceptional care, and a finish that owners can be proud of.',
    ],
  },
  {
    title: 'Mobile By Design',
    points: ['Built around convenience, quality, and consistency', 'Service delivered directly to the customer', 'Designed for busy vehicle owners'],
    paragraphs: [
      'What started as a passion for clean, well-maintained vehicles quickly grew into a mobile detailing business built on convenience, quality, and consistency. We recognised that people lead busy lives and often do not have the time to sit at a shop for hours waiting on their vehicle, so we brought the service directly to them.',
    ],
  },
  {
    title: 'Every Vehicle Matters',
    points: ['Family SUVs', 'Daily commuters', 'Work vehicles', 'Weekend cars', 'Luxury vehicles'],
    paragraphs: [
      'At VVS Haus, we believe every vehicle matters. Whether it is a family SUV, a daily commuter, a work truck, a weekend cruiser, or a luxury vehicle, we approach every detail with the same level of care and attention.',
    ],
  },
  {
    title: 'More Than A Name',
    points: ['A home for vehicle care', 'High standards', 'Professionalism', 'Customer satisfaction'],
    paragraphs: [
      'The name “Haus” represents more than a business. It represents a home for vehicle care, where high standards, professionalism, and customer satisfaction come first.',
    ],
  },
  {
    title: 'Setting The Standard',
    points: ['Restore pride in ownership', 'Protect customer investment', 'Dedication, reliability, and results'],
    paragraphs: [
      'Our goal has never been simply to wash vehicles. We strive to restore pride in ownership, protect our clients’ investments, and help every vehicle look its absolute best.',
      'Since 2018, our reputation has been built one vehicle at a time through dedication, reliability, and results that speak for themselves.',
      'We take pride in treating every vehicle as if it were our own and every customer as part of the VVS Haus family.',
      'Today, VVS Haus continues to serve drivers who value quality, convenience, and attention to detail.',
    ],
  },
]

const values = [
  {
    title: 'Professional Attention',
    description: 'Every vehicle receives careful, considered service.',
    icon: Sparkles,
  },
  {
    title: 'Exceptional Care',
    description: 'We treat every vehicle as if it were our own.',
    icon: Heart,
  },
  {
    title: 'Convenience',
    description: 'Premium detailing delivered directly to you.',
    icon: Home,
  },
  {
    title: 'Consistency',
    description: 'High standards on every vehicle, every time.',
    icon: CheckCircle,
  },
  {
    title: 'Reliability',
    description: 'A professional service customers can trust.',
    icon: ShieldCheck,
  },
  {
    title: 'Pride In Ownership',
    description: 'Helping every vehicle look its absolute best.',
    icon: Gem,
  },
]

function StoryBlock({ index, paragraphs, points, title }) {
  return (
    <article className="border border-white/10 bg-black/20 p-5 shadow-[0_16px_60px_rgba(0,0,0,0.22)]">
      <div className="mb-4 flex items-center gap-3">
        <span className="font-['Orbitron'] text-sm font-semibold tracking-[0.18em] text-cyan-300">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="font-['Orbitron'] text-sm font-semibold uppercase tracking-[0.12em] text-white">
          {title}
        </h3>
      </div>
      <div className="space-y-4 text-sm leading-7 text-white/70 sm:text-base">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <ul className="mt-5 grid gap-2 text-sm text-white/58 sm:grid-cols-2">
        {points.map((point) => (
          <li className="flex gap-3" key={point}>
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(0,217,255,0.65)]" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

function About() {
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

        <div className="relative mx-auto grid min-h-[29rem] max-w-[92rem] items-center gap-8 px-6 pb-10 sm:px-8 lg:grid-cols-[0.66fr_1fr] lg:px-16 2xl:px-20">
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
              About VVS Haus
            </motion.p>
            <motion.h1
              className="font-['Orbitron'] text-4xl font-semibold uppercase leading-[1.16] tracking-[0.05em] text-white sm:text-5xl lg:text-[3.4rem]"
              variants={fadeUp}
            >
              Built Different
              <br />
              <span className="text-cyan-300">Driven By Passion</span>
            </motion.h1>
            <motion.div className="mt-6 border-l-2 border-cyan-300/80 pl-5" variants={fadeUp}>
              <p className="font-['Orbitron'] text-sm font-semibold uppercase tracking-[0.18em] text-white">
                VVS Haus
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-cyan-300">
                Visual Vehicle Standards
              </p>
              <p className="mt-2 text-sm text-white/68">
                Professional Mobile Detailing | Established 2018
              </p>
            </motion.div>
            <motion.p
              className="mt-6 max-w-lg text-base leading-8 text-white/78"
              variants={fadeUp}
            >
              VVS Haus was founded in 2018 with a simple mission: to raise the
              standard of vehicle care.
            </motion.p>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, x: 0, scale: 1 }}
            className="relative hidden self-end lg:block"
            initial={{ opacity: 0, x: 28, scale: 1.02 }}
            transition={{ delay: 0.12, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative ml-auto h-[25rem] overflow-hidden">
              <img
                alt="VVS Haus van and Mercedes in a premium detailing studio"
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

      <section className="grid items-stretch border-b border-white/10 bg-[#050505] lg:grid-cols-[0.68fr_1fr]">
        <motion.div
          className="relative overflow-hidden border-b border-white/10 p-4 sm:p-5 lg:border-b-0 lg:border-r"
          initial={{ opacity: 0, x: -24 }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <motion.div
            className="grid h-full gap-3 rounded-xl border border-cyan-300/15 bg-black/30 p-3 shadow-[0_0_24px_rgba(0,217,255,0.04)] lg:grid-rows-3"
            initial="hidden"
            transition={{ staggerChildren: 0.08 }}
            viewport={{ once: true, amount: 0.18 }}
            whileInView="visible"
          >
            <motion.div
              className="group relative h-56 overflow-hidden rounded-xl border border-cyan-300/15 bg-black/30 shadow-[0_0_24px_rgba(0,217,255,0.04)] sm:h-64 lg:h-auto"
              variants={fadeUp}
              whileHover={{ y: -4 }}
            >
              <img
                alt="VVS Haus branded mobile detailing van"
                className="h-full w-full object-cover object-[70%_40%] brightness-[0.98] contrast-[1.06] saturate-[1.02] transition duration-700 group-hover:scale-[1.02]"
                src="/assets/images/mobile-with-logo.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/72">
                Mobile Detailing
              </span>
            </motion.div>

            <motion.div
              className="group relative h-56 overflow-hidden rounded-xl border border-cyan-300/15 bg-black/30 shadow-[0_0_24px_rgba(0,217,255,0.04)] sm:h-64 lg:h-auto"
              variants={fadeUp}
              whileHover={{ y: -4 }}
            >
              <img
                alt="VVS Haus branded hoodie"
                className="h-full w-full object-cover object-[68%_50%] brightness-[0.98] contrast-[1.06] saturate-[1.02] transition duration-700 group-hover:scale-[1.02]"
                src="/assets/images/hoodie-logo.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/72">
                Built On Passion
              </span>
            </motion.div>

            <motion.div
              className="group relative h-56 overflow-hidden rounded-xl border border-cyan-300/15 bg-black/30 shadow-[0_0_24px_rgba(0,217,255,0.04)] sm:h-64 lg:h-auto"
              variants={fadeUp}
              whileHover={{ y: -4 }}
            >
              <img
                alt="VVS Haus business card displayed on a detailed vehicle"
                className="h-full w-full object-cover object-[72%_50%] brightness-[0.98] contrast-[1.06] saturate-[1.02] transition duration-700 group-hover:scale-[1.02]"
                src="/assets/images/card-on-car.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/72">
                Attention To Detail
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center px-6 py-10 sm:px-8 lg:px-12"
          initial="hidden"
          transition={{ staggerChildren: 0.08 }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
        >
          <motion.p
            className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-cyan-300"
            variants={fadeUp}
          >
            Our Story
          </motion.p>
          <motion.h2
            className="max-w-3xl font-['Orbitron'] text-2xl font-semibold uppercase leading-tight tracking-[0.06em] text-white sm:text-3xl lg:text-4xl"
            variants={fadeUp}
          >
            A Home For <span className="text-cyan-300">Visual Vehicle Standards.</span>
          </motion.h2>
          <motion.div className="mt-7 grid gap-5" variants={fadeUp}>
            {storySections.map((section, index) => (
              <StoryBlock index={index} key={section.title} {...section} />
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 bg-[#050505] px-6 py-10 sm:px-8 lg:px-16 2xl:px-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,217,255,0.09),transparent_28rem)]"
        />
        <div className="relative mx-auto max-w-[92rem]">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-cyan-300">
              Values
            </p>
            <h2 className="mt-4 font-['Orbitron'] text-3xl font-semibold uppercase tracking-[0.08em] text-white sm:text-4xl">
              Setting The <span className="text-cyan-300">Standard.</span>
            </h2>
          </div>

          <motion.div
            className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-6"
            initial="hidden"
            transition={{ staggerChildren: 0.06 }}
            viewport={{ once: true, amount: 0.18 }}
            whileInView="visible"
          >
            {values.map((value) => (
              <motion.div key={value.title} variants={fadeUp}>
                <FeatureCard
                  {...value}
                  className="min-h-full rounded-none p-5 text-center [&>div]:mx-auto [&>div]:mb-5 [&>h3]:text-sm [&>p]:text-sm"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="grid border-b border-white/10 bg-[#050505] lg:grid-cols-2">
        <motion.div
          className="relative overflow-hidden border-b border-white/10 px-6 py-10 sm:px-8 lg:border-b-0 lg:border-r lg:px-12"
          initial={{ opacity: 0, x: -18 }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <img
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center opacity-34"
            src="/assets/images/hoodie-logo.jpg"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.94)_0%,rgba(5,5,5,0.76)_55%,rgba(5,5,5,0.46)_100%)]" />
          <div className="relative max-w-xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-cyan-300">
              Our Standard
            </p>
            <blockquote className="font-['Orbitron'] text-2xl font-semibold uppercase leading-tight tracking-[0.07em] text-white sm:text-3xl">
              “Maintaining high visual standards should never be a luxury. It should be{' '}
              <span className="text-cyan-300">the standard.</span>”
            </blockquote>
          </div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden px-6 py-10 sm:px-8 lg:px-12"
          initial={{ opacity: 0, x: 18 }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <img
            alt=""
            className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover object-center opacity-50 lg:block"
            src="/assets/images/product-showcase-detailing.jpg"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.86)_48%,rgba(5,5,5,0.58)_100%)]" />
          <div className="relative max-w-xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.26em] text-cyan-300">
              Closing Statement
            </p>
            <h2 className="font-['Orbitron'] text-3xl font-semibold uppercase leading-tight tracking-[0.08em] text-white">
              VVS Haus
            </h2>
            <div className="mt-5 space-y-3 text-sm leading-7 text-white/74 sm:text-base">
              <p>Visual Vehicle Standards</p>
              <p>Setting the Standard Since 2018.</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 px-6 py-7 sm:px-8 lg:px-16 2xl:px-20">
        <div className="absolute inset-0 opacity-55" aria-hidden="true">
          <img
            alt=""
            className="h-full w-full object-cover object-center brightness-[1.05] contrast-[1.1]"
            src="/assets/images/mercedes-back.jpg"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.88)_0%,rgba(5,5,5,0.64)_48%,rgba(5,5,5,0.9)_100%)]"
        />
        <div className="relative mx-auto flex max-w-[92rem] flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="font-['Orbitron'] text-2xl font-semibold uppercase tracking-[0.1em] text-white sm:text-3xl">
              Experience The <span className="text-cyan-300">VVS Difference.</span>
            </h2>
            <p className="mt-3 max-w-3xl text-base text-white/72">
              Professional mobile detailing built around quality, convenience, and attention to detail.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Link
              className="group inline-flex min-w-72 items-center justify-center border border-cyan-300/70 bg-black/35 px-9 py-5 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_28px_rgba(0,217,255,0.16)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-[0_0_38px_rgba(0,217,255,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              to="/contact"
            >
              Book Your Detail
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
