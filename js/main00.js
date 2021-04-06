function printSelected(){

	var mText = document.getElementById('reviewer').value;
	
	console.log('value: ', mText);

};


function fibonacciSequence(input){
        var response = Array();

	var temp=0;
	var tempTwo=0

        for(var i=0; i<=input;i++){
                if(i<=1){
                        response.push(i)
                } else {
		
			var newNumber = response[i-1]+ response[i-2];
			response.push(newNumber);
		}
        }

        return response;

}



console.log("Fibonacci Sequence");

res = fibonacciSequence(5);
for(var res_i = 0; res_i < res.length; res_i++) {
        console.log(res[res_i]);
}
