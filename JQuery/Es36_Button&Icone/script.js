"use strict";
$(document).ready(function () {
    var _btns=$(".btn");
    _btns.button(); // li faccio diventare pulsanti a livello grafico
    var _btn=$("#btn > label").children("button").eq(0);
    _btn.button({
        label:"Pulsante 0",
        icon:"ui-icon-signal-diag"
    })
    var _btn1=$("#btn > label").children("button").eq(1);
    _btn1.button({
        label:"Pulsante 1",
        icon:"ui-icon-calculator",
        iconPosition:"ui-icon-circle-minus"
    })
    var _btn2=$("#btn > label").children("button").eq(2);
    _btn2.button({
        label:"Pulsante 3",
        icon:"ui-icon-circle-minus"
    })
    var _btn3=$("#btn > label").children("button").eq(3);
    _btn3.button({
        label:"Pulsante 4",
        icon:"myIcon"
    })
});