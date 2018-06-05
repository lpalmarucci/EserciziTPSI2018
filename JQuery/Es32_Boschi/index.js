/**
 * Created by Alessandro Boschero on 29/12/2017.
 */

$(document).ready(function () {
    var vetAus = [1,2,3,4,5,6];
    var vetNS = [];
    var vetUtente = [];
    var vetPuntatori = [];
    var _table = $("#tabella");
    var x = 0;
    var riga = 0;
    var cont = 0;
    var succ = 0;
    var _drags = $(".dragg");

    generaNumeriSegreti();
    function generaNumeriSegreti() {
        for(var i = 0; i < 4; i++) {
            var pos = Math.floor(vetAus.length*Math.random());
            vetNS[i] = vetAus[pos];
            console.log(vetNS[i]);
            vetAus.splice(pos,1);
        }
    }

    generaTabella();
    function generaTabella() {
        for(var i = 0; i < 10; i++){
            var tr = $("<tr></tr>");
            _table.append(tr);
            for(var j = 0; j < 4; j++){
                var td = $("<td></td>");
                td.prop("riga","r"+i);
                td.prop("colonna","c"+j);
                tr.append(td);
                if(i == 0){
                    td.droppable({
                        "drop":droppa
                    });
                }
            }
        }
    }

    function droppa(event,args) {
        var clone = args.draggable.clone();
        if(successivo(event) && noDouble(args)){
            clone.addClass("dropped");
            vetUtente[x] = args["draggable"].prop("id").substr(3);
            vetPuntatori[x] = clone;
            x++;
            clone.appendTo($(this));
            $(event.target).droppable("disable");
            cont++;
            succ++;
        }
        else{
            clone.draggable({
                "revert":true
            })
        }
        if(cont == 4){
            if(controlla()){
                alert("Bravo hai vinto");
                _drags.draggable("disable");
            }
            else{
                riga++;
                succ = 0;
                cont = 0;
                x = 0;
                if(riga < 10){
                    var TDs = $("td");
                    TDs.each(function (i,ref) {
                        if($(ref).prop("riga").substr(1) == riga){
                            $(ref).droppable({
                                "drop":droppa
                            });
                        }
                        else if($(ref).prop("riga").substr(1) == riga-1){
                            $(ref).css("background-color","grey");
                        }
                    })
                }
                else
                    alert("Tentativi finiti...");
            }
        }
        else{
            args["draggable"].draggable({
                "revert":true
            })
        }
    }

    _drags.draggable({
        "cursor":"pointer",
        "containment":"#wrapper",
        "helper":"clone",
        "revert":"invalid"
    });

    function controlla() {
        var control = true;
        for(var i = 0; i < 4; i++){
            if(vetNS[i] != vetUtente[i]) {
                vetPuntatori[i].effect("explode",{},1000);
                control = false;
            }
        }
       return control;
    }

    function successivo(event) {
        if($(event.target).prop("colonna").substr(1) == succ)
            return true;
        else
            return false;
    }

    function noDouble(args) {
        for(var i = 0; i < succ; i++){
            if(vetUtente[i].toString() == args["draggable"].prop("id").substr(3).toString())
                return false;
        }
        return true;
    }
});