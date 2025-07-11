const ServicesSection = () => (
  <section className="w-full md:max-w-7xl px-6 mx-auto py-12">
    <div className="flex flex-col md:flex-row gap-8 justify-between items-stretch">
      <div className="hover:border-blue-900 transition-all duration-300 bg-gray-100 border border-white/8 bg-[url('/images/meta-logo.png')] bg-cover bg-center min-h-[600px] flex-1 rounded-2xl flex flex-col items-center justify-end py-12 px-4 min-w-[250px] max-w-sm mx-auto shadow-sm">
        <div className="text-white text-lg md:text-2xl font-bold leading-tight text-center">
          <div className="text-gray-400 text-sm font-semibold">Meta Ads</div>
          Targeted Facebook & Instagram campaigns.
        </div>
      </div>

      <div className="hover:border-blue-900 transition-all duration-300 bg-gray-100 border border-white/8 bg-[url('/images/google-logo.png')] bg-cover bg-center min-h-[600px] flex-1 rounded-2xl flex flex-col items-center justify-end py-12 px-4 min-w-[250px] max-w-sm mx-auto shadow-sm">
        <div className="text-white text-lg md:text-2xl font-bold leading-tight text-center">
          <div className="text-gray-400 text-sm font-semibold">Google Ads</div>
          Unlock demand with search & display with us.
        </div>
      </div>

      <div className="hover:border-blue-900 transition-all duration-300 bg-gray-100 border bg-size-cover border-white/8 bg-[url('/images/landing-page.png')] bg-cover bg-center min-h-[600px] flex-1 rounded-2xl flex flex-col items-center justify-end py-12 px-4 min-w-[250px] max-w-sm mx-auto shadow-sm">
        <div className="text-white text-lg md:text-2xl font-bold leading-tight text-center">
          <div className="text-gray-400 text-sm font-semibold">
            Landing Pages
          </div>
          High-converting pages that convert traffic.
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
