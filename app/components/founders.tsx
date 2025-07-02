const founders = [
  {
    name: "Yash Patil",
    description:
      "Yash Patil is a co-founder with deep expertise in digital strategy and analytics. He has led multiple high-growth campaigns for DTC and SaaS brands, focusing on scalable growth and data-driven execution.",
  },
  {
    name: "Salman Shaikh",
    description:
      "Salman Shaikh is co-founder with a decade of performance marketing experience, creative strategy, and client obsession. We bring an operator’s mindset — with honesty, speed, and results that compound.",
  },
];

const FoundersSection = () => (
  <section className="md:max-w-[50%] px-6 py-16">
    <h3 className="text-2xl font-bold text-white mb-4">About our founders</h3>
    <div className="flex flex-col gap-6">
      {founders.map((f, i) => (
        <div key={i} className="mb-6">
          <div className="font-semibold text-md text-white mb-1">{f.name}</div>
          <div className="text-sm text-gray-400 leading-relaxed">
            {f.description}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FoundersSection;
