import React, { FC, useReducer, useEffect } from 'react';
import CartProduct from '../../interfaces/Cart';
import { CartContext, cartReducer } from './';
import Cookie from 'js-cookie';
import { Product } from '../../interfaces/Product';

export interface CartState {
  cart: CartProduct[];
  cartTotal: number;
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
  cartTotal: 0,
};

const CartProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  const addProductToCart = (product: CartProduct) => {
    const productInCartAlready = state.cart.some((p) => p.id === product.id);

    // if product already in cart then update quantity
    if (productInCartAlready) {
      dispatch({ type: 'Update Quantity', payload: product });
    } else {
      dispatch({ type: 'Add to cart', payload: product });
    }
  };

  // update cartTotal:
  useEffect(() => {
    dispatch({ type: 'Update cart total' });
  }, [state.cart.length]);

  console.log('cart length', state.cart.length);
  console.log('cart total', state.cartTotal);

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
