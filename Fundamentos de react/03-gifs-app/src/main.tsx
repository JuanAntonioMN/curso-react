import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GifsApp } from './GifsApp'
import { MyCounterApp } from './counter/components/MyConunterApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyCounterApp/>
  </StrictMode>,
)
