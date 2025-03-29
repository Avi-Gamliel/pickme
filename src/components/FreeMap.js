import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet"; // Import Leaflet for creating custom icons
import "leaflet/dist/leaflet.css";

const UpdateMapPosition = ({ position }) => {
  const map = useMap(); // Access the map instance
  map.setView(position, 15); // Update the map's center and zoom level (15 for closer zoom)
  return null;
};

const FreeMap = () => {
  const [position, setPosition] = useState([51.505, -0.09]); // Default location (London)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          const { latitude, longitude } = location.coords;
          setPosition([latitude, longitude]); // Update position state
        },
        (error) => {
          console.error("Error getting location: ", error);
        },
        { enableHighAccuracy: true } // Request high accuracy
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  });

  // Create a custom icon using an image from the public folder, without the shadow
  const customIcon = new L.Icon({
    iconUrl: "/marker-icon.png", // Path relative to the public folder
    iconSize: [70, 70], // Size of the icon
    iconAnchor: [16, 32], // Anchor point of the icon (center bottom)
    popupAnchor: [0, -32], // Popup anchor position (above the icon)
    shadowUrl: null, // Remove the default shadow
  });
  const customIconStore = new L.Icon({
    iconUrl: "/store.png", // Path relative to the public folder
    iconSize: [40, 40], // Size of the icon
    iconAnchor: [16, 32], // Anchor point of the icon (center bottom)
    popupAnchor: [0, -32], // Popup anchor position (above the icon)
    shadowUrl: null, // Remove the default shadow
  });
  
  return (
    <div style={{ height: "calc(100vh - 200px)", width: "100%" }}>
      <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
        <UpdateMapPosition position={position} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     
     />
        <Marker position={position} icon={customIcon}> {/* Use the custom icon */}
          <Popup>
            <strong>אתה כאן!</strong> <br />
            המיקום שלך זוהה.
          </Popup>
        </Marker>
        <Marker position={[  32.09482,34.94501]} icon={customIconStore}> {/* Use the custom icon */}
          <Popup>
            <strong>אתה כאן!</strong> <br />
            המיקום שלך זוהה.
          </Popup>
        </Marker>
       
      </MapContainer>
    </div>
  );
};

export default FreeMap;
