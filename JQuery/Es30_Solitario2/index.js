"use strict";
$(document).ready(function () {
    var vittoria = [1, 1];
    var _wrapper = $("#wrapper");
    var _ass = $(".ass");

    _ass.eq(0).prop("val", 1);
    _ass.eq(0).prop("colore", "a");

    _ass.eq(1).prop("val", 1);
    _ass.eq(1).prop("colore", "b");

    var char = 'a';
    var ch;
    for(var j = 1; j<=2; j++){
        for(var i = 1; i<13; i++){
            ch = char+(i+1);
            var left = Math.floor(Math.random()*520);
            var top = Math.floor(Math.random()*506);
            var _carta = $("<div></div>");
            _carta.css("background-image", 'url("img/'+ch+'.gif")');
            _carta.css({
                "z-index":parseInt(i),
                "top":top,
                "left":left
            });
            _carta.prop("val", (i+1));
            _carta.prop("colore", char);
            _carta.addClass("carta carteMov");
            _wrapper.append(_carta);
        }
        char='b';
        //char = String.fromCharCode(char.charCodeAt(0)+1);
    }
    var _carteMov=$(".carteMov");
    _carteMov.draggable({
      "containment":"#wrapper",
      "cursor":"move"
    })
    $(".ass").droppable({
      "drop":controlla
    })
    function controlla(event,args){
      //console.log("entrato in controlla");
      var _cartaTrascinata=args["draggable"];
      var seme1=_cartaTrascinata.prop("colore");
      var valore1=_cartaTrascinata.prop("val");
      var seme2=$(this).prop("colore");//this e event["target"] sono la stessa cosa
      var valore2=$(event["target"]).prop("val");
      if(seme1!=seme2 && valore1>valore2){
        console.log("OK");
        $(this).droppable("disable");
        _cartaTrascinata.draggable("disable");
        args["draggable"].droppable({
          "drop":controlla
        });
      }
      else{
        var left = Math.floor(Math.random()*520);
        var top = Math.floor(Math.random()*506);
        _cartaTrascinata.animate({"top":top,"left":left},1000);
        //args["draggable"].hide();
        /*args["draggable"].css({
          "top":top,
          "left":left
        })*/
        //args["draggable"].show();
      }
    }

});
