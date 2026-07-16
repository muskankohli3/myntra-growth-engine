import { Bell, Heart, ShoppingBag } from "lucide-react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-pink-600">
        Myntra
      </h1>

      <div className="flex items-center gap-6">
        <Bell className="w-6 h-6 cursor-pointer" />
        <Heart className="w-6 h-6 cursor-pointer" />
        <ShoppingBag className="w-6 h-6 cursor-pointer" />
      </div>
    </nav>
  );
}

export default Navbar;