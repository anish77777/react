import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    return (
        <div className="border rounded-lg p-4 shadow-md">
            <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mx-auto"
            />
            <h3 className="font-semibold mt-2">{product.title}</h3>
            <p className="text-gray-600">${product.price}</p>
            <Link
                to={`/product/${product.id}`}
                className="mt-2 inline-block bg-blue-500 text-white px-3 py-1 rounded"
            >
                View Details
            </Link>
        </div>
    );
}