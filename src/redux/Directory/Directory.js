import {NcsColourChart} from '../../assets/NcsChart';
import {NewSchoolColourChart} from '../../assets/NewSchoolColourChart';
import {RalColourChart} from '../../assets/RalChart';
import {DirectoryActionTypes} from './DirectoryActions';

const initialState = {
  ralActive: false,
  ncsActive: false,
  nscActive: false,
  ral: [],
  ncs: [],
  nsc: [],
};

const directory = (state = initialState, action) => {
  switch (action.type) {
    case DirectoryActionTypes.TOGGLE_ACTIVE_RAL: {
      state.ralActive = !state.ralActive;

      if (state.ralActive === true) {
        const addPrice = [...RalColourChart];
        addPrice.forEach(
          (c) =>
            (c.pricePerUnit =
              Math.floor(Math.random() * (10000 - 100) + 100) / 100),
        );

        return {
          ...state,
          ral: [...RalColourChart],
        };
      } else {
        return {
          ...state,
          ral: [],
        };
      }
    }
    case DirectoryActionTypes.TOGGLE_ACTIVE_NCS: {
      state.ncsActive = !state.ncsActive;
      if (state.ncsActive === true) {
        const addPrice = [...NcsColourChart];
        addPrice.forEach(
          (c) =>
            (c.pricePerUnit =
              Math.floor(Math.random() * (10000 - 100) + 100) / 100),
        );
        return {
          ...state,
          ncs: addPrice,
        };
      } else {
        return {
          ...state,
          ncs: [],
        };
      }
    }
    case DirectoryActionTypes.TOGGLE_ACTIVE_NSC: {
      state.nscActive = !state.nscActive;
      if (state.nscActive === true) {
        const addPrice = [...NewSchoolColourChart];
        addPrice.forEach(
          (c) =>
            (c.pricePerUnit =
              Math.floor(Math.random() * (10000 - 100) + 100) / 100),
        );
        return {
          ...state,
          nsc: addPrice,
        };
      } else {
        return {
          ...state,
          nsc: [],
        };
      }
    }
  }
  return state;
};

export default directory;
