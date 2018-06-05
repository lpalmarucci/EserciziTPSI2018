var votoTotale;
$(document).ready(function(){
    // Lettura nome e cognome
	var s = window.location.search;
	s = s.substr(s.indexOf("?") + 1);
	//alert(s);
	//imposto il nome
	var _nome=s.split('&')[0].substr(11);
	var _cognome=s.split('&')[1].substr(8);
	var aus=$("body > h1").text();
	$("body > h1").text(aus+" "+ _cognome+" "+_nome);
	creaHtml();
	votoTotale=0;
	/*window.setTimeout(function(){
		if(ricorsione())
			ricorsione();
		else {
			alert("tempo scaduto");
		}
	},1000);*/

})
function ricorsione(){
	if(parseInt($("#timer").text())!=0){
		$("#timer").text(parseInt($("#timer").text())-1);
		return true;
	}
	else {
		return false;
	}
}
function creaHtml(){
	var contRadio=1;
	//var contOther=0;
	var vet=new Array(10);
	for(var i=0;i<vet.length;i++){
		vet[i]="name"+i;
	}
	//tag <p> con font-size 16pt e colore del testo blue
	//<input type=’radio’” ognuno seguito da un tag <span>
	var _wrapper=$("#wrapper");
	for(var i=0;i<domande.length;i++){
		var _domanda=domande[i]["domanda"];
		var _p=$("<p style='font-size: 16pt; color: blue'></p>")
		_p.text(_domanda);
		_p.prop("nDomanda",i);
		_wrapper.append(_p);
		var _vettAnswer=domande[i]["risposte"];
		//console.log(_vettAnswer[0])
		//.log(_vettAnswer)
		for(var j=0;j<_vettAnswer.length;j++){
			var _radio=$("<input></input>");
			_radio.prop("type","radio");
			_radio.prop("nRadio",contRadio);
			_radio.prop("name","name"+i);
			_radio.addClass("radio");
			_wrapper.append(_radio);
			var _span=$("<span></span>");
			_span.text(_vettAnswer[j]);+
			_span.prop("nRisposte",contRadio);
			_span.addClass("span");
			_wrapper.append(_span);
			_wrapper.append("<br>");
			if(j==domande[i]["correct"]){
				_span.prop("correct",domande[i]["correct"]);
				_radio.prop("correct",domande[i]["correct"]);
			}
			contRadio++;
		}
		var _radio=$("<input></input>");
		_radio.prop("type","radio");
		_radio.prop("checked","checked");
		_radio.prop("name","name"+i);
		_radio.addClass("radio");
		_radio.prop("nRadio",-1);
		_radio.prop("lastChoice","-1");
		_wrapper.append(_radio);
		var _span=$("<span></span>");
		_span.text("Non rispondo");
		_span.prop("nRisposte",j);
		_span.addClass("span");
		_wrapper.append(_span);
		_wrapper.append("<br>");
		contRadio++;
	}
	var _btn=$("<input></input>")
	_btn.prop("type","button");
	_btn.prop("class","invia");
	_btn.prop("value","Invia");
	var _div=$("<div></div>");
	_div.css({
		"width":"30px",
		"height":"30px"
	})
	_div.text("example");
	_div.css("font-size","15pt");
	_div.css("font-weight","bold");
	_div.prop("id","timer");
	_div.text("60");
	_wrapper.append(_btn);
	_wrapper.append(_div);
	_btn.mouseover(function(){
		var bc=$(this).css("background-color");
		var color=$(this).css("color");
		$(this).css({
			"background-color":color,
			"color":bc
		})
	})
	_btn.mouseout(function(){
		var bc=$(this).css("background-color");
		var color=$(this).css("color");
		$(this).css({
			"background-color":color,
			"color":bc
		})
	})
	_btn.on("click",function(){
		$("input[type=radio]:checked").each(function (i,ref) {
			//console.log(i); come i del for normale
			//console.log(ref); contiene informazioni su chi ha scatenato l'evento
			var indice=$(this).prop("nRadio");
			if(indice!=-1){
				if($(".span").eq(indice).prop("correct")){
					votoTotale+=1;
					$(".span").eq(indice-1).css("background-color","green");
				}
				else 	{
					votoTotale-=0.25;
					$(".span").eq(indice-1).css("background-color","red");
				}
			}
		})
		var barraEsterna=$("<div></div>");
		barraEsterna.css({
			"border":"1px solid black",
			"width":"400px",
			"height":"30px"
		});
		_wrapper.append(barraEsterna);
		var barraInterna=$("<div></div>");
		barraInterna.css({
			"width":"0px",
			"background-color":"green",
			"height":"30px"
		});
		barraInterna.animate({"width":"400px"},
		2000,function(){
			barraInterna.animate({"width":(400*votoTotale)/10+"px"},
		2000,function(){
			alert("Complimenti hai un punteggio di "+votoTotale+" su 10");
		})
		})
		barraEsterna.append(barraInterna);
	})
}
