// src/pagess/BookListPage.jsx
import { useBook } from '../context/BookContext';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';

export default function BookListPage() {
    const { books, deleteBook } = useBook();

    console.log("Books in context:", books); // Optional: Debugging

    return (
        <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-2xl font-bold mb-4">📚 Book List</h1>

            {books.length === 0 ? (
                <p className="text-gray-600">No books found.</p>
            ) : (
                <ul className="space-y-4">
                    {books.map((book) => (
                        <BookCard key={book.id} book={book} onDelete={deleteBook} />
                    ))}
                </ul>
            )}
        </div>
    );
}
