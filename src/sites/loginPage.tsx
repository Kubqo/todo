import React from 'react';
import LoginButton from '../modules/login/loginButton';
import { makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) => ({
  app_logged_out: {
    backgroundColor: "#E8E9F3",
    minHeight: "100vh",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  unlogged: {
    display: "flex",
    minHeight: "100vh",
    color: "orange",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
  }
}));

function LoginPage() {
  const classes = useStyles();

  return (
    <div className={classes.app_logged_out}>
      <LoginButton />
      <div className={classes.unlogged}>
        <h1>This application is in early access!</h1>
        <h3>I have implemented only core functionality</h3>
      </div>
    </div>
  );
}


export default LoginPage;
