
import { Button } from "@/components/ui/button";
import { TouristLocation } from "@/data/touristLocations";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MapPin } from "lucide-react";

interface SidebarProps {
  locations: TouristLocation[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
}

export const Sidebar = ({
  locations,
  selectedCategory,
  onCategoryChange,
  categories,
}: SidebarProps) => {
  const filteredLocations = selectedCategory === "All" 
    ? locations 
    : locations.filter(location => location.category === selectedCategory);

  return (
    <div className="w-80 bg-white h-full border-r flex flex-col">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold text-gray-800">Brazil Tourist Spots</h1>
        <div className="flex gap-2 mt-4 flex-wrap">
          <Button
            variant={selectedCategory === "All" ? "default" : "outline"}
            onClick={() => onCategoryChange("All")}
            className="text-sm"
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => onCategoryChange(category)}
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">
          {filteredLocations.map((location) => (
            <div
              key={location.id}
              className="p-4 border rounded-lg hover:border-blue-500 cursor-pointer transition-colors"
            >
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-medium">{location.name}</h3>
                  <p className="text-sm text-gray-600">{location.category}</p>
                  <p className="text-sm text-gray-500 mt-1">
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
