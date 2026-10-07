
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  ArrowUpRight
} from 'lucide-react'

import { NAV } from '../data/config'
import logo from '../assets/images/logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const location = useLocation()

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Close mobile menu on navigation
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Prevent background scrolling
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}

      <motion.header
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="
          fixed
          top-3
          sm:top-4
          left-0
          right-0
          z-50
          px-3
          sm:px-5
          xl:px-6
        "
      >
        <div
          className={`
            relative
            max-w-[1440px]
            mx-auto
            rounded-[22px]
            border
            transition-all
            duration-500
            ${
              scrolled
                ? `
                  bg-[#071b17]/95
                  border-[#D9B66F]/25
                  shadow-[0_15px_60px_rgba(0,0,0,0.4)]
                `
                : `
                  bg-[#081c18]/75
                  border-white/[0.10]
                  shadow-[0_10px_40px_rgba(0,0,0,0.2)]
                `
            }
            backdrop-blur-2xl
          `}
        >

          {/* Subtle gold background glow */}

          <div className="
            absolute
            inset-0
            overflow-hidden
            rounded-[22px]
            pointer-events-none
          ">
            <div className="
              absolute
              -top-20
              left-[20%]
              w-64
              h-32
              bg-[#D9B66F]/[0.07]
              blur-[80px]
              rounded-full
            " />
          </div>

          {/* MAIN NAVBAR GRID */}

          <div className="
            relative
            z-10
            min-h-[82px]
            lg:min-h-[88px]
            px-3
            sm:px-5
            lg:px-6
            xl:px-7
            grid
            grid-cols-[auto_1fr_auto]
            items-center
            gap-3
            xl:gap-5
          ">

            {/* ================= LOGO ================= */}

            <Link
              to="/"
              aria-label="Sahil Chains Home"
              className="
                group
                relative
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              {/* Premium logo frame */}

              <div className="
                relative
                w-[66px]
                h-[66px]
                sm:w-[72px]
                sm:h-[72px]
                rounded-[15px]
                bg-[#050706]
                border
                border-[#D9B66F]/50
                shadow-[0_5px_25px_rgba(0,0,0,0.4)]
                flex
                items-center
                justify-center
                overflow-hidden
                transition-all
                duration-500
                group-hover:border-[#EAC982]
                group-hover:shadow-[0_0_25px_rgba(217,182,111,0.2)]
              ">

                {/* Gold inner border */}

                <div className="
                  absolute
                  inset-[4px]
                  rounded-[11px]
                  border
                  border-[#D9B66F]/15
                  pointer-events-none
                " />

                <motion.img
                  src={logo}
                  alt="Sahil Chains"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.35 }}
                  className="
                    relative
                    z-10
                    w-full
                    h-full
                    object-contain
                    p-[3px]
                    drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]
                  "
                />
              </div>
            </Link>

            {/* ================= DESKTOP LINKS ================= */}

            <nav className="
              hidden
              xl:flex
              items-center
              justify-center
              gap-0.5
              min-w-0
            ">

              {NAV.map(([label, to]) => {

                const active =
                  location.pathname === to

                return (
                  <Link
                    key={label}
                    to={to}
                    className="
                      group
                      relative
                      px-2
                      2xl:px-3
                      py-3
                      rounded-full
                      whitespace-nowrap
                    "
                  >

                    {/* Active background */}

                    <span className={`
                      absolute
                      inset-0
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        active
                          ? 'bg-[#D9B66F]/10'
                          : 'bg-transparent group-hover:bg-white/[0.05]'
                      }
                    `} />

                    {/* Link text */}

                    <span className={`
                      relative
                      z-10
                      text-[9px]
                      2xl:text-[10px]
                      font-medium
                      tracking-[0.13em]
                      2xl:tracking-[0.16em]
                      uppercase
                      transition-colors
                      duration-300
                      ${
                        active
                          ? 'text-[#E8C77E]'
                          : 'text-white/65 group-hover:text-[#E8C77E]'
                      }
                    `}>
                      {label}
                    </span>

                    {/* Gold active underline */}

                    {active && (
                      <motion.span
                        layoutId="activeNav"
                        className="
                          absolute
                          bottom-[5px]
                          left-1/2
                          -translate-x-1/2
                          w-5
                          h-[2px]
                          rounded-full
                          bg-[#E8C77E]
                          shadow-[0_0_10px_rgba(232,199,126,0.7)]
                        "
                      />
                    )}

                  </Link>
                )
              })}

            </nav>

            {/* ================= RIGHT CTA ================= */}

            <div className="
              flex
              items-center
              justify-end
              shrink-0
            ">

              {/* Desktop button */}

              <Link
                to="/contact"
                className="
                  hidden
                  xl:inline-flex
                  group
                  relative
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-[#D5AF63]
                  via-[#EBD08E]
                  to-[#D5AF63]
                  border
                  border-[#F2DDA8]/60
                  px-4
                  2xl:px-5
                  py-3
                  overflow-hidden
                  text-[#14221B]
                  shadow-[0_6px_25px_rgba(0,0,0,0.2)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_10px_30px_rgba(217,182,111,0.25)]
                "
              >

                <span className="
                  absolute
                  inset-0
                  bg-white/30
                  -translate-x-full
                  skew-x-[-20deg]
                  group-hover:translate-x-full
                  transition-transform
                  duration-700
                " />

                <span className="
                  relative
                  z-10
                  text-[9px]
                  2xl:text-[10px]
                  tracking-[0.15em]
                  uppercase
                  font-semibold
                  whitespace-nowrap
                ">
                  Bulk Enquiry
                </span>

                <ArrowUpRight
                  size={14}
                  className="
                    relative
                    z-10
                    transition-transform
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

              </Link>

              {/* Mobile menu button */}

              <button
                type="button"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                onClick={() => setOpen(!open)}
                className="
                  xl:hidden
                  w-11
                  h-11
                  rounded-full
                  border
                  border-[#D9B66F]/35
                  bg-white/[0.04]
                  flex
                  items-center
                  justify-center
                  text-[#E8C77E]
                  hover:bg-[#D9B66F]/10
                  transition-all
                "
              >
                <AnimatePresence mode="wait" initial={false}>
                  {open ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                    >
                      <X size={21} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                    >
                      <Menu size={21} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

            </div>

          </div>

          {/* Bottom gold accent */}

          <div className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            w-24
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#D9B66F]/70
            to-transparent
          " />

        </div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-40
              bg-[#071713]
              xl:hidden
              overflow-y-auto
            "
          >

            {/* Background glow */}

            <div className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              w-[400px]
              h-[300px]
              bg-[#D9B66F]/[0.07]
              blur-[110px]
              rounded-full
            " />

            <div className="
              relative
              min-h-screen
              px-6
              pt-28
              pb-8
              flex
              flex-col
            ">

              {/* Mobile brand */}

              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex justify-center mb-10"
              >
                <div className="
                  w-[100px]
                  h-[100px]
                  rounded-[20px]
                  bg-[#050706]
                  border
                  border-[#D9B66F]/50
                  p-1
                  shadow-[0_10px_35px_rgba(0,0,0,0.4)]
                ">
                  <img
                    src={logo}
                    alt="Sahil Chains"
                    className="
                      w-full
                      h-full
                      object-contain
                    "
                  />
                </div>
              </motion.div>

              {/* Mobile navigation */}

              <nav className="max-w-lg w-full mx-auto">

                {NAV.map(([label, to], index) => {

                  const active = location.pathname === to

                  return (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12 + index * 0.06 }}
                    >
                      <Link
                        to={to}
                        onClick={() => setOpen(false)}
                        className="
                          group
                          flex
                          items-center
                          justify-between
                          py-5
                          border-b
                          border-white/[0.08]
                        "
                      >

                        <div className="flex items-center gap-5">

                          <span className="
                            text-[10px]
                            tracking-[0.2em]
                            text-[#D9B66F]/50
                          ">
                            {String(index + 1).padStart(2, '0')}
                          </span>

                          <span className={`
                            text-base
                            sm:text-lg
                            tracking-[0.16em]
                            uppercase
                            transition-colors
                            ${
                              active
                                ? 'text-[#E8C77E]'
                                : 'text-white/80 group-hover:text-[#E8C77E]'
                            }
                          `}>
                            {label}
                          </span>

                        </div>

                        <ArrowUpRight
                          size={18}
                          className="
                            text-[#D9B66F]/60
                            group-hover:text-[#E8C77E]
                            group-hover:translate-x-1
                            group-hover:-translate-y-1
                            transition-all
                          "
                        />

                      </Link>
                    </motion.div>
                  )
                })}

              </nav>

              {/* Mobile CTA */}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="max-w-lg w-full mx-auto mt-9"
              >
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-3
                    w-full
                    rounded-full
                    bg-gradient-to-r
                    from-[#D5AF63]
                    via-[#EBD08E]
                    to-[#D5AF63]
                    text-[#14221B]
                    py-4
                    font-semibold
                    shadow-[0_10px_30px_rgba(217,182,111,0.15)]
                  "
                >
                  <span className="
                    text-[10px]
                    tracking-[0.2em]
                    uppercase
                  ">
                    Bulk Enquiry
                  </span>

                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>

              {/* Footer */}

              <div className="mt-auto pt-12 text-center">

                <div className="
                  h-px
                  w-16
                  bg-[#D9B66F]/40
                  mx-auto
                  mb-5
                " />

                <p className="
                  text-[9px]
                  tracking-[0.3em]
                  uppercase
                  text-white/35
                ">
                  Artificial Chain Manufacturer
                </p>

                <p className="
                  mt-2
                  text-[9px]
                  tracking-[0.25em]
                  uppercase
                  text-[#D9B66F]/60
                ">
                  Premium • Wholesale • Export
                </p>

              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </>
  )
}