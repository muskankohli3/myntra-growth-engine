import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function SellerLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-6">
        <Navbar />

        <div className="mt-6 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

export default SellerLayout;