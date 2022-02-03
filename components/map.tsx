import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import cityData from "../data/city.json";
import { City } from "../types/type";

function Map() {
  const [selectedCity, setSelectedCity] = useState<City | undefined>();

  console.log("Selected city", selectedCity);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{
        lat: -0.023559,
        lng: 37.906193,
      }}
    >
      {cityData.map((city) => (
        <Marker
          onClick={() => {
            setSelectedCity(city);
          }}
          key={city.lat}
          position={{
            lat: parseInt(city.lat),
            lng: parseInt(city.lng),
          }}
        />
      ))}
      {selectedCity && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedCity(undefined);
          }}
          position={{
            lat: parseInt(selectedCity.lat),
            lng: parseInt(selectedCity.lng),
          }}
        >
          <>
            <p>County name: {selectedCity.admin_name}</p>
            <p>City: {selectedCity.city}</p>
            <p>Population: {selectedCity.population}</p>
            <p>Country: {selectedCity.country}</p>
          </>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
