import {UserActionTypes} from './UserActions';

const initialState = {
  favorites: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.ADD_FAVORITE: {
      const data = [...state.favorites];

      let inFavorites = false;

      data.forEach(function (item) {
        if (item.notation === action.colour.notation) {
          inFavorites = true;
        }
      });

      if (inFavorites === false) {
        data.push(action.colour);
      }

      return {
        ...state,
        favorites: data,
      };
    }
    case UserActionTypes.DELETE_FAVORITE: {
      const data = [...state.favorites];
      data.splice(action.index, 1);
      return {
        ...state,
        favorites: data,
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
