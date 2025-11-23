import { Button } from "@/components/ui/button";
import { Download, Smartphone } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";
import celebrity from "@/assets/celebrity.png";
import qrCode from "@/assets/qr-code.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-12 overflow-hidden">
      {/* Background with gradient split */}
      <div className="absolute inset-0 bg-gradient-hero -z-10" />
      
      {/* Decorative angular elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/30 to-transparent -skew-x-12 -translate-x-24" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-purple -skew-x-12 translate-x-24" />
      
      {/* Language text overlay effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 text-2xl font-bold text-foreground rotate-12">ENGLISH</div>
        <div className="absolute top-40 left-20 text-2xl font-bold text-foreground -rotate-6">हिन्दी</div>
        <div className="absolute top-60 left-5 text-2xl font-bold text-foreground rotate-3">ગુજરાતી</div>
        <div className="absolute bottom-40 left-32 text-2xl font-bold text-foreground -rotate-12">தமிழ்</div>
        <div className="absolute top-32 right-20 text-2xl font-bold text-foreground rotate-6">తెలుగు</div>
        <div className="absolute top-52 right-10 text-2xl font-bold text-foreground -rotate-3">ENGLISH</div>
        <div className="absolute bottom-52 right-28 text-2xl font-bold text-foreground rotate-12">മലയാളം</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Celebrity & Phone */}
          <div className="relative flex items-center justify-center lg:justify-start">
            <div className="relative w-full max-w-xl">
              {/* Celebrity image */}
              <div className="absolute -left-8 md:-left-16 top-1/2 -translate-y-1/2 w-2/5 z-10">
                <img 
                  src={celebrity} 
                  alt="Celebrity endorsement" 
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
              
              {/* Phone mockup */}
              <div className="relative z-20 pl-16 md:pl-24">
                <img 
                  src={heroPhone} 
                  alt="WinZo Games App" 
                  className="w-full h-auto drop-shadow-2xl animate-float"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-block">
              <Button 
                variant="outline" 
                size="sm"
                className="border-foreground/30 text-foreground hover:bg-foreground/10 mb-4"
              >
                <Smartphone className="mr-2 h-4 w-4" />
                DOWNLOAD FREE APP
              </Button>
            </div>

            <h1 className="text-5xl md:text-7xl font-black italic leading-tight">
              YOUR FAVOURITE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/80">
                ENTERTAINMENT
              </span><br />
              <span className="text-primary">APP</span>
            </h1>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-foreground">15+</div>
                <div className="text-sm md:text-base text-foreground/80 font-medium mt-1">LANGUAGES</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-foreground">4.7★</div>
                <div className="text-sm md:text-base text-foreground/80 font-medium mt-1">RATED</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-foreground">25 CR+</div>
                <div className="text-sm md:text-base text-foreground/80 font-medium mt-1">USERS</div>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="bg-foreground/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
              <div className="flex flex-col items-center gap-4">
                <img 
                  src={qrCode} 
                  alt="QR Code" 
                  className="w-40 h-40 bg-white p-4 rounded-xl"
                />
                <div className="text-center">
                  <p className="text-foreground font-bold text-sm mb-1">SCAN CODE TO DOWNLOAD APP</p>
                  <p className="text-foreground/70 text-xs">
                    Facing issues with QR code? <a href="#" className="text-primary underline">Get app link on SMS</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
