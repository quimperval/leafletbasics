function displayHello(){
	var msg;
	msg = document.getElementById("message");
	if(msg){
 		msg.outerHTML = "<h1>Hello World</h1>";
	} else {
		console.log("msg is null");
	}

}

function startHello(){
	console.log("Hello from main14.js");
}

function generateEmail(form){

	var emailHolder;
	emailHolder = document.getElementById("email");
	var firstName = form.elements["first"].value;
	var lastName = form.elements["last"].value;

	console.log("Fist Name: ", firstName);
	console.log("Last Name: ", lastName);

	form.reset();
	form.elements["first"].focus();

	var fullEmail = firstName + lastName + "@park.edu";
	console.log(fullEmail);
	emailHolder.innerHTML = fullEmail;

}


startHello();
