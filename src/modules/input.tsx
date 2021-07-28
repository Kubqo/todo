import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { addTodo } from '../be/api';
import { useSnackbar } from 'material-ui-snackbar-provider'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50px",
    marginBottom: "50px",
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    float: "right",
  },
}));

type Props = {
  token: string | undefined;
  setFetch: (fetch: boolean) => void,
}

const InputTodo = ({ token, setFetch }: Props) => {
  const classes = useStyles();
  const [text, setText] = React.useState("");
  const snackbar = useSnackbar()

  const handleSubmit = async () => {
    await addTodo(token, text, setFetch)
    snackbar.showMessage(
      'Something happened!',
      'Undo',
    )
    setText("")
  }

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Add activity"
        value={text}
        onChange={event => (setText(event.target.value))}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleSubmit}>
        <AddIcon />
      </IconButton>
    </Paper >
  )
}

export default InputTodo