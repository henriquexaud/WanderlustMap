
import { Button } from "@/components/ui/button";
import { TouristLocation } from "@/data/touristLocations";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

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

  const simplifiedCategories = ["All", "Natural Attractions", "Beaches", "Cultural", "Historical"];

  return (
    <SidebarProvider>
      <ShadcnSidebar className="w-80 h-full">
        <SidebarHeader className="border-b p-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800 transition-all">
            Brazil Tourist Spots
          </h1>
          <SidebarTrigger />
        </SidebarHeader>
        <SidebarContent>
          <div className="p-2">
            <ScrollArea className="flex gap-2 pb-2 max-w-full">
              <div className="flex gap-2">
                {simplifiedCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => onCategoryChange(category)}
                    className="text-xs whitespace-nowrap"
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>
          <ScrollArea className="flex-1">
            <div className="p-2 space-y-2">
              {filteredLocations.map((location) => (
                <div
                  key={location.id}
                  className="p-3 border rounded-lg hover:border-blue-500 cursor-pointer transition-colors"
                  onClick={() => onLocationSelect(location)}
                >
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-blue-500 mt-1" />
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
        </SidebarContent>
      </ShadcnSidebar>
    </SidebarProvider>
  );
};
