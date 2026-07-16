import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="px-6 py-4 bg-white">
      <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3">
        <Search className="w-5 h-5 text-gray-500" />

        <input
          type="text"
          placeholder="Search for products, brands and more"
          className="bg-transparent outline-none w-full"
        />
      </div>
    </div>
  );
}

export default SearchBar;