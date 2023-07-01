let myLeaflet = L;

// Set url for the JSON

const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'

// Create map
const map = myLeaflet.map("map", {
    center: [0, 90],
    zoom: 3
});

// Add tilelayer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Retrieve data from the JSON url and create markers for each datapoint
d3.json(url).then(function(data) {
    function designMarker(feature) {
        return {
            radius:markerRadius(feature.properties.mag),
            fillOpacity: 1,
            color: 'black',
            weight: 1,
            fillColor: colorMarker(feature.geometry.coordinates[2]),
        };
    }
    
    // Add colors to the markers based on depth of the earthquake. Color palette used is a tangy yellow that gets darker according to depth. 
    function colorMarker(depth) {
    return depth > 90   ? '#997a00' :
           depth > 70   ? '#cca300' :
           depth > 50   ? '#e6b800' :
           depth > 30   ? '#ffd11a' :
           depth > 10   ? '#ffe066' :
                          '#ffe680';
    }
    
    // Adjust size of the markers based on the magnitiude
    function markerRadius(mag) {
                if (mag === 0) {
                    return 1;
                }
        
                return mag * 5;
            }

    // Obtain data from the JSON and incorporate it with markers        
    L.geoJson(data, {

        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng);
        },

        style: designMarker,

        
        onEachFeature: function(feature, layer) {
            layer.bindPopup("Location:" + feature.properties.place +
                            "<br>Magnitude:" + feature.properties.mag +
                            "<br> Depth:" + feature.geometry.coordinates[2]);

        }
}).addTo(map);

// Add a legend that indicates the correlations between color and the respestive depths. 
const legend = L.control({position: 'bottomright'});

legend.onAdd = function(map) {

    const div = L.DomUtil.create('div', 'info legend');
    const grades = [0, 10, 30, 50, 70, 90];
    const labels = [];
    let from, to;

    for (let i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];

        labels.push(`<i style="background:${colorMarker(from + 1)}"></i> ${from}${to ? `&ndash;${to}` : '+'}`);
    }

    div.innerHTML = labels.join('<br>');
    return div;
    };

    legend.addTo(map);

});
