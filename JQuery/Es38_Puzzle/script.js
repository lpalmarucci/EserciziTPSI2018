"use strict";
var aus=1;
var contImmagini=0;
$(document).ready(function () {
    //  ME LO NASCONDE E ME LO MOSTRA SUBITO DOPO
    // $("#btnVisualizza").on("click",function () {
    //     if(aus==0){
    //         $("#imgCompleta").show(0,function () {
    //             alert("mostrato")
    //         });
    //         aus=1;
    //     }
    //     else if(aus==1){
    //         /*var _img=$("<img></img>");
    //         _img.prop("id","imgCompleta")
    //         _img.appendTo("#imgCompleta");*/
    //         aus=0;
    //         $("#imgCompleta").hide(0,function () {
    //             alert("nascosto")
    //         });
    //         // $("#imgCompleta").prop("url","./img/imgCompleta.png");
    //     }
    // })
    $("#wrapper").droppable();
    posizioneRandom();
    $("td").each(function (i,ref) {
        $(ref).droppable({
            "drop":function (event,args) {
                var sender=args.draggable; // puntatore all'elemento trascinato
                var idSender=sender.prop("id");
                if($(event["target"]).prop("id")==idSender){
                    $(event["target"]).droppable("disable");
                    sender.draggable("disable");
                    contImmagini++;
                }
                else{
                    sender.draggable("option","revert",true);
                }
                if(contImmagini==15){
                    alert("hai completato il puzzle");
                }

            }
        })
    })
    // function controlla() {
    //     var cont=0;
    //     $("#wrapper").children().each(function (i,ref) {
    //         cont++;
    //     })
    //     if(cont==0)
    //         return true;
    //     else
    //         return false;
    // }
    risettaWrapper();
    function risettaWrapper() {
        $("#wrapper > img").each(function (i,ref) {
            $(ref).draggable("option","revert","invalid")
        })
    }
    function posizioneRandom() {
        if(aus==1){
            for(var i=0;i<15;i++){
                var top=Math.floor(425*Math.random());
                var left=Math.floor(1025*Math.random());
                var _div=$("<img></img>");
                _div.prop("id","b"+(i+1));
                _div.css({
                    "position":"absolute",
                    "top":top,
                    "left":left,
                    "width":"175px",
                    "height":"175px"
                })
                var path="img/img"+(i+1)+".png";
                _div.prop("src",path);
                _div.appendTo("#wrapper");
                _div.draggable({
                    "revert":"invalid",
                    "stop":function () {
                        $(this).draggable("option","revert","invalid")
                    }
                });
            }
            aus++;
        }
        else{
            aus=1;
        }

    }
})
