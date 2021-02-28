import { call, put } from "redux-saga/effects";

import {getCurrencyFailure,getCurrencySuccess} from './actions';
import CurrencyService from '../../../services/currency-service';
import {AxiosResponse} from 'axios';

export function* getCurrenciesSaga() {
  try{
    const response:AxiosResponse = yield call(CurrencyService.getCurrencies)
    yield put(getCurrencySuccess(Object.values(response.data)))
  } catch(err) {
    yield(getCurrencyFailure)
  }
}