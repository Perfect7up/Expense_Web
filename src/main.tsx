import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Sidebar from './components/sidebar/Sidebar.tsx'
import Home from './pages/home/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Sidebar />
    <Home />
  </StrictMode>,
)