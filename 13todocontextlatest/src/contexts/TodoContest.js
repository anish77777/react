import { createContext, useContext } from "react";

// Create a context for todos with default values and empty functions
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => { },           // Function to add a todo
    updateTodo: (id, todo) => { },    // Function to update a todo
    deleteTodo: (id) => { },          // Function to delete a todo
    toggleComplete: (id) => { }       // Function to toggle completion status
})

// Custom hook to use the TodoContext in components
export const useTodo = () => {
    return useContext(TodoContext)
}

// Export the Provider for wrapping the app/components
export const TodoProvider = TodoContext.Provider
// This allows you to use <TodoProvider value={...}> instead