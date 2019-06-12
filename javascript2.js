var hora = ['09','13','14','18'];
var minuto = ['00'];

var c1 = setInterval(atualizarP,3000);

function myFunction(){
	chrome.tabs.executeScript(
		{
			code: 'document.getElementById("idFormDadosEntradaSaida:horaEntrada").value= "16:00"' /*serve para adicionar "14:30" no componente especificado */		
		}
	);
	
	chrome.tabs.executeScript(
		{
			code: 'document.getElementById("idFormDadosEntradaSaida:horaSaida1").value= "16:30"' /*serve para adicionar "14:30" no componente especificado */		
		}
	);
	
	chrome.tabs.executeScript(
		{
			code: 'document.getElementById("idFormDadosEntradaSaida:idBtnRegistrarSaida").click()' /*simula um clique no botão capturado*/
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
		null, {file:"javascript_injetado.js"});*/
};

document.addEventListener('DOMContentLoaded',function(){
	document.querySelector('button').addEventListener('click', myTimer);	
});

function myTimer(){
	/*setInterval(addTime(),60000);	/*função para */
	/*var c1 = setInterval(atualizarP,3000);	*/
}

function addTime(){
	var i;
	var d = new Date();
	for(i=0;i<hora.length;i++){
		if(d.getHours()==hora[i]){
			
		}
	}	
}

function atualizarPag(){
	document.getElementById("elgen-4").click();		
}
function atualizarPag2(){
	document.getElementById("elgen-8").click();
} 

function atualizarP(){
	chrome.tabs.executeScript(
		{				
			code: 'document.getElementById("idFormDadosEntradaSaida").submit()' /*serve para submeter o form idFormDadosEntradaSaida*/
		}
	);
	chrome.tabs.reload();
	chrome.runtime.reload();	
}
