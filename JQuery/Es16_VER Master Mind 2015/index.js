"use strict";
$(document).ready(function () {
    var _pedine=$("#pedine")
    var _indicatore=$("#indicatori")
    for(var i=0;i<40;i++){
        var _div=$("<div></div>");
        _div.addClass("pedina")
        _pedine.append(_div);

        var _div=$("<div></div>");
        _div.addClass("indicatore")
        _indicatore.append(_div);
    }
    var _btn=$("<input></input>")
    _btn.prop("type","button");
    _btn.addClass("pulsante")
    $("#pulsanti").append(_btn)
})