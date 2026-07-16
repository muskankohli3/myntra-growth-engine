import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <h1>Myntra Growth Engine</h1>
      </header>

      <main>
        <h2>Choose your role</h2>

        <button onClick={() => navigate("/customer/home")}>
          Continue as Customer
        </button>

        <button onClick={() => navigate("/seller/dashboard")}>
          Continue as Seller
        </button>
      </main>
    </div>
  );
}

export default Landing;