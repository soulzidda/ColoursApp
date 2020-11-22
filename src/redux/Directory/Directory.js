import {NcsColourChart} from '../../assets/NcsChart';
import {NewSchoolColourChart} from '../../assets/NewSchoolColourChart';
import {RalColourChart} from '../../assets/RalChart';

const initialState = {
  ralActive: true,
  ncsActive: true,
  nscActive: true,
  ral: RalColourChart,
  ncs: NcsColourChart,
  nsc: NewSchoolColourChart,
};

const directory = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_ACTIVE_RAL': {
      state.ralActive = !state.ralActive;

      console.log(state.ralActive);
      if (state.ralActive === true) {
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
    case 'TOGGLE_ACTIVE_NCS': {
      state.ncsActive = !state.ncsActive;
      if (state.ncsActive === true) {
        return {
          ...state,
          ncs: [...NcsColourChart],
        };
      } else {
        return {
          ...state,
          ncs: [],
        };
      }
    }
    case 'TOGGLE_ACTIVE_NSC': {
      state.nscActive = !state.nscActive;
      if (state.nscActive === true) {
        return {
          ...state,
          nsc: [...NewSchoolColourChart],
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
