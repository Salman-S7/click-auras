"use client";

import Image from "next/image";
import AnimatedAnalyticsCard from "./animated-card";
import AnimatedAreaChart from "./animated-chart";

const HeroSection = () => {
  return (
    <section className="text-center mt-16 py-20 px-6">
      <h1 className="text-3xl text-white md:text-4xl font-bold">
        Meta & Google Ads. Real growth.
      </h1>
      <p className="text-3xl text-gray-400 md:text-4xl font-bold">
        Strategy, execution, results. No noise.
      </p>

      <button className="mt-12 cursor-pointer px-6 py-2 bg-white text-black rounded-full hover:opacity-80 transition">
        Book Free Audit
      </button>

      {/* Animated growth graph container */}
      <div className="mt-28 lg:max-w-7xl h-[90vh] border border-white/8 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden mx-auto">
        <Image
          src="/images/hero-3.png"
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
        />
        {/* <AnimatedAnalyticsCard /> */}
        {/* <AnimatedAreaChart /> */}
        {/* <video
          src="https://videos.pexels.com/video-files/7947455/7947455-hd_1920_1080_30fps.mp4"
          className="w-full h-full object-cover object-top"
          autoPlay
          loop
          muted
        /> */}
      </div>
    </section>
  );
};

export default HeroSection;
