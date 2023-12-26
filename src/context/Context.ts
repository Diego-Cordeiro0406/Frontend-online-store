import { Dispatch, SetStateAction, createContext } from 'react';
import { Categories, Product } from '../types/typesApi';

type BatataState = boolean;
type SearchState = string;
type InputState = string;

export interface MyContextProps {
  getCategories: () => Promise<Categories[]>;
  getProductById: (id: string | undefined) => Promise<Product>;
  getProductsFromCategoryAndQuery: (
    query: string,
    categoryId?: string,
  ) => Promise<Product[]>
  categories: Categories[],
  batata: boolean,
  setBatata: Dispatch<SetStateAction<BatataState>>
  search: string,
  setSearch: Dispatch<SetStateAction<SearchState>>,
  valueInput: string,
  setValueInput: Dispatch<SetStateAction<InputState>>,
  handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => any,
  isTrue: boolean,
  isLoading: boolean,
  data: Product[],
  sendProductsRequest: (query: string) => any
}

const Context = createContext<MyContextProps | undefined>(undefined);

export default Context;
