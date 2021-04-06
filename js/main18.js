function hello(){
	console.log("Inside main18.js");
}

hello();

class Point {
	constructor(x,y){
		this.x = x;
		this.y = y;
		
		if(Point.count == undefined){
			Point.count = 1;
		} else if (Point.count ==1) {
			Point.count = 2;
		}
	
	
	} //Ends constructor

	value(){
		return "(" + this.x + ", "+ this.y + ")";
	
	} //end value

	static getCount(){
		return (Point.count ==undefined) ? 0 : Point.count;
	}

	static distance(pt1, pt2){
		var xDist, yDist; 
		var distance;

		if(Point.count ==2 ){
			xDist = pt1.x - pt2.x;
			yDist = pt1.y - pt2.y;
			distance = Math.sqrt(xDist * xDist + yDist *yDist);
		} else {
			distance =null;
		
		}

		return distance;
	}

}

var point1, point2;

function captureClick(e){
	if(Point.getCount() ==0){
		point1 = new Point(e.clientX, e.clientY);
		document.getElementById("pt1").innerHTML = point1.value();
	} else if (Point.getCount() ==1 ) {
		point2 = new Point(e.clientX, e.clientY);
		document.getElementById("pt2").innerHTML = point2.value();
	} else {
		point1 = point2;
		point2 = new Point(e.clientX, e.clientY);
		
		document.getElementById("pt1").innerHTML = point1.value();
		document.getElementbyId("pt2").innerHTML = point2.value();
	}

}

function displayDistance(e){
	var distance;
	var message;

	e.stopPropagation();//Prevent the button from creating a new point

	distance = Point.distance(point1, point2);

	if(distance==null) {
		message = "To calculate a distance, you must first create two points!";

	} else {
		message = "The two points are "+ distance.toFixed(1) + " pixels apart.";
	
	}

	document.getElementById("message").innerHTML = message;

}
