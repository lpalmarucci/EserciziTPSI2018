function inviaRichiesta(url,method,parameters,callback)
{
	$.ajax
	(
		{
			//servizio da richiamare
			url: url,
			//GET o POST, tipo di richiesta
			type: method.toUpperCase(),
			//parametri da passare, tipo "nome=valore&nome2=valore2"
			data: parameters,
			//inviali così come sono
			contentType: false,
			//non convertire i dati
			processData:false,
			//restituiti in testo
			dataType: "text",
			//tipo di chiamata, async (non bloccante)
			async : true,
			//tempo di attesa della risposta
			timeout : 5000,
			//se entro il timeout avviene una risposta 200, avviene success, ha un parametro che contiene i dati restituiti dal server
			success: callback,
			//se entro il timeout non avviene una risposta 200, avviene error
			error : function(jqXHR, test_status, str_error)//ci sono 3 parametri in automatico
			{
				//il primo parametro è l'oggetto che viene restituito a XMLHttpRequest
				alert("Server Error: " + jqXHR.status + " - " + jqXHR.responseText);
			}
		}
	);
}
