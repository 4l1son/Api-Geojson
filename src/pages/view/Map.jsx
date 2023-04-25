import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import axios from "axios";

const Map = () => {
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.geojson.io/v1/data/165817498549354556943664137057842444391.geojson"
      );
      setGeojsonData(response.data);
    };
    fetchData();
  }, []);

  return (
   <>
   <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >  <div style={{ height: "50%" }}>
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "500px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {geojsonData && <GeoJSON data={geojsonData} />}
    </MapContainer>
    </div>
    </div>
    </>
  );
};

export default Map;
