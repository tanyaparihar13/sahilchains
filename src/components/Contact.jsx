import EnquiryForm from './EnquiryForm'
import { BUSINESS, waLink } from '../data/config'
import { GoldButton, OutlineButton } from './ui'
export default function Contact() {
  const q = encodeURIComponent(BUSINESS.mapQuery)
  return <section id="contact" className="py-24 px-5 bg-emerald-deep"><div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">
    <div>
      <h2 className="font-serif text-4xl md:text-5xl text-softgold">LET'S BUILD BUSINESS TOGETHER</h2>
      <p className="mt-8 font-serif text-2xl">SAHIL CHAINS</p>
      <p className="text-ivory/70">Manufacturers & Wholesale Suppliers<br />of Imitation Jewellery & Metal Chains</p>
      <p className="mt-6 text-softgold">{BUSINESS.phone}</p>
      <address className="not-italic mt-2 text-ivory/80">{BUSINESS.addressLines.map(l => <span key={l} className="block">{l}</span>)}</address>
      <div className="mt-8 flex flex-wrap gap-3">
        <GoldButton href={`tel:${BUSINESS.phone}`}>Call Now</GoldButton>
        <OutlineButton href={waLink()} target="_blank" rel="noreferrer">WhatsApp</OutlineButton>
        <OutlineButton href={`https://www.google.com/maps/dir/?api=1&destination=${q}`} target="_blank" rel="noreferrer">Get Directions</OutlineButton>
      </div>
      <iframe title="Sahil Chains location" loading="lazy" className="mt-8 w-full h-64 border border-gold/30" src={`https://www.google.com/maps?q=${q}&output=embed`} />
    </div>
    <div><EnquiryForm /></div>
  </div></section>
}
