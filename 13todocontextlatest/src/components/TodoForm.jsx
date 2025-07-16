import React, { useState } from 'react'
import { useTodo } from '../contexts'

function TodoForm() {
    // State for the input field
    const [todo, setTodo] = useState(" ")
    // Get addTodo function from context
    const { addTodo } = useTodo()

    // Form submit handler
    const add = (e) => {
        e.preventDefault() // Prevent page reload
        if (!todo) return   // Do nothing if input is empty
        addTodo({ todo, completed: false }) // Add new todo
        setTodo("") // Clear input field
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)} // Update state as user types
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;





















































































































































