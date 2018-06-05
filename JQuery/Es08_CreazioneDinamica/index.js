
function aggiungi1() {
    var len = $("#menu1").children().length + 1;
	var voce = $("<li>menu 1 voce " + len + "</li>");
    $("#menu1").append(voce);
}

function aggiungi2() {
    var len =$("#menu2 li").length + 1;
    var voce = $("<li>menu 2 voce " + len + "</li>");
    voce.appendTo($("#menu2"));
}

function sposta1() {
    // Se la lista vuota, viene appeso un elemento nullo che NON crea problemi
	$("#menu2").append($("#menu1 li:last-child"));
}

function sposta2() {
   //$("#menu2").children("li:last-child").appendTo($("#menu1"));
	 $("#menu2").children().last().appendTo($("#menu1"));
}

function nuovo1() {
    $("#menu1 li:first-child").before($("<li>nuova voce</li>"));
}

function nuovo2() {
    $("#menu2").children("li:first-child").after($("<li>nuova voce</li>"));
}



	
/* ************************** NON FARE ********************************/

function aggiungiDopoOgniVoce() {
	$("#menu1 li").after("<li>Voce postposta a tutti gli elementi</li>"); 
}
function aggiungiPrimaDiOgniElemento () {
	$("#menu2 li").before("<li>Voce preposta a tutti gli elementi</li>");
}
/*tutte le stringhe che partono dal genitore possono contenere codice HTML*/
