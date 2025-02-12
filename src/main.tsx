import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router'
// import MainContent from './MainContent'
import Traveljournal from './TravelJournal/TravelJournal'
import ChefDevi from './ChefDevi/ChefDevi'
import MemeGenerator from './MemeGenerator/MemeGenerator'
import Tenzies from './Tenzies/Tenzies'
import App from './App'

const NotFoundPage = () => (
  <div>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);



createRoot(document.getElementById('root')!).render(
  
    
    <BrowserRouter basename="/portfolio_project" >
      <Routes>
      <Route path="/" element={<App />} />
        <Route path="TravelJournal" element={<Traveljournal />} />
        <Route path="ChefDevi" element={<ChefDevi />} />
        <Route path="MemeGenerator" element={<MemeGenerator />} />
        <Route path="Tenzies" element={<Tenzies />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
 
  ,
);
