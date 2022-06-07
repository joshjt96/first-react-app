import React, {useState} from 'react'
import ToDoList from './ToDoList'

function App() {
  const [todos, setTodos] = useState(['To do 1', 'To do 2'])
  return (
    <>
      <ToDoList todos={todos} />
      <input type="text" />
      <button>Add To Do</button>
      <button>Clear List</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
