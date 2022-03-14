import { Paper, Typography, AppBar, Toolbar, IconButton, Button, Box, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Confirm = ({ values, nextStep, prevStep }) => {
  const continueHandleClick = (e) => {
    e.preventDefault();
    nextStep();
  }
  const prevHandleClick = (e) => {
    e.preventDefault();
    prevStep();
  }

  const PrevButton = () => (<Button variant="outlined" color="primary" size="large" onClick={prevHandleClick}>Back</Button>)
  const ContinueButton = () => (<Button disabled={values.firstName === '' || values.email === '' || values.city === ''} variant="contained" color="primary" size="large" onClick={continueHandleClick}>Confirm & Finish!</Button>)

  const listItems = Object.keys(values).map((key, index) => {
    return (
      <ListItem key={index}>
        <ListItemText primary={key} secondary={values[key]} />
      </ListItem>
    )
  })

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
            Confirm!
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="div"
        sx={{
          '& > div:not(style)': { mb: 2, width: '100%' },
          '& button': { mt: 4 },
          '& button:not(:last-child)': { mr: 2 },
          padding: '1rem',
          minHeight: '200px'
        }}
      >
        <List dense={true}>
          {listItems}
        </List>
        <PrevButton />
        <ContinueButton />
      </Box>

    </Paper>
  )
}

export default Confirm