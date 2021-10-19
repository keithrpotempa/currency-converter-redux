import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrenciesAsync, selectCurrencies } from './currencySlice'
import { arrayifyObject } from '../../helper/api'
import CurrencySelector from './CurrencySelector'

export function Currency() {
  const [selectedCurrencies, setSelectedCurrencies] = useState([])

  const currencies = arrayifyObject(useSelector(selectCurrencies))
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const {
      target: { value },
    } = event
    setSelectedCurrencies(
      // On autofill we get the stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
  }

  useEffect(() => {
    dispatch(getCurrenciesAsync())
  }, [dispatch])

  return (
    <main>
      <h1>CURRENCIES</h1>
      <CurrencySelector handleChange={handleChange} selectedCurrencies={selectedCurrencies} currencies={currencies} />
    </main>
  )
}
