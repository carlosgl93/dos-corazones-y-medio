import { createContext } from "react";
import CartProduct from "../../interfaces/Cart";
import { Product } from "../../interfaces/Product";

interface ContextProps {
  cart: CartProduct[];

  //   methods
  addProductToCart: (product: CartProduct) => void;
}
export const CartContext = createContext({} as ContextProps);
