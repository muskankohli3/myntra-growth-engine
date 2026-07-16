import { banners } from "../../services/customerService";

function Banner() {
  return (
    <div className="px-6 py-4">
      {banners.map((banner) => (
        <div
          key={banner.id}
          className="rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8"
        >
          <h2 className="text-3xl font-bold">
            {banner.title}
          </h2>

          <p className="mt-2 text-lg">
            {banner.subtitle}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Banner;