import {action} from 'typesafe-actions';
import {CurrencyTypes, Currencies} from './types';

export const getCurrencyRequest = (currency:any) => action(CurrencyTypes.GET_CURRENCY_REQUEST,currency)
export const getCurrencySuccess = (currencies: Currencies[]) => action(CurrencyTypes.GET_CURRENCY_SUCCESS, currencies)
export const getCurrencyFailure = () => action(CurrencyTypes.GET_CURRENCY_FAILURE)