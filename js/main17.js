function hello(){
	console.log("Hello inside main17.js");
};

function askAboutLying(){
	var reply; //User's reply
	reply = confirm("Do you always tell the truth?");
	alert("When asked wheter you always tell" + 
		" the truth, your reply was: " + reply + ".");
};

hello();
