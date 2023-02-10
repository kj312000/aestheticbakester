import React from 'react';
import Cakes from './components/Cakes';
import CupCakes from './components/CupCakes';
import Home from './components/Home';
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="cakes" element={<Cakes/>} />
          <Route exact path="cupcakes" element={<CupCakes />} />
      </Routes>
    </div>
  );
}

export default App;

