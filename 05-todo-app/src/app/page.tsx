"use client"
import TodoInput from "@/components/todo-input";
import TodoList from "@/components/todo-list";
import { useEffect, useState } from "react";

export default function Home() {

  const [todos, setTodos] = useState<string[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editTodo, setEditTodo] = useState('');

  const addNewTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  }

  const updateTodo = (updateTodo: string) => {
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = updateTodo;
      setTodos(updatedTodos);
      setIsEditing(false);
      setEditIndex(null);
      setEditTodo('');
    }
  }
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
        setTodos={setTodos}
        setIsEditing={setIsEditing}
        setEditIndex={setEditIndex}
        setEditTodo={setEditTodo}
      />
    </>
  );
}
