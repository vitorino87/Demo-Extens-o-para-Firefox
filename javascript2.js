/*var hora = ['09','13','14','18'];
var minuto = ['00'];*/
var check = true;
var min = randomizar();
var minLunch = randomizar();
var d = new Date();
var minAtualizar = Number(d.getMinutes())-1;
if(minAtualizar<0){
	minAtualizar = 59;
}

while(minAtualizar == min || minAtualizar == minLunch || minAtualizar+1 == min || minAtualizar+1 == minLunch){
	min = randomizar();
	minLunch = randomizar();
}

/*function myFunction(){
	chrome.tabs.executeScript(
		{
			code: 'document.getElementById("idFormDadosEntradaSaida:horaEntrada").value= "16:00"' /*serve para adicionar "14:30" no componente especificado 		
		}
	);
	
	chrome.tabs.executeScript(
		{
			code: 'document.getElementById("idFormDadosEntradaSaida:horaSaida1").value= "16:30"' /*serve para adicionar "14:30" no componente especificado 		
		}
	);
	
	chrome.tabs.executeScript(
		{
			code: 'document.getElementById("idFormDadosEntradaSaida:idBtnRegistrarSaida").click()' /*simula um clique no botão capturado
		}
	);
	
	/*
	chrome.tabs.executeScript(
		{				
			code: 'document.getElementById("idFormDadosEntradaSaida").submit()' /*serve para submeter o form idFormDadosEntradaSaida
		}
	); */		
	
	/*chrome.tabs.reload(); /*serve para atualizar a página*/
	/*chrome.tabs.executeScript(
		null, {file:"javascript_injetado.js"});
}*/

/*function myTimer(){
	setInterval(addTime(),60000);	função para 
	var c1 = setInterval(atualizarP,3000);	
}

function addTime(){
	var i;
	var d = new Date();
	for(i=0;i<hora.length;i++){
		if(d.getHours()==hora[i]){
			
		}
	}	
}*/

/*function atualizarP(){
	/*chrome.tabs.executeScript(
		{				
			code: 'document.getElementById("idFormDadosEntradaSaida").submit()' /*serve para submeter o form idFormDadosEntradaSaida
		}
	);
	
	browser.tabs.executeScript(
	{
		code: 'document.getElementById("menu-usuario.menus").click()'
	}
	)
	
	
	/*chrome.tabs.reload();
	/*history.back();*/
	/*window.history.forward();
	chrome.runtime.reload();	
}

document.addEventListener('DOMContentLoaded',function(){
	document.querySelector('button').addEventListener('click', testContentScript);	
});*/

/*function testContentScript(){
	/*var a = 1;
	chrome.tabs.executeScript(
		{
			code: 'document.getElementById("idFormDadosEntradaSaida:horaEntrada").value= "'+a+'"' /*serve para adicionar "14:30" no componente especificado 
		}
	);
	b = a;
	/*chrome.tabs.reload();
	/*chrome.runtime.reload();
}*/

function handleMessage(request, sender, sendResponse){
	if(`${request.content}`=="atualizar"){
		if(check){
			check=false;
			sendResponse({"response": "back"});
		}else{
			check=true;
			sendResponse({"response": "forward"});
		}
	}
	if(`${request.content}`=="minutes"){		
		sendResponse({minutes: min});
	}
	if(`${request.content}`=="minutesLunch"){
		sendResponse({minutesLunch: minLunch});
	}
	if(`${request.content}`=="minutesReload"){
		sendResponse({minutesReload: minAtualizar});
	}
	if(`${request.content}`=="all"){
		sendResponse({minutesReload: minAtualizar,
		minutesLunch: minLunch, minutes: min});
	}
}

browser.runtime.onMessage.addListener(handleMessage);

function randomizar(){
	var x = Math.floor((Math.random() * 100) + 1);
	while(x>30){
		x = Math.floor((Math.random() * 100) + 1);
	}
	return x;
}

/*IMPORTANTE: NÃO ESQUEÇA DE HABILITAR A FUNCIONALIDADE "Minimize memory usage" in about:memory*/