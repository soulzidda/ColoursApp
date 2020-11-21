import {NcsColourChart} from '../../assets/NcsChart';
import {NewSchoolColourChart} from '../../assets/NewSchoolColourChart';
import {RalColourChart} from '../../assets/RalChart';

const initialState = {
  ral: RalColourChart,
  ncs: NcsColourChart,
  nsc: NewSchoolColourChart,
};

const directory = (state = initialState) => {
  return state;
};

export default directory;
