"use strict";
$(document).ready(function(){
    var s = window.location.search;
    s = s.substr(s.indexOf("?") + 1);
    s = s.substr(11);
    s = s.split("&txtNome=");
    console.log(s[0] + " " + s[1]);
    var _h1 =$("body").children(":first-child");
    _h1.text(_h1.text()+" "+s[0]+" "+s[1]);
    var _wrapper = $("#wrapper");
    for(var i=0;i<domande.length;i++){
        var _p = $("<p></p>");
        var _input;
        var _span;
        _p.text(domande[i].domanda);
        _p.css({"font-size":"16pt","color":"#0000b0"});
        _p.appendTo(_wrapper);
        for(var j=0;j<domande[i].risposte.length;j++){
            _input = $("<input>");
            _span =$("<span></span><br>");
            _input.prop("type","radio");
            _input.prop("name","D-"+i);
            _input.prop("value",j);
            _span.text(domande[i].risposte[j].toString());
            _input.appendTo(_wrapper);
            _span.appendTo(_wrapper);
        }
        _input = $("<input>");
        _span =$("<span></span><br>");
        _span.text("Nessuna Risposta");
        _input.prop("type","radio");
        _input.prop("name","D-"+i);
        _input.prop("value","null");
        _input.prop("checked",true);
        _input.appendTo(_wrapper);
        _span.appendTo(_wrapper);
    }
    var _btn=$("<input>");
    _btn.prop("type","button");
    _btn.css({"float":"left"});
    _btn.addClass("invia");
    _btn.val("Invia");
    _btn.on("click",invia);
    _btn.on("mouseover",mouseIn);
    _btn.on("mouseout",mouseOut);
    _btn.appendTo(_wrapper);
    var _contatore = $("<h1></h1>");
    _contatore.text("60");
    _contatore.css({"float":"left"});
    _contatore.appendTo(_wrapper);
    var interval=setInterval(contatore,1000);
    var _barraEsterna = $("<br><div></div>");
    _barraEsterna.addClass("barraEsterna");
    _barraEsterna.appendTo(_wrapper);
    var _barraInterna = $("<div></div>");
    _barraInterna.addClass("barraInterna");
    _barraInterna.appendTo(_barraEsterna);
    function contatore() {
        var cont = parseInt(_contatore.text());
        if(cont!==0){
            _contatore.text((cont-1).toString());
            //alert(cont);
        }else{
            _btn.prop("disabled",true);
            alert("Time Out!");
            clearInterval(interval);
        }
    }
    function invia() {
        _btn.prop("disabled",true);
        clearInterval(interval);
        var votoFinale = 0;
        var _current;
        for(var i=0;i<domande.length;i++){
            _current = $("input[name=D-"+i+"]:checked");
            console.log("Risposta"+_current.val());
            if(!(_current.val().toString()==="null")){
                if(parseInt(_current.val())===parseInt(domande[i].correct))
                    votoFinale++;
                else{
                    votoFinale = votoFinale-0.25;
                    _current.next().css({"color":"#F00"});
                }
            }
        }
        _barraInterna.animate({"width":"400px"},2000,function () {
            if(votoFinale!==0){
                _barraInterna.animate({"width":((votoFinale*400)/10).toString()+"px"},2000,function () {
                    allerta(votoFinale);
                });
            }else {
                _barraInterna.animate({"width":"0"+"px"},2000,function () {
                    allerta(votoFinale);
                });
            }
        });
        $("#wrapper > input[type=radio]").prop("disabled",true);
    }
    function allerta(_voto) {
        if(_voto>5.99)
            alert("Complimenti! Hai preso: "+_voto  );
        else
            alert("Mi dispiace! Hai preso: "+_voto);
    } 
    function mouseIn() {
        _btn.css({"color":"cyan","background-color":"#222"});
    }
    function mouseOut() {
        _btn.css({"color":"#222","background-color":"cyan"});
    }
});