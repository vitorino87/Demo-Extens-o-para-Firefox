var c1 = setInterval(atualizarPag,60000);
var c2 = setInterval(manipularRegistro,60000);
var min;
var minLunch;
var minReload;
var c3 = setTimeout(testOne,1000);

/*function testContentScript(){
	var p = document.getElementById("idFormDadosEntradaSaida:horaEntrada").value;
	sendMsg();
	alert("console");
	x="";
	
	if(x == 'back'){
		alert("forward");
		
		window.history.forward();
	}
	if(x == 'forward'){
		alert("back!");
		window.history.back();
	}
}*/

function handleResponse(message){	
	var x = `${message.response}`;
	if(x == "back"){
		window.location.href = "/sigrh/servidor/portal/servidor.jsf";
	}
	if(x == "forward"){
		document.getElementById("painelAcessoDadosServidor:linkSolicitacaoEletronica").click();
	}		
	min = `${message.minutes}`;
	minLunch = `${message.minutesLunch}`;
	minReload = `${message.minutesReload}`;
	console.log("Reload: "+minReload);
	console.log("Lunch: "+minLunch);
	console.log("Min: "+min);
}

function handleError(error){	
	console.log(`Error: ${error}`);
}

function getMsg(value){
	var sending = browser.runtime.sendMessage({content: value});
	sending.then(handleResponse,handleError);
}

function atualizarPag(){
	var d = new Date;
	var m = Number(d.getMinutes());
	var k = 1*(minReload) + 1;
	console.log(m);
	console.log(k);
	if(Number(minReload) == m || k == m){
		var y = getMsg("atualizar");	
	}
}

function getMin(minText){
	var x = getMsg(minText);
}

function manipularRegistro(){
	capturarHorario();
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	if(h==10){
		if(min<=m){
			registrarEntrada(addZero(min));
		}
	}else if(h==13){
		if(minLunch==m){
			registrarAlmoco(addZero(minLunch));
		}
	}else if(h==14){
		if(minLunch==m){
			registrarAlmocoRetorno(addZero(minLunch));
		}
	}else if(h==19){
		if(min==m){
			registrarSaida(addZero(min));
		}
	}
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function capturarHorario() {
	var d = new Date();
	var h = addZero(d.getHours());
	var m = addZero(d.getMinutes());
	console.log(h + ":" + m);
}

function registrarEntrada(m){
	document.getElementById("idFormDadosEntradaSaida:horaEntrada").value= "10:" + m;
	document.getElementById("idFormDadosEntradaSaida:idBtnRegistrarSaida").click()
}

function registrarAlmoco(m){
	document.getElementById("idFormDadosEntradaSaida:horaEntrada").value= "13:" + m;
	document.getElementById("idFormDadosEntradaSaida:idBtnRegistrarSaida").click()
}

function registrarAlmocoRetorno(m){
	document.getElementById("idFormDadosEntradaSaida:horaEntrada").value= "14:" + m;
	document.getElementById("idFormDadosEntradaSaida:idBtnRegistrarSaida").click()
}

function registrarSaida(m){
	document.getElementById("idFormDadosEntradaSaida:horaEntrada").value= "19:" + m;
	document.getElementById("idFormDadosEntradaSaida:idBtnRegistrarSaida").click()
}

function testOne(){
	var a = getMin("all");
	//document.getElementById("conteudo").onload = getMin("minutesReload");
}