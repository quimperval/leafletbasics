console.log("Inside main4.js");

var map = L.map('map', {
	center: [35.10418, -106.6287],
	zoom: 10
	});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

var myRectangle = L.rectangle([
	[35.19738,-106.875],
	[35.10418, -106.62987]
	],{
	color: "red",
	weight: 8,
	fillColor: "blue"
	}).addTo(map);

//8046.72 meters is equal to 5 miles

L.circle(
	[35.10418,-106.62987], 8046.72,
	{
	color: "red",
	weight: 8,
	fillColor: "green"
	}).addTo(map);
