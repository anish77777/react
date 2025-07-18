import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskForm() {
    const { addTask, categories } = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState(categories[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            addTask({ title, description, category });
            setTitle('');
            setDescription('');
            setCategory(categories[0]);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 p-4 bg-gray-100 rounded-lg">
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Enter task title"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Enter task description"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">Category</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2 border rounded"
                >
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add Task
            </button>
        </form>
    );
}

export default TaskForm;