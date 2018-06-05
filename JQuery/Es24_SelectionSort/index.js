"use strict";
var DIM=15;
$(document).ready(function () {
    var _last=DIM-1;
    var max=-1;
    var pos=0;
    var _wrapper = $("#wrapper");
    for (var i = 0; i < DIM; i++){
        var _li = $("<li></li>");
        _li.addClass("mattoni");
        _li.text(Math.floor(100*Math.random())+1);
        _li.prop("id","ID"+i);
        _wrapper.append(_li);
    }
    ricercaMax();
    //alert(max);
    function Effect() {
       var btn1=$("#wrapper").children().eq(pos).addClass("oscilla");
       var btn2=$("#wrapper").children().eq(_last).addClass("oscilla");
       var aus="";
       if(_last==pos){
            btn1.addClass("oscilla");
            btn1.effect("shake",{},300);
            btn1.removeClass("oscilla")
            btn1.css({"background-color":"#228b22"});
            diminuisci();
       }
       else{
            aus=btn1.text();
            btn1.addClass("oscilla",300,function(){
                btn1.effect("shake",{},300)
                btn1.removeClass("oscilla");
                btn1.text(parseInt(btn2.text()));
                diminuisci();
            });
            btn2.addClass("oscilla",300,function () {
                btn2.effect("shake",{},300);
                btn2.removeClass("oscilla")
                btn2.text(aus);
                btn2.css({"background-color":"#228b22"});
                diminuisci();
            })
        }
    }

    function ricercaMax() {
        pos=0;
        for(var i=0;i<(_last+1);i++){
            var btn=$("#wrapper").children().eq(i);
            if(btn.text()>max){
                pos=i;
                max=parseInt(btn.text());
            }
        }
        Effect();
    }
    function diminuisci() {
        if (_last != 1) {
            _last--;
            max = 0;
            ricercaMax();
        }
        else {
            $("#ID0").css("background-color","#050");
            alert("TERMINATO");
        }

    }
});