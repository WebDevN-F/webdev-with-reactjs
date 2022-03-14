import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UserForm from './components/UserForm';
import { Grid, Typography, Link } from "@mui/material";

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <Grid container rowSpacing={1} justifyContent="center">
          <Grid item xs={12} md={6}>
            <UserForm />
            <Typography variant="h6" component="footer" sx={{ flexGrow: 1 }}>
              <p>&copy; {new Date().getFullYear()}
                <Link target="_blank" href="https://github.com/ngnam" underline="none" sx={{ml: 2}}>
                  {'Nguyen Van Nam'}
                </Link>
              </p>
            </Typography>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;

export const light = createTheme({
  palette: {
    mode: 'light',
  },
  spacing: 4
})

export const dark = createTheme({
  palette: {
    mode: 'dark',
  },
  spacing: 4
})