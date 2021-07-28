import React from 'react';
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, Theme } from '@material-ui/core/styles';
import { SimpleMenu } from '../modules/menu';
import CircularProgress from '@material-ui/core/CircularProgress';
import CalendarComponent from '../modules/calendar/calendar';

const useStyles = makeStyles((theme: Theme) => ({
  app_logged_in: {
    textAlign: "center",
    backgroundColor: "#E8E9F3",
    minHeight: "100vh",
    justifyContent: "center",
    // fontSize: "calc(10px + 2vmin)",
  },
  content: {
    minHeight: "100vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // fontSize: "calc(10px + 2vmin)",
    // color: "white",
  },
  paper: {
    height: 140,
    width: 100,
  },
  gridItem: {
    padding: 0,
  }
}));

function MainPage() {
  const classes = useStyles();
  const { isLoading } = useAuth0();

  if (isLoading === true) {
    return (
      <div className={classes.app_logged_in}>
        <div className={classes.content}>
          <CircularProgress />
        </div>
      </div>);
  }
  else {
    return (
      <div className={classes.app_logged_in} >
        <SimpleMenu />
        <div className={classes.content}>
          <CalendarComponent />
        </div>
      </div>
    );
  }
}

export default MainPage;
