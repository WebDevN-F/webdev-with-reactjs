import React, { useState } from "react";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from 'tss-react/mui'

// v4
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     marginBottom: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1
//   }
// }));

// v5
const useStyles = makeStyles()((theme) => {
  return {
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(2),
    },
    title: {
      flexGrow: 1
    }
  }
});

// v5
// const PREFIX = 'App';
// const classes = {
//   root: `${PREFIX}-root`,
//   title: `${PREFIX}-title`,
// }

// const AppRoot = styled('div')(({ theme }) => ({
//   [`&.${classes.root}`]: {
//     flexGrow: 1,
//     padding: theme.spacing(2),
//   },
//   [`& .${classes.title}`]: {
//     flexGrow: 1
//   },
// }))

function App() {
  const [theme, setTheme] = useState(true);
  const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />;
  const appliedTheme = theme ? light : dark;
  // use v4
  // const classes = useStyles();
  // use v5
  const { classes } = useStyles()

  return (
    <ThemeProvider theme={appliedTheme}>
      <Paper>
        <div className={classes.root}>
          <Typography className={classes.title} variant="h3">
            Hello!
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="mode"
            onClick={() => setTheme(!theme)}
          >
            {icon}
          </IconButton>
          <Typography>
            Click on {!theme ? "Sun" : "Moon"} Icon to change to{" "}
            {!theme ? "Light" : "Dark"} theme
          </Typography>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;

export const light = createTheme({
  palette: {
    mode: 'light',
  },
  spacing: 8
})

export const dark = createTheme({
  palette: {
    mode: 'dark',
  },
  spacing: 8
})