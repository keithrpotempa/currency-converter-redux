import React from 'react'
import { useSelector } from 'react-redux'

import { selectCurrencyList } from './currencyListSlice'
import { selectCurrencyFrom } from './currencyFromSlice'
import { selectConversionRates } from './conversionRatesSlice'
import { selectValueFrom } from './valueFromSlice'
import CurrencyValueInput from './CurrencyValueInput'

const ConversionRateInput = ({ currencyToId }) => {
  const valueFrom = useSelector(selectValueFrom)
  const currencyList = useSelector(selectCurrencyList)
  const conversionRates = useSelector(selectConversionRates)
  const currencyFrom = useSelector(selectCurrencyFrom)

  const currency = currencyList[currencyToId]
  const conversionId = `${currencyFrom}_${currencyToId}`
  const conversionRate = conversionRates[conversionId] ? conversionRates[conversionId] : null

  const value = conversionRate ? conversionRate.val * valueFrom : ''

  return <CurrencyValueInput disabled={true} value={value} currencyId={currency?.id} />
}

export default ConversionRateInput
