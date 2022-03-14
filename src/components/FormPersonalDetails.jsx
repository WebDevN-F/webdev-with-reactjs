import { Paper, Typography, AppBar, Toolbar, IconButton, TextField, Button, Box } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import DebouncedInput from './DebouncedInput'
const DebouncedTextField = DebouncedInput(TextField, { timeout: 250 })

const FormPersonalDetails = ({ values, nextStep, prevStep, handleChange }) => {
  const continueHandleClick = (e) => {
    e.preventDefault();
    nextStep();
  }
  const prevHandleClick = (e) => {
    e.preventDefault();
    prevStep();
  }

  const PrevButton = () => (<Button variant="outlined" color="primary" size="large" onClick={prevHandleClick}>Prev</Button>)
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
            Form Personal Details
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
        <DebouncedTextField name="city" helperText="Enter Your city" value={values.city} label="City" variant="outlined" onChange={(e) => handleChange(e)} />
        <DebouncedTextField name="occupation" helperText="Enter Your occupation" value={values.occupation} label="Occupation" variant="outlined" onChange={(e) => handleChange(e)} />
        <DebouncedTextField name="bio" helperText="Enter Your bio" value={values.bio} label="Your bio" variant="outlined" onChange={(e) => handleChange(e)} />
        
        <PrevButton />
        <ContinueButton />
      </Box>

    </Paper>
  )
}

export default FormPersonalDetails