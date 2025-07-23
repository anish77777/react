// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Books', path: '/books' },
        { name: 'Add Book', path: '/add' },
        { name: 'About', path: '/about' },
    ];

    return (
        <nav className="bg-white shadow-md p-4 mb-6">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-600">📚 BookShelf</h1>
                <ul className="flex gap-6">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`text-gray-700 hover:text-blue-600 font-medium ${location.pathname === item.path ? 'underline underline-offset-4 text-blue-600' : ''
                                    }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

