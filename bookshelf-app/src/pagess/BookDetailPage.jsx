// src/pagess/BookDetailPage.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useBook } from '../context/BookContext';

export default function BookDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { books, deleteBook } = useBook();

    const book = books.find((b) => b.id === id);

    if (!book) {
        return (
            <div className="max-w-xl mx-auto px-4">
                <h1 className="text-xl font-bold text-red-600">Book not found</h1>
                <button
                    onClick={() => navigate('/books')}
                    className="mt-4 text-blue-600 underline"
                >
                    Back to Book List
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-xl mx-auto px-4">
            <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
            <p className="text-gray-700 mb-4">by {book.author}</p>
            <button
                onClick={() => {
                    deleteBook(book.id);
                    navigate('/books');
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
                Delete
            </button>
        </div>
    );
}
