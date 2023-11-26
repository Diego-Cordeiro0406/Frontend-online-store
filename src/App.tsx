import { useEffect, useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import MainScreen from './pages/MainScreen';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import CategoriesContext from './context/CategoriesContext';
import { getCategories } from './services/api';
import { Categories } from './types/typesApi';

import './App.css';

function App() {
  const [data, setData] = useState<Categories[]>([]);

  useEffect(() => {
    async function fetchData() {
      const value = await getCategories();
      setData(value);
    }
    fetchData();
  }, []);

  return (
    <CategoriesContext.Provider value={ data }>
      <Routes>
        <Route path="/" element={ <MainScreen /> } />
        <Route path="/cart" element={ <ShoppingCart /> } />
        <Route
          path="/product/:id"
          element={ <ProductDetails /> }
        />
      </Routes>
    </CategoriesContext.Provider>

  );
}

export default App;
