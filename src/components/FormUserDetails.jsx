import { Paper, Typography, AppBar, Toolbar, IconButton, TextField, Button, Box } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import DebouncedInput from './DebouncedInput'
const DebouncedTextField = DebouncedInput(TextField, { timeout: 250 })

const FormUserDetails = ({ values, nextStep, handleChange }) => {
  const continueHandleClick = (e) => {
    e.preventDefault();
    nextStep();
  }
  const ContinueButton = () => (<Button variant="contained" color="primary" size="large" onClick={continueHandleClick}>Continue</Button>)

  return (
    <Paper elevation={2} sx={{ margin: '0 auto', flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Form User Details
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="form"
        sx={{
          '& > div:not(style)': { mb: 2, width: '100%' },
          '& button': { mt: 4 },
          '& button:not(:last-child)': { mr: 2 },
          padding: '1rem',
          minHeight: '200px'
        }}
        noValidate
        autoComplete="off"
      >
        <DebouncedTextField name="firstName" helperText="Enter Your First Name" value={values.firstName} label="First Name" variant="outlined" onChange={(e) => handleChange(e)} />
        <DebouncedTextField name="lastName" helperText="Enter Your Last Name" value={values.lastName} label="Last Name" variant="outlined" onChange={(e) => handleChange(e)} />
        <DebouncedTextField name="email" helperText="Enter Your Email" value={values.email} type="email" label="Your email" variant="outlined" onChange={(e) => handleChange(e)} />
        <ContinueButton />
      </Box>

    </Paper>
  )
}

export default FormUserDetails