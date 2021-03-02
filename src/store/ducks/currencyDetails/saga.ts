import { call, put } from "redux-saga/effects";

import {getCurrencyDetailsSuccess,getCurrencyDetailsFailure} from './actions';
import CurrencyService from '../../../services/currency-service';
import {AxiosResponse} from 'axios';

export function* getDetails(action:any){
  try{
    const response:AxiosResponse = yield call(CurrencyService.currencyDetail, action.payload)
    yield put(getCurrencyDetailsSuccess(response))
  }catch(err){
    yield put(getCurrencyDetailsFailure())
  }
}