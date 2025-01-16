import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DescriptionPage from './descriptionPage'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DescriptionPage />
  </StrictMode>,
)
