import tshirtImage from "../../assets/images/products/oversized-tshirt.jpg";
import cargoImage from "../../assets/images/products/cargo-pants.jpg";
import sneakersImage from "../../assets/images/products/sneakers.jpg";
import { recommendedProducts } from "../../services/customerService";

const productImages = {
  tshirt: tshirtImage,
  cargo: cargoImage,
  sneakers: sneakersImage,
};

function RecommendedProducts() {
  return (
    <div className="px-6 py-6">
      <h2 className="text-2xl font-bold mb-4">
        Recommended For You
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {recommendedProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-xl border bg-white p-4 shadow-sm"
          >
            <img
            src={productImages[product.image]}
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
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedProducts;