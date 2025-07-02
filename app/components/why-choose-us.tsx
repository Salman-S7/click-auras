const features = [
  {
    label: "Transparent reporting",
    icon: (
      <svg width="32" height="32" fill="none">
        <rect x="7" y="17" width="4" height="8" rx="2" fill="#BDBDBD" />
        <rect x="14" y="12" width="4" height="13" rx="2" fill="#BDBDBD" />
        <rect x="21" y="8" width="4" height="17" rx="2" fill="#BDBDBD" />
        <path
          d="M7 25l7-5 7-4 4-3"
          stroke="#BDBDBD"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Tailored creatives",
    icon: (
      <svg width="32" height="32" fill="none">
        <rect x="7" y="21" width="18" height="2" rx="1" fill="#BDBDBD" />
        <rect x="15" y="9" width="2" height="14" rx="1" fill="#BDBDBD" />
        <path
          d="M11 13l10 10"
          stroke="#BDBDBD"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Fast communication",
    icon: (
      <svg width="32" height="32" fill="none">
        <rect
          x="8"
          y="8"
          width="16"
          height="16"
          rx="4"
          stroke="#BDBDBD"
          strokeWidth="2"
        />
        <circle cx="16" cy="16" r="2" fill="#BDBDBD" />
        <path
          d="M16 18v2"
          stroke="#BDBDBD"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Daily optimization",
    icon: (
      <svg width="32" height="32" fill="none">
        <path
          d="M16 6v4M16 22v4M6 16h4M22 16h4"
          stroke="#BDBDBD"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="16" cy="16" r="6" stroke="#BDBDBD" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "Strategic audits",
    icon: (
      <svg width="32" height="32" fill="none">
        <circle cx="16" cy="16" r="8" stroke="#BDBDBD" strokeWidth="2" />
        <path
          d="M21 21l5 5"
          stroke="#BDBDBD"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="16" cy="16" r="2" fill="#BDBDBD" />
      </svg>
    ),
    // highlight: true,
  },
  {
    label: "Growth-focused",
    icon: (
      <svg width="32" height="32" fill="none">
        <path
          d="M8 24l6-8 4 6 6-10"
          stroke="#BDBDBD"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="8" cy="24" r="2" fill="#BDBDBD" />
        <circle cx="14" cy="16" r="2" fill="#BDBDBD" />
        <circle cx="18" cy="22" r="2" fill="#BDBDBD" />
        <circle cx="24" cy="12" r="2" fill="#BDBDBD" />
      </svg>
    ),
  },
  {
    label: "Expert team",
    icon: (
      <svg width="32" height="32" fill="none">
        <circle cx="16" cy="13" r="5" stroke="#BDBDBD" strokeWidth="2" />
        <path
          d="M6 26c0-4 4-6 10-6s10 2 10 6"
          stroke="#BDBDBD"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    label: "Partnerships",
    icon: (
      <svg width="32" height="32" fill="none">
        <path d="M10 20l6 6 6-6" stroke="#BDBDBD" strokeWidth="2" />
        <circle cx="16" cy="14" r="4" stroke="#BDBDBD" strokeWidth="2" />
      </svg>
    ),
  },
];

const WhyChooseUsSection = () => (
  <section className="w-full max-w-5xl mx-auto px-4 py-16">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 md:gap-x-8 justify-items-center">
      {features.map((f, i) => (
        <div
          key={i}
          className={`flex min-h-28 min-w-40 flex-col items-center justify-center text-center px-3 py-2 rounded-lg transition border-2 border-transparent hover:border-blue-400 `}
        >
          <div className="mb-2">{f.icon}</div>
          <div className={`mt-1 text-sm md:text-base font-medium text-white`}>
            {f.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUsSection;
