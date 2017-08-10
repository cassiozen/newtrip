const iconURLs = {
  hotel: "http://emojipedia-us.s3.amazonaws.com/cache/eb/27/eb27b8b469e4efe3c0e4285e1dda868c.png",
  restaurant: "http://emojipedia-us.s3.amazonaws.com/cache/d8/c4/d8c4e0fef51326b5cf8b6bb4010eba05.png",
  activity: "http://emojipedia-us.s3.amazonaws.com/cache/f9/18/f9189ad583289452445a5ec2488bffca.png"
};
const createrMarker = type => {
  const markerEl = document.createElement("div");
  markerEl.style.backgroundSize = "contain";
  markerEl.style.width = markerEl.style.height = "35px";
  markerEl.style.backgroundImage = `url(${iconURLs[type]})`;
  return markerEl;
};

module.exports = createrMarker;
