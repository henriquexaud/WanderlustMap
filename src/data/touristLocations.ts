
export interface TouristLocation {
  id: number;
  name: string;
  category: string;
  latitude: number;
  longitude: number;
  description: string;
}

export const touristLocations: TouristLocation[] = [
  {
    id: 1,
    name: "Christ the Redeemer",
    category: "Landmarks",
    latitude: -22.9519,
    longitude: -43.2105,
    description: "Iconic statue of Jesus Christ in Rio de Janeiro"
  },
  {
    id: 2,
    name: "Sugarloaf Mountain",
    category: "Natural Attractions",
    latitude: -22.9492,
    longitude: -43.1545,
    description: "Mountain offering panoramic views of Rio"
  },
  {
    id: 3,
    name: "Copacabana Beach",
    category: "Beaches",
    latitude: -22.9711,
    longitude: -43.1823,
    description: "Famous beach known for its crescent shape"
  },
  {
    id: 4,
    name: "Amazon Theater",
    category: "Cultural",
    latitude: -3.1300,
    longitude: -60.0231,
    description: "Historic opera house in Manaus"
  },
  {
    id: 5,
    name: "Iguazu Falls",
    category: "Natural Attractions",
    latitude: -25.6953,
    longitude: -54.4367,
    description: "Massive waterfalls system at Brazil-Argentina border"
  }
];

export const categories = Array.from(new Set(touristLocations.map(location => location.category)));
