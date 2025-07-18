import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row gap-8">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full md:w-1/3 object-contain"
                />
                <div>
                    <h1 className="text-2xl font-bold">{product.title}</h1>
                    <p className="text-gray-600 mt-2">${product.price}</p>
                    <p className="mt-4">{product.description}</p>
                    <button
                        onClick={() => addToCart(product)}
                        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}