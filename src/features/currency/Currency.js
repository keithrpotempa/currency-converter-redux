import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Typography } from '@mui/material'

import { getCurrencyListAsync, selectCurrencyList } from './currencyListSlice'
import { set as setCurrencyFrom, selectCurrencyFrom } from './currencyFromSlice'
import { setByIndex as setCurrenciesToByIndex, selectCurrenciesTo } from './currenciesToSlice'
import { getConversionRatesAsync, selectConversionRates } from './conversionRatesSlice'
import { set as setValueFrom, selectValueFrom } from './valueFromSlice'

import { arrayifyObject } from '../../helper/api'

import { CurrencySelector } from './CurrencySelector'
import CurrencyValueInput from './CurrencyValueInput'
import ConversionRateInput from './ConversionRateInput'
import AddCurrencyToButton from './AddCurrencyToButton'

export function Currency() {
  const dispatch = useDispatch()
  const valueFrom = useSelector(selectValueFrom)
  const currencyList = arrayifyObject(useSelector(selectCurrencyList))
  const currencyFrom = useSelector(selectCurrencyFrom)
  const currenciesTo = useSelector(selectCurrenciesTo)
  const conversionRates = useSelector(selectConversionRates)

  const handleValueFromChange = ({ target: { value } }) => {
    dispatch(setValueFrom(value))
  }

  const handleCurrencyFromChange = ({ target: { value } }) => {
    dispatch(setCurrencyFrom(value))
  }

  const handleCurrenciesToChange = ({ target: { value, name } }) => {
    // NOTE: The index of the selector is a number in its name
    const index = parseInt(name.replace(/[^0-9]/g, ''))
    if (currenciesTo[index] !== value) {
      // If their previously made selection is changed
      dispatch(setCurrenciesToByIndex({ value: value, index: index }))
    }
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
      <Grid container maxWidth="sm" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2">Currency Converter</Typography>
        </Grid>
        {/* CURRENCY FROM ROW */}
        <Grid item xs={6}>
          <CurrencyValueInput
            handleChange={handleValueFromChange}
            disabled={false}
            value={valueFrom}
            currencyId={currencyFrom}
          />
        </Grid>
        <Grid item xs={6}>
          {/* Single selection to compare with */}
          <CurrencySelector
            handleChange={handleCurrencyFromChange}
            selectedCurrency={currencyFrom}
            currencyList={currencyList}
            disabled={false}
          />
        </Grid>
        {/* CURRENCY TO ROW(S) */}
        {currenciesTo.map((ct, i) => (
          <React.Fragment key={i}>
            <Grid item xs={6}>
              <ConversionRateInput currencyToId={currenciesTo[i]} />
            </Grid>
            <Grid item xs={6}>
              <CurrencySelector
                index={i}
                handleChange={handleCurrenciesToChange}
                selectedCurrency={currenciesTo[i]}
                currencyList={currencyList}
              />
            </Grid>
          </React.Fragment>
        ))}
        <Grid item xs={12}>
          <AddCurrencyToButton />
        </Grid>
      </Grid>
    </main>
  )
}
