// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
// let myLeaflet = L;

// let myMap = myLeaflet.map("map", {
//   center: [0, 90],
//   zoom: 3
// });

// // Adding a tile layer (the background map image) to our map:
// // We use the addTo() method to add objects to our map.
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(myMap);


// const init = async () => {
//   let url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'
//   let {features} = await (await fetch(url)).json()

//   features.forEach(({properties:{mag,place},geometry:{coordinates:[lon,lat,depth]}})=> {
//     console.log(depth);
//     L.circleMarker(
//       [lat,lon],
//       {
//         radius:mag*5,
//         fillOpacity: 1,
//         color: 'black',
//         weight: 1,
//         fillColor:  depth>90 ? '#997a00' : depth>70 ? '#cca300' : depth>50 ? '#e6b800' : depth>30 ? '	#ffd11a' : depth>10 ? '#ffe066' : '#ffe680'
//       }).bindPopup(`<h4>Location: ${place}<br>Magnitude: ${mag}<br>Depth: ${depth}</h4>`).addTo(myMap);


//   });


// };



// init();

// SCRAPPED

