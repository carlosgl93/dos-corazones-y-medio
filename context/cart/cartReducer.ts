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
      payload: CartProduct[];
    }
  | {
      type: 'Update Quantity';
      payload: CartProduct;
    }
  | {
      type: 'Update cart total';
    };

export const cartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  const { cart } = state;
  switch (action.type) {
    case 'Add to cart':
      return { ...state, cart: [...cart, action.payload] };
    case 'Update Quantity':
      return {
        ...state,
        cart: cart.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: action.payload.quantity }
            : product
        ),
      };
    case 'Update cart total':
      let newTotal = 0;
      cart.forEach((product) => {
        newTotal += Number(product.price) * Number(product.quantity);
      });
      return { ...state, cartTotal: newTotal };
    default:
      return state;
  }
};
