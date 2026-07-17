import { Bell, Search } from "lucide-react";

function Navbar() {
  return (
    <header className="flex items-center justify-between rounded-2xl bg-white px-6 py-4 shadow-sm border border-gray-200">
      <div className="relative w-96">
        <Search
          size={18}
          className="absolute left-4 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-xl border border-gray-300 py-2 pl-11 pr-4 focus:border-pink-500 focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell size={22} />

          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-pink-600 text-xs text-white">
            3
          </span>
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-600 font-bold text-white">
            M
          </div>

          <div>
            <p className="font-semibold">
              Muskan
            </p>

            <p className="text-sm text-gray-500">
              Seller
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;