/**
 * Created by a.boschero.0184 on 06/11/2017.
 */

var DIM = 10;

$("document").ready(function () {
    var _wrapper = $("#wrapper");
    var vet;
    var som = 0;

    for (var i = 0; i < DIM; i++){
        for (var j = 0; j < DIM; j++){
            var _cella = $("<div class='pulsante rosso'></div>");
            _cella.text(i + "," + j);
            _cella.prop("id","ID" + i.toString() + "-" + j.toString());
            _cella.on("click",function () {
                gestisci(this,1);
           });
            _wrapper.append(_cella);
        }
    }
    var _allDivs = $("#wrapper > div");
    
    function invertiSfondo(ref) {
        if ($(ref).hasClass("grigio")){
            $(ref).removeClass("grigio");
            $(ref).addClass("rosso");
        }
        else{
            $(ref).removeClass("rosso");
            $(ref).addClass("grigio");
        }
    }

    $("#btnInverti").on("click",function () {
        _allDivs.each(function (i,ref) {
            invertiSfondo(ref);
        })
    });

    $("#btnGestisci").on("click",function () {
        _allDivs.each(function (i,ref) {
            gestisci(ref,0);
        })
    });

    function gestisci(ref,sender) {
        var text = $(ref).text();
        var id = $(ref).prop("id");
        if (text.indexOf(',') != -1){
            vet = text.split(',');
            $(ref).text(parseInt(vet[0]) + parseInt(vet[1]));
            invertiSfondo(ref);
        }
        else if (sender == 1){
            vet = id.substr(2).split('-');
            $(ref).text(vet[0].toString() + "," + vet[1].toString());
            invertiSfondo(ref);
        }
    }

    $("#btnSomma").on("click",function () {
        _allDivs.each(function (i,ref) {
            sooma(ref);
        });
        alert("Somma: " + som);
        som = 0;
    });

    function sooma(ref) {
        if ($(ref).text().indexOf(',') == -1){
            som += parseInt($(ref).text());
        }
    }

    $("#btnNascondi").on("click",function () {
        _allDivs.each(function (i,ref) {
            nascondi(ref);
        });
    });

    function nascondi(ref) {
        var text = $(ref).text();
        if ((text.indexOf(',') == -1) && (parseInt($(ref).text()) > 15)){
            $(ref).hide();
        }
    }

    $("#btnVisualizza").on("click",function () {
        _allDivs.each(function (i,ref) {
            visualizza(ref);
        });

        function visualizza(ref) {
            if ($(ref).is(":hidden")){
                $(ref).show();
            }
        }
    });
});