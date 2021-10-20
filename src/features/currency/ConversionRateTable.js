import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useSelector } from 'react-redux'

import { selectCurrencyList } from './currencyListSlice'
import { selectCurrencyFrom } from './currencyFromSlice'
import { selectConversionRates } from './conversionRatesSlice'
import { selectCurrenciesTo } from './currenciesToSlice'
import { selectValueFrom } from './valueFromSlice'
import formatCurrency from '../../helper/formatCurrency'

const ConversionRateRow = ({ currencyToId }) => {
  const valueFrom = useSelector(selectValueFrom)
  const currencyList = useSelector(selectCurrencyList)
  const conversionRates = useSelector(selectConversionRates)
  const currencyFrom = useSelector(selectCurrencyFrom)

  const currency = currencyList[currencyToId]
  const conversionId = `${currencyFrom}_${currencyToId}`
  const conversionRate = conversionRates[conversionId] ? conversionRates[conversionId] : null

  return (
    <TableRow key={currency.currencyName} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">
        {currency.currencyName}
      </TableCell>
      <TableCell component="th" scope="row">
        {conversionRate ? formatCurrency(conversionRate.val * valueFrom, currency.id) : 'Loading'}
      </TableCell>
    </TableRow>
  )
}

const ConversionRateTable = () => {
  const currenciesTo = useSelector(selectCurrenciesTo)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currenciesTo.map((ctId) => (
            <ConversionRateRow key={ctId} currencyToId={ctId} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ConversionRateTable
