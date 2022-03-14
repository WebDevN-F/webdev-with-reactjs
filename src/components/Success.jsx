import { Paper, Typography, AppBar, Toolbar, IconButton, Button, Box } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Success = ({ prevStep }) => {
 
  const prevHandleClick = (e) => {
    e.preventDefault();
    prevStep();
  }

  const PrevButton = () => (<Button variant="outlined" color="primary" size="large" onClick={prevHandleClick}>Back</Button>)

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
            Success!
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
        <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }} color="Highlight">
          Thanks you for your Submission!
        </Typography>
        <Typography variant="subtitle2" component="p" sx={{ flexGrow: 1 }} color="Highlight">
          You will get an email with further instructions
        </Typography>
        <PrevButton />
      </Box>

    </Paper>
  )
}

export default Success