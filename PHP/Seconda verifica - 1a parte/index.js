"use strict";
var codCitta=0;
var codGenere=0;
$(document).ready(function () {
    inviaRichiesta("elencoConcerti.php","POST",{"codGenere":0,"codCitta":0},aggiornaConcerti);
    $("li").on("mouseOver",function () {
        $(this).css("cursor","hand");
    })
    $("#dropCitta").children("li").on("click",function () {
        codCitta=($(this).val());
    });
    $("#dropGenere").children("li").on("click",function () {
        codGenere=($(this).val());
    })
    $("#btnFiltra").on("click",function () {
        inviaRichiesta("elencoConcerti.php","POST",{'codGenere':codGenere,'codCitta':codCitta},aggiornaConcerti);
    })
    function aggiornaConcerti(responseText) {
        console.log(responseText);
        var tbody=$("#tBody");
        tbody.empty();
        for(var i=0;i<responseText.length;i++){
            var tr=$("<tr></tr>");

            var td=$("<td></td>");
            td.text(responseText[i]["codConcerti"]);
            tr.append(td);

            td=$("<td></td>");
            td.text(responseText[i]["cantante"]);
            tr.append(td);

            td=$("<td></td>");
            td.text(responseText[i]["dataConcerto"]);
            tr.append(td);

            td=$("<td></td>");
            td.text(responseText[i]["nomeGenere"]);
            tr.append(td);

            td=$("<td></td>");
            td.text(responseText[i]["nomeCitta"]);
            tr.append(td);

            td=$("<td></td>");
            td.text(responseText[i]["struttura"]);
            tr.append(td);

            td=$("<td></td>");
            td.text(responseText[i]["nPosti"]);
            tr.append(td);

            td=$("<td></td>");
            var btn=$("<button></button>");
            btn.prop("type","button");
            btn.prop("value",responseText[i]["id"]);
            btn.text("DETTAGLI");
            btn.addClass("buttonDettagli");
            btn.on("click",function () {
                inviaRichiesta("elencoDettagli.php","POST",{"codConcerto":$(this).val()},visualizzaDettagli);
            })
            td.append(btn);
            tr.append(td);

            tbody.append(tr);
        }

    }
    function visualizzaDettagli(responseText) {
        alert(responseText[0]["dettagli"]);
    }
})