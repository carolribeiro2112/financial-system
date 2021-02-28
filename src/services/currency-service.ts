import {externalApi} from './api';

const CurrencyService = {
  getCurrencies: (currencies:any) => externalApi.get('/currencies.json',currencies)
}

export default CurrencyService;