import React from 'react'

import NumberFormat from 'react-number-format'
import { TextField } from '@material-ui/core'
import { MAX_CURRENCY_VALUE } from '../../constants/currency'
import { useDispatch, useSelector } from 'react-redux'
import { selectValueFrom, set } from './valueFromSlice'

const NumberFormatCustom = (props) => {
  const { inputRef, onChange, ...other } = props
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
      // TODO:
      // prefix="$"
    />
  )
}

const CurrencyValueInput = () => {
  const dispatch = useDispatch()

  const valueFrom = useSelector(selectValueFrom)

  const handleChange = (e) => {
    dispatch(set(e.target.value))
  }

  return (
    <TextField
      label="Value"
      onChange={handleChange}
      name="value"
      InputProps={{
        inputComponent: NumberFormatCustom,
      }}
      variant="outlined"
      value={valueFrom}
      fullWidth
    />
  )
}

export default CurrencyValueInput
