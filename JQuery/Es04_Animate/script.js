$(document).ready(function() {

    var _btnAvvia = $("#btnAvvia");
	_btnAvvia.on("click", eseguiAnimazione);

	_btnAvvia.css("opacity",0);
	var lampeggio = true;
	lampeggiare();
 	
	/****** Funzioni Ausiliarie ******/
	function eseguiAnimazione(){ 
	    // disabilito il pulsante di avvio
		_btnAvvia.off("click");
		lampeggio = false;
		$("#pedina")
		.css({left:"10px",top:"260px", width:"15px", height:"15px"})
		.animate({left:'+=60px', width:"8px", height:"8px"},'1300')
		.animate({top:'+=38px',  width:"15px", height:"15px"},'1300')
		.animate({left:'+=116px',width:"8px", height:"8px"},'1300')
		.animate({top:'+=77px',  width:"15px", height:"15px"}, '1300')
		.animate({left:'+=250px',width:"8px", height:"8px"},'1300', 
				function(){
					alert("Labirinto Terminato");
					_btnAvvia.on("click", eseguiAnimazione);
					lampeggio = true;
					lampeggiare();
				});
	}

	function lampeggiare() {
		/*_btnAvvia
			.animate({"opacity": 1},500)
			.animate({"opacity": 0},500);*/
		_btnAvvia.animate({"opacity": 1},500,function () {
				_btnAvvia.animate({"opacity": 0},500,function () {
					if (lampeggio)
						lampeggiare();
				})
			})
	}
});