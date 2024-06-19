import { createBrowserRouter } from 'react-router-dom';
import HomePage from './src/pages/HomePage';
import ShowListings from './src/pages/SearchListingsPage';
import AboutUsPage from './src/pages/AboutUsPage';
import BlogsPage from './src/pages/BlogsPage';
import TinyAwayEscapePage from './src/pages/TinyAwayEscapePage';
import GiftCardsPage from './src/pages/GiftCardsPage'; 
import LoginPage from './src/pages/LoginPage'; 
import './src/App.css'

export const mainRouter = createBrowserRouter([
    {path: '/', element: <HomePage />},
    {path: '/aboutUs', element: < AboutUsPage />}, 
    {path: '/showListings', element: < ShowListings />}, 
    {path: 'tinyAwayEscape', element: < TinyAwayEscapePage />},
    {path: '/giftCards', element: < GiftCardsPage />}, 
    {path: '/blogs', element: < BlogsPage />}, 
    {path: 'login', element: < LoginPage />}
  ]); 

