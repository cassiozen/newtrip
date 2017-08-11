const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = "pk.eyJ1IjoiY2Fzc2lvemVuIiwiYSI6ImNqNjZydGl5dDJmOWUzM3A4dGQyNnN1ZnAifQ.0ZIRDup0jnyUFVzUa_5d1g";
const map = new mapboxgl.Map({
  container: "map-canvas",
  center: [-74.009, 40.705],
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10"
});

const marker = buildMarker("activity", [-74.009151, 40.705086]);
marker.addTo(map);
