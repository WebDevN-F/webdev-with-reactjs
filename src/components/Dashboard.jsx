import { Paper, Typography, AppBar, Toolbar, IconButton, Box } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Search from './Search';
import axios from 'axios';
import ImageListPixabay from './ImageListPixabay';

const keyAPI = process.env.REACT_APP_KEY_PIXABAY_API

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = React.useState({
    searchText: '',
    amount: 15
  });

  const [data, setData] = React.useState({})
  const [loading, setLoading] = React.useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target
    setSearchQuery({ ...searchQuery, [name]: value });
  };

  React.useEffect(() => {
    const { searchText, amount } = searchQuery;
    const fetchData = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get(`https://pixabay.com/api/?key=${keyAPI}&q=${searchText}&image_type=photo&per_page=${amount}`)
        setData(data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchData();
  }, [searchQuery])

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
        <Search query={searchQuery} handleChange={handleChange} />
        <ImageListPixabay data={data} loading={loading} />
      </Box>

    </Paper>
  )
}

export default Dashboard