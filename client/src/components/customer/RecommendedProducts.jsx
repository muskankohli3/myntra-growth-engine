import { useEffect, useState } from "react";
import { getProducts } from "../../services/customerApi";

import tshirtImage from "../../assets/images/products/oversized-tshirt.jpg";

function RecommendedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        console.log("Products:", data);
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="px-6 py-6">
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-6 py-6">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="px-6 py-6">
      <h2 className="text-2xl font-bold mb-4">
        Recommended For You
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="rounded-xl border bg-white p-4 shadow-sm"
          >
            <img
              src={
                product.images && product.images.length > 0
                  ? product.images[0]
                  : tshirtImage
              }
              alt={product.name}
              className="w-full aspect-[4/5] object-contain rounded-lg bg-gray-100 mb-3"
            />

            <h3 className="font-semibold">
              {product.name}
            </h3>

            <p className="text-gray-500 text-sm">
              {product.brand}
            </p>

            <p className="text-pink-600 font-bold mt-2">
              ₹{product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedProducts;