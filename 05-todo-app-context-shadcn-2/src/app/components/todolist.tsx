"use client";
import React from "react";
import { useTodoContext } from "../context/todocontext";

export default function TodoList() {
  const {
    todos,
    deleteTodo,
    setEditTodo,
    setEditIndex,
    setIsEditing,
  } = useTodoContext();

  const handleEdit = (todo: string, index: number) => {
    setIsEditing(true);
    setEditTodo(todo);
    setEditIndex(index);
  };

  return (
    // <div>
    //   <h3>Your Todos</h3>
    //   {todos.map((todo, index) => (
    //     <div key={index}>
    //       <span>{todo}</span>
    //       <button onClick={() => handleEdit(todo, index)}>Edit</button>
    //       <button onClick={() => deleteTodo(index)}>Delete</button>
    //     </div>
    //   ))}
    // </div>
    <div className="max-h-96 overflow-y-auto">
      {todos.length > 0 ? (
        <ul className="space-y-3">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm"
            >
              <span>{todo}</span>
              <div className="space-x-2">
                <button className="text-blue-500 hover:text-blue-600" onClick={() => handleEdit(todo, index)}>
                  Edit
                </button>
                <button className="text-red-500 hover:text-red-600" onClick={() => deleteTodo(index)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No tasks yet!</p>
      )}
    </div>
  );
}
