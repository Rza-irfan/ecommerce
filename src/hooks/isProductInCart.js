// hooks/useCart.js
import { useSelector } from 'react-redux';

const selectCart = (state) => state.cart;

export const useIsProductInCart = (productId) => {
  const cart = useSelector(selectCart);

  const isProductInCart = cart.some((item) => item.id === productId);

  return isProductInCart;
};
