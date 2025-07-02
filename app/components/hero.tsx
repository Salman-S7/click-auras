const HeroSection = () => {
  return (
    <div className="text-center py-20 px-6">
      <h1 className="text-3xl text-white md:text-4xl font-bold">
        Meta & Google Ads. Real growth.
      </h1>
      <p className="text-3xl text-gray-500 md:text-4xl font-bold">
        Strategy, execution, results. No noise.
      </p>

      <button className="mt-12 cursor-pointer px-6 py-2 bg-white text-black rounded-full hover:opacity-80 transition">
        Book Free Audit
      </button>

      <div className="mt-28 lg:max-w-7xl h-[80vh] bg-gray-100 rounded-xl flex items-center justify-center">
        <span className="text-3xl text-gray-300 font-bold">🟧 ⚪ 🔺</span>
      </div>
    </div>
  );
};

export default HeroSection;
