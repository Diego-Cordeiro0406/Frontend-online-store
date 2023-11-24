import { createContext } from 'react';
import { Categories } from '../types/typesApi';

const CategoriesContext = createContext({} as Categories[]);

export default CategoriesContext;
