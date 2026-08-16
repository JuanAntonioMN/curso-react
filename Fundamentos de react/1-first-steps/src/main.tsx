import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { MyAwesomeApp } from './MyAwesomeApp'
import { FirsStepsApp } from './FirstStepsAPP'


createRoot(document.getElementById('main')!).render(
  <StrictMode>
    <FirsStepsApp/>
  </StrictMode>,
)
