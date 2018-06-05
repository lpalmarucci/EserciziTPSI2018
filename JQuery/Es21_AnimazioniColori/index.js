/**
 * Created by a.boschero.0184 on 21/11/2017.
 */

var state = false;

$(document).ready(function () {
   var _button = $("#button");
    var _effetct = $("#effect");
    _button.on("click",function () {
        if (!state){
            _effetct.animate({"width":"485px","color":"white","background-color":"blue"},1000);
        }
        else {
            _effetct.animate({"width":"250px","color":"black","background-color":"white"},1000);
        }
        state = !state;
    });
});