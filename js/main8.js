function hello(){
	console.log("Hello World");

	return;
};


hello();

var map = L.map('map', {
	center: [35.10418, -106.6287],
	zoom: 10	

	});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);


map.on('click', function(){alert("You clicked the map");});

/**
map.on('click', function(e){
	var coord = e.latlngt.toString().split(',');
	var lat=coord[0].split('(');
	var long=coord[1].split(')');
	alert("You clicked the map at LAT: "+ lat[1] + "and LONG: "+long[0])
	});*/
