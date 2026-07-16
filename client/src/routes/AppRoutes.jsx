import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import CustomerHome from "../pages/CustomerHome";
import LiveDiscovery from "../pages/LiveDiscovery";
import LiveSession from "../pages/LiveSession";
import Checkout from "../pages/Checkout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/customer/home" element={<CustomerHome />} />
        <Route path="/customer/discovery" element={<LiveDiscovery />} />
        <Route path="/customer/live" element={<LiveSession />} />
        <Route path="/customer/checkout" element={<Checkout />} />
        <Route path="/seller/dashboard" element={<h1>Seller Dashboard</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;