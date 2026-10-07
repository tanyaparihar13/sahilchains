import { COLLECTIONS, PRODUCTS } from '../data/products'
import ProductCard from './ProductCard'
import { Reveal, SectionHead, OutlineButton } from './ui'
export default function ProductSection({ limit }) {
  return <section id="collections" className="py-24 px-5 bg-gradient-to-b from-ink to-emerald-deep"><div className="max-w-7xl mx-auto">
    <SectionHead title="Product Collections" text="Browse our chain and bracelet styles. Availability and finishes are confirmed on enquiry." />
    {COLLECTIONS.map(c => (
      <div key={c.id} className="mb-16">
        <Reveal><h3 className="font-serif text-3xl text-ivory mb-6 pb-3 border-b border-gold/25">{c.name}</h3></Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.filter(p => p.collectionId === c.id).slice(0, limit).map(p => <Reveal key={p.slug}><ProductCard p={p} /></Reveal>)}
        </div>
      </div>))}
    {limit && <div className="text-center"><OutlineButton to="/products">View All Products</OutlineButton></div>}
  </div></section>
}
