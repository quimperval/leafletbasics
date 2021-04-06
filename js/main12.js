function mHello(){
	console.log("Hello from main12.js");
};

function showMessage(){
	console.log("you clicked the Test button");
};

mHello();


var mTestButton = document.getElementById('testButton');

console.log(mTestButton);

mTestButton.onclick = showMessage;


//Center

var center = [35.10418, -106.6287];

//Create the map
var map = L.map('map', {
	center: [35.10418, -106.6287],
	zoom: 10
	});

//Set up the OSM layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

//add a marker in the center
L.marker(center).addTo(map);

//Initialize the FeatureGroup to store editable layers
//
var editableLayers = new L.FeatureGroup();

map.addLayer(editableLayers);

//Define custom marker
var MyCustomMarker = L.Icon.extend({
	options: {
		shadowUrl: null,
		iconAnchor: new
		L.Point(12,12),
		iconSize: new L.Point(24,24),
		iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Information_icon4_orange.svg'}
	});


var drawPluginOptions = {
	position: 'topright',
	draw: { 
		polyline: false/**{
			shapeOptions: {
				color: '#f357a1',
				weight: 10
			}
		}*/,
		polygon: {
			//restricts shapes to simple polygons
			allowIntersection: false,
			drawError: {
				//Color the shape will turn when intersects	
				color: '#e1e100',
				//Message that will show when intersect
				message: '<strong>Polygon draw does not allow intersections!</strong> (allowIntersection: false)'
					
			},
			shapeOptions: {
				color: '#bada55'
			
			}
		},
		circle: false, //Turns off this drawing tool
		rectangle: {
			shapeOptions: {
				clickable: false
			}
		},
		marker: false /**{
			icon: new MyCustomMarker()
		}*/,
		circlemarker: false

	},
	edit: {
		featureGroup: editableLayers, //REQUIRED
		remove: true
	}
};


L.EditToolbar.Delete.include({
        removeAllLayers: false
});


//Initialise the draw control an pass it the FeatureGroup of editable Layers

var drawControl = new L.Control.Draw(drawPluginOptions);




map.addControl(drawControl);

var editableLayers = new L.FeatureGroup();

map.addLayer(editableLayers);

map.on('draw:created', function(e){
	var type = e.layerType,
		layer = e.layer;

	console.log(type);

	if(type=='marker'){
		layer.bindPopup('A popup!');
	}

	editableLayers.addLayer(layer);
	console.log(layer);
});

console.log(editableLayers);

