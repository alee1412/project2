
// Create the tile layer that will be the background of our map
let satellitemap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.satellite",
  accessToken: API_KEY
});

let lightmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
});

let outdoormap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.outdoors",
  accessToken: API_KEY
});

// Create a baseMaps object to hold the lightmap layer
let baseMaps = {
  "Satellite": satellitemap,
  "Light Map": lightmap,
  "Outdoors": outdoormap
};

let myMap = L.map("map-id", {
  center: [37.8, -96],
  zoom: 4,
  layers: [satellitemap]
});

L.control.layers(baseMaps).addTo(myMap);

function getColor(d) {
  return d > 35 ? '#800026' :
         d > 30  ? '#BD0026' :
         d > 25  ? '#E31A1C' :
         d > 20  ? '#FC4E2A' :
         d > 10   ? '#FD8D3C' :
         d > 5   ? '#FEB24C' :
         d > 0   ? '#FED976' :
                    '#FFEDA0';
};

// var url = "https://leafletjs.com/examples/choropleth/us-states.js"


function style(feature) {
  return {
    fillColor: getColor(feature.properties.density),
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7
  };
};

L.geoJson(ConstructionData, {style: style}).addTo(myMap);