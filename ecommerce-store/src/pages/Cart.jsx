import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="border-b py-4 flex justify-between">
                            <div>
                                <h3 className="font-medium">{item.title}</h3>
                                <p>${item.price} x {item.quantity}</p>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="mt-4 font-bold">Total: ${total.toFixed(2)}</div>
                </div>
            )}
        </div>
    );
}