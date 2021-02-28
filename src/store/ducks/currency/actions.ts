import {action} from 'typesafe-actions';
import {CurrencyTypes} from './types';

export const getCurrencyRequest = () => action(CurrencyTypes.GET_CURRENCY_REQUEST)
export const getCurrencySuccess = (payload: any) => action(CurrencyTypes.GET_CURRENCY_SUCCESS, payload)
export const getCurrencyFailure = () => action(CurrencyTypes.GET_CURRENCY_FAILURE)