/**
 * Created by a.boschero.0184 on 23/11/2017.
 */

$(document).ready(function () {
    var _button = $("#idPulsante");
    var _effect = $("#effect");

    _button.on("click",function () {
        var selezione = $("#effectTypes").val();
        var option = {};
        if(selezione=="scale")
            option={"percent":"50"};
        else if(selezione=="transfer")
            option={"to":"#button",
                    "className":"bordo"};
        else if(selezione=="size")
            option={"to":{"width":"200px","height":"60px"}}
        _effect.effect(selezione,option,1000,function () {
            var _this=$(this);
            setTimeout(function () {
                _this.removeAttr("style");//riporta l'oggetto nella situazione iniziale
            },500);

        });
    });
});