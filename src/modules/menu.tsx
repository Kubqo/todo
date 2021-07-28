import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventNoteIcon from '@material-ui/icons/EventNote';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    float: 'right',
    '&:hover': {
      backgroundColor: "orange",
    }
  },
  text: {
    // marginRight: "10px",
    width: "100%",
  },
  img: {
    width: "40px",
    height: "40px",
    float: "right",
    color: "#E8E9F3",
    '&:hover': {
      color: "orange",
    },
  },
  menu: {
    top: 0,
    position: "sticky",
    display: "flex",
    float: "right",
    minHeight: "100vh",
    backgroundColor: "#293649",
    flexDirection: "column",
    justifyContent: "center",
  },
  low: {
    position: "absolute",
    bottom: "0",
  },
  up: {
    position: "absolute",
    top: "0",
  },
  mid: {
    display: "flex",
    flexDirection: "column",
  }
}));

export function SimpleMenu() {
  const { logout } = useAuth0();
  const classes = useStyles();
  const { user } = useAuth0();
  const history = useHistory()

  return (
    <div className={classes.menu}>
      <div className={classes.up}>
        <IconButton>
          <Avatar src={user?.picture} alt={user?.name} />
        </IconButton>
      </div>

      <div className={classes.mid}>
        <IconButton onClick={() => history.push('/dashboard')}>
          <DashboardIcon className={classes.img} />
        </IconButton>
        <IconButton onClick={() => history.push('/planner')}>
          <EventNoteIcon className={classes.img} />
        </IconButton>
      </div>

      <div className={classes.low}>
        <IconButton onClick={() => logout({ returnTo: window.location.origin })}>
          <ExitToAppIcon className={classes.img} />
        </IconButton>
      </div>

    </div >
  );
}