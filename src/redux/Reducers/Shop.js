const emptyCheckout = {
  checkout: [],
};

export default function (state = emptyCheckout, action) {
  switch (action.type) {
    case 'ADD_TO_BASKET': {
      const {colourObject} = action.payload;
      return {
        ...state,
        checkout: [
          {
            colourObject,
          },
          ...state.checkout,
        ],
      };
    }
    case 'EMPTY_BASKET': {
      return emptyCheckout;
    }
    default:
      return state;
  }
}
