function hello(){
	console.log("Hello inside main.js");
};

function displayWindowInfo(){
	console.log("inside displayWindowInfo");
	var msg1, msg2, msg3; //They hold window information

	msg1 = document.getElementById("location-info");
	msg1.innerHTML = "This page's full URL: " + 
		window.location.href + "<br>";

	msg2 = document.getElementById("browser-info");
	msg2.innerHTML = "Browser name: " + window.navigator.userAgent;

	msg3 = document.getElementById("screen-info");
	msg3.innerHTML = "Screen width: " + window.screen.availWidth +
		" pixels<br>" +
		"Screen height: " + window.screen.availHeight + " pixels";

};

hello();
