import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import MusicPlayerContextProvider from './context/MusicPlayerContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MusicPlayerContextProvider>
        <App />
      </MusicPlayerContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
