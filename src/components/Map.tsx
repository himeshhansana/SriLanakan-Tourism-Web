import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
interface MapProps {
  center: [number, number];
  zoom: number;
  markerPosition: [number, number];
  markerPopup?: string;
}
const Map: React.FC<MapProps> = ({
  center,
  zoom,
  markerPosition,
  markerPopup
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      // Initialize map
      mapInstanceRef.current = L.map(mapRef.current).setView(center, zoom);
      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstanceRef.current);
      // Create custom marker icon
      const customIcon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        shadowSize: [41, 41]
      });
      // Add marker
      const marker = L.marker(markerPosition, {
        icon: customIcon
      }).addTo(mapInstanceRef.current);
      // Add popup if provided
      if (markerPopup) {
        marker.bindPopup(markerPopup).openPopup();
      }
    }
    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [center, zoom, markerPosition, markerPopup]);
  return <div ref={mapRef} className="h-full w-full" />;
};
export default Map;