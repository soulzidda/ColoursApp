import {createStore, combineReducers} from 'redux';
import user from './User/User';
import shop from './Shop/Shop';

const RootReducer = combineReducers({user, shop});

export default createStore(RootReducer);
