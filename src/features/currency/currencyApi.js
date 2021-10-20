import { ALL_CURRENCIES_URL, CONVERSION_RATES_BASE_URL } from '../../constants/api'

let headers = new Headers()
headers.append('Content-Type', 'application/json')
headers.append('Accept', 'application/json')

const requestOptions = {
  headers: headers,
  redirect: 'follow',
}

export const fetchCurrencyList = () => {
  return getFetch(ALL_CURRENCIES_URL).then((response) => response.results)
}

export const fetchConversionRate = (conversionId) => {
  const url = `${CONVERSION_RATES_BASE_URL}&q=${conversionId}`
  return getFetch(url).then((response) => response.results)
}

export const getFetch = (url) => {
  return fetch(url, requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        console.log('failed to fetch')
      }
    })
    .catch(() => {
      console.log('failed to fetch')
    }) //.finally(() => setIsLoading(false))
}
