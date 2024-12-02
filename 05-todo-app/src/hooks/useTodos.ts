import { useState } from "react";

export function useTodos() {
  const [todos, setTodos] = useState<string[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editTodo, setEditTodo] = useState('');

  const addNewTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  }

  const updateTodo = (updatedTodo: string) => {
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = updatedTodo;
      setTodos(updatedTodos);
      setIsEditing(false);
      setEditIndex(null);
      setEditTodo('');
    }
  }

  const deleteTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

  const startEditing = (index: number, todo: string) => {
    setIsEditing(true);
    setEditIndex(index);
    setEditTodo(todo);
    console.log(isEditing, editIndex, editTodo)
  }

  return {
    todos,
    isEditing,
    editTodo,
    addNewTodo,
    updateTodo,
    deleteTodo,
    startEditing,
    setEditTodo
  }
}