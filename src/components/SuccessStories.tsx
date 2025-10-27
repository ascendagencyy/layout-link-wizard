import { Card } from "@/components/ui/card";

const SuccessStories = () => {
  return (
    <section id="testimonials" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary mb-4">Success Stories</h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-4">
            Real Results, Real Brands
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            From startup launches to enterprise expansions - here's how we've helped brands 
            dominate their markets and leave competitors wondering what hit them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 bg-background border-border hover:border-primary/50 transition-all">
            <div className="mb-4">
              <span className="text-sm text-muted-foreground">Apparel</span>
              <h4 className="text-2xl font-bold mt-2">YoungLA</h4>
              <p className="text-3xl font-bold text-primary mt-4">$46M+/yr Revenue</p>
            </div>
            <p className="text-muted-foreground mb-6">
              Transformed a growing fitness apparel brand into a powerhouse, scaling from 
              $30M to $195M in annual revenue in just 3 years.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Revenue Growth:</span>
                <span className="text-sm font-bold text-primary">+550%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Scale Achievement:</span>
                <span className="text-sm font-bold">3 years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Market Domination:</span>
                <span className="text-sm font-bold">Fitness Apparel</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-background border-border hover:border-primary/50 transition-all">
            <div className="mb-4">
              <span className="text-sm text-muted-foreground">E-commerce</span>
              <h4 className="text-2xl font-bold mt-2">Brand X</h4>
              <p className="text-3xl font-bold text-primary mt-4">$12M+/yr Revenue</p>
            </div>
            <p className="text-muted-foreground mb-6">
              Launched a DTC brand from zero to 8-figure revenue with strategic Google Ads 
              and Meta campaigns that dominated their niche.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Revenue Growth:</span>
                <span className="text-sm font-bold text-primary">+1200%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Time to Scale:</span>
                <span className="text-sm font-bold">18 months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">ROAS:</span>
                <span className="text-sm font-bold">4.2x</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-background border-border hover:border-primary/50 transition-all">
            <div className="mb-4">
              <span className="text-sm text-muted-foreground">Tech SaaS</span>
              <h4 className="text-2xl font-bold mt-2">SaaS Pro</h4>
              <p className="text-3xl font-bold text-primary mt-4">5000+ Leads/mo</p>
            </div>
            <p className="text-muted-foreground mb-6">
              Generated qualified enterprise leads at scale with precision targeting and 
              conversion-optimized landing pages.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Lead Growth:</span>
                <span className="text-sm font-bold text-primary">+850%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Cost Per Lead:</span>
                <span className="text-sm font-bold">-62%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Conversion Rate:</span>
                <span className="text-sm font-bold">23%</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
