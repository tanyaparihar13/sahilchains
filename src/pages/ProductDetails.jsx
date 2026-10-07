import { useParams, Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import { ProductImage, GoldButton, OutlineButton } from '../components/ui'
import { waLink } from '../data/config'
export default function ProductDetails() {
  const { slug } = useParams(); const p = PRODUCTS.find(x => x.slug === slug)
  if (!p) return <div className="pt-40 text-center px-5">Product not found. <Link to="/products" className="text-softgold underline">Back to products</Link></div>
  return <div className="pt-28 pb-24 px-5"><div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
    <div className="grid gap-3"><div className="aspect-square border border-gold/30"><ProductImage src={p.image} alt={`${p.name} by Sahil Chains`} /></div>
      <div className="grid grid-cols-3 gap-3">{[1,2,3].map(i => <div key={i} className="aspect-square border border-gold/15"><ProductImage alt={`${p.name} view ${i}`} /></div>)}</div></div>
    <div>
      <p className="text-gold text-sm tracking-widest uppercase">{p.collection}</p>
      <h1 className="font-serif text-5xl text-softgold mt-2">{p.name}</h1>
      <p className="mt-6 text-ivory/75 leading-relaxed">{p.short} {p.details}</p>
      <dl className="mt-8 space-y-4 text-sm">
        <div><dt className="text-gold">Finish</dt><dd className="text-ivory/80">{p.finishes.join(', ')}</dd></div>
        <div><dt className="text-gold">Available variants</dt><dd className="text-ivory/80">{p.variants.join(', ')}</dd></div>
        <div><dt className="text-gold">Bulk ordering</dt><dd className="text-ivory/80">{p.bulk}</dd></div>
      </dl>
      <div className="mt-10 flex flex-wrap gap-4"><GoldButton to="/contact">Request Bulk Quote</GoldButton>
        <OutlineButton href={waLink(`Hello Sahil Chains, I would like a bulk quote for ${p.name}.`)} target="_blank" rel="noreferrer">Enquire on WhatsApp</OutlineButton></div>
    </div></div></div>
}
