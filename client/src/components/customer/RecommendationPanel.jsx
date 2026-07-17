const recommendations = [
  {
    id: 1,
    name: "Printed Palazzo",
    brand: "Libas",
    image: "https://via.placeholder.com/120",
    price: 799,
  },
  {
    id: 2,
    name: "Ethnic Dupatta",
    brand: "Biba",
    image: "https://via.placeholder.com/120",
    price: 499,
  },
  {
    id: 3,
    name: "Jhumka Earrings",
    brand: "Zaveri Pearls",
    image: "https://via.placeholder.com/120",
    price: 349,
  },
];

function RecommendationPanel() {
  return (
    <div className="bg-white rounded-xl shadow p-5 mt-6">
      <h2 className="text-xl font-bold mb-4">
        ✨ AI Recommendations
      </h2>

      <div className="space-y-4">
        {recommendations.map((item) => (
          <div
            key={item.id}
            className="flex gap-3 border rounded-lg p-3 hover:bg-gray-50 transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-lg object-cover"
            />

            <div>
              <h3 className="font-semibold">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500">
                {item.brand}
              </p>

              <p className="font-bold">
                ₹{item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendationPanel;