"use strict";
$(document).ready(function(){
  var _wrapper=$("#wrapper");
  var cont=0;
  for(var i=1;i<=10;i++){
    var _img=$("<img></img>");
    _img.prop("src","./img/b"+i+".gif");
    _img.addClass("carta");
    _wrapper.append(_img);
    _img.draggable({
      "revert":"invalid",
      "start":function(){
        $(this).css("z-index",10000);
      },
      "drag":function(){
        $("#bersaglio").css("background-color","#0F0");
      },
      "stop":function(){
        $("#bersaglio").css("background-color","#CCC");
      }
    })
  }
  var rnd=Math.floor(10*Math.random())+1;
  $("#bersaglio").text(rnd);
  $("#bersaglio").droppable({
    "accept":".carta",
    "drop":function(event,args){
      var aus=args.draggable.prop("src");
      var nImg=aus.split('/')[11];
      nImg=nImg.split('.');
      nImg=nImg[0].substr(1);
      if(nImg==parseInt($("#bersaglio").text()) || nImg==parseInt($("#bersaglio").text()-3)){
        //alert("giusto");
        $(args.draggable).effect("shake",{},1000,function(args){
          args.draggable.draggable("disable");
        })
        $(".carta").draggable("disable");
        $("#msg").text("Hai vinto!");
        setTimeout(function () {
            args.draggable.removeAttr("style");//riporta l'oggetto nella situazione iniziale
        },1000);
      }
      else {
        $(args.draggable).effect("explode",{},1000,function(args){
          event.target.draggable("disable");
          args.draggable.removeAttr("style");
        })
        $("#msg").text("Riprova!");
      }
    }
  })
})
