import { useState } from "react";
import { Eye, Heart, Flame } from "lucide-react";

function LiveEngagement() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(3100);

  const handleLike = () => {
    if (liked) {
      setLikes((prev) => prev - 1);
    } else {
      setLikes((prev) => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="bg-white rounded-xl shadow-md px-5 py-4 flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
          <span className="font-bold text-red-600">LIVE</span>
        </div>

        <div className="flex items-center gap-2 text-gray-700">
          <Eye size={20} />
          <span className="font-medium">12.4K Watching</span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        <button
          onClick={handleLike}
          className="flex items-center gap-2 transition hover:scale-105"
        >
          <Heart
            size={20}
            fill={liked ? "#ec4899" : "none"}
            className={liked ? "text-pink-500" : "text-gray-700"}
          />

          <span className="font-medium">
            {(likes / 1000).toFixed(1)}K Likes
          </span>
        </button>

        <div className="flex items-center gap-2 text-orange-500 font-semibold">
          <Flame size={20} />
          <span>Trending #2</span>
        </div>
      </div>
    </div>
  );
}

export default LiveEngagement;