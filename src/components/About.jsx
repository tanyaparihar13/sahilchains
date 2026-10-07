import { Check } from 'lucide-react'
import { Reveal, SectionHead, GoldButton } from './ui'

const F = [
  'Manufacturer & Wholesale Supplier',
  'Bulk Order Support',
  'Chains & Bracelets',
  'Multiple Designs & Finishes',
  'Retailer & Distributor Supply',
  'Quality-Focused Products'
]

export default function About() {
  return (
    <section className="py-24 px-5 bg-[#061B16] text-ivory">
      
      <div className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-2
        gap-14
        lg:gap-20
        items-center
      ">

        {/* =========================
            LEFT - IMAGE
        ========================= */}

        <Reveal>
          <div className="
            relative
            aspect-[4/5]
            max-w-[520px]
            mx-auto
            w-full
          ">

            {/* Decorative gold frame */}

            <div className="
              absolute
              -top-4
              -left-4
              w-24
              h-24
              border-t
              border-l
              border-[#D9B66F]/60
              rounded-tl-2xl
            " />

            <div className="
              absolute
              -bottom-4
              -right-4
              w-24
              h-24
              border-b
              border-r
              border-[#D9B66F]/60
              rounded-br-2xl
            " />

            {/* Image */}

            <div className="
              relative
              w-full
              h-full
              overflow-hidden
              border
              border-[#D9B66F]/30
              p-2
              bg-[#0B2921]
              shadow-[0_25px_70px_rgba(0,0,0,0.35)]
            ">

              <img
                src="/src/assets/images/about.png"
                alt="Sahil Chains premium jewellery collection"
                className="
                  w-full
                  h-full
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />

              {/* Image overlay */}

              <div className="
                absolute
                inset-2
                bg-gradient-to-t
                from-[#061B16]/70
                via-transparent
                to-transparent
                pointer-events-none
              " />

              {/* Image label */}

              <div className="
                absolute
                bottom-7
                left-7
                right-7
              ">

                <p className="
                  text-[9px]
                  tracking-[0.3em]
                  uppercase
                  text-[#D9B66F]
                  mb-2
                ">
                  Sahil Chains
                </p>

                <h3 className="
                  font-serif
                  text-2xl
                  sm:text-3xl
                  text-white
                ">
                  Crafted With Precision
                </h3>

              </div>

            </div>

          </div>
        </Reveal>


        {/* =========================
            RIGHT - CONTENT
        ========================= */}

        <Reveal delay={0.1}>

          <SectionHead
            title="Where Craftsmanship Meets Every Link"
            text="Sahil Chains is a manufacturer and wholesale supplier of imitation jewellery and metal chains based in Agra, Uttar Pradesh. We provide stylish, durable and quality-focused chains and jewellery accessories for retailers, wholesalers, distributors and bulk buyers."
          />

          {/* Features */}

          <ul className="
            grid
            sm:grid-cols-2
            gap-3
            mb-10
          ">

            {F.map((f) => (

              <li
                key={f}
                className="
                  flex
                  items-center
                  gap-2
                  text-ivory/85
                  text-sm
                "
              >

                <Check
                  className="
                    text-[#D9B66F]
                    shrink-0
                  "
                  size={18}
                />

                <span>
                  {f}
                </span>

              </li>

            ))}

          </ul>

          {/* CTA */}

          <GoldButton to="/about">
            Know More About Us
          </GoldButton>

        </Reveal>

      </div>

    </section>
  )
}