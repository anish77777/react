import React, { useState } from 'react'
import { useTodo } from '../contexts';

// TodoItem component that represents a single todo item
function TodoItem({ todo }) {
  // State to track if the todo is in edit mode
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  // State to hold the editable todo message (initialized with the current todo text)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  // Get todo-related functions from the Todo context
  const { updateTodo, deleteTodo, toggleComplete } = useTodo()

  // Function to save edited todo
  const editTodo = () => {
    // Call updateTodo from context with the updated todo message 
    updateTodo(todo.id, { ...todo, todo: todoMsg })
    // Exit edit mode after saving
    setIsTodoEditable(false)
  }

  // Local method to toggle completion status
  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

  return (
    <div
      // Dynamic classes based on completion status:
      // - Green background when completed
      // - Purple background when not completed
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
        }`}
    >
      {/* Checkbox for toggling completion status */}
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={() => toggleCompleted(todo.id)} // Toggle completion status when clicked
      />

      {/* Input field for todo text - becomes editable when in edit mode */}
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
          } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)} // Update todo message state on change
        readOnly={!isTodoEditable} // Only editable when in edit mode
      />

      {/* Edit/Save Button - toggles between edit and save modes */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return; // Disabled if todo is completed

          if (isTodoEditable) {
            editTodo(); // Save changes if in edit mode
          } else {
            setIsTodoEditable((prev) => !prev); // Toggle edit mode
          }
        }}
        disabled={todo.completed}
      >
        {/* Show save (📁) or edit (✏️) icon based on mode */}
        {isTodoEditable ? "📁" : "✏️"}
      </button>

      {/* Delete Button - removes the todo item */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;