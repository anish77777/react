import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch(); // provides dispatch method

    return (
        <div className="max-w-md mx-auto bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-3 text-center">My Todos</h2>
            <ul className="list-decimal list-inside space-y-2">
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        className="flex justify-between items-center bg-gray-500 p-3 rounded hover:bg-gray-1000"
                    >
                        <span>{todo.text}</span>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-red-500 bg-amber-300 hover:text-red-700"
                        >
                            ✕
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
