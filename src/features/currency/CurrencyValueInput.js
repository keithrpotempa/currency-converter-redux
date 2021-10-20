import React from 'react'
import NumberFormat from 'react-number-format'
import { useSelector } from 'react-redux'
import { InputAdornment, TextField } from '@material-ui/core'
import { makeStyles } from '@mui/styles'

import { MAX_CURRENCY_VALUE } from '../../constants/currency'
import { selectCurrencyList } from './currencyListSlice'

const useStyles = makeStyles((theme) => ({
  // A hack styling to fix an issue with TextField being slightly smaller
  // than the Select dropdown
  root: {
    flexDirection: 'row !important',
    height: '100%',
  },
}))

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
      decimalScale={2}
      fixedDecimalScale
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
  const classes = useStyles()
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
      className={classes.root}
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
