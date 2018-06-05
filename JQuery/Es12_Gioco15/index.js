"use strict";
var DIM=4;
var PX=36;
var _wrapper;

$(document).ready(function () {
    _wrapper=$("#wrapper");
    for(var i=0;i<4;i++) {
        for (var j = 0; j < 4; j++) {
            /*Generiamo le pedine come una matrice
            * per comodità, btn0-0 btn0-1
            * */
            var top,left;
            var _div=$('<div></div>');
            _div.prop("id",'ID'+i+'-'+j);
            _div.text("");
            _div.addClass("pedina");
            top=i*PX;
            left=j*PX;
            _div.css({"top":top,"left":left});
            _wrapper.append(_div);
        }
    }
    fillNumber();
});

function fillNumber() {
    var vet=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    var pos;
    _wrapper.children("div").each(function (i,ref) {
        if(i!==15){
            pos=Math.floor(vet.length*Math.random());
            $(ref).text(vet[pos]);
            /*
            * La splice rimuove o aggiunge elementi ad un vettore
            * VETTORE.splice(posizione,HOWMANY,"Elemento da aggiungere","2° elemento");
            *
            * in questo caso rimuove un elemento
            * vettore.splice(pos,1);
            * */
            $(ref).addClass("grigio");
            vet.splice(pos,1);
        }
        $(ref).on("click",_click);
    });
}

function scambia(_ref,_this) {
    _wrapper.children("div").off("click");

    var top_1=_ref.css("top");
    var left_1=_ref.css("left");
    var top_2=_this.css("top");
    var left_2=_this.css("left");
    /**/
    _ref.animate({"top":top_2,"left":left_2},500);
    _this.animate({"top":top_1,"left":left_1},500,function () {
        /*_wrapper.children("div").on("click",_click())
        * ERRATO^---> serve il puntatore e non il richiamo
        * */
        var id=_this.prop("id");
        _this.prop("id",_ref.prop("id"));
        _ref.prop("id",id);
        /**/
        if(controlloVincita()===true)
            alert("Complimenti! Hai VINTO!");
        else
            _wrapper.children("div").on("click",_click);
    });

    /*NON è CORRETTO FARE IL CONTROLLO ALL'ESTERNO PERCHE'
    * non ha ancora FINITO LO SPOSTAMENTO!
    * */
}
function _click() {
    var i;
    var j;
    var _ref;
    var id=$(this).prop("id").substr(2).split('-');
    console.log(id[0]+'-'+id[1]);
    i=id[0];
    j=id[1];
    /*COLONNE*/
    if(j<(DIM-1)){
        /*^->Controllo dell'ultima colonna*/
        _ref=$("#ID"+i.toString()+'-'+(parseInt(j)+1).toString());
        console.log("#ID"+i.toString()+'-'+(parseInt(j)+1).toString());
        if(_ref.text()==="")
            scambia(_ref,$(this));
    }
    if(j>0){
        _ref=$("#ID"+i.toString()+'-'+(parseInt(j)-1).toString());
        console.log("#ID"+i.toString()+'-'+(parseInt(j)-1).toString());
        if(_ref.text()==="")
            scambia(_ref,$(this));
    }
    /*RIGHE*/
    if(i<(DIM-1)) {
        _ref = $("#ID" + (parseInt(i) + 1).toString() + '-' + j.toString());
        console.log("#ID" + (parseInt(i) + 1).toString() + '-' + j.toString());
        if (_ref.text() === "")
            scambia(_ref, $(this));
        /*}else if(i>0) {
        * SCORRETTO utilizzare le else if
        * siccome il j=2 è < di (DIM-1) ma è anche > 0 di zero quindi le
        * if deve farle tutte e 4
        *
        * sarebbe corretto con
        * if((i>0)&&(_ref.text()==="")) una esclude l'altra
        * */
    }
    if(i>0) {
        _ref=$("#ID"+(parseInt(i)-1).toString()+'-'+j.toString());
        console.log("#ID"+(parseInt(i)-1).toString()+'-'+j.toString());
        if(_ref.text()==="")
            scambia(_ref,$(this));
    }
}

function controlloVincita() {
    _wrapper.children("div").each(function (i,ref) {
        if(!parseInt($(ref).text())===parseInt(i+1)){

        }
    })
}




