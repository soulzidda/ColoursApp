import {createStore, combineReducers} from 'redux';
import user from './User/User';
import directory from './Directory/Directory';
import cart from './Cart/Cart';

const RootReducer = combineReducers({user, directory, cart});

export default createStore(RootReducer);
