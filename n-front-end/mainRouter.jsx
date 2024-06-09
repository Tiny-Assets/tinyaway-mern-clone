import { createBrowserRouter } from 'react-router-dom';
import HomePage from './src/pages/HomePage';
import './src/App.css'


export const mainRouter = createBrowserRouter([
    {path: '/', element: <HomePage />},
    // {path: '/aboutUs', element: < AboutUs />}, 
    // {path: '/showListings', element: < ShowListings />}, 
    // {path: 'tinyAwayEscape', element: < TinyAwayEscape />},
    // {path: '/giftCards', element: < Giftcards />}, 
    // {path: '/blogs', element: < Blogs />}, 
    // {path: 'login', element: < LogInPage />}
  ]); 

