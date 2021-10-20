import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrencyListAsync, selectCurrencies } from './currencyListSlice'
import { set as setCurrencyFrom, selectCurrencyFrom } from './currencyFromSlice'
import { set as setCurrenciesTo, selectCurrenciesTo } from './currenciesToSlice'
import { arrayifyObject } from '../../helper/api'
import { CurrencyMultiSelector, CurrencySelector } from './CurrencySelector'
import CurrencyValueInput from './CurrencyValueInput'

export function Currency() {
  const dispatch = useDispatch()

  const currencyList = arrayifyObject(useSelector(selectCurrencies))
  const currencyFrom = useSelector(selectCurrencyFrom)
  const currenciesTo = useSelector(selectCurrenciesTo)

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

  useEffect(() => {
    dispatch(getCurrencyListAsync())
  }, [dispatch])

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
    </main>
  )
}
