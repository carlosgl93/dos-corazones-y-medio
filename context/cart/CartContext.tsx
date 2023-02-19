import { createContext } from "react";
import CartProduct from "../../interfaces/Cart";
import { Product } from "../../interfaces/Product";

interface ContextProps {
  cart: Product[];

  //   methods
  addProductToCart: (product: CartProduct) => void;
}
export const CartContext = createContext({} as ContextProps);
