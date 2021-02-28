import {all, takeLatest} from 'redux-saga/effects';
import { CurrencyTypes } from './currency/types';
import { postUsersRegister,postUsersLogin } from './users/saga';
import {getCurrenciesSaga} from './currency/saga';
import { UserTypes } from './users/types';

export default function* rootSaga():any {
  return yield all([
    takeLatest(UserTypes.POST_USERS_REGISTER_REQUEST,postUsersRegister),
    takeLatest(UserTypes.POST_USERS_LOGIN_REQUEST,postUsersLogin),
    takeLatest(CurrencyTypes.GET_CURRENCY_REQUEST, getCurrenciesSaga)
  ])
}