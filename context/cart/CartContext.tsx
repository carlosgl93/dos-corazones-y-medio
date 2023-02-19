import { createContext } from "react";
import { Product } from "../../interfaces/Product";

interface ContextProps {
  cart: Product[];

  //   methods
  addProductToCart: (product: Product) => void;
}
export const CartContext = createContext({} as ContextProps);
