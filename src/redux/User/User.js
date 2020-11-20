const initialState = {
  name: 'User',
  favorites: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_CHANGE_NAME': {
      const {name} = action.payload;
      return {
        ...state,
        name,
      };
    }
    case 'ADD_TO_FAVORITE': {
      const {colour} = action.payload;
      return {
        ...state,
        favorites: [
          ...state.favorites,
          {
            colour,
          },
        ],
      };
    }
    case 'USER_RESET_STATE': {
      return initialState;
    }
    default:
      return state;
  }
};

export default user;
