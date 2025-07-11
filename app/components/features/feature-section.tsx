import FeatureRow from "./feature-row";

/**
 * A section containing 3 feature rows.
 *
 * The first row has a heading "Ad creatives" and describes how we create
 * compelling graphics and copywriting for performance.
 *
 * The second row has a heading "Analytics" and describes how we offer
 * transparent, live dashboards so the user can see the real ROI.
 *
 * The third row has a heading "Optimization" and describes how we
 * continuously improve and fine-tune the ads for better results.
 */
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
