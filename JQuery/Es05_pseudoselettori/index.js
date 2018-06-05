$(document).ready( function(){

var _ris = $("#txtRis");
	
//$("div:not('#wrapper'), p").click( function ()
$("#wrapper p, #wrapper div").click(function () {

    // .empty == .innerHTML = ""
	_ris.empty();
	
	// generic properties
    for(var i = 1; i <= 7; i++) 	
       valuta($(this), i);	// this == $("div:not('#wrapper'), p") ed è un puntatore
                            //                                     all'elemento cliccato
	
	visualizza("-----------------------");
   
	// specific properties	
	if($(this).is("#grigio"))
	    visualizza("Sono l'elemento con ID=grigio");    	
		
	if($(this).is("#blu, #rosso"))  
        visualizza("Sono l'elemento " + $(this).prop("id"));

    // contains si aspetta un testo controllando se è contenuto
	if($(this).is(":contains(myDiv)"));
    if($(this).is(":contains(\"myDiv\")")); 
    if($(this).is(":contains('myDiv')"))
        visualizza("Contengo il testo myDiv");    	
	
	if($(this).is("div:has('span')")) // has controlla se ha un tag
         visualizza("Contengo al mio interno un tag span");     

    
    // per confrontare i puntatori bisogna usare .is e non == o ===
    // children non accetta numeri ma selettori secondari
    //children restituisce una collezione
    var t = $(this);
    var t2 = $("#wrapper").children(":last-child");
    if(t[0] === t2[0])
    //if($(this).is($("#wrapper").children(":last-child"))) //versione ufficiale
        visualizza("Sono l'ultimo figlio di wrapper");
		   
	// senza IS, controllo se l'elemento corrente ha font-style == italic
	if($(this).children(":first-child").css("font-style")=="italic") 
	    visualizza("Il mio font è italico");
});

function valuta(box, i){
	// 1 - i-esimo elemento generico 	
    if(box.is(":nth-child("+i+")"))
        visualizza("nth-child("+i+")");
	// 2 - i-esimo elemento generico, ma solo se di tipo DIV		
    if(box.is("div:nth-child("+i+")"))
        visualizza("div:nth-child("+i+")");  
	// 3 - i-esimo elemento generico, ma solo se di tipo P			
    if(box.is("p:nth-child("+i+")"))
        visualizza("p:nth-child("+i+")");
		
	// 4 - i-esimo elemento del suo tipo			
    if(box.is(":nth-of-type("+i+")"))
        visualizza("nth-of-type("+i+")");	
    // 5 - i-esimo elemento del suo tipo, ma solo se di tipo DIV
    if(box.is("div:nth-of-type("+i+")"))
        visualizza("div:nth-of-type("+i+")");
	// 6 - i-esimo elemento del suo tipo, ma solo se di tipo P 
    if(box.is("p:nth-of-type("+i+")"))
        visualizza("p:nth-of-type("+i+")");
}	

function visualizza(msg){
    _ris.html(_ris.html() + msg + "<br>");
}
});