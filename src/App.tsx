import { useContext, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import MainScreen from './pages/MainScreen';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Context from './context/Context';

import './App.css';

function App() {
  const context = useContext(Context);

  useEffect(() => {
    if (context) {
      const fetchData = async () => {
        await context.getCategories();
      };

      fetchData();
    }
  }, []);

  if (!context) return null;

  return (
    <Routes>
      <Route path="/" element={ <MainScreen /> } />
      <Route path="/cart" element={ <ShoppingCart /> } />
      <Route
        path="/product/:id"
        element={ <ProductDetails /> }
      />
    </Routes>
  );
}

export default App;
