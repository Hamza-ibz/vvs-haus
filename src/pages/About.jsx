import { motion } from 'framer-motion'
import {
  CheckCircle,
  Clock,
  Droplet,
  Gem,
  Heart,
  ShieldCheck,
  Sparkles,
  Star,
  ThumbsUp,
  Truck,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import FeatureCard from '../components/ui/FeatureCard'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const values = [
  {
    title: 'Premium Care',
    text: 'Only the best for your vehicle.',
    Icon: Gem,
  },
  {
    title: 'Precision Focused',
    text: 'Every detail matters.',
    Icon: Sparkles,
  },
  {
    title: 'Trusted Service',
    text: 'Reliable, professional and careful.',
    Icon: ShieldCheck,
  },
  {
    title: 'Passion Driven',
    text: 'We treat every car like our own.',
    Icon: Star,
  },
]

const reasons = [
  {
    title: 'Attention To Every Detail',
    description: 'No shortcuts. Just perfection.',
    icon: Clock,
  },
  {
    title: 'Premium Products',
    description: 'Industry-leading products only.',
    icon: Droplet,
  },
  {
    title: 'We Come To You',
    description: 'Convenience without compromise.',
    icon: Truck,
  },
  {
    title: 'Fully Insured & Trusted',
    description: 'Your vehicle is in safe hands.',
    icon: ShieldCheck,
  },
  {
    title: 'Built On Passion',
    description: 'We love what we do, and it shows.',
    icon: Heart,
  },
  {
    title: 'Satisfaction Guaranteed',
    description: 'If you’re not happy, we’ll make it right.',
    icon: ThumbsUp,
  },
]

const equipment = [
  'Premium polishing system',
  'Premium microfibre towels',
  'pH neutral safe products',
  'Deionised water system',
  'Steam cleaning technology',
]

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
              Built Different.
              <br />
              Driven By <span className="text-cyan-300">Passion.</span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-lg text-base leading-8 text-white/78"
              variants={fadeUp}
            >
              VVS Haus is a Professional Mobile Detailing brand built on Visual Vehicle
              Standards: careful technique, high standards, and a relentless attention
              to detail.
            </motion.p>
            <motion.div className="mt-7" variants={fadeUp}>
              <p className="font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.22em] text-white">
                VVS Haus Founder
              </p>
              <span className="mt-3 block h-px w-28 bg-cyan-300/70 shadow-[0_0_18px_rgba(0,217,255,0.5)]" />
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

      <section className="grid border-b border-white/10 bg-[#050505] lg:grid-cols-[0.68fr_1fr]">
        <motion.div
          className="relative min-h-[24rem] overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r"
          initial={{ opacity: 0, x: -24 }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <img
            alt="VVS Haus founder wearing branded detailing hoodie"
            className="h-full min-h-[24rem] w-full object-cover object-center brightness-[0.8] contrast-[1.08]"
            src="/assets/images/hoodie-logo.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/40" />
        </motion.div>

        <motion.div
          className="flex flex-col justify-center px-6 py-10 sm:px-8 lg:px-12"
          initial="hidden"
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
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
            Precision Isn’t Just What We Do. It’s{' '}
            <span className="text-cyan-300">Who We Are.</span>
          </motion.h2>
          <motion.div
            className="mt-5 max-w-3xl space-y-4 text-sm leading-7 text-white/70 sm:text-base"
            variants={fadeUp}
          >
            <p>
              VVS Haus was established in 2018 to bring a premium detailing experience
              directly to your location. Every service is built around careful
              preparation, quality products, and a finish that feels sharp, clean and
              refined.
            </p>
            <p>We do not rush. We do not compromise. We perfect.</p>
          </motion.div>

          <motion.div
            className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
            variants={fadeUp}
          >
            {values.map(({ Icon, text, title }) => (
              <div
                className="border-r border-white/10 pr-5 last:border-r-0"
                key={title}
              >
                <Icon aria-hidden="true" className="mb-4 text-cyan-300" size={34} strokeWidth={1.45} />
                <h3 className="font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.12em] text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{text}</p>
              </div>
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
              Why Choose Us
            </p>
            <h2 className="mt-4 font-['Orbitron'] text-3xl font-semibold uppercase tracking-[0.08em] text-white sm:text-4xl">
              Detailing. <span className="text-cyan-300">Perfected.</span>
            </h2>
          </div>

          <motion.div
            className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-6"
            initial="hidden"
            transition={{ staggerChildren: 0.06 }}
            viewport={{ once: true, amount: 0.18 }}
            whileInView="visible"
          >
            {reasons.map((reason) => (
              <motion.div key={reason.title} variants={fadeUp}>
                <FeatureCard
                  {...reason}
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
              Founder
            </p>
            <h2 className="font-['Orbitron'] text-3xl font-semibold uppercase leading-tight tracking-[0.07em] text-white">
              Quality Is In The <span className="text-cyan-300">Details.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/72 sm:text-base">
              With hands-on experience and a passion for perfection, VVS Haus was built
              to bring Visual Vehicle Standards to your doorstep. Thank you for trusting
              us with your vehicle.
            </p>
            <p className="mt-8 font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.24em] text-white">
              VVS Haus Founder
            </p>
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
              Professional Equipment. Superior Results.
            </p>
            <p className="max-w-md text-sm leading-7 text-white/74 sm:text-base">
              We use industry-leading equipment and techniques to deliver a flawless
              finish every time.
            </p>
            <ul className="mt-6 space-y-3">
              {equipment.map((item) => (
                <li className="flex items-center gap-3 text-sm text-white/74" key={item}>
                  <CheckCircle aria-hidden="true" className="shrink-0 text-cyan-300" size={18} strokeWidth={1.7} />
                  {item}
                </li>
              ))}
            </ul>
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
            <p className="mt-3 text-base text-white/72">
              Professional Mobile Detailing. Setting the Standard Since 2018.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Link
              className="group inline-flex min-w-72 items-center justify-center border border-cyan-300/70 bg-black/35 px-9 py-5 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_28px_rgba(0,217,255,0.16)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-[0_0_38px_rgba(0,217,255,0.28)]"
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
