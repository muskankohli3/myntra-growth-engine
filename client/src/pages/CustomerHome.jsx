import Navbar from "../components/customer/Navbar";
import SearchBar from "../components/customer/SearchBar";
import CategorySection from "../components/customer/CategorySection";
import Banner from "../components/customer/Banner";
import RecommendedProducts from "../components/customer/RecommendedProducts";
import LiveShoppingSection from "../components/customer/LiveShoppingSection";
import BottomNavigation from "../components/customer/BottomNavigation";

function CustomerHome() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <CategorySection />
      <Banner />
      <RecommendedProducts />
      <LiveShoppingSection />
      <BottomNavigation />
    </div>
  );
}

export default CustomerHome;