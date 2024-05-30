import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Homepage/Home';
import GiftCards from './pages/Giftcards/giftCards';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pageRoutes">
          <Routes>
            <Route path="/" element={ <Home /> }></Route>
            <Route path="/gift-cards" element={ <GiftCards /> }></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
