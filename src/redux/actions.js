export const UserActionTypes = {
  USER_CHANGE_NAME: 'USER_CHANGE_NAME',
};

export function userChangeName(name) {
  return {
    type: UserActionTypes.USER_CHANGE_NAME,
    name: name,
  };
}
