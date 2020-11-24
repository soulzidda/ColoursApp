import {CartActionTypes} from './CartActions';

const initialState = {
  cart: [],
  total: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART: {
      const data = [...state.cart];
      let total = 0;

      let inCart = false;

      data.forEach(function (item) {
        item.amount = 1;
        if (item.notation === action.colour.notation) {
          inCart = true;
        }
      });

      if (inCart === false) {
        data.push(action.colour);
      }

      data.forEach((d) => {
        total = total + d.pricePerUnit;
      });

      return {
        ...state,
        cart: data,
        total: total,
      };
    }
    case CartActionTypes.REMOVE_FROM_CART: {
      const data = [...state.cart];
      data.splice(action.index, 1);

      let total = 0;

      data.forEach((d) => {
        total = total + d.pricePerUnit;
      });

      return {
        ...state,
        cart: data,
        total: total,
      };
    }
  }
  return state;
};
export default cart;
