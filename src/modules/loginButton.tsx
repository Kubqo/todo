import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@material-ui/core/Button";
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    float: "right",
    margin: 20,
  },
}));

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const classes = useStyles();

  return (
    <Button className={classes.button} variant="contained" color="primary" onClick={() => loginWithRedirect()} >
      Log in
    </Button >
  );
};

export default LoginButton;