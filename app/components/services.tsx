const services = [
  {
    icon: <div className="w-16 h-16 bg-white rounded-md mx-auto" />,
    label: "Meta Ads",
    headline: "Targeted Facebook & Instagram campaigns.",
  },
  {
    icon: <div className="w-16 h-16 bg-white rounded-full mx-auto" />,
    label: "Google Ads",
    headline: "Unlock demand with search & display with us.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 mx-auto">
        <polygon points="32,8 60,56 4,56" fill="#fff" />
      </svg>
    ),
    label: "Landing Pages",
    headline: "High-converting pages that convert traffic.",
  },
];

const ServicesSection = () => (
  <section className="w-full md:max-w-7xl px-6 mx-auto py-12">
    <div className="flex flex-col md:flex-row gap-8 justify-between items-stretch">
      {services.map((service, i) => (
        <div
          key={i}
          className="bg-gray-100 min-h-[600px] flex-1 rounded-2xl flex flex-col items-center justify-between py-12 px-4 min-w-[250px] max-w-sm mx-auto shadow-sm"
        >
          {service.icon}

          <div className="text-black text-lg md:text-2xl font-bold leading-tight text-center">
            <div className="text-gray-400 text-sm font-semibold">
              {service.label}
            </div>
            {service.headline}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
