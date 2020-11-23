const initialState = {
  cart: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const data = [...state.cart];

      let inCart = false;

      data.forEach(function (item) {
        item.amount = 1;
        if (item.notation === action.colour.notation) {
          inCart = true;
          item.amount + 1;
        }
      });
      console.log(inCart);
      if (inCart === false) {
        data.push(action.colour);
      }

      return {
        ...state,
        cart: data,
      };
    }
  }
};
export default cart;
