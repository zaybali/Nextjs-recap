"use client";
import { todo } from 'node:test';
import React, { useState } from 'react'

type addNewTodoType = {
  addNewTodo: (todo: string) => void,
  updateTodo: (updateTodo: string) => void
  isEditing: boolean,
  editTodo: string
  setEditTodo: (todo: string) => void
}

export default function TodoInput({ addNewTodo, updateTodo, isEditing, editTodo, setEditTodo }: addNewTodoType) {

  const [newTodo, setNewTodo] = useState('');

  return (
    <>
      <h2>Todo Input</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        // isEditing ? (
        //   editTodo.trim() && updateTodo(editTodo)
        // ) : (
        //   newTodo.trim() && addNewTodo(newTodo), setNewTodo('')
        // )
        if (!isEditing) {
          if (newTodo.trim()) {
            addNewTodo(newTodo);
            setNewTodo('');
          }
          else {
            if (editTodo.trim()) {
              updateTodo(editTodo);
            }
          }
        }
      }}>
        <label htmlFor="">
          <input
            type="text"
            name="todo"
            id="todo"
            value={isEditing ? editTodo : newTodo}
            onChange={(e) => {
              isEditing ? setEditTodo(e.target.value) : setNewTodo(e.target.value);
            }}
          />
        </label>
        <input type="submit" value={isEditing ? "Save" : "Add"} />
      </form>

    </>
  )
}
