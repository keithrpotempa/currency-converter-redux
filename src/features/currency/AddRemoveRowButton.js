import React from 'react'
import { Button } from '@mui/material'
import { pop, push } from './currenciesToSlice'
import { useDispatch } from 'react-redux'

const AddRemoveRowButton = ({ add }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(add ? push('') : pop())
  }

  return (
    <Button onClick={handleClick} aria-label="add" variant="outlined" size="large">
      {add ? '+' : '-'}
    </Button>
  )
}

export default AddRemoveRowButton
