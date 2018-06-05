
$(document).ready(function(){
  var _box=$("#box");
  _box.draggable({
    "revert":"invalid",
    "cursor":"alias",
    //ho messo lo z-index per farlo vedere sopra
    //ai bersagli
    /*"snap":"true" NON CAPISCO IL SIGNIFICATO*/
    //"grid":[250,250] Serve per farlo muovere
    //di un tot di pixel alla volta
    //"scroll":true qunado trascino, scorre in automatico solo se il genitore è overflow auto
  })
  var _bersaglio=$("div.bersaglio");
  _bersaglio.droppable({
    "drop":function (event,args){
      args["helper"].draggable("disable");
      //stessa cosa
      //args.draggable.draggable("disable");
      var txt=$(event["target"]).children("p").text();
      var _this=$(event["target"]).children("p");
      if(parseInt(txt)==15){
        $(event["target"]).css({
          "background-color":"green",
        }).text("HAI VINTO")
        _this.css("visibility","hidden");
      }
      else {
        $(event["target"]).css({
          "background-color":"red"
        }).text("hai perso")
      }
      //var top=args["offset"]["top"];
      //var left=args["offset"]["left"];
      args["helper"].css({
        "top":0,
        "left":0
      })
    },
    "accept":"#box",
    "activeClass":"another",
    "hoverClass":"another"
  })
  $("#btnAvvia").on("click",function(){
    window.location.reload();
  })
})
