function RoleCard({ title, description, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-80 rounded-2xl border bg-white p-6 shadow-md transition hover:shadow-xl hover:scale-105"
    >
      <h2 className="text-2xl font-semibold mb-2">
        {title}
      </h2>

      <p className="text-gray-600">
        {description}
      </p>
    </button>
  );
}

export default RoleCard;