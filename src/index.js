const mapboxgl = require("mapbox-gl");
const createrMarker = require("./markers");

const fullStackCoords = [-74.009, 40.705];

mapboxgl.accessToken = "pk.eyJ1IjoiY2Fzc2lvemVuIiwiYSI6ImNqNjZydGl5dDJmOWUzM3A4dGQyNnN1ZnAifQ.0ZIRDup0jnyUFVzUa_5d1g";
const map = new mapboxgl.Map({
  container: "map-canvas",
  center: fullStackCoords,
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10"
});

const marker = new mapboxgl.Marker(createrMarker("hotel")).setLngLat([-74.009151, 40.705086]).addTo(map);

// Next steps

// 1 - Introduce webpack (copy from webpack workshop)
// 2 - Create new project, install mapbox, show a map fullscreen
// 3 - external js module containing a few places (complete with latlong)
// 4 - Adding new markers to map through javascript
