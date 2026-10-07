import image357 from '../assets/images/357.jpeg'
import image830 from '../assets/images/830.jpeg'
import image840 from '../assets/images/840.jpeg'
import image850 from '../assets/images/850.jpeg'
import image851 from '../assets/images/851.jpeg'
import image2020 from '../assets/images/2020.jpeg'
import image1920 from '../assets/images/1920.jpeg'
import image1930 from '../assets/images/1930.jpeg'
import image1979 from '../assets/images/1979.jpeg'
import fashion from '../assets/images/fashion.jpeg'
import fashion2 from '../assets/images/fashion2.jpeg'
import fashion3 from '../assets/images/fashion3.jpeg'
// import img3 from '../assets/images/img3.png'
import brace1  from '../assets/images/brace1.png'
import brace4 from '../assets/images/brace4.png'
import brace2 from '../assets/images/brace2.png'
import brace3 from '../assets/images/brace3.png'
import  des1 from '../assets/images/des1.png'
import des2 from '../assets/images/des2.png'
import des3 from '../assets/images/des3.png'
import design from '../assets/images/design.png'


const IMAGE_MAP = {
  '357': image357,
  '830': image830,
  '840': image840,
  '850': image850,
  '851': image851,
  '2020': image2020,
  '1920': image1920,
  '1930': image1930,
  '1979': image1979,
  'fashion': fashion,
  'fashion2': fashion2,
  'fashion3': fashion3,
  'brace1': brace1,
  'brace2': brace2,
  'brace3': brace3,
  'brace4': brace4,
  'des1': des1,
  'des2': des2,
  'des3': des3,
  'design': design
}

export const COLLECTIONS = [
  {
    id: 'classic',
    name: 'Classic Chains',
    items: [
      { name: 'Rope Chain', articleNo: '357' },
      { name: 'Curb Chain', articleNo: '830' },
      { name: 'Figaro Chain', articleNo: '840' },
      { name: 'Singapore Chain', articleNo: '850' },
      // { name: 'Cable Chain', articleNo: '851' },
    ]
  },

  {
    id: 'statement',
    name: 'Premium Statement Chains',
    items: [
      { name: 'Cuban Link Chain', articleNo: '2020' },
      { name: 'Franco Chain', articleNo: '1979' },
      { name: 'Mariner Chain', articleNo: '1920' },
      { name: 'Herringbone Chain', articleNo: '1930' },
      // { name: 'Snake Chain', articleNo: '1979' },
      // { name: 'Byzantine Pattern Chain', articleNo: '3770' },
      // { name: 'Multi-Layer Chain', articleNo: '3688' }
    ]
  },

  {
    id: 'fashion',
    name: 'Fashion Chains',
    items: [
      { name: 'Twisted Chain', articleNo: 'fashion' },
      { name: 'Designer Link Chain', articleNo: 'fashion2' },
      { name: 'Geometric Chain', articleNo: 'fashion3' },
      { name: 'Textured Chain', articleNo: '840' },
      { name: 'Layered Fashion Chain', articleNo: '830' },
      { name: 'Minimal Chain', articleNo: '850' },
      { name: 'Statement Fashion Chain', articleNo: '555' }
    ]
  },

  {
    id: 'bracelets',
    name: 'Bracelets',
    items: [
      { name: 'Cuban Bracelet', articleNo: 'brace1' },
      { name: 'Figaro Bracelet', articleNo: 'brace2' },
      { name: 'Rope Bracelet', articleNo: 'brace3' },
      { name: 'Chain Link Bracelet', articleNo: 'brace4' },
      // { name: 'Designer Bracelet', articleNo: '851' },
      // { name: 'Fashion Bracelet', articleNo: '860' }
    ]
  },

  {
    id: 'metal',
    name: 'Metal Chain Collection',
    items: [
      { name: 'Gold Finish Chains', articleNo: 'des1' },
      { name: 'Silver Finish Chains', articleNo: 'des2' },
      { name: 'Two-Tone Chains', articleNo: 'des3' },
      { name: 'Matte Finish Chains', articleNo: 'design' },
      // { name: 'Polished Finish Chains', articleNo: '1920' },
      // { name: 'Textured Metal Chains', articleNo: '1930' }
    ]
  }
]

const desc = {
  'Cuban Link Chain':
    'Bold interlocking links with a polished premium finish.'
}

const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const PRODUCTS = COLLECTIONS.flatMap((c) =>
  c.items.map((item) => ({
    slug: slug(item.name),
    name: item.name,
    articleNo: item.articleNo,
    collection: c.name,
    collectionId: c.id,

    // Use imported image
    image: IMAGE_MAP[item.articleNo] || null,

    short:
      desc[item.name] ||
      `${item.name} designed for retailers, wholesalers and bulk buyers.`,

    details:
      'Designed with attention to link detail and finishing. Contact us to confirm current availability.',

    finishes: [
      'Gold finish',
      'Silver finish',
      'Two-tone'
    ],

    variants: [
      'Multiple lengths',
      'Multiple widths'
    ],

    bulk:
      'Wholesale and bulk orders welcome. Price on Enquiry.'
  }))
)

// const desc = {
//   'Cuban Link Chain':
//     'Bold interlocking links with a polished premium finish.'
// }


// const slug = (s) =>
//   s
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, '-')
//     .replace(/(^-|-$)/g, '')


// export const PRODUCTS = COLLECTIONS.flatMap((c) =>
//   c.items.map((item) => ({
//     slug: slug(item.name),
//     name: item.name,
//     articleNo: item.articleNo,
//     collection: c.name,
//     collectionId: c.id,

//     // Image automatically uses Article No.
//     image: `/products/${item.articleNo}.jpeg`,

//     short:
//       desc[item.name] ||
//       `${item.name} designed for retailers, wholesalers and bulk buyers.`,

//     details:
//       'Designed with attention to link detail and finishing. Contact us to confirm current availability.',

//     finishes: [
//       'Gold finish',
//       'Silver finish',
//       'Two-tone'
//     ],

//     variants: [
//       'Multiple lengths',
//       'Multiple widths'
//     ],

//     bulk:
//       'Wholesale and bulk orders welcome. Price on Enquiry.'
//   }))
// )