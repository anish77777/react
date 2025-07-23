// src/pages/AddBookPage.jsx
import { useState } from 'react';
import { useBook } from '../context/BookContext';
import { useNavigate } from 'react-router-dom';

export default function AddBookPage() {
    const { addBook } = useBook();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !author) return;

        addBook({ title, author });
        navigate('/books');
    };

    return (
        <div className="max-w-xl mx-auto px-4">
            <h1 className="text-2xl font-bold mb-4">➕ Add New Book</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                        placeholder="Book title"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Author</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                        placeholder="Author name"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                    Add Book
                </button>
            </form>
        </div>
    );
}
