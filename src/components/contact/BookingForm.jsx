import { motion } from 'framer-motion'
import { ChevronRight, MessageCircle, ShieldCheck } from 'lucide-react'
import { useMemo, useState } from 'react'

import useReducedMotionPreference from '../../hooks/useReducedMotionPreference'
import { cardReveal, subtleStagger } from '../../utils/animations'

// Replace with the VVS Haus WhatsApp number in international format:
// no "+" symbol, no spaces, and remove the first "0" from a UK mobile.
// Example: 07123 456789 becomes 447123456789.
const WHATSAPP_NUMBER = '447802273916'

const initialValues = {
  fullName: '',
  contactNumber: '',
  vehicle: '',
  address: '',
  package: '',
  additionalServices: '',
  preferredDate: '',
  preferredTime: '',
  additionalInformation: '',
}

const requiredFields = [
  'fullName',
  'contactNumber',
  'vehicle',
  'address',
  'package',
  'preferredDate',
  'preferredTime',
]

function formatDateForWhatsApp(value) {
  if (!value) return value

  const [year, month, day] = value.split('-')

  if (!year || !month || !day || year.length !== 4) {
    return value
  }

  return `${day}/${month}/${year}`
}

function getFormValue(formData, name) {
  return String(formData.get(name) ?? '').trim()
}

function openWhatsAppInNewTab(whatsappUrl) {
  const link = document.createElement('a')

  link.href = whatsappUrl
  link.target = '_blank'
  link.rel = 'noopener noreferrer'

  document.body.appendChild(link)
  link.click()
  link.remove()
}

