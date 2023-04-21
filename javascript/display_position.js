const urlParams = new URLSearchParams(window.location.search);
const coordinates = urlParams.get('coordinates');
const coord = coordinates.split(',');
const longitude = +coord[0];
const laltitude = +coord[1];
var map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/streets-v2/style.json?key=gEwTz8EZKm1Uu0GCcZVM',
    center: [longitude, laltitude],
    zoom: 4
});
var object_tracked = new maplibregl.Marker()
    .setLngLat([longitude, laltitude])
    .addTo(map);