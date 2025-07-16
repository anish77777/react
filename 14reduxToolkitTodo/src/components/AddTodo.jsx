import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch(); // gives access to Redux store's dispatch

    const addTodoHandler = e => {
        e.preventDefault();
        if (!input.trim()) return; // ignore empty submissions

        // dispatches { type: 'todo/addTodo', payload: input }
        dispatch(addTodo(input));
        setInput('');
    };

    return (
        <form
            onSubmit={addTodoHandler}
            className="max-w-md mx-auto mb-4 flex space-x-2 bg-white p-4 rounded shadow"
        >
            <input
                type="text"
                placeholder="new todo"
                value={input}
                onChange={e => setInput(e.target.value)}
                className="flex-1 px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
            />
            <button
                type="submit"
                disabled={!input.trim()}
                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
            >
                Add
            </button>
        </form>
    );
}

export default AddTodo;
