import React from 'react'
type todosType = {
  todos: string[]
}

export default function TodoList({ todos }: todosType) {
  return (
    <>
      <h3>todo-list</h3>
      <div>
        {
          todos.map((todo) => (
            <p key={crypto.randomUUID()}>{todo}
              <button>Edit</button>
              <button>Delete</button>
            </p>
          ))
        }
      </div>
    </>
  )
}
