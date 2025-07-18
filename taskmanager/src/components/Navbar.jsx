import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="bg-gray-900 text-white p-4 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-xl font-bold">Task Manager</div>
            <div className="flex space-x-4 mt-2 sm:mt-0">
                <NavLink to="/" className="hover:bg-gray-700 px-3 py-2 rounded">Home</NavLink>
                <NavLink to="/tasks" className="hover:bg-gray-700 px-3 py-2 rounded">Tasks</NavLink>
                <NavLink to="/categories" className="hover:bg-gray-700 px-3 py-2 rounded">Categories</NavLink>
                {user ? (
                    <button
                        onClick={logout}
                        className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                    >
                        Logout
                    </button>
                ) : (
                    <NavLink to="/login" className="hover:bg-gray-700 px-3 py-2 rounded">Login</NavLink>
                )}
            </div>
        </nav>
    );
}

export default Navbar;