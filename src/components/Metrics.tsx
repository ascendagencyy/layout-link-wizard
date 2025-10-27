const Metrics = () => {
  const stats = [
    { label: "Success Rate", value: "94.42%", verified: true },
    { label: "Total Revenue Generated", value: "$2B+", verified: true },
    { label: "Average ROAS", value: "2100%", verified: true },
    { label: "Client Retention", value: "89.2%", verified: true }
  ];

  const detailedMetrics = [
    { label: "Campaign Success Rate", value: "97.8%" },
    { label: "Goal Achievement", value: "94.5%" },
    { label: "ROI Positive Rate", value: "96.1%" },
    { label: "Ad Spend Managed", value: "$201M" }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary mb-4">Performance Metrics</h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-4">
            Numbers Don't Lie<br />
            <span className="text-muted-foreground">(And Neither Do We)</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-card border border-border text-center hover:border-primary/50 transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
              {stat.verified && (
                <div className="flex items-center justify-center gap-1">
                  <span className="text-xs text-primary">✓</span>
                  <span className="text-xs text-muted-foreground">Verified</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-8 md:p-12">
          <h4 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Digital Marketing With A Remarkable Success Rate
          </h4>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {detailedMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground">
              <span className="text-primary font-bold">94.42% Success Rate.</span> Our proven approach ensures
              consistent performance across all campaigns. Our clients have seen unprecedented growth and market expansion.
            </p>
            <p className="text-lg text-muted-foreground">
              Witness The Impact Of Our Marketing Success As We Close In On <span className="text-primary font-bold">$2B In Sales</span> Generated
              Through Our Marketing Efforts. Our Agency Average Return On Ad Spend Works Out To <span className="text-primary font-bold">2100%</span> -
              meaning for every $1 spent, our clients see $21 in return.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
