import { useState } from 'react'
const field = 'w-full bg-ink/60 border border-gold/25 focus:border-gold outline-none px-4 py-3 text-ivory placeholder:text-ivory/40'
export default function EnquiryForm() {
  const [done, setDone] = useState(false)
  const submit = e => { e.preventDefault(); console.log('Enquiry', Object.fromEntries(new FormData(e.target))) /* TODO: connect to backend / Formspree / EmailJS */; setDone(true) }
  if (done) return <p className="border border-gold p-8 font-serif text-2xl text-softgold">Thank you. Our team will contact you regarding your enquiry.</p>
  return <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
    <input required name="name" placeholder="Full Name *" className={field} />
    <input name="business" placeholder="Business Name" className={field} />
    <input required name="phone" type="tel" placeholder="Phone Number *" className={field} />
    <input name="email" type="email" placeholder="Email" className={field} />
    <input name="city" placeholder="City" className={field} />
    <select name="interest" className={field} defaultValue="">
      <option value="" disabled>I'm Interested In</option>
      {['Chains','Bracelets','Imitation Jewellery','Bulk Order','Wholesale Supply','Other'].map(o => <option key={o} className="text-ink">{o}</option>)}
    </select>
    <input name="quantity" placeholder="Estimated Quantity" className={`${field} sm:col-span-2`} />
    <textarea name="message" rows="4" placeholder="Message" className={`${field} sm:col-span-2`} />
    <button className="sm:col-span-2 bg-gradient-to-r from-gold to-softgold text-ink py-4 tracking-[0.2em] text-xs uppercase font-semibold">Submit Enquiry</button>
  </form>
}
