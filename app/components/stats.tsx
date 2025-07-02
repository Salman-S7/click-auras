const stats = [
  { value: "400%", label: "Avg. ROAS Lift" },
  { value: "21M", label: "Ad Impressions" },
  { value: "98%", label: "Client Retention" },
];

const StatsSection = () => (
  <section className="w-full max-w-5xl mx-auto py-12 px-4">
    <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
      {stats.map((stat, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="text-4xl md:text-5xl font-extrabold text-white">
            {stat.value}
          </div>
          <div className="text-gray-500 mt-1 text-base md:text-lg">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;
