import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

const ROICalculator = () => {
  const [revenue, setRevenue] = useState(50000);
  const [roas, setRoas] = useState(4);

  const projectedRevenue = revenue * roas;
  const adSpend = revenue * 0.2;
  const profit = projectedRevenue - adSpend;

  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            ROI Calculator
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what we could do for your business. These projections are based on our average client results.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto p-8 md:p-12 bg-background border-border">
          <div className="space-y-8">
            <div>
              <label className="text-sm font-medium mb-3 block">
                Current Monthly Revenue
              </label>
              <Input
                type="number"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="text-2xl font-bold h-14 bg-card border-border"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-3 block">
                Desired ROAS: {roas}x
              </label>
              <Slider
                value={[roas]}
                onValueChange={(value) => setRoas(value[0])}
                min={1}
                max={8}
                step={0.5}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>1x</span>
                <span>8x</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Projected Revenue</div>
                <div className="text-2xl font-bold text-primary">
                  ${projectedRevenue.toLocaleString()}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Est. Ad Spend</div>
                <div className="text-2xl font-bold">
                  ${adSpend.toLocaleString()}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Projected Profit</div>
                <div className="text-2xl font-bold text-primary">
                  ${profit.toLocaleString()}
                </div>
              </div>
            </div>

            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_hsl(var(--primary)/0.5)] h-14 text-lg"
            >
              Get Your Custom Strategy
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ROICalculator;
