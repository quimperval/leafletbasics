function mHello(){
	console.log("Hello from main13.js");
};

mHello();

//Center
var mCenter = [35.10418, -106.6287];

//Create map
var map = L.map('map', {
	center: mCenter,
	zoom: 10
});

var counter = 0;

function testClick(){
	
	console.log("Click on test button: " + counter);
	counter++;
	

};

var mTestButton = document.getElementById('testButton');

mTestButton.onclick = testClick;



//Set up the OSM layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

//Add a marker in the center
L.marker(mCenter).addTo(map);

//Initialize the FeatureGroup to store editable layers


var mLayers = new L.FeatureGroup();

map.addLayer(mLayers);

var drawPluginOptions = {
	position: 'bottomright',
	draw: {
		polyline: false,
		polygon: {
		//restricts shapes to simple polygons
			allowIntersection: false,
			drawError: {
		//Color the shape will turn hen intersects
				color: 'red',
		//Message that will show then intersect
				message: '<strong>Polygon draw does not allow intersections!</strong> (allowIntersection: false)'

			},
			shapeOptions: {
				color: 'green'
			}
		},
		circle: false,
		rectangle: {
			shapeOptions: {
				clickable: false
			}
		},
		marker: false,
		circlemarker: false
	},
	edit: {
		featureGroup: mLayers, //REQUIRED
		remove: true
	}

};

L.EditToolbar.Delete.include({
	removeAllLayers: false
}
);

//Initialize the draw control and pass it the FeatureGroup of editable Layers
//
var drawControl = new L.Control.Draw(drawPluginOptions);

map.addControl(drawControl);

map.on('draw:created', function(e){

	var type = e.layerType, layer  = e.layer;
	console.log(type);

	mLayers.addLayer(layer);
	console.log(layer);
});


