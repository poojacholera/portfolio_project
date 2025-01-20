import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DescriptionPage from './descriptionPage'
import Traveljournal from './TravelJournal/TravelJournal'
import ChefDevi from './ChefDevi/ChefDevi'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* {<DescriptionPage/>} */}
    {/* <Traveljournal/> */}
    {<ChefDevi/>}
  </StrictMode>,
)
