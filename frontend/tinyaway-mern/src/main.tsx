import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import AnnouncementBar from "./components/navigation/AnnouncementBar.tsx"; 
import Navbar from "./components/navigation/navbar/Navbar.tsx";
import Footer from './components/navigation/footer/Footer.tsx';
import IgFeedApi from './components/sharedcomponents/instagramfeed/IgFeedApi.tsx';
import NewsletterSignUp from './components/sharedcomponents/newsletterform/NewsletterSignUp.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <AnnouncementBar />
      <Navbar />
        <App />
      <IgFeedApi />
      <NewsletterSignUp />
      <Footer />
    </React.StrictMode>
  </BrowserRouter>
)
