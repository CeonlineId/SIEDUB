import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Lokasi default bisa diganti dengan lokasi apapun, akan digunakan jika Geolocation tidak tersedia atau tidak diizinkan
const defaultLocation = [-6.562322118503798, 107.75989415338564];

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : <Marker position={position}></Marker>;
}

export default function ReportForm() {
  const [currentLocation, setCurrentLocation] = useState(defaultLocation);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setCurrentLocation([
          position.coords.latitude,
          position.coords.longitude,
        ]);
      },
      () => {
        console.log('Unable to retrieve your location');
      },
    );
  }, []);

  return (
    <div>
      <h1>ReportForm</h1>
      <form>
        <label>
          Nama:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Nomor HP:
          <input type="text" name="phone" />
        </label>
        <br />
        <label>
          Bukti Gambar:
          <input type="file" accept="image/*" capture="environment" />
        </label>
      </form>
      <div style={{ height: '400px', marginTop: '20px' }}>
        <MapContainer
          center={currentLocation}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMarker />
        </MapContainer>
      </div>
    </div>
  );
}
