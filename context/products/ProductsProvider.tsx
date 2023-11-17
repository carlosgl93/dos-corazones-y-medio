import React, { FC, useReducer } from 'react';
import { ProductsContext } from './';
import { productsReducer } from './';
import { Product } from '../../interfaces/Product';

export interface ProductsState {
  products: Product[];
}

const PRODUCTS_INITIAL_STATE: ProductsState = {
  products: [],
};

const ProductsProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, PRODUCTS_INITIAL_STATE);

  const loadInitialProducts = (products: Product[]) => {
    dispatch({ type: 'Products - Load Initial Products', payload: products });
  };

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        loadInitialProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
