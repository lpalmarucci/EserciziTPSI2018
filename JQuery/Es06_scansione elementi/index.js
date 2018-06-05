"use strict";
$(document).ready(function () {
    $("#btn1").on("click",function () {
        alert($("#wrapper").children().length);
        //--OR--//
        //alert($("#wrapper > li").length)
    });
    $("#btn2").on("click",function () {
        var s="";
        $("#wrapper").children().each(function () {
            s+=$(this).text();
        })
        alert(s);
    })
    $("#btn3").on("click",function () {
        var s="";
        $("#wrapper").children("li:nth-child(even)").each(function () {
            s+=$(this).text();
        })
        alert(s);
    })
    $("#btn4").on("click",function () {
        var _2nd=$("#wrapper").children("li:nth-child(2)");
        _2nd.css("background-color","yellow")
        var _4th=$("#wrapper").children("li").eq(3);
        _4th.css("background-color","#0FF")
        var _6th=$("#wrapper").children("li").eq(5);
        _6th.css("background-color","magenta")
        var _8th=$("#wrapper").children("li:nth-child(even):last");
        _8th.css("background-color","#F0F")
    })
});

function evidenzia(selettore) {
    //alert(selettore);
    $("#wrapper").children().css("background-color","#FFF");
    $("#wrapper").children(selettore).css("background-color","yellow")
}