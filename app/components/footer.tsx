const footerLinks = [
  {
    heading: "Services",
    links: ["Meta Ads", "Google Ads", "Landing Pages"],
  },
  {
    heading: "Insights",
    links: ["Case Studies", "Process", "ROI Calculator"],
  },
  {
    heading: "Company",
    links: ["About", "Contact", "Book Audit"],
  },
  {
    heading: "Connect",
    links: ["LinkedIn", "Instagram", "Email"],
  },
];

const Footer = () => (
  <footer className="px-6 max-w-7xl mx-auto py-12 mt-8">
    <div className="h-px my-8 border-0 bg-gray-700"></div>
    <div className="flex flex-wrap flex-row justify-between items-center gap-6">
      {footerLinks.map((col, idx) => (
        <div key={idx}>
          <div className="font-semibold text-white mb-2">{col.heading}</div>
          <ul className="space-y-1">
            {col.links.map((link, i) => (
              <li
                key={i}
                className="text-gray-500 text-sm hover:text-white transition cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="h-px my-8 border-0 bg-gray-700"></div>

    <div className="mt-10 text-center text-xs text-gray-500">
      &copy; {new Date().getFullYear()} Click Auras. All rights reserved.
    </div>
  </footer>
);

export default Footer;
