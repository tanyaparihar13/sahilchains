import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const base = 'inline-flex items-center justify-center gap-2 px-6 py-3 text-xs tracking-[0.18em] uppercase font-medium transition-colors duration-300 min-h-[44px]'
export const GoldButton = ({ to, href, children, ...p }) => {
  const c = `${base} bg-gradient-to-r from-gold to-softgold text-ink hover:brightness-110`
  return to ? <Link to={to} className={c} {...p}>{children}</Link> : <a href={href} className={c} {...p}>{children}</a>
}
export const OutlineButton = ({ to, href, children, ...p }) => {
  const c = `${base} border border-gold/60 text-softgold hover:bg-gold/10`
  return to ? <Link to={to} className={c} {...p}>{children}</Link> : <a href={href} className={c} {...p}>{children}</a>
}
export const Reveal = ({ children, delay = 0, className = '' }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay, ease: 'easeOut' }}>{children}</motion.div>
)
export const SectionHead = ({ title, text, center }) => (
  <div className={`mb-12 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
    <h2 className="font-serif text-4xl md:text-5xl text-softgold leading-tight">{title}</h2>
    <span className={`block h-px w-20 bg-gold my-5 ${center ? 'mx-auto' : ''}`} />
    {text && <p className="text-ivory/70 leading-relaxed">{text}</p>}
  </div>
)
// Image slot: real photo if provided, else an elegant chain placeholder.
export const ProductImage = ({ src, alt, className = '' }) => src
  ? <img src={src} alt={alt} loading="lazy" className={`object-cover w-full h-full ${className}`} />
  : (
    <div role="img" aria-label={alt} className={`w-full h-full bg-gradient-to-br from-forest via-emerald-deep to-ink flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 200 120" className="w-3/4 opacity-80" fill="none" stroke="#C8A45D" strokeWidth="5">
        {[0,1,2,3,4].map(i => <ellipse key={i} cx={30 + i * 35} cy="60" rx="24" ry="14" transform={`rotate(${i % 2 ? 0 : 90} ${30 + i * 35} 60)`} />)}
      </svg>
    </div>
  )
