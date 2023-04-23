import React from "react";
import Map from "../view/Map";
import { MapContainer } from "react-leaflet";

const View = () =>{
    return (<>
  
    <div>
      <h1>Processamento de Dados GeoJSON</h1>
    </div>
    <div>
        <Map/>
        <MapContainer />
    </div>
 </> );
}

export { View};