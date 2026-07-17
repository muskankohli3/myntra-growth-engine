import { Routes, Route, Navigate } from "react-router-dom";

import SellerDashboard from "./pages/SellerDashboard";
import LiveStudio from "./pages/LiveStudio";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SellerDashboard />} />

      <Route
        path="/live-studio"
        element={<LiveStudio />}
      />

      <Route
        path="/analytics"
        element={<Analytics />}
      />

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}

export default App;