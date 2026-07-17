import Card from "./ui/Card";

function PinnedProduct() {
  return (
    <Card>
      <p className="text-sm font-semibold text-pink-600">
        LIVE PRODUCT
      </p>

      <h2 className="mt-2 text-2xl font-bold">
        Premium Linen Kurta
      </h2>

      <p className="mt-2 text-gray-500">
        ₹1,499
      </p>

      <button className="mt-5 w-full rounded-xl bg-pink-600 py-3 font-semibold text-white hover:bg-pink-700">
        Buy Now
      </button>
    </Card>
  );
}

export default PinnedProduct;