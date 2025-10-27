import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Google Ads",
      description: "We make Google our playground. When people search for what you sell, guess whose ad they're seeing first? Spoiler alert: it's yours. We turn search into sales and browsers into buyers.",
      features: ["Search Campaigns", "Display Advertising", "YouTube Ads", "Shopping Campaigns", "Performance Max"]
    },
    {
      title: "Meta and Instagram",
      description: "Social media isn't just about likes anymore (though we get plenty of those). We create scroll-stopping content that makes people actually stop mid-doom-scroll and think 'I need that in my life.'",
      features: ["Content Creation", "Influencer Marketing", "Story Ads", "Reels Marketing", "Community Management"]
    },
    {
      title: "Email Marketing",
      description: "Remember when people said 'email is dead'? Yeah, we didn't get that memo. We craft emails so good, people actually look forward to them. Wild concept, we know.",
      features: ["Automated Sequences", "Segmentation", "A/B Testing", "Design & Copy", "Performance Analytics"]
    },
    {
      title: "SMS Marketing",
      description: "We slide into your customers' texts (with permission, obviously). Short, sweet, and straight to the point - just like your customers' attention spans. 98% open rates don't lie.",
      features: ["Automated Flows", "Abandoned Cart Recovery", "VIP Programs", "Flash Sales", "Customer Support"]
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            We Don't Just Run Ads,<br />
            We Dominate Feeds
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/30"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
