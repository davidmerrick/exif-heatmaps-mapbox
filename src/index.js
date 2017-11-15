var mapboxgl = require('mapbox-gl')

mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

var MAP_CENTER_LAT = process.env.MAP_CENTER_LAT || -74.0060;
var MAP_CENTER_LONG = process.env.MAP_CENTER_LONG || 40.75;
var MAP_ZOOM = process.env.MAP_ZOOM || 11

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    center: [MAP_CENTER_LAT, MAP_CENTER_LONG],
    zoom: MAP_ZOOM
});

map.on('load', function () {
    map.addSource('exif', {
        "type": "geojson",
        "data": "exif.geojson"
    });

    map.addLayer({
        "id": "exif-heat",
        "type": "heatmap",
        "source": "exif",
        "maxzoom": 22,
        "paint": {
            "heatmap-color": {
                "stops": [
                    [0, "rgba(173,216,230,0)"], // light blue
                    [0.2, "rgb(0,255,0)"], // blue
                    [0.4, "rgb(50,205,50)"], // neon green
                    [0.6, "rgb(255,255,0)"], // yellow
                    [0.8, "rgb(255,165,0)"], // orange
                    [1.0, "rgb(255,0,0)"] // red
                ]
            },
            "heatmap-radius": 20,
            "heatmap-opacity": .75
        }
    }, 'waterway-label');
});