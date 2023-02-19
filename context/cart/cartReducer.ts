import { CartState } from "./";
import { Product } from "../../interfaces/Product";
import CartProduct from "../../interfaces/Cart";

type CartActionType =
  | {
      type: "Add to cart";
      payload: CartProduct;
    }
  | {
      type: "Load cart from cookies | storage";
      payload: Product;
    };

export const cartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  const { cart } = state;
  const { payload } = action;
  switch (action.type) {
    case "Add to cart":
      return { ...state, cart: [...cart, payload] };
    default:
      return state;
  }
};
