function hello(){

	console.log("Hello World");

};

console.log("inside main7.js");

var map = L.map('map', {
	center: [35.10418, -106.6287],
	zoom: 10
	});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

var marker = L.marker([35.10418, -106.62987]);

//marker.bindPopup("I am a marker");

marker.bindPopup("<h1>My Marker</h1><p>This is information about the marker</p><ul><li>Info 1</li><li>Info 2</li><li>Info 3</li></ul>")

marker.addTo(map);

hello();
