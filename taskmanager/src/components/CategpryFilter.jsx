import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function CategoryFilter() {
    const { categories, filterTasks } = useContext(TaskContext);

    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Filter by Category</label>
            <select
                onChange={(e) => filterTasks(e.target.value)}
                className="p-2 border rounded"
            >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
        </div>
    );
}

export default CategoryFilter;