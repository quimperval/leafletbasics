function hello(){
	console.log("inside main10.js");
	
};

hello();

var map = L.map('map', {
	center: [35.10418, -106.6287],
	zoom: 10
	});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

var myMarker = L.marker([35.10418,-106.62987],{
	title: "My Point",	
	alt: "The Big I", 
	draggable: true
	}).addTo(map);

function whereAmI(){
	myMarker.bindPopup("I have been moved to: "+ String(myMarker.getLatLng()));
};

myMarker.on('dragend', whereAmI);
