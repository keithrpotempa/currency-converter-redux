import React from 'react'
import { Button } from '@mui/material'
import { push } from './currenciesToSlice'
import { useDispatch } from 'react-redux'

const AddCurrencyToButton = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(push(''))
  }

  return (
    <Button onClick={handleClick} aria-label="add" variant="outlined" size="large">
      +
    </Button>
  )
}

export default AddCurrencyToButton
