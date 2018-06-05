"use strict";
var DIM;
$(document).ready(function () {
    DIM=9;
    var _wrapper=$("#wrapper").css({"background-color":"#FF9","float":"left"});
    for(var i=0;i<DIM;i++){
        var num=Math.floor(256 * Math.random())
        var _div=$("<div></div>")
        _div.addClass("box");
        //alert("("+num+","+num+","+num+")")
        _div.text(i+1);
        _div.prop("id","ID"+i);
        //alert("rgb("+num+", "+num+", "+num+")")
        _div.css({"background-color":"rgb("+num+", "+num+", "+num+")"})
        _wrapper.append(_div);
    }
    var _tool=$("#tooltip");
    $("#wrapper div").on("mouseover",function () {
        var aus=$(this).css("background-color").substr(4).split(',');//è un vettore
        _tool.text(aus[1])
        $("p").fadeIn(500)
    })
    $("#wrapper div").mouseout(function () {
        $("p").fadeOut()
    })
    $("#btnOk").on("click",function () {
        if($("#txtColore").val()=="" || $("#txtPosizione").val()=="")
        {
            alert("Errore nella compilazione");
            $("#txtColore").val("");
            $("#txtPosizione").val("");
        }
        else {
            var colore=$("#txtColore").val();
            var indice=$("#txtPosizione").val()
            var indiceWrapper=parseInt($("#wrapper div").prop("id").substr(2));
            var bcBox=$("#wrapper > div").eq(indiceWrapper).css("background-color").substr(4).split(',')[1];
            if(parseInt(colore)<parseInt(bcBox)) {
                $("#txtColore").css({"background-color":"red","color":"white"})
                $("#lblMsg").text("Troppo piccolo");
            }
            else if(parseInt(colore)>parseInt(bcBox)){
                //alert("MAGGIORe")
                $("#txtColore").css({"background-color":"blue","color":"white"})
                $("#lblMsg").text("Troppo grande");
            }
            else{
                $("#txtColore").css({"background-color":"white","color":"black"})
                $("#lblMsg").text("BRAVO");
                var indiceWrapper=parseInt($("#wrapper div").prop("id").substr(2));
                $("#wrapper > div").eq(indiceWrapper).css({"background-color":"#FF9","border":"0px solid #FF9"})
            }
        }
    })
})