import { CartState } from "./";
import { Product } from "../../interfaces/Product";
import CartProduct from "../../interfaces/Cart";

type CartActionType =
  | {
      type: 'Add to cart';
      payload: CartProduct;
    }
  | {
      type: 'Load cart from cookies | storage';
      payload: Product;
    }
  | {
      type: 'Update Quantity';
      payload: Product;
    }
  | {
      type: 'Update cart total';
      payload: number;
    };

export const cartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  const { cart } = state;
  const { payload } = action;
  switch (action.type) {
    case 'Add to cart':
      return { ...state, cart: [...cart, payload] };
    case 'Update Quantity':
      return {
        ...state,
        cart: cart.map((product) =>
          product.id === payload.id
            ? { ...product, quantity: payload.quantity }
            : product
        ),
      };
    case 'Update cart total':
      let newTotal = 0;
      cart.forEach((product) => {
        newTotal += product.price * product.quantity;
      });
      return { ...state, cartTotal: newTotal };
    default:
      return state;
  }
};
