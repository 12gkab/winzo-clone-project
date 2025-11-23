import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, SkipBack, SkipForward, Heart, Shuffle, Repeat, Volume2 } from "lucide-react";
import albumPlaceholder from "@/assets/album-placeholder.png";

export const MusicPlayer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Progress bar */}
        <div className="px-4 pt-2">
          <Slider defaultValue={[33]} max={100} step={1} className="w-full" />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>1:23</span>
            <span>3:45</span>
          </div>
        </div>

        {/* Player controls */}
        <div className="px-4 py-3 flex items-center justify-between gap-4">
          {/* Song info */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <img 
              src={albumPlaceholder} 
              alt="Album art" 
              className="w-14 h-14 rounded-lg object-cover"
            />
            <div className="min-w-0 flex-1">
              <h4 className="font-semibold text-sm text-foreground truncate">Song Title</h4>
              <p className="text-xs text-muted-foreground truncate">Artist Name</p>
            </div>
            <Button variant="ghost" size="icon" className="shrink-0">
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          {/* Playback controls */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button 
              size="icon" 
              className="h-10 w-10 rounded-full bg-primary hover:bg-primary/90"
            >
              <Play className="h-5 w-5 fill-current" />
            </Button>
            <Button variant="ghost" size="icon">
              <SkipForward className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Repeat className="h-4 w-4" />
            </Button>
          </div>

          {/* Volume control */}
          <div className="hidden lg:flex items-center gap-2 flex-1 justify-end">
            <Volume2 className="h-4 w-4 text-muted-foreground" />
            <Slider defaultValue={[66]} max={100} step={1} className="w-24" />
          </div>
        </div>
      </div>
    </div>
  );
};
