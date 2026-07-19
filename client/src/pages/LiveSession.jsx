import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import socket from "../services/socket";

import ProductOverlay from "../components/customer/ProductOverlay";
import LiveChat from "../components/customer/LiveChat";
import RecommendationPanel from "../components/customer/RecommendationPanel";
import LiveEngagement from "../components/customer/LiveEngagement";

function LiveSession() {
  const { state } = useLocation();

  const [selectedProduct, setSelectedProduct] = useState(null);

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          No Live Session Found
        </h1>
      </div>
    );
  }

  // Live session ID received from navigation
  const liveSessionId = state._id;

  // NEW: Live status that updates via Socket.IO
  const [liveStatus, setLiveStatus] = useState(state.status);

  // Join / Leave socket room
  useEffect(() => {
    if (!liveSessionId) return;

    socket.emit("join-live-session", liveSessionId);

    console.log("Joined room:", liveSessionId);

    return () => {
      socket.emit("leave-live-session", liveSessionId);
      console.log("Left room:", liveSessionId);
    };
  }, [liveSessionId]);

  // Listen for live events
  useEffect(() => {
    const handleLiveStarted = (data) => {
      if (data.liveSessionId === liveSessionId) {
        console.log("🔴 Live started:", data);
        setLiveStatus("live");
      }
    };

    const handleLiveEnded = (data) => {
      if (data.liveSessionId === liveSessionId) {
        console.log("⛔ Live ended:", data);
        setLiveStatus("ended");
      }
    };

    socket.on("live-started", handleLiveStarted);
    socket.on("live-ended", handleLiveEnded);

    return () => {
      socket.off("live-started", handleLiveStarted);
      socket.off("live-ended", handleLiveEnded);
    };
  }, [liveSessionId]);

  const pinnedProduct = state.pinnedProductId;

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-4xl font-bold mb-2">
          {state.title}
        </h1>

        <p className="text-gray-600">
          Seller: {state.sellerId?.storeName}
        </p>

        <p
          className={`mb-6 font-semibold ${
            liveStatus === "live"
              ? "text-green-600"
              : liveStatus === "ended"
              ? "text-red-500"
              : "text-yellow-500"
          }`}
        >
          {liveStatus.toUpperCase()}
        </p>

        <div className="grid grid-cols-12 gap-6">
          {/* LEFT SIDE */}
          <div className="col-span-8 space-y-6">
            <LiveEngagement />

            <div className="h-[500px] bg-black rounded-xl flex items-center justify-center text-white text-3xl">
              Live Stream
            </div>

            {pinnedProduct && (
              <div className="bg-white rounded-xl shadow p-5 flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <img
                    src={
                      pinnedProduct.images?.length > 0
                        ? pinnedProduct.images[0]
                        : ""
                    }
                    alt={pinnedProduct.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />

                  <div>
                    <h2 className="text-xl font-semibold">
                      {pinnedProduct.name}
                    </h2>

                    <p className="text-gray-500">
                      {pinnedProduct.brand}
                    </p>

                    <p className="text-2xl font-bold mt-2">
                      ₹{pinnedProduct.price}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProduct(pinnedProduct)}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg"
                >
                  View Product
                </button>
              </div>
            )}

            <div className="bg-white rounded-xl shadow p-5">
              <h2 className="text-2xl font-bold mb-5">
                Featured Products
              </h2>

              <div className="grid grid-cols-3 gap-5">
                <div className="h-48 rounded-lg bg-gray-200"></div>
                <div className="h-48 rounded-lg bg-gray-200"></div>
                <div className="h-48 rounded-lg bg-gray-200"></div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-span-4">
            <LiveChat />
            <RecommendationPanel />
          </div>
        </div>
      </div>

      <ProductOverlay
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}

export default LiveSession;