
import { useEffect, useState } from 'react'
import {
  motion,
  AnimatePresence
} from 'framer-motion'

import {
  ArrowDown,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react'

import { GoldButton, OutlineButton } from './ui'
import { BUSINESS } from '../data/config'

// Five chain images from src/img
import img1 from '../assets/images/home.jpeg'
import img2 from '../assets/images/img1.jpeg'
import img3 from '../assets/images/img2.jpeg'
import img4 from '../assets/images/img3.png'
import img5 from '../assets/images/home4.jpeg'

const images = [img1, img2, img3, img4, img5]

export default function Hero() {

  const [currentImage, setCurrentImage] = useState(0)

  // Automatic image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="
  relative
  min-h-screen
  overflow-hidden
  bg-[#061B16]
  text-[#F8F3E8]
">

      {/* BACKGROUND DECORATION */}

     <div className="
  absolute
  top-[20%]
  right-0
  w-96
  h-96
  rounded-full
  bg-[#D9B66F]/[0.08]
  blur-[140px]
  pointer-events-none
" />

      <div className="
        absolute
        bottom-0
        left-0
        w-80
        h-80
        rounded-full
        bg-emerald-500/[0.05]
        blur-[120px]
        pointer-events-none
      " />


      {/* =========================================
          MAIN HERO GRID
      ========================================= */}

      <div className="
        relative
        z-10
        max-w-[1440px]
        mx-auto
        min-h-screen
        px-5
        sm:px-8
        lg:px-12
        xl:px-16
        pt-32
        pb-16
        flex
        items-center
      ">

        <div className="
          w-full
          grid
          grid-cols-1
          lg:grid-cols-[1.05fr_0.95fr]
          gap-12
          lg:gap-10
          xl:gap-16
          items-center
        ">


          {/* =====================================
              LEFT SECTION - CONTENT
          ===================================== */}

          <div className="
            relative
            z-10
            order-1
            w-full
            max-w-2xl
            py-5
          ">

            {/* TOP LABEL */}

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="
                flex
                items-center
                gap-4
                mb-7
              "
            >

              <span className="
                h-px
                w-12
                sm:w-20
                bg-softgold
              " />

              <span className="
                text-[10px]
                sm:text-xs
                tracking-[0.3em]
                uppercase
                text-softgold
              ">
                Premium Chain Manufacturer
              </span>

            </motion.div>


            {/* MAIN HEADING */}

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.15
              }}
              className="
                font-serif
                text-5xl
                sm:text-6xl
                md:text-7xl
                xl:text-[76px]
                2xl:text-[86px]
                leading-[0.98]
                tracking-[-0.04em]
                text-softgold
              "
            >

              CRAFTED TO

              <br />

              <span className="text-ivory">
                CONNECT.
              </span>

              <br />

              <span className="text-softgold">
                BUILT TO LAST.
              </span>

            </motion.h1>


            {/* DESCRIPTION */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.4
              }}
              className="
                mt-8
                lg:mt-9
                max-w-xl
              "
            >

              <p className="
                text-lg
                sm:text-xl
                text-ivory
                font-light
                leading-relaxed
              ">
                {BUSINESS.tagline}
              </p>

              <p className="
                mt-4
                text-sm
                sm:text-base
                text-ivory/65
                leading-7
                max-w-lg
              ">
                Premium chains, bracelets and jewellery accessories
                crafted for retailers, wholesalers, distributors and
                bulk buyers.
              </p>


              {/* BUTTONS */}

              <div className="
                mt-8
                flex
                flex-col
                sm:flex-row
                gap-3
                sm:gap-4
              ">

                <GoldButton to="/products">
                  <span className="flex items-center gap-2">
                    Explore Collection
                    <ArrowUpRight size={16} />
                  </span>
                </GoldButton>

                <OutlineButton to="/contact">
                  <span className="flex items-center gap-2">
                    Get Bulk Quote
                    <ChevronRight size={16} />
                  </span>
                </OutlineButton>

              </div>


              {/* PHONE */}

              <a
                href={`tel:${BUSINESS.phone}`}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  mt-7
                  text-softgold
                  text-xs
                  sm:text-sm
                  tracking-[0.2em]
                  hover:text-ivory
                  transition-colors
                "
              >

                <span className="
                  w-8
                  h-px
                  bg-softgold
                  group-hover:w-12
                  transition-all
                " />

                {BUSINESS.phone}

              </a>

            </motion.div>


            {/* PREMIUM INFO STRIP */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.65
              }}
              className="
                mt-10
                lg:mt-12
                flex
                flex-wrap
                gap-3
                sm:gap-4
              "
            >

              {[
                'Premium Quality',
                'Bulk Orders',
                'Worldwide Export'
              ].map(item => (

                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2
                    px-3
                    sm:px-4
                    py-2.5
                    rounded-full
                    border
                    border-white/10
                    bg-black/20
                    backdrop-blur-md
                  "
                >

                  <span className="
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-softgold
                    shadow-[0_0_8px_rgba(212,175,55,0.8)]
                  " />

                  <span className="
                    text-[9px]
                    sm:text-[10px]
                    tracking-[0.13em]
                    uppercase
                    text-ivory/70
                  ">
                    {item}
                  </span>

                </div>

              ))}

            </motion.div>

          </div>


          {/* =====================================
              RIGHT SECTION - CHAIN IMAGE SLIDER
          ===================================== */}

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.25
            }}
            className="
              relative
              order-2
              w-full
              max-w-[580px]
              mx-auto
              lg:ml-auto
            "
          >

            {/* GOLD DECORATIVE FRAME */}

            <div className="
              absolute
              -top-4
              -right-4
              w-28
              h-28
              border-t
              border-r
              border-softgold/50
              rounded-tr-[30px]
              pointer-events-none
            " />

            <div className="
              absolute
              -bottom-4
              -left-4
              w-28
              h-28
              border-b
              border-l
              border-softgold/50
              rounded-bl-[30px]
              pointer-events-none
            " />


            {/* MAIN IMAGE CARD */}

            <div className="
              relative
              p-2
              rounded-[26px]
              border
              border-softgold/25
              bg-white/[0.035]
              shadow-[0_25px_80px_rgba(0,0,0,0.4)]
            ">

              <div className="
                relative
                w-full
                aspect-[4/5]
                sm:aspect-[5/4]
                lg:aspect-[4/5]
                xl:aspect-[5/6]
                overflow-hidden
                rounded-[20px]
                bg-[#102820]
              ">


                {/* AUTOMATIC IMAGE TRANSITION */}

                <AnimatePresence mode="sync">

                  <motion.div
                    key={currentImage}
                    initial={{
                      opacity: 0,
                      scale: 1.08
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1
                    }}
                    exit={{
                      opacity: 0
                    }}
                    transition={{
                      opacity: {
                        duration: 1.2
                      },
                      scale: {
                        duration: 5,
                        ease: 'linear'
                      }
                    }}
                    className="
                      absolute
                      inset-0
                    "
                  >

                    <img
                      src={images[currentImage]}
                      alt={`Sahil Chains jewellery design ${currentImage + 1}`}
                      className="
                        w-full
                        h-full
                        object-cover
                        object-center
                      "
                    />

                  </motion.div>

                </AnimatePresence>


                {/* CINEMATIC OVERLAY */}

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/5
                  to-black/15
                  pointer-events-none
                " />


                {/* TOP COLLECTION LABEL */}

                <div className="
                  absolute
                  top-5
                  left-5
                  sm:top-7
                  sm:left-7
                  px-4
                  py-2.5
                  rounded-full
                  bg-black/40
                  border
                  border-white/20
                  backdrop-blur-xl
                  flex
                  items-center
                  gap-2
                ">

                  <span className="
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-softgold
                  " />

                  <span className="
                    text-[9px]
                    tracking-[0.2em]
                    uppercase
                    text-white
                  ">
                    Premium Collection
                  </span>

                </div>


                {/* BOTTOM IMAGE DETAILS */}

                <div className="
                  absolute
                  bottom-6
                  left-5
                  right-5
                  sm:bottom-8
                  sm:left-7
                  sm:right-7
                  flex
                  items-end
                  justify-between
                  gap-3
                ">

                  <div>

                    <p className="
                      text-[9px]
                      tracking-[0.25em]
                      uppercase
                      text-softgold
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
                      Crafted to Connect
                    </h3>

                    <p className="
                      mt-2
                      text-xs
                      text-white/65
                    ">
                      Premium • Quality • Craftsmanship
                    </p>

                  </div>

                  {/* IMAGE COUNTER */}

                  <div className="text-right shrink-0">

                    <span className="
                      font-serif
                      text-3xl
                      text-softgold
                    ">
                      0{currentImage + 1}
                    </span>

                    <span className="
                      text-xs
                      text-white/60
                    ">
                      / 0{images.length}
                    </span>

                  </div>

                </div>

              </div>

            </div>


            {/* FLOATING PREMIUM BADGE */}

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="
                absolute
                -left-3
                sm:-left-7
                bottom-[17%]
                z-20
                px-4
                sm:px-5
                py-4
                rounded-2xl
                bg-[#102820]
                border
                border-softgold/40
                shadow-[0_15px_40px_rgba(0,0,0,0.4)]
              "
            >

              <p className="
                text-[9px]
                tracking-[0.2em]
                uppercase
                text-white/50
              ">
                Made for
              </p>

              <p className="
                mt-1
                text-sm
                sm:text-base
                font-serif
                text-softgold
              ">
                Excellence
              </p>

            </motion.div>


            {/* SLIDER INDICATORS */}

            <div className="
              flex
              items-center
              justify-center
              gap-3
              mt-7
            ">

              {images.map((_, index) => (

                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Show chain image ${index + 1}`}
                  aria-pressed={currentImage === index}
                  className="
                    group
                    flex
                    items-center
                    py-2
                  "
                >

                  <span className={`
                    block
                    h-[2px]
                    rounded-full
                    transition-all
                    duration-500
                    ${
                      currentImage === index
                        ? 'w-10 bg-softgold'
                        : 'w-5 bg-white/30 group-hover:bg-white/60'
                    }
                  `} />

                </button>

              ))}

            </div>

            <p className="
              text-center
              mt-2
              text-[9px]
              tracking-[0.25em]
              uppercase
              text-white/40
            ">
              Discover Our Craftsmanship
            </p>

          </motion.div>

        </div>

      </div>


      {/* SCROLL INDICATOR */}

      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity
        }}
        className="
          absolute
          bottom-5
          left-1/2
          -translate-x-1/2
          z-20
          hidden
          sm:flex
          flex-col
          items-center
          gap-2
          text-white/40
        "
      >

        <span className="
          text-[8px]
          tracking-[0.35em]
          uppercase
        ">
          Scroll
        </span>

        <ArrowDown size={15} />

      </motion.div>


      {/* GOLD BOTTOM LINE */}

      <div className="
        absolute
        bottom-0
        left-0
        z-30
        h-px
        bg-white/10
        w-full
      ">

        <motion.div
          key={currentImage}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{
            duration: 5,
            ease: 'linear'
          }}
          className="
            h-full
            bg-softgold
          "
        />

      </div>

    </section>
  )
}