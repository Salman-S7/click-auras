const HeroSection = () => {
  return (
    <section className="text-center mt-16 py-20 px-6">
      <div className="absolute inset-0 z-[-1] [background-size:20px_20px] [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]" />

      <div className="pointer-events-none z-[-1] absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      <div className="inline-flex items-center gap-x-2 text-sm font-medium bg-white/10 text-white backdrop-blur-sm rounded-full px-4 py-1 ring-1 ring-white/20 mx-auto mb-6">
        Results, not promises <span>🎯</span>
      </div>

      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
        Ads that don’t suck. Results that scale.
      </h1>
      <p className="mt-2 text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto">
        We build and run Meta & Google ad strategies that actually work — not
        just look pretty in a dashboard.
      </p>

      <button className="mt-12 cursor-pointer px-6 py-2 bg-white text-black rounded-full hover:opacity-80 transition">
        Get Your Free Ad Audit
      </button>

      {/* Animated growth graph container */}
      <div className="mt-28 lg:max-w-7xl border border-gray-600 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden mx-auto">
        {/* <Image
          src="/images/dashboard.jpeg"
          alt="Hero"
          width={1000}
          height={1000}
          className="w-full h-full object-cover md:block hidden"
        />
        <Image
          src="/images/hero-mobile-img.png"
          alt="Hero"
          width={1000}
          height={1000}
          className="w-full h-full object-cover object-center md:hidden block"
        /> */}

        <video
          className="w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
        >
          <source src="/videos/Click_Auras_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
