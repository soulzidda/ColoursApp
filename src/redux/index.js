import {createStore, combineReducers} from 'redux';
import user from './User/User';
import directory from './Directory/Directory';

const RootReducer = combineReducers({user, directory});

export default createStore(RootReducer);
