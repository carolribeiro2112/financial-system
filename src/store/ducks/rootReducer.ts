import {combineReducers} from 'redux'; 
import currencyReducer from './currency/reducer';
import userRegisterReducer from './users/reducer';
import currencyDetailsReducer from './currencyDetails/reducer';

const createRootReducer = () => combineReducers({
  userRegisterReducer,
  currencyReducer,
  currencyDetailsReducer,
})

export default createRootReducer;