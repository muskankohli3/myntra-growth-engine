function CategorySection() {
  const categories = [
    "Women",
    "Men",
    "Beauty",
    "Home",
  ];

  return (
    <div className="bg-white px-6 py-4">
      <div className="flex justify-between">
        {categories.map((category) => (
          <button
            key={category}
            className="px-5 py-2 rounded-full bg-pink-50 text-pink-600 font-medium hover:bg-pink-100 transition"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategorySection;