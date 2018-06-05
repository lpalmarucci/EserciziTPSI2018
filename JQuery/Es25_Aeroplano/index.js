'use strict' 

const avvio = 13;  // invio
const left = 37;   // freccina sx
const up = 38;     // freccina su
const right = 39;  // freccina dx
const down = 40;   // freccina giu
const shoot1 = 49; // tasto 1
const shoot2 = 50; // tasto 2

$(document).ready(function()
{	
	var inizio= false;
	var fine = false;
	var lastEvent = null;
	var _amico = $("#amico");
    var _nemico = $("#nemico")	
    var _proiettile1 = $("#proiettile1")	
    var _proiettile2 = $("#proiettile2")	
	
	$("#vittoria").hide();
	$("#perdita").hide();	
	$("#restart").click(function()
	{
		window.location.reload();
	});
				
	$(document).on('keydown', function(e) {	
		// se si tiene il tasto premuto, l'evento keydown viene generato più volte 
		if (lastEvent && lastEvent.keyCode == event.keyCode) 
			return;
		lastEvent = event;
		if (!inizio && e.keyCode == avvio ) {
			$("#inizio").hide();	
			_nemico.animate({ top: '150px', left:'1000px' }, 2500);
			_nemico.animate({ left: '1400px'}, 1300);
			_nemico.animate({ top: '250px'}, 1000);
			_nemico.animate({ top: '300px', left: '500px'}, 2000);
			_nemico.animate({ top: '450px', left: '100px'}, 2000);
			_nemico.animate({ top: '550px', left: '1500px'}, 3000);
			_nemico.animate({ top: '950px'}, 1000);
			inizio = true;
		}
		// impedisco di muovere l'oggetto PRIMA di aver avviato il gioco
	    else if (inizio){	
			if (e.keyCode == left)  
				_amico.animate({left: "-=4800"},8000); // 600px/sec
			else if (e.keyCode == right)  
				_amico.animate({left:"+=4800"},8000);  // 600px/sec
			else if (e.keyCode == shoot1)   
				_proiettile1.animate({top: "-=4800"}, 4000); // 1200px/sec
			else if (e.keyCode == shoot2)  
				_proiettile2.animate({top: "-=4800"}, 4000); // 1200px/sec    
		}
	});
	
	$(document).on('keyup', function(e) {
	    if (e.keyCode == left || e.keyCode == right )  
			_amico.stop();
		lastEvent=null;
	});
	
    collSx();
	collDx();
	collLn();
	collP1();
	collP2();

	/* ***** Gestione delle collisioni *********** */
	function collision($div1, $div2) {
		// spigolo in alto a sinistra
		var x1 = $div1.offset().left;
		var y1 = $div1.offset().top;
		// altezza complessiva comprensiva di padding, border e margin (true)
		var h1 = $div1.outerHeight(true);
		// larghezza complessiva comprensiva di padding, border e margin (true) 
		var w1 = $div1.outerWidth(true);
		// spigolo in basso a destra
		var ry1 = y1 + h1;
		var rx1 = x1 + w1;
		  
		var x2 = $div2.offset().left;
		var y2 = $div2.offset().top;
		var h2 = $div2.outerHeight(true);
		var w2 = $div2.outerWidth(true);
		var ry2 = y2 + h2;
		var rx2 = x2 + w2;

		if (ry1 < y2 || ry2 < y1 || rx1 < x2 || rx2 < x1) return false;
		else return true;
	}
		
	function collSx() {
		if(!fine){
			if(collision($("#limiteSx"), _amico)) 
				terminaGioco(false);
			else  
				setTimeout(collSx, 150);
		}
	}		
	function collDx() {
		if(!fine){
			if(collision($("#limiteDx"), _amico)) 		
				terminaGioco(false);
			else 
				setTimeout(collDx, 150);
		}
	}
	function collLn() {
		if(!fine){
			if(collision($("#limiteBasso"), _nemico)) 
				terminaGioco(false);		
			else 
				setTimeout(collLn, 150);
		}
	}		
	function collP1(){
		if(!fine){
			if(collision(_proiettile1, _nemico)) {
				_proiettile1.stop().hide();
				terminaGioco(true);		
			}
			else 
				setTimeout(collP1, 150);
		}
	}
	function collP2() {
		if(!fine){
			if( collision(_proiettile2, _nemico)){		
				_proiettile2.stop().hide();
				terminaGioco(true);
			}
			else  
				setTimeout(collP2, 150);
		}
	}

	function terminaGioco(vittoria){
		fine=true;
		$(document).off('keydown');
		_amico.stop(true);
		_nemico.stop(true);
		
		if (vittoria){
			_nemico.effect("explode", {}, 1000);
			$("#vittoria").fadeIn();
		}
		else{
			_amico.effect("explode", {}, 1000);
			$("#perdita").fadeIn(); 
		}		
	}	
});