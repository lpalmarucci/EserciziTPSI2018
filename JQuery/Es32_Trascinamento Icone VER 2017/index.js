"use strict";
var vetNumeri=new Array(4);
var vetId=new Array(4);
var vetPuntatore=new Array(4);
var indiceVetId;
var indicePuntatore;
var cont;
$(document).ready(function(){
  var aus= new Array(6);
  indiceVetId=0;
  cont=1;
  indicePuntatore=0;
  for(var i=0;i<6;i++){
    aus[i]=i+1;
  }
  //alert(aus);
  prendiQuattroNumeri(aus);
  alert(vetNumeri);
  creaTabella();
  $("#leftFrame").children().each(function(){
    $(this).draggable({
      "cointainment":"#wrapper",
      "revert":"invalid",
      "helper":"clone"
    })
  })
})
function creaTabella(){
  var _tabella=$("#tabella")
  for(var i=0;i<10;i++){
    var tr=$("<tr></tr>");
    //tr.prop("nRiga",i+1);
    for(var j=0;j<4;j++){
      var td=$("<td></td>");
      td.addClass("td");
      td.appendTo(tr);
      td.droppable({
       "drop":function(event,args){
        var aus=args.draggable.clone();
        aus.removeClass("dragg");
        aus.addClass("dropped");
        $(event["target"]).append(aus);
        $(event["target"]).droppable("disable");
        if(indiceVetId==3){
            //devo verificare le 4 immagini se nella giusta posizione
            var id=args.draggable.prop("id").substr(3);
            vetId[indiceVetId]=id;
            //salvare il puntatore all'elemento in un apposito vettore di puntatori
            vetPuntatore[indicePuntatore]=args.draggable;
            verifica();
            pulisciVet(vetId);
            pulisciVet(vetNumeri);
            indiceVetId=0;
            indicePuntatore=0;
        }
        else{
            //salvare l'id in un apposito vettore di numeri interi
            var id=args.draggable.prop("id").substr(3);
            vetId[indiceVetId]=id;
            //salvare il puntatore all'elemento in un apposito vettore di puntatori
            vetPuntatore[indicePuntatore]=args.draggable;
            indiceVetId++;
            indicePuntatore++;
        }
       }
      });
    }
    tr.appendTo(_tabella);
  }
}
function verifica() {
    var contatore=1;
    var cont1=0;
    for(var i=0;i<4;i++){
        if(vetNumeri[i]==vetId[i]){
            cont1++;
        }
    }
    if(cont1==4){
        alert("bravo hai vinto!");
        $("#leftFrame > div").each(function (i,ref) {
            $(ref).draggable("disable");
        });
    }
    else{
        for(var i=0;i<4;i++){
            if(vetNumeri[i]==vetId[i]){
                var aus=$("#mainFrame > table > tr").eq(cont).children("td").eq(i);
                var path="drag"+vetId[i];
                var vv=vetPuntatore[i].clone();
                vv.removeClass("dragg");
                vv.addClass("dropped");
                aus.append(vv);
                contatore++;
            }
            else{
                var aus=$("#mainFrame > table > tr").eq(cont-1).children("td").eq(i).children();
                aus.effect("explode",{},1000,function(){
                    console.log("Esplosione finita!");
                });
            }
            if(contatore!=5){
                cont++;
            }
        }
    }


}
function pulisciVet(aus){
    for(var i=0;i<aus.length;i++){
        aus[i]="";
    }
}
function prendiQuattroNumeri(aus){
  var cont=0;
  do{
    var num=Math.floor(6*Math.random());
    if(aus[num]!=""){
      vetNumeri[cont]=aus[num];
      aus[num]="";
      cont++;
    }
  }while(cont!=4);
}
