import { Link } from 'react-router-dom'
import {
  Instagram,
  Facebook,
  Phone,
  MapPin,
  ArrowUpRight,
  Sparkles,
  ChevronRight,
  Package,
  Link2,
  Gem,
  Layers
} from 'lucide-react'

import { BUSINESS } from '../data/config'
import logo from '../assets/images/logo.png'

const QUICK_LINKS = [
  ['Home', '/'],
  ['About', '/about'],
  ['Products', '/products'],
  ['Collections', '/products'],
  ['Manufacturing', '/manufacturing'],
  ['Gallery', '/gallery'],
  ['Contact', '/contact']
]

const PRODUCTS = [
  {
    name: 'Chains',
    icon: Link2
  },
  {
    name: 'Bracelets',
    icon: Gem
  },
  {
    name: 'Metal Chains',
    icon: Layers
  },
  {
    name: 'Imitation Jewellery',
    icon: Sparkles
  },
  {
    name: 'Bulk Orders',
    icon: Package
  }
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink border-t border-gold/25">

      {/* Decorative Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gold/5 blur-3xl rounded-full pointer-events-none" />

      {/* Gold Top Line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/70 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 pt-20 pb-12">

        {/* Main Footer */}
        <div className="grid lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr] gap-12 lg:gap-16">

          {/* BRAND */}
          <div>

            {/* Logo */}
            <Link
              to="/"
              className="inline-flex items-center group"
            >
              <img
                src={logo}
                alt="Sahil Chains"
                className="w-32 sm:w-40 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </Link>

            {/* Brand Name */}
            <p className="mt-5 font-serif text-2xl tracking-[0.18em] text-softgold">
              SAHIL CHAINS
            </p>

            <div className="flex items-center gap-3 mt-3">
              <span className="h-px w-10 bg-gold/70" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-gold/80">
                Premium Chains & Jewellery
              </span>
            </div>

            <p className="mt-6 max-w-sm text-sm leading-7 text-ivory/55">
              Manufacturers & wholesale suppliers of imitation jewellery,
              metal chains, bracelets and premium fashion accessories.
            </p>

            {/* Social */}
            <div className="mt-8">
              <p className="text-[10px] uppercase tracking-[0.35em] text-gold/70 mb-4">
                Follow Sahil Chains
              </p>

              <div className="flex items-center gap-3">

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/sahilchains/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sahil Chains Instagram"
                  className="group w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink"
                >
                  <Instagram
                    size={19}
                    strokeWidth={1.6}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>

                {/* Facebook */}
                <a
                  href={BUSINESS.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sahil Chains Facebook"
                  className="group w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink"
                >
                  <Facebook
                    size={19}
                    strokeWidth={1.6}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>

              </div>
            </div>
          </div>


          {/* QUICK LINKS */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <span className="h-px w-8 bg-gold" />
              <h3 className="text-xs uppercase tracking-[0.3em] text-softgold">
                Quick Links
              </h3>
            </div>

            <ul className="space-y-3">
              {QUICK_LINKS.map(([label, path]) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="group flex items-center justify-between max-w-[180px] text-sm text-ivory/60 hover:text-softgold transition-colors duration-300"
                  >
                    <span>{label}</span>

                    <ChevronRight
                      size={14}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-gold"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* PRODUCTS */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <span className="h-px w-8 bg-gold" />
              <h3 className="text-xs uppercase tracking-[0.3em] text-softgold">
                Our Products
              </h3>
            </div>

            <ul className="space-y-4">
              {PRODUCTS.map(({ name, icon: Icon }) => (
                <li key={name}>
                  <Link
                    to="/products"
                    className="group flex items-center gap-4 text-sm text-ivory/60 hover:text-softgold transition-colors duration-300"
                  >
                    <span className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold/60 transition-colors duration-300">
                      <Icon
                        size={16}
                        strokeWidth={1.5}
                        className="text-gold"
                      />
                    </span>

                    <span>{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* CONTACT */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <span className="h-px w-8 bg-gold" />
              <h3 className="text-xs uppercase tracking-[0.3em] text-softgold">
                Get In Touch
              </h3>
            </div>

            <div className="space-y-5">

              {/* Phone */}
              <a
                href={`tel:${BUSINESS.phone}`}
                className="group flex items-start gap-4"
              >
                <span className="w-10 h-10 shrink-0 rounded-full border border-gold/25 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-ink transition-all duration-300">
                  <Phone size={17} />
                </span>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ivory/40 mb-1">
                    Call Us
                  </p>

                  <p className="text-sm text-ivory/75 group-hover:text-softgold transition-colors">
                    {BUSINESS.phone}
                  </p>
                </div>
              </a>


              {/* Location */}
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 shrink-0 rounded-full border border-gold/25 flex items-center justify-center text-gold">
                  <MapPin size={17} />
                </span>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ivory/40 mb-1">
                    Location
                  </p>

                  <p className="text-sm leading-6 text-ivory/70">
                    Agra, Uttar Pradesh
                  </p>
                </div>
              </div>


              {/* Instagram CTA */}
              <a
                href="https://www.instagram.com/sahilchains/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 flex items-center justify-between gap-4 border border-gold/35 rounded-full px-5 py-3.5 hover:bg-gold hover:text-ink transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Instagram size={18} />

                  <span className="text-sm">
                    Follow us on Instagram
                  </span>
                </div>

                <ArrowUpRight
                  size={17}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>

              <p className="text-xs leading-6 text-ivory/45">
                Stay updated with our latest designs, collections and
                wholesale products.
              </p>

            </div>
          </div>

        </div>


        {/* Divider */}
        <div className="mt-16 border-t border-gold/15" />


        {/* Bottom Bar */}
        <div className="pt-7 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-xs text-ivory/40 text-center md:text-left">
            © 2026 Sahil Chains. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-gold/60">
            <span>Quality</span>
            <span className="w-1 h-1 rounded-full bg-gold" />
            <span>Trust</span>
            <span className="w-1 h-1 rounded-full bg-gold" />
            <span>Together</span>
          </div>

          <p className="font-serif italic text-sm text-softgold/70">
            Crafted for Every Link
          </p>

        </div>

      </div>
    </footer>
  )
}