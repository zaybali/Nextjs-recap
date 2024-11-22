"use client"
import TodoInput from "@/components/todo-input";
import TodoList from "@/components/todo-list";
import { useEffect, useState } from "react";

export default function Home() {

  const [todos, setTodos] = useState<string[]>([]);

  const addNewTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  }
  useEffect(() => {
    console.log(todos);
  }, [todos])

  return (
    <>
      <h1>React Todo</h1>
      <TodoInput addNewTodo={addNewTodo} />

      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}
