var map = L.map('map', {
	center: [35.10418, -106.6287],
	zoom: 10
	});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

var polygon = L.polygon([[35.10418, -106.62987],[35.19738, -106.875], [35.07946, -106.80634]],{
	color: 'red',
	weight: 8
	}).addTo(map);

var polygon = L.polygon([
		[35.10418, -106.9287],
		[35.19738, -106.775],
		[35.07946, -106.70634]
		], {
		color: 'red',
		weight: 8,
		fillColor: 'green',
//		fillOpacity: 1
	}).addTo(map);
