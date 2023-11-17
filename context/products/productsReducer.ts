import { Product } from '../../interfaces/Product';
import { ProductsState } from './ProductsProvider';

type ProductsActionType = {
  type: 'Products - Load Initial Products';
  payload: Product[];
};

export const productsReducer = (
  state: ProductsState,
  action: ProductsActionType
): ProductsState => {
  switch (action.type) {
    case 'Products - Load Initial Products':
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
