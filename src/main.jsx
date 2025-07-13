import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import EventsPage from './pages/EventsPage.jsx'
import EventCardDetail from './components/EventCardDetail.jsx'
import AssociationsPage from './pages/AssociationsPage.jsx'
import AssociationDetailPage from './pages/AssociationDetailPage.jsx'
import CalendarPage from './pages/CalendarPage.jsx'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EventsPage" element={<EventsPage />} />
        <Route path="/event/:id" element={<EventCardDetail />} />
        <Route path="/AssociationsPage" element={<AssociationsPage />} />
        <Route path="/association/:id" element={<AssociationDetailPage />} />
        <Route path="/CalendarPage" element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
)
