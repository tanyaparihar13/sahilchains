import Hero from '../components/Hero'
import Stats from '../components/Stats'
import About from '../components/About'
import ProductSection from '../components/ProductSection'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import { Featured, Manufacturing, WhySahilChains, BulkCta } from '../components/Sections'
export default function Home() { return <><Hero /><Stats /><About /><ProductSection limit={4} /><Featured /><Manufacturing /><WhySahilChains /><BulkCta /><Gallery /><Contact /></> }
