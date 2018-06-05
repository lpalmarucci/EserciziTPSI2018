"use strict";
$(document).ready(function () {
    var _wrapper=$("#wrapper")
    for(var i=0;i<36;i++)
    {
        var box=$("<div></div>");
        box.addClass("box");
        _wrapper.append(box);
       // box.prop("class","box")
        //box.appendTo(_wrapper);
    }
    change();
});
function change() {
    //Math.floor((B-A+1)*Math.random())+A;
    var rnd=Math.floor(36*Math.random());
    //console.warn(rnd);
    var _box=$("#wrapper > div").eq(rnd);//.eq mi permette di accedere ad una raccolta jquery tramite l'indice messo tra parentesi. restituisce una collezione
    _box.animate({opacity:0.3},400);
    _box.animate({opacity:0.6},400);
    _box.animate({opacity:0.1},400);
    setTimeout(change,33.84)
}