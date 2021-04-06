function hello(){

	console.log("Hello inside main15.js");
};



hello();

var polygonDrawer;

//Center
var mCenter = [35.10418, -106.6287];

var mMap = undefined;

var mCounter = 0;

var mLayers = new L.FeatureGroup();

function showMap(){

	console.log("inside showMap function");


	if(mMap == undefined){
		mMap = L.map('map',{
			center: mCenter,
			zoom: 10
		});	

		//Adding Tile Layer
		var mTileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');

		mTileLayer.addTo(mMap);

	} else {
		console.log("mMap is already initialized");
	}
	
	
};


function testFunction(){

	console.log("test Function call");
	
	if(mLayers!=undefined && mMap!=undefined){

		mLayers.addTo(mMap);
	}

	polygonDrawer = new L.Draw.Polygon(mMap);

	console.log("enabling polygonDrawer");

	polygonDrawer.enable();

	console.log(polygonDrawer);

	if(mMap!=null || mMap!=undefined){
		
		mMap.on('draw:created', function(e){
		
			var type = e.layerType,
			layer = e.layer;

			console.log(type);

			mLayers.addLayer(layer);
		
			console.log(layer);
		});
	}



};
