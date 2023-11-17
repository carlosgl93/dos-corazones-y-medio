import { createContext } from 'react';
import { Product } from '../../interfaces/Product';

interface ContextProps {
  products: Product[];
  loadInitialProducts: (products: Product[]) => void;
}
export const ProductsContext = createContext({} as ContextProps);
