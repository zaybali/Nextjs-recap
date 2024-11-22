"use client";
import React, { useState } from 'react'

type addNewTodoType = {
  addNewTodo: (todo: string) => void;
}

export default function TodoInput({ addNewTodo }: addNewTodoType) {

  const [newTodo, setNewTodo] = useState('');

  return (
    <>
      <h2>Todo Input</h2>

      <label htmlFor="todo">
        <input
          type="text"
          name='todo'
          id='todo'
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value)
          }}
        />
      </label>
      <button onClick={() => {
        addNewTodo(newTodo)
        setNewTodo('');
      }}>Add</button>
    </>
  )
}
