"use client";
import React, { useState } from "react";
import { useTodoContext } from "../context/todocontext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TodoInput() {
  const {
    isEditing,
    editTodo,
    addTodo,
    updateTodo,
    setEditTodo,
  } = useTodoContext()
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      if (editTodo.trim()) updateTodo(editTodo);
    } else {
      if (newTodo.trim()) {
        addTodo(newTodo);
        setNewTodo("");
      }
    }
  };

  return (
    <>
      <div className="flex gap-2 mb-6">
        <form onSubmit={handleSubmit} className="flex items-center gap-4 bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <Input
            type="text"
            placeholder="Enter your todo"
            value={isEditing ? editTodo : newTodo}
            onChange={(e) =>
              isEditing ? setEditTodo(e.target.value) : setNewTodo(e.target.value)
            }
            className="flex-1"
          />
          <Button type="submit" variant="default">
            {isEditing ? "Save" : "Add"}
          </Button>
        </form>
      </div>
    </>
  );
}
