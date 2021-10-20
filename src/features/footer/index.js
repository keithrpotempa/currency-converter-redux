import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Pracice exercise app by '}
      <Link color="inherit" href="https://keithpotempa.com">
        Keith Potempa
      </Link>{' '}
      {' | '}
      <Link color="inherit" href="https://github.com/keithrpotempa/currency-converter-redux">
        Source Code
      </Link>{' '}
    </Typography>
  )
}

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Copyright />
      </Container>
    </Box>
  )
}

export default Footer
