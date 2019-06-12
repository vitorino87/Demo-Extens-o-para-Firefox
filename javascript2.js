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
	document.querySelector('button').addEventListener('click', myFunction);
});