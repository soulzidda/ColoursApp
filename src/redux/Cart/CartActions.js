export const CartActionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
};

export function addToCart(colour) {
  return {
    type: CartActionTypes.ADD_TO_CART,
    colour,
  };
}

export function removeFromCart(index) {
  return {
    type: CartActionTypes.REMOVE_FROM_CART,
    index,
  };
}
