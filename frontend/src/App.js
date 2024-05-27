import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
