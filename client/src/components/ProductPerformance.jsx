import Card from "./ui/Card";

function ProductPerformance() {
  const products = [
    "Premium Linen Kurta",
    "Summer Shirt",
    "Cotton Hoodie",
  ];

  return (
    <section className="mb-10">
      <h2 className="mb-5 text-2xl font-bold">
        Top Performing Products
      </h2>

      <Card>
        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product}>
              • {product}
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}

export default ProductPerformance;