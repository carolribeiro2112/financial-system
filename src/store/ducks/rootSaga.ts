import {all, takeLatest} from 'redux-saga/effects';
import { postUsersRegister } from './users/saga';
import { UserTypes } from './users/types';

export default function* rootSaga():any {
  return yield all([
    takeLatest(UserTypes.POST_USERS_REGISTER_REQUEST,postUsersRegister)
  ])
}