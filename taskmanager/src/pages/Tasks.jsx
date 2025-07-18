import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';
import CategoryFilter from '../components/CategoryFilter';

function Tasks() {
    const { tasks, selectedCategory } = useContext(TaskContext);
    const filteredTasks = selectedCategory ? tasks.filter((task) => task.category === selectedCategory) : tasks;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-blue-600 mb-4">Tasks</h1>
            <TaskForm />
            <CategoryFilter />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTasks.length === 0 ? (
                    <p className="text-gray-600">No tasks yet. Add a task to get started!</p>
                ) : (
                    filteredTasks.map((task) => <TaskCard key={task.id} task={task} />)
                )}
            </div>
        </div>
    );
}

export default Tasks;