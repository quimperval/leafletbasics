
//ZAPOPAN MAP
//var map = L.map('map', {center: [20.727266, -103.393211],zoom: 10});

//US map ALBUQUERQUE NEW MEXICO

var map = L.map('map', {center: [35.10418, -106.62987],zoom: 10});

//L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

//Load landscape information, it requires an api key
//var layer = new L.TileLayer('http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png');

//map.addLayer(layer);

//The following code calls USGS map server
var usgsUrl = "http://basemap.nationalmap.gov/ArcGIS/services/USGSImageryTopo/MapserVer/WMSServer";

varusgs = L.tileLayer.wms(usgsUrl, {
	layers: '0',
	format: 'image:/png',
	transparent: true,
	attribution: "USGS"
}).addTo(map);

//var nwsUrl = "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs";
/**
Varnexrad = L.tileLayer(nwsUrl, {
	layers: 'RAS_RIDGE_NEXRAD',
	format: 'image/png',
	transparent: false,
	attribution: "NOAA/NWS"
}).addTo(map);
*/

console.log("Hello World");

var myMarker = L.marker([35.10418, -106.62987]).addTo(map);

var secondMarker = L.marker([35.10418, -106.62999],{
	title: "second point", alt: "The big I", draggable: true
	}).addTo(map);

