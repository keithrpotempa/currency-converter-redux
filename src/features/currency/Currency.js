import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrencyListAsync, selectCurrencyList } from './currencyListSlice'
import { set as setCurrencyFrom, selectCurrencyFrom } from './currencyFromSlice'
import { set as setCurrenciesTo, selectCurrenciesTo } from './currenciesToSlice'
import { CurrencyMultiSelector, CurrencySelector } from './CurrencySelector'
import { getConversionRatesAsync, selectConversionRates } from './conversionRatesSlice'
import { selectValueFrom } from './valueFromSlice'
import { arrayifyObject } from '../../helper/api'
import CurrencyValueInput from './CurrencyValueInput'
import ConversionRateTable from './ConversionRateTable'

export function Currency() {
  const dispatch = useDispatch()

  const currencyList = arrayifyObject(useSelector(selectCurrencyList))
  const currencyFrom = useSelector(selectCurrencyFrom)
  const currenciesTo = useSelector(selectCurrenciesTo)
  const conversionRates = useSelector(selectConversionRates)
  const valueFrom = useSelector(selectValueFrom)

  const handleCurrencyFromChange = ({ target: { value } }) => {
    dispatch(setCurrencyFrom(value))
  }

  const handleCurrenciesToChange = ({ target: { value } }) => {
    dispatch(
      setCurrenciesTo(
        // On autofill we get the stringified value.
        typeof value === 'string' ? value.split(',') : value
      )
    )
  }

  const haveFromAndToCurrencies = currencyFrom && currenciesTo.length > 0

  useEffect(() => {
    dispatch(getCurrencyListAsync())
  }, [dispatch])

  useEffect(() => {
    // Don't fetch conversion rates unless we have: a from and to currency
    if (haveFromAndToCurrencies) {
      // Creating the conversion id, eg: "USD_PHP" for US Dollars to Philippine Peso
      const conversionIds = currenciesTo.map((ct) => `${currencyFrom}_${ct}`)
      // Check if we've already fetched each conversion
      conversionIds.forEach((cid) => {
        if (!Object.keys(conversionRates).includes(cid)) {
          dispatch(getConversionRatesAsync(cid))
        }
      })
    }
  }, [currencyFrom, currenciesTo, dispatch, conversionRates, haveFromAndToCurrencies])

  return (
    <main>
      <h1>CURRENCIES</h1>
      {/* Single selection to compare with */}
      <CurrencySelector
        handleChange={handleCurrencyFromChange}
        selectedCurrency={currencyFrom}
        currencyList={currencyList}
      />
      <CurrencyValueInput />
      {/* Multiselector to compare to */}
      <CurrencyMultiSelector
        handleChange={handleCurrenciesToChange}
        selectedCurrencies={currenciesTo}
        currencyList={currencyList}
      />
      {haveFromAndToCurrencies && valueFrom ? <ConversionRateTable /> : ''}
    </main>
  )
}
