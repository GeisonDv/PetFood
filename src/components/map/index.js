import "./styles.css";
import GoogleMapReact from "google-map-react";
import Marker from "../marker";

const Map = () => {
  return (
    <div className="container-map">
      <GoogleMapReact
        bootstrapURLkeys={{ key: "AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek" }}
        center={{
          lat: -16.4823028,
          lng: -49.0970078,
        }}
        defaultZoom={15}
      >
        <Marker lat={-16.4823028} lng={-49.0970078} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
