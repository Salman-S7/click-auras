import FeatureRow from "./feature-row";

export default function FeaturesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <FeatureRow
        title="Ad creatives"
        description="Compelling graphics and copywriting built for performance."
        imgUrl="/images/ad-creatives.png"
      />
      <FeatureRow
        title="Analytics"
        description="Transparent, live dashboards so you see the real ROI."
        imgUrl="/images/analytics.png"
        reverse
      />
      <FeatureRow
        title="Optimization"
        description="Continuous improvement. Daily fine-tuning for better results."
        imgUrl="/images/optimization.png"
      />
    </section>
  );
}
