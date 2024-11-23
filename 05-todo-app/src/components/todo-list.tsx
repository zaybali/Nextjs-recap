import React from 'react'
type todosType = {
  todos: string[],
  setTodos: (todo: string[]) => void,
  setIsEditing: (status: boolean) => void,
  setEditIndex: (num: number) => void,
  setEditTodo: (todo: string) => void
}

export default function TodoList({ todos, setTodos, setIsEditing, setEditIndex, setEditTodo }: todosType) {


  const editFunc = (todo: string, editIndex: number) => {
    setIsEditing(true);
    setEditIndex(editIndex);
    setEditTodo(todo);
  }

  const deleteFunc = (index: number) => {
    console.log(index)
    let todosClone = [...todos];
    todosClone.splice(index, 1);
    setTodos(todosClone);
  }

  return (
    <>
      <h3>todo-list</h3>
      <div>
        {
          todos.map((todo, index) => (
            <p key={crypto.randomUUID()}>{todo}
              <button onClick={() => { editFunc(todo, index) }}>Edit</button>
              <button onClick={() => { deleteFunc(index) }}>Delete</button>
            </p>
          ))
        }
      </div>
    </>
  )
}
