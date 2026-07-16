import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold text-pink-600">
        Myntra Growth Engine
      </h1>

      <button
        onClick={() => navigate("/customer/home")}
        className="bg-pink-500 text-white px-6 py-3 rounded-xl"
      >
        Continue as Customer
      </button>
    </div>
  );
}

export default Landing;