import {createStore, combineReducers} from 'redux';
import user from './User/User';
import shop from './Shop/Shop';
import directory from './Directory/Directory';

const RootReducer = combineReducers({user, shop, directory});

export default createStore(RootReducer);
