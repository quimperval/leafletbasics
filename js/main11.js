function hello(){
	console.log("Inside main11.js");
};

hello();

var map = L.map('map',{
	center: [35.10418, -106.6287],
	zoom: 10
	});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

var marker1 = L.marker([35.10418,-106.62987]).addTo(map);
marker1.bindPopup(createPopup("Text as Parameter"));

var marker2 = L.marker([35,-106]).addTo(map);
marker2.bindPopup(createPopup("Different text as parameter"));

function createPopup(x){

	return L.popup({keepInView: true, closeButton: false}).setContent(x);

};
