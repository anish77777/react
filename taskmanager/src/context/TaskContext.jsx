import { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [categories, setCategories] = useState(['Work', 'Personal']);
    const [selectedCategory, setSelectedCategory] = useState('');

    const addTask = (task) => setTasks([...tasks, { id: Date.now(), ...task, status: 'pending' }]);
    const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
    const updateTask = (id, updatedTask) => setTasks(tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task)));
    const filterTasks = (category) => setSelectedCategory(category);

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, updateTask, categories, selectedCategory, filterTasks }}>
            {children}
        </TaskContext.Provider>
    );
};