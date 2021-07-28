import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Todo from '../models/todo';
import { deleteTodo } from '../be/api';

const useStyles = makeStyles((theme) => ({
  item: {
    margin: "5px",
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 250,
    fontFamily: "Arial",
  },
  itemIcon: {
    float: "right",
  },
  text: {
    width: "100%",
  }
}));

type Props = {
  token: string | undefined;
  val: Todo;
  setFetch: (fetch: boolean) => void;
}

const Item = ({ token, val, setFetch }: Props) => {
  const classes = useStyles();

  const handleDelete = async () => {
    await deleteTodo(token, val.id, setFetch)
    // setFetch(true)
  }

  return (
    <div>
      <Paper className={classes.item} key={val.id} elevation={3}>
        <div className={classes.text}>{val.text}</div>
        <IconButton type="submit" key={val.id} className={classes.itemIcon} aria-label="search" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </Paper>
    </div>
  )
}

export default Item;
