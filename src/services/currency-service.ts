import {externalApi} from './api';

const CurrencyService = {
  getCurrencies: () => externalApi.get('/currencies.json'),
  currencyDetail: (currency:any) => externalApi.get(`/currency/${currency}.json?lang=pt`)
}

export default CurrencyService;