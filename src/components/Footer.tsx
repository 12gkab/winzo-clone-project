import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-12 px-6 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="text-3xl font-black italic text-foreground mb-4">
              WIN<span className="text-primary">ZO</span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              India's most loved social gaming app with 100+ games
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Games</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Careers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-foreground font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-foreground font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-primary/20 flex items-center justify-center transition-colors group">
                <Facebook className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-primary/20 flex items-center justify-center transition-colors group">
                <Twitter className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-primary/20 flex items-center justify-center transition-colors group">
                <Instagram className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-primary/20 flex items-center justify-center transition-colors group">
                <Youtube className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-foreground/10 text-center">
          <p className="text-foreground/50 text-sm">
            © 2024 WinZO Games. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
