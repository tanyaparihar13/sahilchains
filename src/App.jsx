import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import ProductDetails from './pages/ProductDetails'
import ManufacturingPage from './pages/ManufacturingPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
export default function App() {
  const { pathname, hash } = useLocation()
  useEffect(() => { if (!hash) window.scrollTo(0, 0); else document.querySelector(hash)?.scrollIntoView() }, [pathname, hash])
  return <>
    <Navbar />
    <main><Routes>
      <Route path="/" element={<Home />} /><Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} /><Route path="/products/:slug" element={<ProductDetails />} />
      <Route path="/manufacturing" element={<ManufacturingPage />} /><Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes></main>
    <Footer /><FloatingCTA />
  </>
}
