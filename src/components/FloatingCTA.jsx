import { MessageCircle, Phone } from 'lucide-react'
import { BUSINESS, waLink } from '../data/config'
export default function FloatingCTA() {
  return <>
    <a href={waLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="hidden md:flex fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white items-center justify-center shadow-xl"><MessageCircle /></a>
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 bg-ink border-t border-gold/40 text-xs tracking-widest uppercase">
      <a href={`tel:${BUSINESS.phone}`} className="py-4 flex justify-center gap-2 text-softgold"><Phone size={16} />Call</a>
      <a href={waLink()} target="_blank" rel="noreferrer" className="py-4 flex justify-center gap-2 bg-gold text-ink"><MessageCircle size={16} />WhatsApp</a>
    </div></>
}
