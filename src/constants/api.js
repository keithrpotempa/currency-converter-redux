export const BASE_CURRENCY_CONVERTER_URL = 'https://free.currconv.com/api/v7'
export const ALL_CURRENCIES_URL = `${BASE_CURRENCY_CONVERTER_URL}/currencies?apiKey=${process.env.REACT_APP_API_KEY}`
export const CONVERSION_RATES_BASE_URL = `${BASE_CURRENCY_CONVERTER_URL}/convert?apiKey=${process.env.REACT_APP_API_KEY}`
