
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { TouristLocation } from '@/data/touristLocations';
import { useEffect } from 'react';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = new Icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

// This component will handle map position updates
const MapUpdater = ({ selectedLocation }: { selectedLocation?: TouristLocation | null }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedLocation) {
      map.setView(
        [selectedLocation.latitude, selectedLocation.longitude],
        15,
        { animate: true }
      );
    }
  }, [selectedLocation, map]);

  return null;
};

interface MapProps {
  locations: TouristLocation[];
  selectedLocation?: TouristLocation | null;
}

export const Map = ({ locations, selectedLocation }: MapProps) => {
  return (
    <MapContainer
      center={[-14.2350, -51.9253] as [number, number]}
      zoom={4}
      className="w-full h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapUpdater selectedLocation={selectedLocation} />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={[location.latitude, location.longitude] as [number, number]}
          icon={defaultIcon}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-lg">{location.name}</h3>
              <p className="text-sm text-gray-600">{location.category}</p>
              <p className="mt-2">{location.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
