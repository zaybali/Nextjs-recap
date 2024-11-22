import React from 'react'
type todosType = {
  todos: string[],
  setTodos: (todo: string[]) => void
}

export default function TodoList({ todos, setTodos }: todosType) {


  const editFunc = (index: number) => {
    console.log(index)
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
              <button onClick={() => { editFunc(index) }}>Edit</button>
              <button onClick={() => { deleteFunc(index) }}>Delete</button>
            </p>
          ))
        }
      </div>
    </>
  )
}
