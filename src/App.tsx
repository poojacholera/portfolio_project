import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import MainContent from './MainContent'
import Traveljournal from './TravelJournal/TravelJournal'
import ChefDevi from './ChefDevi/ChefDevi'
import MemeGenerator from './MemeGenerator/MemeGenerator'
import Tenzies from './Tenzies/Tenzies'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainContent />} />
       
        <Route path="TravelJournal" element={<Traveljournal />} />
        <Route path="ChefDevi" element={<ChefDevi />} />
        <Route path="MemeGenerator" element={<MemeGenerator />} />
        <Route path="Tenzies" element={<Tenzies />} />
      </Routes>
    </BrowserRouter>
 
  </StrictMode>,
)
