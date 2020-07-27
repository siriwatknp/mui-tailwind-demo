import React from 'react';
import { StylesProvider, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography";

import Apps from '@material-ui/icons/Apps';
import logo from './logo.svg';
import './App.css';

// 1. need to create new styles
const useStyles = makeStyles({
  logo: { // 2. need to come up with naming
    width: '3rem',
    height: '3rem',
  },
  toolbar: { // 3. styles is hard to be reused
    justifyContent: 'space-between',
  },
  avatarBtn: {
    padding: '0.25rem',
    marginLeft: '0.25rem',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  }
});

function App() {
  const classes = useStyles();
  // 4. code is longer and hard to abstract out
  return (
    <StylesProvider injectFirst>
      <AppBar position={'relative'} color={'default'} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.wrapper}>
            <img src={logo} className={`App-logo ${classes.logo}`} alt="logo" />
            <Typography variant="h1" color="primary" className={classes.title}>Material-UI</Typography>
          </div>
          <div>
            <IconButton>
              <Apps />
            </IconButton>
            <IconButton className={classes.avatarBtn}>
              <Avatar>BM</Avatar>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Divider />

      <AppBar position={'relative'} color={'default'} elevation={0}>
        <Toolbar className="justify-between">
          <div className="flex items-center">
            <img src={logo} className="App-logo h-12 w-12" alt="logo" />
            <Typography variant="h1" className="text-2xl font-bold" color="primary">MUI Tailwind</Typography>
          </div>
          <div>
            <IconButton>
              <Apps />
            </IconButton>
            <IconButton className="p-1 ml-1">
              <Avatar>BM</Avatar>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </StylesProvider>
  );
}

export default App;
