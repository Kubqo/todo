import React from 'react';
import Todo from '../models/todo';
import { Url } from '../enums/url'


export const fetchTodos = async (
  token: string | undefined,
  setTodos: React.Dispatch<React.SetStateAction<[Todo] | []>>,
  setFetch: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (token !== undefined) {
    fetch(`${Url.get_all_todos}`, {
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      method: "POST"
    }).then(res => res.json())
      .then(
        (result) => {
          setTodos(result.todos)
          setFetch(false)
        }
      )
  } else {
    console.log("fuck")
  }
}

export const addTodo = async (
  token: string | undefined,
  text: string,
  setFetch: (fetch: boolean) => void,
) => {
  if (token !== undefined) {
    fetch(`${Url.add_todo}`, {
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ text: text }),
      method: "POST"
    }).then(res => res.json())
      .then(
        (result) => {
          setFetch(true)
        }
      )
  }
}

export const deleteTodo = async (
  token: string | undefined,
  id: string,
  setFetch: (fetch: boolean) => void,
) => {
  if (token !== undefined) {
    fetch(`${Url.delete_todo}`, {
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ id: id }),
      method: "DELETE"
    }).then(res => res.json())
      .then(
        (result) => {
          setFetch(true)
        }
      )
  }
}
