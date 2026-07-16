import { Home, Tv, ShoppingBag, User } from "lucide-react";

function BottomNavigation() {
  return (
    <div className="sticky bottom-0 bg-white border-t py-3">
      <div className="flex justify-around">
        <button className="flex flex-col items-center text-pink-600">
          <Home size={22} />
          <span className="text-xs">Home</span>
        </button>

        <button className="flex flex-col items-center">
          <Tv size={22} />
          <span className="text-xs">Live</span>
        </button>

        <button className="flex flex-col items-center">
          <ShoppingBag size={22} />
          <span className="text-xs">Bag</span>
        </button>

        <button className="flex flex-col items-center">
          <User size={22} />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
}

export default BottomNavigation;