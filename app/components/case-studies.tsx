const cases = [
  {
    title: "E-commerce growth",
    date: "Jan 2025",
    shape: <div className="w-16 h-16 bg-white rounded-md mx-auto" />,
    description:
      "Scaled Shopify brand to 7-figure revenue with optimized Meta campaigns. Improved CVR by 59%, lowered CAC by 32% through creative testing and funnel refinement.",
  },
  {
    title: "SaaS pipeline boost",
    date: "Feb 2025",
    shape: <div className="w-16 h-16 bg-white rounded-full mx-auto" />,
    description:
      "Revamped Google Ads for a B2B SaaS, 400% increase in paid leads, 2x higher engagement via tailored landing pages.",
  },
  {
    title: "DTC awareness",
    date: "Mar 2025",
    shape: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 mx-auto">
        <polygon points="32,8 60,56 4,56" fill="#fff" />
      </svg>
    ),
    description:
      "Drove 3M+ new impressions and 5x ROAS for consumer DTC launch using a multi-channel full-funnel approach.",
  },
];

const CaseStudiesSection = () => (
  <section className="max-w-7xl mx-auto px-6 py-20">
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
      Client case studies
    </h2>
    <p className="text-lg text-gray-400 mb-12 font-semibold">
      Stories of rapid, measurable growth.
    </p>
    <div className="flex flex-col gap-12">
      {cases.map((c, i) => (
        <div key={i} className="flex flex-col md:flex-row items-start gap-6">
          {/* Left: Title & Date */}
          <div className="md:w-1/2 flex flex-col items-start">
            <div className="text-lg font-semibold text-white">{c.title}</div>
            <div className="text-sm text-gray-400">{c.date}</div>
          </div>
          {/* Center: Shape Card */}
          <div className="md:w-1/2 flex-shrink-0">
            <div className="bg-gray-100 rounded-xl flex items-center justify-center h-48 md:h-100 w-full">
              {c.shape}
            </div>
            <div className="mt-4 text-sm text-gray-400">{c.description}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CaseStudiesSection;
