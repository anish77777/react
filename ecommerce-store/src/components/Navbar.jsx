import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto flex justify-between">
                <Link to="/" className="text-xl font-bold">ShopNow</Link>
                <Link to="/cart">
                    <CartIcon />
                </Link>
            </div>
        </nav>
    );
}