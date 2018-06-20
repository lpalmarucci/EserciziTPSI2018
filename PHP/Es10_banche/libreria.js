function inviaRichiesta(url,method,parameters,callback){
	$.ajax({
		url: url,//servizio da richiamare
		type: method.toUpperCase(),//GET o POST
		data: parameters,//oarametri da passare al servizio
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",//formato con cui passo i parametri
		dataType: "text",  // i dati ricevuti dal server vengoni iniettati
		async : true,  		//tipo di chiamata --> async(non bloccante)
		timeout : 5000,
		success: callback,
		error : function(jqXHR, test_status, str_error){
			alert("Server Error: " + jqXHR.status + " - " + jqXHR.responseText);
		}
	});
}
