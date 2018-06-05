"use strict";
var _wrapper;
var ROSSO,GIALLO;
var righe,colonne;
var GRIGIO;
var ii;
var jj;
$(document).ready(function () {
    ROSSO=0;
    GIALLO=1;
    GRIGIO=0;
    _wrapper=$("#wrapper").addClass("wrapper");
    righe=6;
    colonne=7;

    //creazione celle nel wrapper
    for(var i=0;i<righe;i++){
        for(var j=0;j<colonne;j++){
            var ped=$("<div></div>")
            ped.addClass("pedina");
            ped.prop("id","ID"+i+"-"+j);
            ped.prop("colore",GRIGIO)
            _wrapper.append(ped);
        }
    }

    //fa le celle dell'intestazione
    var _header=$("#header")
    for(var i=0;i<colonne;i++){
        var ped1=$("<div></div>")
        ped1.addClass("pedina").addClass("bianco");
        ped1.prop("col","col"+i);
        _header.append(ped1);
        ped1.prop("id","HEADER");
    }

    //mouseover sull'intestazione
    $("#header div").on("mouseover",_mouseover)
    function _mouseover() {
        //alert("entrato")
        if(ROSSO==1){
            $(this).addClass("rosso");
            //ROSSO=0;
            //GIALLO=1;
        }
        else if(GIALLO==1){
            //ROSSO=1;
            //GIALLO=0;
            //this.removeClass("rosso");
            $(this).addClass("giallo")
        }
    }
    $("#header div").on("mouseout",_mouseout())
    function _mouseout() {
        $(this).removeClass("rosso");
        $(this).removeClass("giallo");
    }
    $("#header > div").on("click", selezione);
    function selezione() {
        var colonna=parseInt($(this).prop("col").substr(3));
        //console.log(colonna)
        //ricerca della prima cella libera
        for(var i=0;i<righe;i++){
            var id="#ID"+i+"-"+colonna;
            var _pedina=$(id)
            if(_pedina.prop("colore")!=GRIGIO)
                break;
        }
        if(i!=0){

            _header.children("div").off("click").off("mouseover").off("mouseout");
            var _nuovo=$("<div></div>")
            selezionaColore(_nuovo);


            var top=10;
            var left=10+(colonna*120);

            var topF=10+(120*(i-1));
            var leftF=left;
            _nuovo.css({"top":top, "left":left, "position":"absolute"});
            if(ROSSO==1){
                _nuovo.addClass("rosso");
                //ROSSO=0;
                //GIALLO=1;
            }
            else if(GIALLO==1){
                //ROSSO=1;
                //GIALLO=0;
                //this.removeClass("rosso");
                _nuovo.addClass("giallo")
            }
            $("#wrapper").append(_nuovo)

            var tempo=300*(i)
            _nuovo.animate({"top":topF,"left":leftF},tempo,function () {
                if(controllaVincita()){
                    alert("Bravo hai vinto")
                }
                else{
                    _header.children("div").on("click",selezione);
                    _header.children("div").on("mouseover",_mouseover);
                    _header.children("div").on("mouseout",_mouseout);
                    cambiaTurno();
                }

            })
        }
        else{
            alert("COLONNA PIENA");
        }

    }
    function controllaVincita() {
        
    }
    function cambiaTurno() {
        if(ROSSO==1){
            ROSSO=0;
            GIALLO=1;
        }
        else{
            ROSSO=1;
            GIALLO=0;
        }
    }
    function selezionaColore(div){
        if(ROSSO==1)
            div.addClass("rosso");
        else
            div.addClass("giallo");
    }
});