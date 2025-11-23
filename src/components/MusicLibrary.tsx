import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, MoreVertical } from "lucide-react";
import albumPlaceholder from "@/assets/album-placeholder.png";

const songs = [
  { id: 1, title: "Midnight Dreams", artist: "Luna Artist", duration: "3:45", album: "Night Sessions" },
  { id: 2, title: "Electric Pulse", artist: "Nova Sound", duration: "4:12", album: "Digital Waves" },
  { id: 3, title: "Cosmic Journey", artist: "Star Collective", duration: "5:20", album: "Space Odyssey" },
  { id: 4, title: "Neon Lights", artist: "City Beats", duration: "3:30", album: "Urban Dreams" },
  { id: 5, title: "Ocean Waves", artist: "Ambient Flow", duration: "6:15", album: "Nature Sounds" },
];

const albums = [
  { id: 1, title: "Night Sessions", artist: "Luna Artist", songs: 12 },
  { id: 2, title: "Digital Waves", artist: "Nova Sound", songs: 8 },
  { id: 3, title: "Space Odyssey", artist: "Star Collective", songs: 10 },
  { id: 4, title: "Urban Dreams", artist: "City Beats", songs: 15 },
];

export const MusicLibrary = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 pb-32">
      <Tabs defaultValue="songs" className="w-full">
        <TabsList className="w-full justify-start mb-6">
          <TabsTrigger value="songs">Songs</TabsTrigger>
          <TabsTrigger value="albums">Albums</TabsTrigger>
          <TabsTrigger value="artists">Artists</TabsTrigger>
          <TabsTrigger value="playlists">Playlists</TabsTrigger>
        </TabsList>

        <TabsContent value="songs" className="space-y-2">
          {songs.map((song) => (
            <Card 
              key={song.id} 
              className="p-3 hover:bg-music-surface-variant transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img 
                    src={albumPlaceholder} 
                    alt={song.album} 
                    className="w-12 h-12 rounded-md object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-md">
                    <Play className="h-5 w-5 text-white fill-current" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground truncate">{song.title}</h4>
                  <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
                </div>
                <span className="text-sm text-muted-foreground">{song.duration}</span>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="albums" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {albums.map((album) => (
            <Card 
              key={album.id} 
              className="p-4 hover:bg-music-surface-variant transition-colors cursor-pointer group"
            >
              <div className="relative mb-3">
                <img 
                  src={albumPlaceholder} 
                  alt={album.title} 
                  className="w-full aspect-square rounded-lg object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                  <Button 
                    size="icon" 
                    className="h-12 w-12 rounded-full bg-primary hover:bg-primary/90"
                  >
                    <Play className="h-6 w-6 fill-current" />
                  </Button>
                </div>
              </div>
              <h4 className="font-semibold text-foreground truncate">{album.title}</h4>
              <p className="text-sm text-muted-foreground truncate">{album.artist}</p>
              <p className="text-xs text-muted-foreground mt-1">{album.songs} songs</p>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="artists" className="text-center py-12 text-muted-foreground">
          Artists view coming soon...
        </TabsContent>

        <TabsContent value="playlists" className="text-center py-12 text-muted-foreground">
          Playlists view coming soon...
        </TabsContent>
      </Tabs>
    </div>
  );
};
