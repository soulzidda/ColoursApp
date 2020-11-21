export const UserActionTypes = {
  USER_CHANGE_NAME: 'USER_CHANGE_NAME',
  DELETE_FAVORITE: 'DELETE_FAVORITE',
  ADD_FAVORITE: 'ADD_FAVORITE',
};

export function userChangeName(name) {
  return {
    type: UserActionTypes.USER_CHANGE_NAME,
    name,
  };
}

export function deleteFavorite(index) {
  return {
    type: UserActionTypes.DELETE_FAVORITE,
    index,
  };
}

export function addFavorite(colour) {
  console.log(colour);
  return {
    type: UserActionTypes.ADD_FAVORITE,
    colour,
  };
}
