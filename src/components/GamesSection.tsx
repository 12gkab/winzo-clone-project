import { Gamepad2, Target, Brain, Dice5, Puzzle, Swords } from "lucide-react";

const gameCategories = [
  {
    icon: Gamepad2,
    name: "Arcade Games",
    count: "25+ Games",
    color: "from-primary to-accent",
  },
  {
    icon: Target,
    name: "Action Games",
    count: "20+ Games",
    color: "from-accent to-secondary",
  },
  {
    icon: Brain,
    name: "Strategy Games",
    count: "15+ Games",
    color: "from-secondary to-primary",
  },
  {
    icon: Dice5,
    name: "Casual Games",
    count: "30+ Games",
    color: "from-primary to-secondary",
  },
  {
    icon: Puzzle,
    name: "Puzzle Games",
    count: "18+ Games",
    color: "from-accent to-primary",
  },
  {
    icon: Swords,
    name: "Battle Games",
    count: "12+ Games",
    color: "from-secondary to-accent",
  },
];

export const GamesSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black italic text-foreground mb-4">
            100+ GAMES
          </h2>
          <p className="text-xl text-foreground/70 font-medium">
            Play your favorite games and win real cash
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gameCategories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl p-8 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
              
              {/* Border glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-colors" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-foreground/10 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-7 h-7 text-foreground group-hover:text-primary transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black mb-2 text-foreground">
                  {category.name}
                </h3>
                <p className="text-foreground/60 font-medium">
                  {category.count}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
