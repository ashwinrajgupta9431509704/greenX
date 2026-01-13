import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Flame, 
  Leaf, 
  TrendingUp, 
  Users, 
  Truck, 
  Factory, 
  BadgeIndianRupee, 
  Wind,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const Index = () => {
  const steps = [
    {
      icon: Users,
      title: "Farmer Registration",
      description: "Farmers sign up through our network or local partners",
    },
    {
      icon: Truck,
      title: "Collection & Baling",
      description: "Our team collects and bales the stubble using rented machinery",
    },
    {
      icon: Factory,
      title: "Processing",
      description: "Biomass is processed and transported to industrial buyers",
    },
    {
      icon: BadgeIndianRupee,
      title: "Farmer Payment",
      description: "Farmers receive timely payment for their crop residue",
    },
  ];

  const impactMetrics = [
    { value: "10,000+", label: "Farmers Enrolled" },
    { value: "50,000", label: "Tonnes Stubble Collected" },
    { value: "75%", label: "Reduction in Field Burning" },
    { value: "₹2Cr+", label: "Farmer Income Generated" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 section-padding bg-gradient-to-b from-cream to-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              <span>Climate-Positive Agriculture</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              Turning Crop Waste into Clean Energy — 
              <span className="text-primary"> Without Burning Fields</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              We help farmers clear stubble on time, earn additional income, and contribute to cleaner air across North India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Partner with Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/operations">How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
                The Stubble Burning Crisis
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Every year, millions of tonnes of crop residue are burned across Punjab, Haryana, and UP. This causes severe air pollution affecting millions, contributes to climate change, and depletes soil health.
              </p>
              <ul className="space-y-4">
                {[
                  "Farmers have only 15-20 days between harvest cycles",
                  "Burning is the cheapest and fastest solution they know",
                  "No viable economic alternative has been scaled yet",
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Flame className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <p className="text-3xl md:text-4xl font-bold text-primary">32M</p>
                  <p className="text-sm text-muted-foreground mt-1">Tonnes burned annually</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-3xl md:text-4xl font-bold text-primary">480+</p>
                  <p className="text-sm text-muted-foreground mt-1">AQI in Delhi (Nov)</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-3xl md:text-4xl font-bold text-primary">30%</p>
                  <p className="text-sm text-muted-foreground mt-1">Winter pollution from stubble</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-3xl md:text-4xl font-bold text-primary">15</p>
                  <p className="text-sm text-muted-foreground mt-1">Days clearance window</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Our Solution
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've built a farmer-first model that makes stubble management profitable and hassle-free.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Economic Incentive",
                description: "We pay farmers for their stubble, turning a liability into an income source.",
              },
              {
                icon: Truck,
                title: "Logistics Support",
                description: "Our team handles collection, baling, and transportation with rented machinery.",
              },
              {
                icon: Wind,
                title: "Clean Energy",
                description: "Biomass is sold to power plants and industries, replacing coal and fossil fuels.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A simple four-step process from field to factory
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-2xl p-6 border border-border h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Our Impact So Far
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Measurable progress towards cleaner air and farmer prosperity
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-primary-foreground/10">
                <p className="text-3xl md:text-4xl font-bold mb-2">{metric.value}</p>
                <p className="text-sm text-primary-foreground/80">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-secondary to-cream rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether you're a farmer, FPO, panchayat, or industry buyer, we'd love to partner with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Contact Us Today
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
