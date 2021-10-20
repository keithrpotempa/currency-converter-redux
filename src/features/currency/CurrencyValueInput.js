import React from 'react'
import NumberFormat from 'react-number-format'
import { useSelector } from 'react-redux'
import { InputAdornment, TextField } from '@material-ui/core'

import { MAX_CURRENCY_VALUE } from '../../constants/currency'
import { selectCurrencyList } from './currencyListSlice'

const NumberFormatCustom = (props) => {
  const { inputRef, onChange, currency, prefix, ...other } = props
  const withValueLimit = (inputObj) => {
    const { value } = inputObj
    if (value <= MAX_CURRENCY_VALUE) return inputObj
  }

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            id: props.id,
            name: props.name,
            value: values.value,
          },
        })
      }}
      isAllowed={withValueLimit}
      thousandSeparator
      isNumericString
    />
  )
}

const CurrencyValueInput = ({ handleChange, value, disabled, currencyId }) => {
  const currencyList = useSelector(selectCurrencyList)

  const getCurrencyAdornment = () => {
    const currency = currencyList[currencyId]
    if (currency) {
      if (currency.currencySymbol) {
        return currency.currencySymbol
      } else if (currency.id) {
        return currency.id
      }
    }
    return ''
  }

  return (
    <TextField
      label="Value"
      onChange={handleChange}
      name="value"
      InputProps={{
        inputComponent: NumberFormatCustom,
        startAdornment: <InputAdornment position="start">{getCurrencyAdornment()}</InputAdornment>,
      }}
      variant="outlined"
      value={value}
      fullWidth
      disabled={disabled}
    />
  )
}

export default CurrencyValueInput
