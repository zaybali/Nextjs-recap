import { useState } from "react";

export function useTodos() {
  const [todos, newTodos] = useState<string[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editTodo, setEditTodo] = useState('');
}