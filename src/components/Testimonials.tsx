import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Collaborating proved to be a pivotal moment for our business trajectory. Their innovative approach has transformed our marketing efforts.",
      company: "Goli Nutrition",
      author: "Marketing Director"
    },
    {
      quote: "The results speak for themselves. We've seen a 300% increase in qualified leads and our conversion rates have never been higher.",
      company: "TechStart Inc",
      author: "CEO"
    },
    {
      quote: "Finally, an agency that actually delivers on their promises. Our ROAS has consistently stayed above 4x for the past 18 months.",
      company: "Fashion Forward",
      author: "Head of Growth"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary mb-4">Client Love</h2>
          <h3 className="text-4xl md:text-6xl font-bold">
            Don't Just Take Our Word For It
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all"
            >
              <div className="text-4xl text-primary mb-4">"</div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="border-t border-border pt-4">
                <div className="font-bold">{testimonial.company}</div>
                <div className="text-sm text-muted-foreground">{testimonial.author}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
