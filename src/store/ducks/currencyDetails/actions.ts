import {action} from 'typesafe-actions';
import {CurrencyDetailsTypes} from './types';

export const getCurrencyDetailsRequest = (currencyName:string) => action(CurrencyDetailsTypes.GET_CURRENCY_DETAILS_REQUEST, currencyName);
export const getCurrencyDetailsSuccess = (data: any) => action(CurrencyDetailsTypes.GET_CURRENCY_DETAILS_SUCCESS, data);
export const getCurrencyDetailsFailure = () => action(CurrencyDetailsTypes.GET_CURRENCY_DETAILS_FAILURE)