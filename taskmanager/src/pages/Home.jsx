import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { AuthContext } from '../context/AuthContext';

function Home() {
    const { tasks } = useContext(TaskContext);
    const { user } = useContext(AuthContext);
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.status === 'completed').length;

    return (
        <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">
                Welcome, {user ? user.username : 'Guest'}!
            </h1>
            <p className="text-lg text-gray-600 mb-6">Your Task Management Dashboard</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-xl font-semibold text-gray-800">Total Tasks</h2>
                    <p className="text-2xl text-blue-500">{totalTasks}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-xl font-semibold text-gray-800">Completed Tasks</h2>
                    <p className="text-2xl text-green-500">{completedTasks}</p>
                </div>
            </div>
        </div>
    );
}

export default Home;