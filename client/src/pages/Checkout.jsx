import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createOrder } from "../services/orderService";

function Checkout() {
  const navigate = useNavigate();
  const [placingOrder, setPlacingOrder] = useState(false);

  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  async function handlePlaceOrder() {
    try {
      setPlacingOrder(true);

      console.log("Cart Items:", cartItems);

      for (const item of cartItems) {
        await createOrder({
          productId: item._id,
          liveSessionId: item.liveSessionId || null,
          customerName: "Demo Customer",
          quantity: 1,
          price: item.price,
        });
      }

      clearCart();

      navigate("/customer/order-success");
    } catch (error) {
      console.error(error);
      alert("Failed to place order. Please try again.");
    } finally {
      setPlacingOrder(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">
        Checkout
      </h1>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-xl p-6 text-center">
          <p className="text-gray-500 text-lg">
            Your cart is empty.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={
                      item.images?.length > 0
                        ? item.images[0]
                        : ""
                    }
                    alt={item.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />

                  <div>
                    <h2 className="font-semibold text-lg">
                      {item.name}
                    </h2>

                    <p className="text-gray-500">
                      {item.brand}
                    </p>

                    <p className="font-bold mt-2">
                      ₹{item.price}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-xl p-6">
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={placingOrder}
              className="mt-6 w-full bg-pink-500 hover:bg-pink-600 disabled:bg-gray-400 text-white py-3 rounded-lg"
            >
              {placingOrder ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;