import { MapContainer, TileLayer } from "react-leaflet";
import { FeatureGroup, Rectangle, useMap } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
function DrawnItems(props) {
    const { setBounds } = props;
    const map = useMap();
  
    const onCreated = (e) => {
      const bounds = e.layer.getBounds();
      setBounds(bounds);
      map.fitBounds(bounds);
    };
  
    return (
      <FeatureGroup>
        <EditControl
          position="topright"
          onCreated={onCreated}
          draw={{
            rectangle: {
              showArea: false,
              shapeOptions: {
                color: "#ffcc33",
              },
            },
            polyline: false,
            circle: false,
            marker: false,
            circlemarker: false,
          }}
        />
      </FeatureGroup>
    );
  }
  export default DrawnItems;