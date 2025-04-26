
import { Button } from "@/components/ui/button";
import { TouristLocation } from "@/data/touristLocations";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MapPin } from "lucide-react";

interface SidebarProps {
  locations: TouristLocation[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onLocationSelect: (location: TouristLocation) => void;
  categories: string[];
}

export const Sidebar = ({
  locations,
  selectedCategory,
  onCategoryChange,
  onLocationSelect,
  categories,
}: SidebarProps) => {
  const filteredLocations = selectedCategory === "All" 
    ? locations 
    : locations.filter(location => location.category === selectedCategory);

  const mainCategories = ["All", "Praias", "Natureza", "Histórico", "Urbano"];

  return (
    <div className="w-80 bg-white h-full border-r flex flex-col">
      <div className="p-3 border-b">
        <h1 className="text-xl font-bold text-gray-800 mb-2">Brazil Tourist Spots</h1>
        <ScrollArea className="w-full" orientation="horizontal">
          <div className="flex gap-1.5 pb-2">
            {mainCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => onCategoryChange(category)}
                className="text-xs px-3 py-1 h-7 whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-3 space-y-2">
          {filteredLocations.map((location) => (
            <div
              key={location.id}
              className="p-3 border rounded-lg hover:border-blue-500 cursor-pointer transition-colors"
              onClick={() => onLocationSelect(location)}
            >
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-medium text-sm">{location.name}</h3>
                  <p className="text-xs text-gray-600">{location.category}</p>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {location.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
