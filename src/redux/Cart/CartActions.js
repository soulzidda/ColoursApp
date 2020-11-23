export const CartActionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
};

export function addToCart(colour) {
  console.log('hello', colour);
  return {
    type: CartActionTypes.ADD_TO_CART,
    colour,
  };
}
