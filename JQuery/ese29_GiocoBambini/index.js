
"use strict";
const DIM=10;

$(document).ready(function () {
    var _wrapper=$("#wrapper");
    for(var i=0;i<DIM;i++)
    {
        var _carta=$("<img>");
        _carta.addClass("carta");
        _carta.appendTo(_wrapper);
        _carta.prop("src","img/b"+(i+1)+".gif");
        _carta.prop("id","n"+i);
    }

    var _bersaglio=$("#bersaglio");
    _bersaglio.text(Math.floor(10*Math.random())+1);


    var _carta = $(".carta"); //tutti gli elementi che implementano la classe carta!!
    _carta.draggable({
        "cursor":"move",
        //"containment":"#bersaglio",
        stack:"#bersaglio" //permette di passare al di sopra degli altri elementi
    });

    var _bersagli = $("#bersaglio"); //tutti elementi con la classe bersaglio
    _bersagli.droppable({
        "hoverClass":"verde",
    });

});
