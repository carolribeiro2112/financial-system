import {externalApi} from './api';

const CurrencyService = {
  getCurrencies: () => externalApi.get('/currencies.json')
}

export default CurrencyService;