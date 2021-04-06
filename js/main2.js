var map = L.map('map', {center: [35.10418, -106.6287], zoom: 10});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
/**
var polyline = L.polyline([[35.10418, -106.62987],[35.19738, -106.875]], {
	color: 'red',
	weight: 8
	}).addTo(map);
*/
var polyline = L.polyline([[35.10418, -106.62987],[35.19738, -106.875],[35.07946, -106.80634]],{
	color: 'red',
	weight: 8
	}).addTo(map);

var marker1 = L.marker([35.10418, -106.62987],{
	title: "First point",
	alt: "First Point",
	draggable: true
	}).addTo(map);
