import React from 'react'
import DoneTodo from './components/DoneTodo'
import './App.css'
import TodoList from './components/TodoList'

function App() {
  return (
    <div>
    <div className="text-6xl mt-10 mb-10 text-center font-bold">Todo-App</div>
      <div className='grid grid-cols-2 text-center'>
      <TodoList />
      <DoneTodo />
      </div>

    </div>
  )
}

export default App

