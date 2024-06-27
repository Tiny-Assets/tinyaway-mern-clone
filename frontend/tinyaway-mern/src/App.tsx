import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GiftCardsPage from "./pages/GiftCardsPage";
import TinyHouseDestinationsPage from "./pages/TinyHouseDestinations"; 
import SingleListing from "./pages/SingleListing";
import GrampiansPage from "./pages/GrampiansPage";
import LazarusIslandPage from "./pages/LazarusIslandPage";
import TinyStoriesPage from "./pages/TinyStoriesPage";
import OurStoryPage from "./pages/OurStoryPage";
import BecomeAHostPage from "./pages/BecomeAHostPage";
import ContactUsPage from "./pages/ContactUsPage";
import FaqPoliciesPage from "./pages/FaqPoliciesPage";
import BlogPage from "./pages/BlogPage";
import LoginPage from "./pages/LoginPage";
import BookYourStayPage from "./pages/BookYourStayPage";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={ <HomePage /> } />
      <Route path='/gift-cards' element={ <GiftCardsPage /> } />
      <Route path='/tiny-house-destinations' element={ <TinyHouseDestinationsPage /> } />
      <Route path='/tiny-house-destinations/:id' element={ <SingleListing />} />
      <Route path='/tiny-away-escape-grampians' element={ <GrampiansPage /> } />
      <Route path='/tiny-away-escape-lazarus' element={ <LazarusIslandPage /> } />
      <Route path='/tiny-stories' element={ <TinyStoriesPage /> } />
      <Route path='/our-story' element={ <OurStoryPage /> } />
      <Route path='/become-a-host' element={ <BecomeAHostPage /> } />
      <Route path='/contact-us' element={ <ContactUsPage /> } />
      <Route path='/faq-n-policies' element={ <FaqPoliciesPage /> } />
      <Route path='/blog' element={ <BlogPage /> } />
      <Route path='/login' element={ <LoginPage /> } />
      <Route path='/book-your-stay' element={ <BookYourStayPage /> } />
    </Routes>
  )
}


