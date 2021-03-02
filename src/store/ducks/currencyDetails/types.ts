export enum CurrencyDetailsTypes{
  GET_CURRENCY_DETAILS_REQUEST = '@details/GET_CURRENCY_DETAILS_REQUEST',
  GET_CURRENCY_DETAILS_SUCCESS = '@details/GET_CURRENCY_DETAILS_SUCCESS',
  GET_CURRENCY_DETAILS_FAILURE = '@details/GET_CURRENCY_DETAILS_FAILURE',
}

export interface CurrencyDetailsState {
  details: string ,
}

export interface Currencies{
  currency_code: string,
  name: string,
  symbol: string;
  country_code: string;
  central_bank: string;
  country_name: string;
  using_countries: string[];
}