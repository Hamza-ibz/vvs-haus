import { ChevronRight, ShieldCheck } from 'lucide-react'
import { useMemo, useState } from 'react'

const initialValues = {
  fullName: '',
  contactNumber: '',
  vehicle: '',
  address: '',
  desiredPackage: '',
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
  'desiredPackage',
  'preferredDate',
  'preferredTime',
]

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
  const [statusMessage, setStatusMessage] = useState('')

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

    const nextErrors = requiredFields.reduce((fieldErrors, field) => {
      if (!values[field].trim()) {
        return {
          ...fieldErrors,
          [field]: 'This field is required.',
        }
      }

      return fieldErrors
    }, {})

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatusMessage('')
      return
    }

    setStatusMessage(
      'Thank you. Your booking request has been prepared. We will contact you to confirm availability and pricing.',
    )
  }

  return (
    <form className="mt-7 grid gap-5" id="booking-form" noValidate onSubmit={handleSubmit}>
      <div>
        <h2 className="font-['Orbitron'] text-2xl font-semibold uppercase tracking-[0.08em] text-white">
          <span className="text-cyan-300">Book</span> A Detail
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/66">
          To request a booking, please provide the following information.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
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
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
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
      </div>

      <FormField
        as="select"
        error={errors.desiredPackage}
        id="desired-package"
        label="Desired Package"
        name="desiredPackage"
        onChange={updateValue}
        required
        value={values.desiredPackage}
      >
        {options.map((option, index) => (
          <option disabled={index === 0} key={option} value={index === 0 ? '' : option}>
            {option}
          </option>
        ))}
      </FormField>

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

      <div className="grid gap-4 sm:grid-cols-2">
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
      </div>

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

      <button
        className="group inline-flex items-center justify-center gap-3 border border-cyan-300/70 bg-black/35 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_28px_rgba(0,217,255,0.16)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-[0_0_38px_rgba(0,217,255,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        type="submit"
      >
        Request Booking
        <ChevronRight
          aria-hidden="true"
          className="text-cyan-300 transition group-hover:translate-x-1"
          size={18}
        />
      </button>

      <p className="flex items-center gap-3 text-xs text-white/58">
        <ShieldCheck aria-hidden="true" className="text-cyan-300" size={17} />
        Your details will only be used to respond to your booking request.
      </p>

      {statusMessage ? (
        <p
          aria-live="polite"
          className="border border-cyan-300/30 bg-cyan-300/[0.07] px-4 py-3 text-sm leading-6 text-white"
          role="status"
        >
          {statusMessage}
        </p>
      ) : null}
    </form>
  )
}

export default BookingForm
