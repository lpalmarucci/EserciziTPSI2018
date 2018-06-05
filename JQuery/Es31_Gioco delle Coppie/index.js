"use strict";
var _sender;
$(document).ready(function(){
  var _wrapper=$("#wrapper");
  var char = 'f';
  var ch;
  for(var j = 1; j<=2; j++){
      for(var i = 1; i<13; i++){
          ch = char+i;
          var left = Math.floor(Math.random()*520);
          var top = Math.floor(Math.random()*506);
          var _carta = $("<div></div>");
          _carta.css("background-image", 'url("img/'+ch+'.gif")');
          _carta.css({
              "top":top,
              "left":left
          });
          _carta.prop("val", i);
          _carta.prop("colore", char);
          _carta.addClass("carta carteMov");
          _wrapper.append(_carta);
      }
      char='q';
      //char = String.fromCharCode(char.charCodeAt(0)+1);
  }
  var _carteMov=$(".carteMov");
  _carteMov.draggable({
    "containment":"#wrapper",
    "cursor":"move",
    "start":function(){
      $(this).css("z-index","1000");
      _carteMov.droppable({
        "drop":function(event,args){
          var valoreSender=parseInt(args.draggable.prop("val"));
          var valoreHost=$(event["target"]).css("background-image");
          valoreHost=parseInt(valoreHost.split('"')[1].split('/')[11].split('.')[0].substr(1));
          // console.log("Sender: "+valoreSender);
          // console.log("Host: "+valoreHost);
          if(valoreHost==valoreSender){
            args.draggable.effect("explode",{},600,function(){
              $(this).hide();
            })
            $(event["target"]).effect("explode",{},600,function(){
              $(this).hide();
            })
          }
          else {
              args.draggable.effect("shake",{},600,function(){
              //spostata in una posizione casuale

              var left = Math.floor(Math.random()*520);
              var top = Math.floor(Math.random()*506);
              $(this).css({
                "top":top,
                "left":left
              });
            })
          }
        }
      })
    }
  })
})
