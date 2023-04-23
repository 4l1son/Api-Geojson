import React from "react";
import { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import data from "./data.json";
import { FeatureGroup, Rectangle, useMap } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import DrawnItems from '../view/drawitens';

function Map(){
  
  const parsedPolygons = JSON.parse(polygons);
  const polygons = parsedPolygons.features;
  const [bounds, setBounds] = useState(null);
  return (
      
      <MapContainer center={[51.505, -0.09]} zoom={13}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <DrawnItems setBounds={setBounds} />
      {bounds && <Rectangle bounds={bounds} />}
      <GeoJSON data={data} />
      
    </MapContainer>
  );
}

export default Map;