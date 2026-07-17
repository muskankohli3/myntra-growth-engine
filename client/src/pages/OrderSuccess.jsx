import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-md">
        <div className="text-6xl mb-4">✅</div>

        <h1 className="text-3xl font-bold mb-4">
          Order Placed!
        </h1>

        <p className="text-gray-600 mb-8">
          Thank you for shopping during the live session.
        </p>

        <Link
          to="/customer/home"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;