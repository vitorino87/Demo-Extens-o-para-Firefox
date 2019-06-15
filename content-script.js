var c1 = setInterval(testContentScript,10000);

function testContentScript(){
	/*var p = document.getElementById("idFormDadosEntradaSaida:horaEntrada").value;*/
	sendMsg();
	/*alert("console");*/
	/*x="";
	
	/*if(x == 'back'){
		alert("forward");*/
		
		/*window.history.forward();/*
	}
	if(x == 'forward'){
		alert("back!");
		window.history.back();/*
	}*/
}

function handleResponse(message){	
	var x = `${message.response}`;
	if(x == "back"){
		window.location.href = "/sigrh/servidor/portal/servidor.jsf";
	}
	if(x == "forward"){
		document.getElementById("painelAcessoDadosServidor:linkSolicitacaoEletronica").click();
	}
	console.log(x);					
}

function handleError(error){	
	console.log(`Error: ${error}`);
}

function sendMsg(){
	var sending = browser.runtime.sendMessage({"content": ""});
	sending.then(handleResponse,handleError);
}