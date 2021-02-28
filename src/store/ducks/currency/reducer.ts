import {Reducer} from 'redux';
import {CurrencyTypes} from './types';

const initialState: any = {
  arrayCurrencies: [],
  loading: false,
}

const currencyReducer: Reducer = (state=initialState,action) => {
  switch (action.type) {
    case CurrencyTypes.GET_CURRENCY_REQUEST:
      return{
        ...state,
        loading:true
      }
    case CurrencyTypes.GET_CURRENCY_SUCCESS:
      return{
        ...state,
        arrayCurrencies:action.payload.data,
        loading: false
      }
    case CurrencyTypes.GET_CURRENCY_FAILURE:
      return{
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default currencyReducer;