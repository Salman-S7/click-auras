import FeatureRow from "./feature-row";

export default function FeaturesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <FeatureRow
        title="Ad creatives"
        description="Compelling graphics and copywriting built for performance."
        iconType="square"
      />
      <FeatureRow
        title="Analytics"
        description="Transparent, live dashboards so you see the real ROI."
        iconType="circle"
        reverse
      />
      <FeatureRow
        title="Optimization"
        description="Continuous improvement. Daily fine-tuning for better results."
        iconType="triangle"
      />
    </section>
  );
}
