import { Button } from "@/components/ui/button";
import { Search, Menu, Settings } from "lucide-react";

export const MusicHeader = () => {
  return (
    <header className="sticky top-0 z-50 px-4 py-3 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-music-purple to-music-pink flex items-center justify-center">
              <span className="text-white font-bold text-sm">OT</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">OuterTune</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
