const initialState = {
  name: 'User',
  favorites: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_NAME': {
      const {name} = action.payload;
      return {
        ...state,
        name,
      };
    }
    case 'ADD_TO_FAVORITE': {
      const {colourObject} = action.payload;
      return {
        ...state,
        favorites: [
          ...state.favorites,
          {
            colourObject,
          },
        ],
      };
    }
    case 'RESET_STATE': {
      return initialState;
    }
    default:
      return state;
  }
}
