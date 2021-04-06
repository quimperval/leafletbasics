function hello(){
	console.log("Hello World");	
};

hello();

var map = L.map('map',{
	center: [35.10418, -106.6287],
	zoom: 10
	});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

//This function shows an alert message when the user clicks on marker
/*
map.on('click', function(e){
	var coord=e.latlng.toString().split(',');	
	console.log(coord);
	var lat = coord[0].split('(');
	var long = coord[1].split(')');
	console.log("Lat: " + lat[1]);
	console.log("Long: " + long[0]);

	alert("You clicked the map at LAT: " + lat[1] + 
		 " and LONG: "+long[0]);

	});*/

//This function adds a marker in the map when the user clicks
map.on('click', function(e){
	L.marker(e.latlng).addTo(map);
	});

