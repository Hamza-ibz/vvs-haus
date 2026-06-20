import { motion } from 'framer-motion'
import {
  CalendarDays,
  ChevronRight,
  Clock,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const trustItems = [
  {
    title: 'Easy Booking',
    text: 'Quick & simple online booking',
    Icon: CalendarDays,
  },
  {
    title: 'Fully Insured',
    text: 'Your vehicle is in safe hands',
    Icon: ShieldCheck,
  },
  {
    title: 'Fast Response',
    text: 'We reply within 1 hour',
    Icon: Clock,
  },
]

const contactItems = [
  {
    label: 'Phone / WhatsApp',
    value: '07712 345678',
    Icon: Phone,
  },
  {
    label: 'Email',
    value: 'info@vvshaus.com',
    Icon: Mail,
  },
  {
    label: 'Instagram',
    value: '@vvshaus',
    Icon: MessageCircle,
  },
  {
    label: 'Business Hours',
    value: 'Mon - Sun: 8:00am - 8:00pm',
    Icon: Clock,
  },
]

const serviceAreaPoints = [
  {
    title: 'London & Surrounding Areas',
    text: 'Covering all major areas within and around London.',
    Icon: MapPin,
  },
  {
    title: 'Home, Work Or Anywhere',
    text: 'We come to your home, workplace or any location that suits you.',
    Icon: Home,
  },
  {
    title: 'Flexible Appointments',
    text: 'Appointments that work around your schedule.',
    Icon: Clock,
  },
]

const mapLabels = [
  { label: 'Watford', className: 'left-[15%] top-[30%]' },
  { label: 'Enfield', className: 'left-[58%] top-[22%]' },
  { label: 'Romford', className: 'right-[13%] top-[38%]' },
  { label: 'London', className: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg sm:text-2xl' },
  { label: 'Croydon', className: 'left-[52%] bottom-[18%]' },
  { label: 'Kingston', className: 'left-[24%] bottom-[27%]' },
  { label: 'Hounslow', className: 'left-[18%] top-[54%]' },
  { label: 'Dartford', className: 'right-[13%] bottom-[28%]' },
]

function Field({ as = 'input', children, className = '', label, ...props }) {
  const Component = as

  return (
    <label className={className}>
      <span className="sr-only">{label}</span>
      <Component
        aria-label={label}
        className="w-full border border-white/14 bg-black/35 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/48 focus:border-cyan-300/75 focus:shadow-[0_0_24px_rgba(0,217,255,0.12)]"
        {...props}
      >
        {children}
      </Component>
    </label>
  )
}

function Contact() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#050505] pt-32 sm:pt-36 lg:pt-28">
        <motion.div
          aria-hidden="true"
          animate={{ scale: 1 }}
          className="absolute inset-0"
          initial={{ scale: 1.04 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            alt=""
            className="h-full w-full object-cover object-center brightness-[0.88] contrast-[1.1]"
            src="/assets/images/van-car.jpg"
          />
        </motion.div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.95)_0%,rgba(5,5,5,0.76)_34%,rgba(5,5,5,0.18)_70%,rgba(5,5,5,0.64)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.2)_0%,rgba(5,5,5,0.84)_100%)]"
        />

        <div className="relative mx-auto grid min-h-[29rem] max-w-[92rem] items-center px-6 pb-9 sm:px-8 lg:grid-cols-[0.64fr_1fr] lg:px-16 2xl:px-20">
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
              Get In Touch
            </motion.p>
            <motion.h1
              className="font-['Orbitron'] text-4xl font-semibold uppercase leading-[1.16] tracking-[0.05em] text-white sm:text-5xl lg:text-[3.35rem]"
              variants={fadeUp}
            >
              We Come To You.
              <br />
              You <span className="text-cyan-300">Relax.</span>
            </motion.h1>
            <motion.span
              className="mt-6 block h-px w-14 bg-cyan-300 shadow-[0_0_18px_rgba(0,217,255,0.65)]"
              variants={fadeUp}
            />
            <motion.p
              className="mt-6 max-w-md text-base leading-8 text-white/78"
              variants={fadeUp}
            >
              Have a question or ready to book Professional Mobile Detailing? Fill
              out the form and we’ll take care of the rest.
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
        </div>
      </section>

      <section className="grid border-b border-white/10 bg-[#050505] lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          className="border-b border-white/10 px-6 py-10 sm:px-8 lg:border-b-0 lg:border-r lg:px-16 2xl:pl-20"
          initial={{ opacity: 0, x: -18 }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="font-['Orbitron'] text-2xl font-semibold uppercase tracking-[0.08em] text-white">
            <span className="text-cyan-300">Send</span> Us A Message
          </h2>
          <form className="mt-7 grid gap-4" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" name="name" placeholder="Full Name" type="text" />
              <Field label="Phone Number" name="phone" placeholder="Phone Number" type="tel" />
            </div>
            <Field label="Email Address" name="email" placeholder="Email Address" type="email" />
            <Field as="select" defaultValue="" label="Service You’re Interested In" name="service">
              <option disabled value="">Service You’re Interested In</option>
              <option>Maintenance Wash</option>
              <option>Deep Interior Detail</option>
              <option>Paint Enhancement</option>
              <option>Ceramic Coating</option>
              <option>Mobile Valeting</option>
            </Field>
            <Field
              as="textarea"
              label="Message"
              name="message"
              placeholder="Message"
              rows={5}
            />
            <button
              className="group inline-flex items-center justify-center gap-3 border border-cyan-300/70 bg-black/35 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_28px_rgba(0,217,255,0.16)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-[0_0_38px_rgba(0,217,255,0.28)]"
              type="submit"
            >
              Send Message
              <ChevronRight aria-hidden="true" className="text-cyan-300 transition group-hover:translate-x-1" size={18} />
            </button>
          </form>
          <p className="mt-4 flex items-center gap-3 text-xs text-white/58">
            <ShieldCheck aria-hidden="true" className="text-cyan-300" size={17} />
            Your details are safe with us. We never share your information.
          </p>
        </motion.div>

        <motion.div
          className="px-6 py-10 sm:px-8 lg:px-12"
          initial={{ opacity: 0, x: 18 }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="font-['Orbitron'] text-2xl font-semibold uppercase tracking-[0.08em] text-white">
            Contact Details
          </h2>
          <div className="mt-7 space-y-6">
            {contactItems.map(({ Icon, label, value }) => (
              <div className="flex gap-5" key={label}>
                <Icon aria-hidden="true" className="mt-1 shrink-0 text-cyan-300" size={28} strokeWidth={1.45} />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-white">
                    {label}
                  </p>
                  <p className="mt-2 text-sm text-cyan-300">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            className="group mt-9 flex items-center justify-between gap-6 border border-white/12 bg-black/30 p-6 transition duration-300 hover:border-cyan-300/55 hover:shadow-[0_0_34px_rgba(0,217,255,0.14)]"
            to="/contact"
          >
            <div className="flex items-center gap-5">
              <MessageCircle aria-hidden="true" className="shrink-0 text-cyan-300" size={38} strokeWidth={1.45} />
              <div>
                <h3 className="font-['Orbitron'] text-sm font-semibold uppercase tracking-[0.12em] text-white">
                  Prefer WhatsApp?
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/66">
                  Message us directly on WhatsApp for the fastest response.
                </p>
              </div>
            </div>
            <ChevronRight aria-hidden="true" className="shrink-0 text-cyan-300 transition group-hover:translate-x-1" size={20} />
          </Link>
        </motion.div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 bg-[#050505] px-6 py-11 sm:px-8 lg:px-16 2xl:px-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_66%_54%,rgba(0,217,255,0.12),transparent_30rem)]"
        />
        <div className="relative mx-auto max-w-[92rem]">
          <div className="text-center">
            <h2 className="font-['Orbitron'] text-3xl font-semibold uppercase tracking-[0.1em] text-white sm:text-4xl">
              We Come To <span className="text-cyan-300">You</span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
              We provide mobile detailing across London and surrounding areas. If
              you’re unsure whether we cover your location, just get in touch.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-center">
            <div className="space-y-8">
              {serviceAreaPoints.map(({ Icon, text, title }) => (
                <div className="flex gap-5" key={title}>
                  <Icon aria-hidden="true" className="mt-1 shrink-0 text-cyan-300" size={38} strokeWidth={1.35} />
                  <div>
                    <h3 className="font-['Orbitron'] text-sm font-semibold uppercase tracking-[0.12em] text-white">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/66">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative min-h-[25rem] overflow-hidden bg-[#030303]">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:42px_42px]"
              />
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[19rem] w-[19rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/70 bg-cyan-300/[0.07] shadow-[0_0_48px_rgba(0,217,255,0.2)] sm:h-[23rem] sm:w-[23rem]"
              />
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[11rem] w-[11rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20"
              />
              {mapLabels.map(({ className, label }) => (
                <span
                  className={[
                    'absolute font-["Orbitron"] text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white/82',
                    label === 'London' ? 'text-white' : '',
                    className,
                  ].join(' ')}
                  key={label}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
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
              Ready For That <span className="text-cyan-300">VVS Finish?</span>
            </h2>
            <p className="mt-3 text-base text-white/72">
              Setting the Standard Since 2018.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Link
              className="group inline-flex min-w-72 items-center justify-center gap-3 border border-cyan-300/70 bg-black/35 px-9 py-5 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_28px_rgba(0,217,255,0.16)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-[0_0_38px_rgba(0,217,255,0.28)]"
              to="/contact"
            >
              Book Your Detail
              <ChevronRight aria-hidden="true" className="text-cyan-300 transition group-hover:translate-x-1" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
