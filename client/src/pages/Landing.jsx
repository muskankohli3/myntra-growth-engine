import { useNavigate } from "react-router-dom";

import Hero from "../components/landing/Hero";
import RoleCard from "../components/landing/RoleCard";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6">

      <Hero />

      <div className="mt-16 flex flex-col md:flex-row gap-8">

        <RoleCard
          title="Customer"
          description="Explore live shopping sessions, discover products, and shop with confidence."
          onClick={() => navigate("/customer/home")}
        />

        <RoleCard
          title="Seller"
          description="Grow your business using AI-powered recommendations and live commerce."
          onClick={() => navigate("/seller/dashboard")}
        />

      </div>

    </div>
  );
}

export default Landing;