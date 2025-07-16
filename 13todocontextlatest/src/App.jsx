import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

// Main App component
function App() {
  // State to hold all todos
  const [todos, setTodos] = useState([])

  // Add a new todo to the list
  const addTodo = (todo) => {
    // Add new todo object at the start, keep previous todos
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }
  // setTodos(todo) would overwrite all todos, so we use ...prev to keep old ones

  // Update an existing todo by id
  const updateTodo = (id, todo) => {
    // Replace the todo with matching id, keep others unchanged
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
    // prev is the old array of todos
  }

  // Delete a todo by id
  const deleteTodo = (id) => {
    // Remove the todo with matching id
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
    // Only todos that don't match the id remain
  }

  // Toggle the completed status of a todo by id
  const toggleComplete = (id) => {
    // Flip the completed value for the matching todo
    setTodos((prev) => prev.map((prevTodo) =>
      prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
    ))
  }

  // Load todos from localStorage when app mounts
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0)
      setTodos(todos)
  }, [])
  // Runs only once on mount

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
    console.log(localStorage.getItem("todos"))
  }, [todos])
  // Keeps todos persistent across page reloads

  return (
    // Provide todos and actions to all child components via context
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} /> {/* Pass the todo prop here */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
