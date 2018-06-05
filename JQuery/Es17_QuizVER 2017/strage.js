
 $(document).ready(function(){
	var s = window.location.search;
	s = s.substr(s.indexOf("?") + 1); 
	
	var vet = s.split("&");
	var cognome = vet[0].split("=")[1];
	var nome = vet[1].split("=")[1];
	$("h1").text($("h1").text() + nome + " " + cognome);

	var _wrapper = $("#wrapper");
	for (var i=0; i<domande.length; i++){
		var p = $("<p></p>");
		p.text(domande[i]["domanda"]);
		p.css({"font-size":"16pt", "color" : "blue"})
		_wrapper.append(p);
		var risposte = domande[i]["risposte"];
		for (var j=0; j<risposte.length; j++){
			var input = $("<input type='radio'> ");
			input.attr("name", "opt" + i);
			input.val(j);
			_wrapper.append(input);
			var span = $("<span></span>");
			span.text(" " + risposte[j]);
			_wrapper.append(span);
			var br = $("<br>");
			_wrapper.append(br);
		}			
		var input = $("<input type='radio'> ");
		input.attr("name", "opt" + i);
		input.prop("checked", true);
		input.val("-1");
		_wrapper.append(input);
		var span = $("<span></span>");
		span.text("Non rispondo");
		_wrapper.append(span);
		var br = $("<br>");
		_wrapper.append(br);
	}
	
	// pulsante invia
	var button = $("<button></button>");
	button.addClass("invia");
	button.text("invia");
	_wrapper.append(button);
	
	// barra del voto
	var div1 = $("<div></div>");
	div1.addClass("barraEsterna");
	_wrapper.append(div1);
	var div2 = $("<div></div>");
	div2.addClass("barraInterna");
	div1.append(div2);
	
	button.on("click", function(){
		var voto =0;
	    $("input[type=radio]:checked").each(function(i, ref){
		     if($(ref).val() != -1){
			    if($(ref).val() == domande[i]["correct"])
				     voto +=1;
				else{
				  voto -=0.25;
				  $(this).next().css("color","red");
				}
			 }
		});
		var div1 = $("#wrapper div");
		var div2 = $("#wrapper div div");
		var width = voto*40;
		div2.animate({width:400}, 2000, function(){
		    div2.animate({width:width}, 2000, function(){
			    button.off("click");
			    alert("Complimenti, hai preso un bel " + voto);
			});
		});
	});	
 });