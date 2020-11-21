export const DirectoryActionTypes = {
  TOGGLE_ACTIVE_ALL: 'TOGGLE_ACTIVE_ALL',
  TOGGLE_ACTIVE_RAL: 'TOGGLE_ACTIVE_RAL',
  TOGGLE_ACTIVE_NCS: 'TOGGLE_ACTIVE_NCS',
};

export function toggleActiveAll() {
  return {
    type: DirectoryActionTypes.TOGGLE_ACTIVE,
  };
}

export function toggleActiveRal() {
  return {
    type: DirectoryActionTypes.TOGGLE_ACTIVE,
  };
}

export function toggleActiveNcs() {
  return {
    type: DirectoryActionTypes.TOGGLE_ACTIVE,
  };
}
