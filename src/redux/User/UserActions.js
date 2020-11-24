export const UserActionTypes = {
  DELETE_FAVORITE: 'DELETE_FAVORITE',
  ADD_FAVORITE: 'ADD_FAVORITE',
};

export function deleteFavorite(index) {
  return {
    type: UserActionTypes.DELETE_FAVORITE,
    index,
  };
}

export function addFavorite(colour) {
  return {
    type: UserActionTypes.ADD_FAVORITE,
    colour,
  };
}
