export enum CurrencyTypes{
  GET_CURRENCY_REQUEST = '@currency/GET_CURRENCY_REQUEST',
  GET_CURRENCY_SUCCESS = '@currency/GET_CURRENCY_SUCCESS',
  GET_CURRENCY_FAILURE = '@currency/GET_CURRENCY_FAILURE',
}

export interface CurrencyState {
  arrayCurrencies: Currencies[]
}

export interface Currencies{
  currency_code: string,
  name: string,
}

