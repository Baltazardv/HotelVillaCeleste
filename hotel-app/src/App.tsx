import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingCTAs from './components/FloatingCTAs'
import Home from './pages/Home'
import HotelPage from './pages/HotelPage'
import RoomsPage from './pages/RoomsPage'
import GalleryPage from './pages/GalleryPage'
import TlapaPage from './pages/TlapaPage'
import ContactPage from './pages/ContactPage'
import './index.css'

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-white overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel" element={<HotelPage />} />
        <Route path="/habitaciones" element={<RoomsPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/tlapa" element={<TlapaPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <FloatingCTAs />
    </div>
  )
}
