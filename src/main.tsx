import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DescriptionPage from './descriptionPage'
import Traveljournal from './TravelJournal/TravelJournal'
import ChefDevi from './ChefDevi/ChefDevi'
import SoundPad from './SoundPads/SoundPad'
import MemeGenerator from './MemeGenerator/MemeGenerator'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* {<DescriptionPage/>} */}
    {/* <Traveljournal/> */}
    {/* {<ChefDevi/>} */}
    {<MemeGenerator />}
  </StrictMode>,
)
