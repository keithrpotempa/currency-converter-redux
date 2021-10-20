import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const InputProps = { 'aria-label': 'Without label' }

export const CurrencyMultiSelector = ({ handleChange, selectedCurrencies, currencyList }) => {
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <Select
        labelId="currency-multiselect-label"
        id="currency-multiselect"
        multiple
        displayEmpty
        inputProps={InputProps}
        value={selectedCurrencies}
        onChange={handleChange}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {currencyList.length > 0
          ? currencyList.map(({ currencyName, /* currencySymbol,*/ id }) => (
              <MenuItem key={id} value={id}>
                {currencyName}
              </MenuItem>
            ))
          : ''}
      </Select>
    </FormControl>
  )
}

export const CurrencySelector = ({ handleChange, selectedCurrency, currencyList }) => {
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <Select
        labelId="currency-select-label"
        id="currency-select"
        displayEmpty
        inputProps={InputProps}
        value={selectedCurrency}
        onChange={handleChange}
        MenuProps={MenuProps}
      >
        {currencyList.length > 0
          ? currencyList.map(({ currencyName, /* currencySymbol,*/ id }) => (
              <MenuItem key={id} value={id}>
                {currencyName}
              </MenuItem>
            ))
          : ''}
      </Select>
    </FormControl>
  )
}
