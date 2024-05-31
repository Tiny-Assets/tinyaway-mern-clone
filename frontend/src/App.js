// set up browser routes 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

// import page links 
import Home from './pages/Homepage/Home';
import GiftCards from './pages/Giftcards/giftCards';
import Listings from './pages/Listings/Listings';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pageRoutes">
          <Routes>
            <Route path="/" element={ <Home /> }></Route>
            <Route path="/giftCards" element={ <GiftCards /> }></Route>
            <Route path="/listings" element={ <Listings /> }></Route>
            <Route path="/profile" element={ <Profile />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
