import LiveVideo from "../components/LiveVideo";
import PinnedProduct from "../components/PinnedProduct";
import LiveChat from "../components/LiveChat";

function CustomerLive() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-8 text-4xl font-bold">
        🔴 Live Shopping
      </h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <LiveVideo />
        </div>

        <PinnedProduct />
      </div>

      <div className="mt-8">
        <LiveChat />
      </div>
    </div>
  );
}

export default CustomerLive;