import { Reducer } from "redux";
import {UserTypes} from './types';

const initialState: any = {
  arrayUsers: [],
  loading: false,
}

const userRegisterReducer: Reducer = (state=initialState,action) => {
  switch (action.type) {
    case UserTypes.POST_USERS_REGISTER_REQUEST:
      return{
        ...state,
        loading: true
      }
    case UserTypes.POST_USERS_REGISTER_SUCCESS:
      return{
        ...state,
        arrayUsers: action.payload.data,
        loading: false
      }
    case UserTypes.POST_USERS_REGISTER_FAILURE:
      return{
        ...state,
        loading: false
      }
    case UserTypes.POST_USERS_LOGIN_REQUEST:
      return{
        ...state,
        loading: true
      }
    case UserTypes.POST_USERS_LOGIN_SUCCESS:
      return{
        ...state,
        arrayUsers: action.payload.data,
        loading: false
      }
      case UserTypes.POST_USERS_LOGIN_FAILURE:
        return{
          ...state,
          loading: false
        }
    default:
      return state
  }
}

export default userRegisterReducer;