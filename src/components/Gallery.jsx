import { motion } from 'framer-motion'
import { ProductImage, SectionHead } from './ui'

import gallery from '../assets/images/gallery.jpeg'
import gallery2 from '../assets/images/gallery2.jpeg'
import gallery3 from '../assets/images/gallery3.jpeg'
import galery4 from '../assets/images/galery4.jpeg'
import gallery5 from '../assets/images/gallery5.jpeg'
import gallery6 from '../assets/images/gallery6.jpeg'
import gallery7 from '../assets/images/gallery7.jpeg'
import gallery8 from '../assets/images/gallery8.jpeg'

const G = [
  {
    alt: 'Chain close-up',
    h: 'h-64',
    src: gallery
  },
  {
    alt: 'Bracelets',
    h: 'h-80',
    src: gallery2
  },
  {
    alt: 'Product arrangement',
    h: 'h-72',
    src: gallery3
  },
  {
    alt: 'Manufacturing shot',
    h: 'h-96',
    src: galery4
  },
  {
    alt: 'Packaging',
    h: 'h-64',
    src: gallery5
  },
  {
    alt: 'Gold finish',
    h: 'h-80',
    src: gallery6
  },
  {
    alt: 'Silver finish',
    h: 'h-72',
    src: gallery7
  },
  {
    alt: 'Designer chains',
    h: 'h-64',
    src: gallery8
  }
]

export default function Gallery() {
  return (
    <section className="py-24 px-5">
      <div className="max-w-7xl mx-auto">

        <SectionHead
          title="Gallery"
          text="A look at our chains, finishes and products."
        />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {G.map((g, i) => (
            <motion.div
              key={g.alt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ scale: 0.98 }}
              className={`mb-5 break-inside-avoid overflow-hidden border border-gold/20 ${g.h}`}
            >
              <ProductImage
                src={g.src}
                alt={`Sahil Chains ${g.alt}`}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}