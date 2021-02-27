import {combineReducers} from 'redux'; 
import userRegisterReducer from './users/reducer';

const createRootReducer = () => combineReducers({
  user: userRegisterReducer,
})

export default createRootReducer;