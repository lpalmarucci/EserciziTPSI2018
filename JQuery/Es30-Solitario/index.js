"use strict";
var semeAttualeS;
var semeAttualeD;
var contS;
var contD;
var top;
$(document).ready(function(){
  top=0;
  contS=1;
  contD=1;
  semeAttualeD="quadri";
  semeAttualeS="fiori";
  var _wrapper=$("#wrapper")
  for(var i=2;i<=13;i++){
    //carte di fiori
    var top=0;
    var left=0;
    top=Math.floor(504*Math.random());
    left=Math.floor(530*Math.random());
    var _img=$("<img></img>");
    _img.prop("src","./img/a"+i+".gif");
    _img.addClass("carta");
    _img.prop("seme","fiori");
    //_img.prop("drop","si");
    _img.on("mouseover",function(){
      $(this).addClass("trascinabile");
    })
    _img.css({
      "top":top,
      "left":left,
      "z-index":i*20
    })
    _img.appendTo(_wrapper);
    _img.draggable({
      "revert":"invalid",
      "containment":_wrapper
    });

    top=0;
    left=0;
    top=Math.floor(504*Math.random())
    left=Math.floor(530*Math.random());
    var _img=$("<img></img>");
    _img.prop("seme","quadri");
    _img.prop("src","./img/b"+j+".gif");
    _img.addClass("carta");
    //_img.prop("drop","si");
    _img.on("mouseover",function(){
      $(this).addClass("trascinabile");
    })
    _img.css({
      "top":top,
      "left":left,
      "z-index":i*20
    })
    _img.appendTo(_wrapper);
    _img.draggable({
      "revert":"invalid",
      "containment":_wrapper
    });
  }
  /*MIA VERSIONE
  function controlla(cont,quale){
    if(quale=="sinistra"){
      if(cont==13){
        alert("hai completato la colonna di sinistra");
      }
    }
    else if (quale=="destra") {
      if(cont==13){
        alert("hai completato la colonna di sinistra");
      }
    }
  }
  $("#a1").droppable({
    "drop":function(event,args){
      args.draggable.draggable({
        "revert":"invalid"
      })
      var aus=args.draggable.prop("src");
      var nImg=aus.split('/')[11];
      nImg=nImg.split('.');
      var lettera=nImg[0].substr(0,1);
      nImg=nImg[0].substr(1);
      if(semeAttualeS == "fiori"  &&  lettera=="a"  ||
         semeAttualeS=="quadri"   &&  lettera=="b" ||
         (nImg-contS)>1){
            //console.log(args);
            //alert("selezionare un'altra carta");
            args.draggable.draggable({
              "revert":true
            })
            //alert("messo revert true");
      }
      else if (semeAttualeS == "fiori"  &&  lettera=="b" ||
              semeAttualeS == "quadri"  &&  lettera=="a") {
                if(nImg>contS){
                  if(contS==1)
                    top=50+24;
                  else {
                    top=74+(24*(contS-1));
                  }
                  contS++;
                  args.draggable.css({
                    "top":top,
                    "left":"622"
                  })
                  args.draggable.css({
                    "z-index":contS*30
                  })
                  args.draggable.draggable("disable");
                  if(semeAttualeS=="fiori"){
                    semeAttualeS="quadri";
                  }
                  else {
                    semeAttualeS="fiori";
                  }
                }
                else{
                  args.draggable.draggable({
                    "revert":true
                  })
                }
      }
      controlla(contS,"sinistra");
    }
  });
  //colonna di destra
  $("#b1").droppable({
    "drop":function(event,args){
      args.draggable.draggable({
        "revert":"invalid"
      })
      event.target.removeClass("dropD");
      args.draggable.addClass("dropD");
      var aus=args.draggable.prop("src");
      var nImg=aus.split('/')[11];
      nImg=nImg.split('.');
      var lettera=nImg[0].substr(0,1);
      //alert(lettera);
      nImg=nImg[0].substr(1);
      //console.log(nImg);
      //console.log(nImg);
      if(semeAttualeD == "fiori"  &&  lettera=="a"  ||
         semeAttualeD=="quadri"   &&  lettera=="b" ||
         (nImg-contD)>1){
           args.draggable.draggable({
             "revert":true
           })
      }
      else if (semeAttualeD == "fiori"  &&  lettera=="b" ||
              semeAttualeD == "quadri"  &&  lettera=="a") {
                if(nImg>contD){
                  if(contD==1)
                    top=50+24;
                  else {
                    top=74+(24*(contD-1));
                  }
                  contD++;
                  args.draggable.css({
                    "top":top,
                    "left":"712"
                  })
                  args.draggable.css({
                    "z-index":contD*30
                  })
                  args.draggable.draggable("disable");
                  if(semeAttualeD=="fiori")
                    semeAttualeD="quadri";
                  else {
                    semeAttualeD="fiori";
                  }
                }
                else{
                  args.draggable.draggable({
                    "revert":true
                  })
                }
                event.target.removeClass("dropD");
                args.draggable.addClass("dropD");
      }
      controlla(contD,"destra");
    }
  });*/
})
