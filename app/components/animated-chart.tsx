// components/AnimatedAreaChart.tsx
"use client";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect, useRef } from "react";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Legend
);

const labels = Array.from({ length: 30 }, (_, i) => `${i + 1} Aug`);

const getRandomData = () => labels.map(() => Math.floor(Math.random() * 1000));

const AnimatedAreaChart = () => {
  const chartRef = useRef<any>(null);

  const data = {
    labels,
    datasets: [
      {
        label: "Chosen period",
        data: getRandomData(),
        fill: true,
        borderColor: "#2DD4BF",
        backgroundColor: "rgba(45, 212, 191, 0.1)",
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Last period",
        data: getRandomData(),
        fill: true,
        borderColor: "#F59E0B",
        backgroundColor: "rgba(245, 158, 11, 0.1)",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 3000,
      easing: "easeInOutQuad",
      loop: true, // Custom trick below to simulate loop
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#999" },
        grid: { color: "#333" },
      },
      x: {
        ticks: { color: "#999" },
        grid: { display: false },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#ccc",
        },
      },
    },
  };

  // 🌀 Simulate a continuous loop by updating the chart data every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!chartRef.current) return;
      const chart = chartRef.current;
      chart.data.datasets.forEach((dataset: any) => {
        dataset.data = getRandomData();
      });
      chart.update();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[400px] bg-[#1a1a1a] rounded-xl p-4 shadow-lg">
      <Line ref={chartRef} options={options} data={data} />
    </div>
  );
};

export default AnimatedAreaChart;
