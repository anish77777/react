import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskCard({ task }) {
    const { deleteTask } = useContext(TaskContext);

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
            <p className="text-sm text-gray-500">Category: {task.category}</p>
            <p className="text-sm text-gray-500">Status: {task.status}</p>
            <button
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => deleteTask(task.id)}
            >
                Delete
            </button>
        </div>
    );
}

export default TaskCard;