import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import CustomerHome from "../pages/CustomerHome";
import LiveDiscovery from "../pages/LiveDiscovery";
import LiveSession from "../pages/LiveSession";
import Checkout from "../pages/Checkout";
import OrderSuccess from "../pages/OrderSuccess";

import SellerDashboard from "../pages/SellerDashboard";
import LiveStudio from "../pages/LiveStudio";
import Analytics from "../pages/Analytics";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing */}
        <Route path="/" element={<Landing />} />

        {/* Customer Routes */}
        <Route path="/customer/home" element={<CustomerHome />} />
        <Route path="/customer/discovery" element={<LiveDiscovery />} />
        <Route path="/customer/live" element={<LiveSession />} />
        <Route path="/customer/checkout" element={<Checkout />} />
        <Route path="/customer/order-success" element={<OrderSuccess />} />

        {/* Seller Routes */}
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/seller/live-studio" element={<LiveStudio />} />
        <Route path="/seller/analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;