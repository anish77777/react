import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function Categories() {
    const { categories, setCategories } = useContext(TaskContext);
    const [newCategory, setNewCategory] = useState('');

    const addCategory = (e) => {
        e.preventDefault();
        if (newCategory.trim() && !categories.includes(newCategory)) {
            setCategories([...categories, newCategory]);
            setNewCategory('');
        }
    };

    const deleteCategory = (category) => {
        setCategories(categories.filter((cat) => cat !== category));
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-blue-600 mb-4">Manage Categories</h1>
            <form onSubmit={addCategory} className="mb-6">
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">New Category</label>
                    <input
                        type="text"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="Enter category name"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add Category
                </button>
            </form>
            <div className="space-y-2">
                {categories.length === 0 ? (
                    <p className="text-gray-600">No categories yet. Add one above!</p>
                ) : (
                    categories.map((category) => (
                        <div
                            key={category}
                            className="flex justify-between items-center p-2 bg-white rounded shadow"
                        >
                            <span className="text-gray-800">{category}</span>
                            <button
                                onClick={() => deleteCategory(category)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Categories;