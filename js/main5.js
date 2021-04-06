console.log("Inside main6.js");

var map = L.map('map', {
	center: [35.10418, -106.6287],
	zoom: 10
	});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

var multipolyline = L.Polyline(
	[
		[
			[35.10418, -106.62987],
			[35.19738, -106.875],
			[35.07946, -106.80634]
		] ,
		[
			[35.11654, -106.58318],
			[35.13142, -106.48876],
			[35.07384, -106.52412]
		]
	],
	{
	
	color: 'red',
	weight: 8

	}	
	).addTo(map);



