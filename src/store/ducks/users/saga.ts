import { call, put } from "redux-saga/effects";

import {postUsersRegisterSuccess,postUsersRegisterFailure} from './actions';
import UserRegisterService from '../../../services/user-service';
import { AxiosResponse } from "axios";

export function* postUsersRegister(action:any){
  console.log(action);
  try{
    const response:AxiosResponse = yield call(UserRegisterService.postUserRegister,action.payload)
    yield put(postUsersRegisterSuccess(response.data))
  } catch(err) {
    yield(postUsersRegisterFailure)
  }
}