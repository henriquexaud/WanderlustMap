
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { TouristLocation } from '@/data/touristLocations';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = new Icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

interface MapProps {
  locations: TouristLocation[];
  selectedLocation?: TouristLocation | null;
}

export const Map = ({ locations, selectedLocation }: MapProps) => {
  return (
    <MapContainer
      center={[-14.2350, -51.9253]}
      zoom={4}
      className="w-full h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={[location.latitude, location.longitude]}
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
