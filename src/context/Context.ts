import { createContext } from 'react';
import { Categories, Product } from '../types/typesApi';

export interface MyContextProps {
  getCategories: () => Promise<Categories[]>;
  getProductById: (id: string | undefined) => Promise<Product>;
  getProductsFromCategoryAndQuery: (
    query: string,
    categoryId?: string,
  ) => Promise<Product[]>
  categories: Categories[]
}

const Context = createContext<MyContextProps | undefined>(undefined);

export default Context;
