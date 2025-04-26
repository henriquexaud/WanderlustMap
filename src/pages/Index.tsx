
import { useState } from 'react';
import { Map } from '@/components/Map';
import { Sidebar } from '@/components/Sidebar';
import { categories, touristLocations } from '@/data/touristLocations';
import '../index.css';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="flex h-screen w-full">
      <Sidebar
        locations={touristLocations}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />
      <div className="flex-1 relative">
        <Map 
          locations={selectedCategory === "All" 
            ? touristLocations 
            : touristLocations.filter(loc => loc.category === selectedCategory)
          }
        />
      </div>
    </div>
  );
};

export default Index;
