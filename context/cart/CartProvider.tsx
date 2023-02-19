import React, { FC, useReducer } from "react";
import CartProduct from "../../interfaces/Cart";
import { CartContext, cartReducer } from "./";
import Cookie from "js-cookie";
import { Product } from "../../interfaces/Product";

export interface CartState {
  cart: Product[];
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
};

const CartProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  const addProductToCart = (product: Product) => {
    const productInCartAlready = state.cart.some((p) => p.id === product.id);
    if (!productInCartAlready)
      dispatch({ type: "Add to cart", payload: product });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,

        // methods

        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
