import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import AnnouncementBar from "./components/navigation/AnnouncementBar.tsx"; 
import Navbar from "./components/navigation/Navbar.tsx";
import Footer from './components/navigation/Footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <AnnouncementBar />
      <Navbar />
        <App />
      <Footer />
    </React.StrictMode>
  </BrowserRouter>
)
