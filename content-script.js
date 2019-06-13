var b = true;
var x;
var c1 = setInterval(testContentScript,5000);
/*var c2 = setInterval(testContentScript2,11000);*/

function testContentScript(){
	/*var p = document.getElementById("idFormDadosEntradaSaida:horaEntrada").value;*/
	sendMsg();
	alert(x);
	/*if(x == 'back'){
		alert("forward");
		
		windows.history.forward();
	}
	if(x == 'forward'){
		alert("back!");
		window.history.back();
	}*/
}

function handleResponse(message){
	x="${message.response}";
}

function handleError(error){
	x='Error: ${error}';
}

function sendMsg(){
	var sending = browser.runtime.sendMessage({"content": ""});
	sending.then(handleResponse,handleError);
}



function notify(message){
	x = '${message.msg}';
}

function testContentScript2(){
	
}