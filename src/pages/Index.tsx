
import { useState } from 'react';
import { Map } from '@/components/Map';
import { Sidebar } from '@/components/Sidebar';
import { categories, touristLocations, TouristLocation } from '@/data/touristLocations';
import '../index.css';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState<TouristLocation | null>(null);

  const filteredLocations = selectedCategory === "All" 
    ? touristLocations 
    : touristLocations.filter(loc => loc.category === selectedCategory);

  return (
    <div className="flex h-screen w-full">
      <Sidebar
        locations={touristLocations}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onLocationSelect={setSelectedLocation}
        categories={categories}
      />
      <div className="flex-1 relative">
        <Map 
          locations={filteredLocations}
          selectedLocation={selectedLocation}
        />
      </div>
    </div>
  );
};

export default Index;
