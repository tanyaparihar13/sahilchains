import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { waLink } from '../data/config'
import { ProductImage } from './ui'
export default function ProductCard({ p }) {
  return (
    <motion.article whileHover={{ y: -4 }} className="group h-full border border-gold/20 hover:border-gold hover:shadow-[0_0_30px_rgba(200,164,93,0.15)] transition-all duration-500 bg-forest/30 flex flex-col">
      <Link to={`/products/${p.slug}`} className="block aspect-square overflow-hidden">
        <div className="w-full h-full transition-transform duration-700 group-hover:scale-110"><ProductImage src={p.image} alt={`${p.name} - ${p.collection} by Sahil Chains`} /></div>
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-serif text-2xl text-softgold">{p.name}</h3>
        <p className="text-xs text-gold/80 mt-1">{p.collection}</p>
        <p className="text-sm text-ivory/65 mt-3 flex-1">{p.short}</p>
        <div className="mt-5 grid grid-cols-2 gap-2 text-[11px] tracking-widest uppercase">
          <Link to={`/products/${p.slug}`} className="border border-gold/40 text-center py-3 text-softgold hover:bg-gold/10">View Details</Link>
          <a href={waLink(`Hello Sahil Chains, I would like a bulk enquiry for ${p.name}.`)} target="_blank" rel="noreferrer" className="bg-gold text-ink text-center py-3 hover:bg-softgold">Enquire Now</a>
        </div>
      </div>
    </motion.article>
  )
}
