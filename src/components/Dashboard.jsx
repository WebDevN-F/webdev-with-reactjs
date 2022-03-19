import { Paper, Typography, AppBar, Toolbar, IconButton, Box } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Search from './Search';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = React.useState({
    searchText: '',
    amount: 15
  });

  const { searchText, amount } = searchQuery;
  const values = { searchText, amount };

  console.log(values)

  const handleChange = (event) => {
    const { name, value } = event.target
    setSearchQuery({ ...searchQuery, [name]: value });
  };

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
            PixaBay Image Finder
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
        <Search query={values} handleChange={handleChange} />
      </Box>

    </Paper>
  )
}

export default Dashboard