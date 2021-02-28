import {combineReducers} from 'redux'; 
import currencyReducer from './currency/reducer';
import userRegisterReducer from './users/reducer';

const createRootReducer = () => combineReducers({
  user: userRegisterReducer,
  currencies: currencyReducer,
})

export default createRootReducer;