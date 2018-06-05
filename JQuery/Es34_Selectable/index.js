"use strict";
$(document).ready(function () {
    $("#wrapper").selectable({
        //diventano tutte selezionabili
        "stop":stop
    })
    $("#btnSeleziona").on("click",function () {
        var id=prompt("Inserisci l'elemento da selezionare");
        if(id>0){
            id--;
            var _selezionato=$("#wrapper > li").eq(id);
            _selezionato.addClass("ui-selected")
            stop(null,null)
        }

        /*$(".ui-selected").each(function (i,ref) {
            if(i==id){
                $(ref).addClass("ui-selected")
            }
        })*/
    })
    function stop(event,args){
        //guardo se ci sono elementi selezionati
        if($(".ui-selected").length>0){
            var _span=$("#feedback > span:last-of-type");
            _span.text("");
            var vet=[];
            $(".ui-selected").each(function (i,ref) {
                vet[i]=$(ref).text();
            })
            _span.text(vet.toString())
        }
        else{
            _span.text("none");
        }
    }
});