import { call, put } from "redux-saga/effects";

import {postUsersRegisterSuccess,postUsersRegisterFailure, postUsersLoginSuccess, postUsersLoginFailure} from './actions';
import UserRegisterService from '../../../services/user-service';
import { AxiosResponse } from "axios";

export function* postUsersRegister(action:any){
  try{
    const response:AxiosResponse = yield call(UserRegisterService.postUserRegister, action.payload)

    yield put(postUsersRegisterSuccess(response.data))

  } catch(err) {
    yield(postUsersRegisterFailure)
  }
}

export function* postUsersLogin(action:any) {
  try{
    const response:AxiosResponse = yield call(UserRegisterService.postUserLogin,action.payload)
    localStorage.setItem("token", response.data.accessToken)

    yield put(postUsersLoginSuccess(response.data))
  } catch(err) {
    yield(postUsersLoginFailure)
  }
}