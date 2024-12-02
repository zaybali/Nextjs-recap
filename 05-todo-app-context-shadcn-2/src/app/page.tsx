"use client";

import TodoInput from "./components/todoinput";
import TodoList from "./components/todolist";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Todo App</h1>
        <TodoInput />
        <TodoList />
      </div>
    </div>

  );
}
