import { ReactNode, useState } from 'react';
import { Categories } from '../types/typesApi';
import Context, { MyContextProps } from './Context';

interface MyProviderProps {
  children: ReactNode;
}

function Provider({ children }: MyProviderProps) {
  const [categories, setCategories] = useState([]);
  const URL_DATABASE = 'https://api.mercadolibre.com/';

  async function getCategories(): Promise<Categories[]> {
    const response = await fetch(`${URL_DATABASE}sites/MLB/categories`);
    const data = await response.json();
    setCategories(data);
    return data;
  }

  async function getProductById(id: string | undefined) {
    const response = await fetch(`${URL_DATABASE}items/${id}`);
    const jsonData = await response.json();
    return jsonData;
  }

  async function getProductsFromCategoryAndQuery(
    query: string,
    categoryId?: string,
  ) {
    if (!categoryId) {
      const response = await
      fetch(`${URL_DATABASE}sites/MLB/search?q=${query}`);

      const data = await response.json();

      return data.results;
    }

    const response = await
    fetch(`${URL_DATABASE}sites/MLB/search?category=${categoryId}`);

    const data = await response.json();

    return data.results;
  }

  const value:MyContextProps = {
    getCategories,
    getProductById,
    getProductsFromCategoryAndQuery,
    categories,
  };
  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
