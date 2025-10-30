import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Calculator } from "lucide-react";

const ROICalculator = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState(50000);
  const [adSpend, setAdSpend] = useState(5000);
  const [desiredRoas, setDesiredRoas] = useState(4.9);
  const [averageOrderValue, setAverageOrderValue] = useState(85);

  const projectedRevenue = adSpend * desiredRoas;
  const totalOrders = Math.round(projectedRevenue / averageOrderValue);
  const projectedProfit = projectedRevenue - adSpend;
  const roi = ((projectedProfit / adSpend) * 100).toFixed(1);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
            <Calculator className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-4xl font-bold mb-4 md:text-5xl">ROI Calculator</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            See what RunAds AI could do for your business. These projections are based on our average client results.
          </p>
        </div>

        <Card className="max-w-5xl mx-auto p-8 md:p-12 bg-card/80 backdrop-blur border-border shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Current Monthly Revenue */}
            <div>
              <label className="text-sm font-semibold mb-3 block text-foreground">
                Current Monthly Revenue
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-muted-foreground">
                  $
                </span>
                <Input
                  type="number"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                  className="text-2xl font-bold h-16 pl-10 bg-background border-border"
                />
              </div>
            </div>

            {/* Desired ROAS Slider */}
            <div>
              <label className="text-sm font-semibold mb-3 block text-foreground">
                Desired ROAS: {desiredRoas.toFixed(1)}x
              </label>
              <div className="pt-2">
                <Slider
                  value={[desiredRoas]}
                  onValueChange={(value) => setDesiredRoas(value[0])}
                  min={1}
                  max={8}
                  step={0.1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>1.0x</span>
                  <span>8.0x</span>
                </div>
              </div>
            </div>

            {/* Planned Monthly Ad Spend */}
            <div>
              <label className="text-sm font-semibold mb-3 block text-foreground">
                Planned Monthly Ad Spend
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-muted-foreground">
                  $
                </span>
                <Input
                  type="number"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="text-2xl font-bold h-16 pl-10 bg-background border-border"
                />
              </div>
            </div>

            {/* Average Order Value */}
            <div>
              <label className="text-sm font-semibold mb-3 block text-foreground">
                Average Order Value
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-muted-foreground">
                  $
                </span>
                <Input
                  type="number"
                  value={averageOrderValue}
                  onChange={(e) => setAverageOrderValue(Number(e.target.value))}
                  className="text-2xl font-bold h-16 pl-10 bg-background border-border"
                />
              </div>
            </div>
          </div>

          {/* Calculate Button */}
          <Button className="w-full h-14 text-lg mb-8 bg-primary hover:bg-primary/90 shadow-[0_0_30px_hsl(var(--primary)/0.4)]">
            Calculate My ROI
          </Button>

          {/* Results Grid */}
          <div className="grid md:grid-cols-4 gap-6 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2">Projected Revenue</div>
              <div className="text-2xl md:text-3xl font-bold text-primary">
                ${projectedRevenue.toLocaleString()}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2">Total Orders</div>
              <div className="text-2xl md:text-3xl font-bold text-foreground">
                {totalOrders.toLocaleString()}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2">Projected Profit</div>
              <div className="text-2xl md:text-3xl font-bold text-primary">
                ${projectedProfit.toLocaleString()}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2">ROI</div>
              <div className="text-2xl md:text-3xl font-bold text-primary">
                {roi}%
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ROICalculator;
