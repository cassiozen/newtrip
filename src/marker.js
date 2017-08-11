const { Marker } = require("mapbox-gl");

const iconURLs = {
  hotel: "http://i.imgur.com/WbMOfMl.png",
  restaurant: "http://i.imgur.com/D9574Cu.png",
  activity: "http://i.imgur.com/cqR6pUI.png"
};

const buildMarker = (type, coords) => {
  const markerEl = document.createElement("div");
  markerEl.style.backgroundSize = "contain";
  markerEl.style.width = "32px";
  markerEl.style.height = "37px";
  markerEl.style.backgroundImage = `url(${iconURLs[type]})`;
  return new Marker(markerEl).setLngLat(coords);
};

module.exports = buildMarker;
