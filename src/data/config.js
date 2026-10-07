// All business info lives here. Edit once, updates everywhere.
export const BUSINESS = {
  name: 'Sahil Chains',
  tagline: 'Manufacturers & Wholesale Suppliers of Imitation Jewellery & Metal Chains',
  phone: '+91 88992 08991',
  phoneRaw: '918899208991',
  addressLines: ['95, Sri Nagar Colony,', 'Trans Yamuna Colony,', 'Agra, Uttar Pradesh 282006'],
  mapQuery: '95 Sri Nagar Colony Trans Yamuna Colony Agra Uttar Pradesh 282006',
  waMessage: 'Hello Sahil Chains, I am interested in your chains/jewellery products and would like to know about wholesale/bulk orders.',
  socials: { instagram: '#', facebook: '#' }
}
export const waLink = (msg = BUSINESS.waMessage) => `https://wa.me/${BUSINESS.phoneRaw}?text=${encodeURIComponent(msg)}`
export const NAV = [['Home','/'],['About','/about'],['Products','/products'],['Collections','/products'],['Manufacturing','/manufacturing'],['Why Sahil Chains','/#why'],['Gallery','/gallery'],['Contact','/contact']]
