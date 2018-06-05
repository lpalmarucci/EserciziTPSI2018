/**
 * Created by Alessandro Boschero on 14/01/2018.
 */

$(document).ready(function () {
    var vetAus = [1,2,3,4,5,6];
    var vetNS = [];
    var vetID = [];
    var vetPuntatore = [];
    var _table = $("#tabella");
    var k = 0;
    var cont = 0;
    var rigaDrop = 0;
    var succ = 0;

    for(var i = 0; i < 6; i++){
        var pos = Math.floor(Math.random()*vetAus.length);
        vetNS[i] = vetAus[pos];
        vetAus.splice(pos,1);
    }

    for(var i = 0; i < 10; i++){
        var tr = $("<tr></tr>");
        tr.appendTo(_table);
        for(var j = 0; j < 4; j++){
            var td = $("<td></td>");
            td.prop("riga","r"+i);
            td.prop("colonna","c"+j);
            td.appendTo(tr);
            if(i == 0){
                td.droppable({
                    "drop":droppa
                });
            }
        }
    }
    function droppa(event,args) {
        var clone = args.draggable.clone();
        if(successivo(event) && noDouble(args)){
            vetID[k] = args["draggable"].prop("id").substr(3);
            vetPuntatore[k] = clone;
            k++;
            clone.removeClass("dragg");
            clone.addClass("dropped");
            $(event.target).append(clone);
            $(event.target).droppable("disable");
            cont++;
            succ++;
            if(cont == 4) {
                if (verifica()) {
                    alert("Bravo hai vinto");
                    $(".dragg").draggable("disable");
                }
                else {
                    cont = 0;
                    k = 0;
                    succ = 0;
                    rigaDrop++;
                    if (rigaDrop < 10) {
                        var TDs = $("td");
                        TDs.each(function (i, ref) {
                            if ($(ref).prop("riga").substr(1) == rigaDrop) {
                                $(ref).droppable({
                                    "drop": droppa
                                });
                            }
                            else if ($(ref).prop("riga").substr(1) == rigaDrop - 1) {
                                $(ref).css("background-color", "grey");
                            }
                        })
                    }
                }
            }
        }
        else{
            args["draggable"].draggable({
                "revert":true
            })
        }
    }
    function verifica() {
        var corretto = true;
        for(var i = 0; i < 4; i++){
            if(vetNS[i] != vetID[i]){
                corretto = false;
                vetPuntatore[i].effect("explode",{},1000);
            }
        }
        return corretto;
    }
    function successivo(event) {
        if($(event.target).prop("colonna").substr(1) == succ)
            return true;
        else
            return false;
    }
    function noDouble(args) {
        for(var i = 0; i < succ; i++){
            if(vetID[i].toString() == args["draggable"].prop("id").substr(3).toString())
                return false;
        }
        return true;
    }

    $("#leftFrame").children().draggable({
        "cursor":"pointer",
        "containment":"#wrapper",
        "helper":"clone",
        "revert":"invalid"
    });


});