function FormField({
  as = 'input',
  children,
  error,
  helperText,
  id,
  label,
  required = false,
  ...props
}) {
  const Component = as
  const helperId = helperText ? `${id}-helper` : undefined
  const errorId = error ? `${id}-error` : undefined
  const describedBy = [helperId, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div>
      <label
        className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-white/82"
        htmlFor={id}
      >
        {label}
        {required ? <span className="text-cyan-300"> *</span> : null}
      </label>
      <Component
        aria-describedby={describedBy}
        aria-invalid={error ? 'true' : undefined}
        className="min-h-12 w-full border border-white/14 bg-black/35 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/42 focus:border-cyan-300/75 focus:shadow-[0_0_24px_rgba(0,217,255,0.12)]"
        id={id}
        required={required}
        {...props}
      >
        {children}
      </Component>
      {helperText ? (
        <p className="mt-2 text-xs leading-5 text-white/50" id={helperId}>
          {helperText}
        </p>
      ) : null}
      {error ? (
        <p className="mt-2 text-xs font-semibold text-cyan-200" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  )
}

function BookingForm({ packageOptions }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const prefersReducedMotion = useReducedMotionPreference()

  const options = useMemo(() => ['Select a package', ...packageOptions], [packageOptions])

  const updateValue = (event) => {
    const { name, value } = event.target

    setValues((current) => ({
      ...current,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: '',
      }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.reportValidity()) {
      return
    }

    const formData = new FormData(form)

    const nextErrors = requiredFields.reduce((fieldErrors, field) => {
      if (!getFormValue(formData, field)) {
        return {
          ...fieldErrors,
          [field]: 'This field is required.',
        }
      }

      return fieldErrors
    }, {})

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalidField = Object.keys(nextErrors)[0]
      form.elements[firstInvalidField]?.focus()
      return
    }

    const fullName = getFormValue(formData, 'fullName')
    const contactNumber = getFormValue(formData, 'contactNumber')
    const vehicle = getFormValue(formData, 'vehicle')
    const address = getFormValue(formData, 'address')
    const selectedPackage = getFormValue(formData, 'package')
    const additionalServices = getFormValue(formData, 'additionalServices') || 'None selected'
    const preferredDate = formatDateForWhatsApp(getFormValue(formData, 'preferredDate'))
    const preferredTime = getFormValue(formData, 'preferredTime')
    const additionalInformation = getFormValue(formData, 'additionalInformation')
      || 'No additional information provided'

    const message = `✨ *VVS HAUS BOOKING REQUEST*

Hello VVS Haus,

I would like to request a mobile detailing appointment. Please find my booking details below.

👤 *CUSTOMER DETAILS*
• *Full name:* ${fullName}
• *Contact number:* ${contactNumber}

🚘 *VEHICLE & SERVICE*
• *Vehicle:* ${vehicle}
• *Desired package:* ${selectedPackage}
• *Additional services:* ${additionalServices}

📍 *SERVICE LOCATION*
• *Address / postcode:* ${address}

📅 *PREFERRED APPOINTMENT*
• *Date:* ${preferredDate}
• *Time:* ${preferredTime}

📝 *ADDITIONAL INFORMATION*
${additionalInformation}

Please confirm availability, the final price, any applicable travel charges, and whether a deposit is required.

Thank you.`

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    openWhatsAppInNewTab(whatsappUrl)
  }

  return (
    <motion.form
      className="mt-7 grid gap-5"
      id="booking-form"
      initial={prefersReducedMotion ? false : 'hidden'}
      onSubmit={handleSubmit}
      variants={prefersReducedMotion ? undefined : subtleStagger}
      viewport={{ once: true, amount: 0.16 }}
      whileInView={prefersReducedMotion ? undefined : 'visible'}
    >
      <motion.div variants={prefersReducedMotion ? undefined : cardReveal}>
        <h2 className="font-['Orbitron'] text-2xl font-semibold uppercase tracking-[0.08em] text-white">
          <span className="text-cyan-300">Book</span> A Detail
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/66">
          To request a booking, please provide the following information.
        </p>
      </motion.div>

      <motion.div className="grid gap-4 sm:grid-cols-2" variants={prefersReducedMotion ? undefined : cardReveal}>
        <FormField
          autoComplete="name"
          error={errors.fullName}
          id="full-name"
          label="Full Name"
          name="fullName"
          onChange={updateValue}
          required
          type="text"
          value={values.fullName}
        />
        <FormField
          autoComplete="tel"
          error={errors.contactNumber}
          id="contact-number"
          label="Contact Number"
          name="contactNumber"
          onChange={updateValue}
          required
          type="tel"
          value={values.contactNumber}
        />
      </motion.div>

      <motion.div className="grid gap-4 sm:grid-cols-2" variants={prefersReducedMotion ? undefined : cardReveal}>
        <FormField
          error={errors.vehicle}
          id="vehicle"
          label="Vehicle Make & Model"
          name="vehicle"
          onChange={updateValue}
          placeholder="BMW 3 Series"
          required
          type="text"
          value={values.vehicle}
        />
        <FormField
          autoComplete="street-address"
          error={errors.address}
          id="address"
          label="Address / Postcode"
          name="address"
          onChange={updateValue}
          required
          type="text"
          value={values.address}
        />
      </motion.div>

      <motion.div variants={prefersReducedMotion ? undefined : cardReveal}>
        <FormField
          as="select"
          error={errors.package}
          id="desired-package"
          label="Desired Package"
          name="package"
          onChange={updateValue}
          required
          value={values.package}
        >
          {options.map((option, index) => (
            <option disabled={index === 0} key={option} value={index === 0 ? '' : option}>
              {option}
            </option>
          ))}
        </FormField>
      </motion.div>

      <motion.div variants={prefersReducedMotion ? undefined : cardReveal}>
        <FormField
          as="textarea"
          helperText="List any add-on services you are interested in."
          id="additional-services"
          label="Additional Services Required"
          name="additionalServices"
          onChange={updateValue}
          rows={4}
          value={values.additionalServices}
        />
      </motion.div>

      <motion.div className="grid gap-4 sm:grid-cols-2" variants={prefersReducedMotion ? undefined : cardReveal}>
        <FormField
          error={errors.preferredDate}
          id="preferred-date"
          label="Preferred Date"
          name="preferredDate"
          onChange={updateValue}
          required
          type="date"
          value={values.preferredDate}
        />
        <FormField
          error={errors.preferredTime}
          id="preferred-time"
          label="Preferred Time"
          name="preferredTime"
          onChange={updateValue}
          required
          type="time"
          value={values.preferredTime}
        />
      </motion.div>

      <motion.div variants={prefersReducedMotion ? undefined : cardReveal}>
        <FormField
          as="textarea"
          helperText="Include any relevant details about the vehicle’s condition, access, parking, or special requirements."
          id="additional-information"
          label="Additional Information"
          name="additionalInformation"
          onChange={updateValue}
          rows={5}
          value={values.additionalInformation}
        />
      </motion.div>

      <motion.button
        className="group inline-flex items-center justify-center gap-3 border border-cyan-300/70 bg-black/35 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_28px_rgba(0,217,255,0.16)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-[0_0_38px_rgba(0,217,255,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        type="submit"
        variants={prefersReducedMotion ? undefined : cardReveal}
        whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
        whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      >
        <MessageCircle
          aria-hidden="true"
          className="text-cyan-300 transition group-hover:scale-105"
          size={18}
        />
        Send Booking Request via WhatsApp
        <ChevronRight
          aria-hidden="true"
          className="text-cyan-300 transition group-hover:translate-x-1"
          size={18}
        />
      </motion.button>

      <motion.p className="-mt-2 text-xs leading-5 text-white/52" variants={prefersReducedMotion ? undefined : cardReveal}>
        Submitting this form opens WhatsApp. Your request is not sent until you press Send.
      </motion.p>

      <motion.p className="flex items-center gap-3 text-xs text-white/58" variants={prefersReducedMotion ? undefined : cardReveal}>
        <ShieldCheck aria-hidden="true" className="text-cyan-300" size={17} />
        Your details will only be used to prepare your WhatsApp booking request. You will be able to review the message before sending it.
      </motion.p>
    </motion.form>
  )
}

export default BookingForm
