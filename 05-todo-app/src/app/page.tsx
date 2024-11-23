"use client"
import TodoInput from "@/components/todo-input";
import TodoList from "@/components/todo-list";
import { useTodos } from "@/hooks/useTodos";
import { useEffect, useState } from "react";

export default function Home() {

  const {
    todos,
    addNewTodo,
    updateTodo,
    isEditing,
    editTodo,
    setEditTodo,
    deleteTodo,
    startEditing
  } = useTodos();

  useEffect(() => {
    console.log(todos);
  }, [todos])

  return (
    <>
      <h1>React Todo</h1>
      <TodoInput
        addNewTodo={addNewTodo}
        updateTodo={updateTodo}
        isEditing={isEditing}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        startEditing={startEditing}
      />-
    </>
  );
}
