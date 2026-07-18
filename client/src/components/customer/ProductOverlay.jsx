import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

function ProductOverlay({ product, onClose }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-[400px] p-6 relative">

        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-xl"
        >
          ✕
        </button>

        <img
          src={
            product.images?.length > 0
              ? product.images[0]
              : ""
          }
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg"
        />

        <h2 className="text-2xl font-bold mt-4">
          {product.name}
        </h2>

        <p className="text-gray-500">
          {product.brand}
        </p>

        <p className="text-2xl font-bold mt-3">
          ₹{product.price}
        </p>

        <button
          onClick={() => {
            addToCart(product);
            onClose();
            navigate("/customer/checkout");
          }}
          className="mt-6 w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductOverlay;