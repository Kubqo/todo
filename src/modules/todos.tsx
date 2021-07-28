import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Todo from "../models/todo"
import CircularProgress from '@material-ui/core/CircularProgress';
import InputTodo from './input'
import Item from './item'
import { fetchTodos } from '../be/api';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles((theme) => ({
  window: {
    width: 550,
    minHeight: "700px",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    borderRadius: "30px",
  },
}));

const Todos = () => {
  const classes = useStyles();
  const [todos, setTodos] = useState<[Todo] | []>([])
  const [fetch, setFetch] = useState(true)
  const [accessToken, setAccessToken] = useState<string | undefined>();
  const { getIdTokenClaims } = useAuth0();

  useEffect(() => {
    (async () => {
      try {
        const token = await getIdTokenClaims()
        setAccessToken(token.__raw)
        if (fetch === true) {
          fetchTodos(token.__raw, setTodos, setFetch)
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getIdTokenClaims, accessToken, fetch]);


  if (!todos) {
    return <CircularProgress />;
  }
  else {
    return (
      <div className={classes.window}>
        <InputTodo token={accessToken} setFetch={setFetch} />
        {todos.map((val: Todo) => (
          <Item key={val.id} token={accessToken} val={val} setFetch={setFetch} />))}
      </div>

    );
  }
}

export default Todos;
