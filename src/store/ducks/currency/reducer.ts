import {Reducer} from 'redux';
import {CurrencyTypes, CurrencyState} from './types';

const initialState: CurrencyState = {
  arrayCurrencies: []
}

const currencyReducer: Reducer = (state=initialState,action) => {
  switch (action.type) {
    case CurrencyTypes.GET_CURRENCY_REQUEST:
      return{
        arrayCurrencies:action.payload
      }
    case CurrencyTypes.GET_CURRENCY_SUCCESS:
      return{
        arrayCurrencies:action.payload
      }
    case CurrencyTypes.GET_CURRENCY_FAILURE:
      return{
        ...state,
      }
    default:
      return state
  }
}

export default currencyReducer;