import { call, put } from "redux-saga/effects";

import {getCurrencyFailure,getCurrencySuccess} from './actions';
import CurrencyService from '../../../services/currency-service';
import {AxiosResponse} from 'axios';

export function* getCurrenciesSaga(action:any) {
  try{
    const response:AxiosResponse = yield call(CurrencyService.getCurrencies, action.payload)
    yield put(getCurrencySuccess(response.data))
  } catch(err) {
    yield(getCurrencyFailure)
  }
}