import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import EventsPage from './pages/EventsPage.jsx'
import EventCardDetail from './components/EventCardDetail.jsx'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EventsPage" element={<EventsPage />} />
        <Route path="/event/:id" element={<EventCardDetail />} />
      </Routes>
    </BrowserRouter>
)
