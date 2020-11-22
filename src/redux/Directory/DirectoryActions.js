export const DirectoryActionTypes = {
  TOGGLE_ACTIVE_RAL: 'TOGGLE_ACTIVE_RAL',
  TOGGLE_ACTIVE_NCS: 'TOGGLE_ACTIVE_NCS',
  TOGGLE_ACTIVE_NSC: 'TOGGLE_ACTIVE_NSC',
};

export function toggleRal() {
  return {
    type: DirectoryActionTypes.TOGGLE_ACTIVE_RAL,
  };
}

export function toggleNcs() {
  return {
    type: DirectoryActionTypes.TOGGLE_ACTIVE_NCS,
  };
}

export function toggleNsc() {
  return {
    type: DirectoryActionTypes.TOGGLE_ACTIVE_NSC,
  };
}
