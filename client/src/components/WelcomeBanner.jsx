import Card from "./ui/Card";

function WelcomeBanner() {
  return (
    <Card className="mb-8 bg-gradient-to-r from-pink-600 to-pink-500 text-white border-none">
      <h1 className="text-3xl font-bold">
        Welcome back, Muskan 👋
      </h1>

      <p className="mt-2 text-pink-100">
        Your AI has generated 3 opportunities to increase today's sales.
      </p>

      <button className="mt-6 rounded-xl bg-white px-5 py-3 font-semibold text-pink-600">
        View Top Recommendation
      </button>
    </Card>
  );
}

export default WelcomeBanner;