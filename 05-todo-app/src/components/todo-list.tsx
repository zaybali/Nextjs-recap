import React from 'react'
type todosType = {
  todos: string[],
  deleteTodo: (index: number) => void,
  startEditing: (index: number, todo: string) => void
}

export default function TodoList({ todos, deleteTodo, startEditing }: todosType) {


  return (
    <>
      <h3>todo-list</h3>
      <div>
        {
          todos.map((todo, index) => (
            <p key={crypto.randomUUID()}>{todo}
              <button onClick={() => { startEditing(index, todo) }}>Edit</button>
              <button onClick={() => { deleteTodo(index) }}>Delete</button>
            </p>
          ))
        }
      </div>
    </>
  )
}
