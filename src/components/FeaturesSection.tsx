import { Shield, Users, Coins, Headphones, Zap, Trophy } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "Your data and transactions are completely safe",
  },
  {
    icon: Users,
    title: "25 CR+ Users",
    description: "Join millions of players across India",
  },
  {
    icon: Coins,
    title: "Instant Withdrawals",
    description: "Get your winnings in your account instantly",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our support team is always here to help",
  },
  {
    icon: Zap,
    title: "Fast & Smooth",
    description: "Optimized gaming experience on any device",
  },
  {
    icon: Trophy,
    title: "Multiple Games",
    description: "100+ games across various categories",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="text-primary text-4xl">+</span>
            <h2 className="text-4xl md:text-6xl font-black italic text-foreground">
              WHAT WE OFFER
            </h2>
            <span className="text-accent text-4xl">+</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-card p-8 rounded-2xl border border-foreground/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-black mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
