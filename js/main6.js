console.log("Inside of main6.js");

var map = L.map('map', {
	center: [35.10418, -106.6287],
	zoom: 10
	});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

var marker = L.marker([35.10418, -106.62987]).bindPopup("I'm a marker");
var marker2 = L.marker([35.02381, -106.63811]).bindPopup("I'm a marker 2");

var polyline = L.polyline([
	[35.10418, -106.62987],
	[35.19738, -106.875],
	[35.07946, -106.80634]
	],{
	color: 'red',
	weight: 8
	}).bindPopup("I am a polyline");

var myLayerGroup = L.layerGroup([marker, polyline]).addTo(map);

myLayerGroup.addLayer(marker2);

