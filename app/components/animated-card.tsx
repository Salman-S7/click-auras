"use client";

import React, { useState, useEffect } from "react";

const AnimatedAnalyticsCard = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const metrics = [
    {
      value: "342.8k",
      label: "Ad Impressions",
      growth: "156",
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
    },
    {
      value: "48.2k",
      label: "Leads Generated",
      growth: "87",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
    },
    {
      value: "12.4k",
      label: "Conversions",
      growth: "234",
      color: "text-violet-400",
      bgColor: "bg-violet-500/10",
    },
    {
      value: "84.5k",
      label: "Revenue Generated",
      growth: "189",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
    },
    {
      value: "3.2x",
      label: "ROAS Achieved",
      growth: "78",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
      setAnimationKey((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentData = metrics[currentMetric];

  // Generate upward trending line points
  const generateUpwardTrendPoints = () => {
    const points = [];
    const width = 300;
    const height = 80;
    const time = Date.now() * 0.0005;

    for (let x = 0; x <= width; x += 10) {
      // Create upward trending line with small variations
      const baseY = height - (x / width) * 40 - 20;
      const variation = Math.sin(x * 0.02 + time) * 8;
      const y = Math.max(10, Math.min(70, baseY + variation));
      points.push(`${x},${y}`);
    }
    return points.join(" ");
  };

  const [trendPoints, setTrendPoints] = useState(generateUpwardTrendPoints());

  useEffect(() => {
    const trendInterval = setInterval(() => {
      setTrendPoints(generateUpwardTrendPoints());
    }, 200);

    return () => clearInterval(trendInterval);
  }, []);

  return (
    <div className="max-w-sm w-full sm:max-w-md lg:max-w-lg bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-800 p-4 sm:p-6 overflow-hidden relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-4 sm:mb-6">
          <div className="space-y-1 sm:space-y-2">
            <div
              key={animationKey}
              className="transform transition-all duration-1000 ease-out"
            >
              <h5
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold transition-all duration-1000 ${currentData.color}`}
              >
                {currentData.value}
              </h5>
            </div>
            <p className="text-sm sm:text-base font-medium text-gray-300 transition-all duration-1000">
              {currentData.label}
            </p>
          </div>

          <div
            className={`flex items-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-1000 ${currentData.bgColor} ${currentData.color} border border-gray-700`}
          >
            {currentData.growth}
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transform transition-transform duration-1000 hover:scale-110"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
        </div>

        {/* Animated Chart */}
        <div className="h-16 sm:h-20 lg:h-24 mb-4 sm:mb-6 relative">
          <svg className="w-full h-full" viewBox="0 0 300 80">
            {/* Gradient definition */}
            <defs>
              <linearGradient
                id="upwardGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  stopColor="rgb(34, 197, 94)"
                  stopOpacity="0.8"
                />
                <stop
                  offset="50%"
                  stopColor="rgb(59, 130, 246)"
                  stopOpacity="0.6"
                />
                <stop
                  offset="100%"
                  stopColor="rgb(6, 182, 212)"
                  stopOpacity="0.8"
                />
              </linearGradient>
              <linearGradient
                id="upwardGradientFill"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="rgb(34, 197, 94)"
                  stopOpacity="0.3"
                />
                <stop
                  offset="100%"
                  stopColor="rgb(34, 197, 94)"
                  stopOpacity="0.1"
                />
              </linearGradient>
            </defs>

            {/* Animated upward trending line */}
            <polyline
              points={trendPoints}
              fill="none"
              stroke="url(#upwardGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              className="drop-shadow-sm"
            />

            {/* Animated area fill */}
            <polygon
              points={`${trendPoints} 300,80 0,80`}
              fill="url(#upwardGradientFill)"
              className="opacity-60"
            />

            {/* Animated dots along the trend line */}
            {[60, 120, 180, 240].map((x, i) => {
              const baseY = 80 - (x / 300) * 40 - 20;
              const variation = Math.sin(x * 0.02 + Date.now() * 0.0005) * 8;
              const y = Math.max(10, Math.min(70, baseY + variation));

              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="2"
                  fill="rgb(34, 197, 94)"
                  className="opacity-80"
                  style={{
                    animation: `pulse 2s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AnimatedAnalyticsCard;
