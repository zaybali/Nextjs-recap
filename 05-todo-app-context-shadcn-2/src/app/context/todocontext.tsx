"use client";

import { createContext, useContext, useState } from "react";

// Define the shape of the context
interface TodoContextType {
  todos: string[];
  isEditing: boolean;
  editTodo: string;
  addTodo: (todo: string) => void;
  updateTodo: (todo: string) => void;
  deleteTodo: (index: number) => void;
  setEditTodo: (todo: string) => void;
  setEditIndex: (index: number) => void;
  setIsEditing: (status: boolean) => void;
}

const TodoContext = createContext<TodoContextType | null>(null);

// Custom hook for accessing the context
export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useTodoContext must be used within a TodoProvider");
  return context;
};

// Provider component
export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<string[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const addTodo = (newTodo: string) => setTodos([...todos, newTodo]);

  const updateTodo = (updatedTodo: string) => {
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = updatedTodo;
      setTodos(updatedTodos);
      setIsEditing(false);
      setEditIndex(null);
      setEditTodo("");
    }
  };

  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        isEditing,
        editTodo,
        addTodo,
        updateTodo,
        deleteTodo,
        setEditTodo,
        setEditIndex,
        setIsEditing,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
