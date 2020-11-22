import {color} from 'react-native-reanimated';

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
    case 'ADD_FAVORITE': {
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
    case 'DELETE_FAVORITE': {
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
