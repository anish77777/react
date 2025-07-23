import { Link } from 'react-router-dom';

export default function BookCard({ book, onDelete }) {
    return (
        <li className="p-4 border rounded-lg shadow-sm flex justify-between items-center">
            <div>
                <h2 className="text-lg font-semibold">
                    <Link to={`/books/${book.id}`} className="text-blue-600 hover:underline">
                        {book.title}
                    </Link>
                </h2>
                <p className="text-sm text-gray-600">by {book.author}</p>
            </div>
            <button
                onClick={() => onDelete(book.id)}
                className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
                Delete
            </button>
        </li>
    );
}
