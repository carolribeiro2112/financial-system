import {Reducer} from 'redux';
import {CurrencyDetailsTypes, CurrencyDetailsState} from './types';

const initialState: CurrencyDetailsState = {
  details: '',
}

const currencyDetailsReducer: Reducer = (state=initialState,action) => {
  switch(action.type) {
    case CurrencyDetailsTypes.GET_CURRENCY_DETAILS_REQUEST:
      return {
        ...state,
        details: '',
      }
    case CurrencyDetailsTypes.GET_CURRENCY_DETAILS_SUCCESS:
      console.log(Object.values(action.payload.data))
      return {
        ...state,
        details: Object.values(action.payload.data)[0],
      }
    case CurrencyDetailsTypes.GET_CURRENCY_DETAILS_FAILURE:
      return {
        ...state,
        details: '',
      }
    default:
      return state
  }
}

export default currencyDetailsReducer;
