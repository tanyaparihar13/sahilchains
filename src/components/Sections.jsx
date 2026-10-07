import { Reveal, SectionHead, GoldButton, OutlineButton, ProductImage } from './ui'
import { BUSINESS } from '../data/config'
import { Gem, Layers, Package, Sparkles, ShieldCheck, MapPin, Wrench, Brush, CheckCircle2, Truck } from 'lucide-react'
import designImage from '../assets/images/design.png'

export const Featured = () => (
  <section className="py-24 px-5 bg-emerald-deep">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

      {/* Product Image */}
      <Reveal>
        <div className="aspect-square border border-gold/30 overflow-hidden bg-black/20">
          <img
            src={designImage}
            alt="Featured premium chain by Sahil Chains"
            className="w-full h-full object-cover"
          />
        </div>
      </Reveal>

      {/* Content */}
      <Reveal delay={0.1}>
        <SectionHead title="The Art of Every Link" />

        <div className="grid grid-cols-2 gap-4 mb-10">
          {[
            'Premium Finish',
            'Detailed Craftsmanship',
            'Durable Design',
            'Wholesale Availability'
          ].map(t => (
            <div
              key={t}
              className="border-l-2 border-gold pl-4 py-2 text-ivory/90"
            >
              {t}
            </div>
          ))}
        </div>

        <GoldButton to="/contact">
          Request Bulk Information
        </GoldButton>
      </Reveal>

    </div>
  </section>
)
const M = [[Brush,'Design','Chain links and patterns planned for market demand.'],[Sparkles,'Finishing','Gold, silver, matte and polished finish options.'],[CheckCircle2,'Quality Check','Products reviewed before they reach your order.'],[Truck,'Bulk Supply','Wholesale quantities for business buyers.']]
export const Manufacturing = () => (
  <section className="py-24 px-5"><div className="max-w-7xl mx-auto">
    <SectionHead title="Made for Business. Designed for Impact." text="From carefully designed links to finished jewellery pieces, Sahil Chains focuses on creating products suitable for retailers, wholesalers, distributors and bulk buyers." />
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{M.map(([I, t, d], i) => <Reveal key={t} delay={i * 0.08}><div className="border border-gold/20 p-7 h-full bg-forest/30"><I className="text-gold mb-5" /><h3 className="font-serif text-2xl text-softgold">{t}</h3><p className="text-sm text-ivory/65 mt-2">{d}</p></div></Reveal>)}</div>
  </div></section>)
const W = [[ShieldCheck,'Quality Focus','Quality-focused products with attention to finishing and design.'],[Layers,'Wide Collection','Multiple chain and bracelet styles for different market requirements.'],[Package,'Bulk Orders','Wholesale and bulk order enquiries for business buyers.'],[Gem,'Trend-Led Designs','Modern and classic designs suitable for different customer preferences.'],[Wrench,'Business Supply','Designed for retailers, wholesalers and distributors.'],[MapPin,'Agra Based','Based in Agra, Uttar Pradesh.']]
export const WhySahilChains = () => (
  <section id="why" className="py-24 px-5 bg-emerald-deep"><div className="max-w-7xl mx-auto">
    <SectionHead title="Why Sahil Chains" center />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{W.map(([I, t, d], i) => <Reveal key={t} delay={i * 0.06}><div className="border border-gold/20 p-8 h-full"><I className="text-gold mb-4" /><h3 className="font-serif text-2xl text-softgold">{t}</h3><p className="text-ivory/65 mt-2 text-sm">{d}</p></div></Reveal>)}</div>
  </div></section>)
export const BulkCta = () => (
  <section className="py-24 px-5 bg-gradient-to-r from-forest to-ink border-y border-gold/30 text-center"><Reveal>
    <h2 className="font-serif text-4xl md:text-6xl text-softgold">LOOKING FOR BULK CHAINS?</h2>
    <p className="mt-5 text-ivory/75 max-w-xl mx-auto">Partner with Sahil Chains for wholesale chains, bracelets and imitation jewellery products.</p>
    <div className="mt-8 flex flex-wrap gap-4 justify-center"><GoldButton to="/contact">Request Bulk Quote</GoldButton><OutlineButton href={`tel:${BUSINESS.phone}`}>Call {BUSINESS.phone}</OutlineButton></div>
    <p className="mt-8 text-gold tracking-widest text-sm">Retailers · Wholesalers · Distributors · Bulk Buyers</p>
  </Reveal></section>)
