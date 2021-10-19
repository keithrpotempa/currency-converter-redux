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

const CurrencySelector = ({ handleChange, selectedCurrencies, currencies }) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 300 }}>
      <Select
        labelId="currency-multiselect-label"
        id="currency-multiselect"
        multiple
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
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
        {currencies.length > 0
          ? currencies.map(({ currencyName, /* currencySymbol,*/ id }) => (
              <MenuItem key={id} value={id}>
                {currencyName}
              </MenuItem>
            ))
          : ''}
      </Select>
    </FormControl>
  )
}

export default CurrencySelector
