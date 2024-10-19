import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const WorldMap = () => {
  // Simplified world GeoJSON data
  const geoUrl = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": { "name": "World" },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            [[[-180, 90], [-180, -90], [180, -90], [180, 90], [-180, 90]]]
          ]
        }
      }
    ]
  };
  
  const markers = [
    { coordinates: [-74.006, 40.7128], city: "New York", revenue: 72 },
    { coordinates: [-122.4194, 37.7749], city: "San Francisco", revenue: 39 },
    { coordinates: [151.2093, -33.8688], city: "Sydney", revenue: 25 },
    { coordinates: [103.8198, 1.3521], city: "Singapore", revenue: 61 }
  ];

  return (
    <div className="w-full h-48">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 100,
          center: [0, 20]
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
                strokeWidth={0.5}
                style={{
                  default: {
                    fill: "#F5F5F5",
                    outline: "none"
                  },
                  hover: {
                    fill: "#E6E6E6",
                    outline: "none"
                  }
                }}
              />
            ))
          }
        </Geographies>
        {markers.map(({ coordinates, city, revenue }) => (
          <Marker key={city} coordinates={coordinates}>
            <g>
              <circle r={4} fill="#000000" />
              <title>{`${city}: ${revenue}K`}</title>
            </g>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default WorldMap;