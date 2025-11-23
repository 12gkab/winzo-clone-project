import { MusicHeader } from "@/components/MusicHeader";
import { MusicLibrary } from "@/components/MusicLibrary";
import { MusicPlayer } from "@/components/MusicPlayer";

const Music = () => {
  return (
    <div className="min-h-screen bg-background">
      <MusicHeader />
      <MusicLibrary />
      <MusicPlayer />
    </div>
  );
};

export default Music;
