// import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import MainScreen from './pages/MainScreen';
import ShoppingCart from './pages/ShoppingCart';

// import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={ <MainScreen /> } />
      <Route path="/cart" element={ <ShoppingCart /> } />
    </Routes>
  );
}

export default App;
