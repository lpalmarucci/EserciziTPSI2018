"use strict";
var codCitta=0;
var codGenere=0;
var daStampare;
var pagina;
var pagineTotali;
$(document).ready(function () {
    codCitta=0;
    codGenere=0;
    daStampare=0;
    pagina=1;
    inviaRichiesta("elencoConcerti.php","POST",{"codGenere":0,"codCitta":0},aggiornaConcerti);
    var btn=$("<button></button>");
        btn.text("PREV");
        btn.prop("type","button");
        btn.prop("id","PREV");
        btn.on("click",function(){
            if(pagina>1){
                daStampare-=3;
                pagina--;
                $("#lblAvantiIndietro").text(pagina+"/"+pagineTotali);
                inviaRichiesta("elencoConcerti.php","POST",{"codGenere":codGenere,"codCitta":codCitta},aggiornaConcerti);
            }
            else{
                $(this).disabled=true;
            }
        });
        btn.disabled=true;
        $("#divAvantiIndietro").append(btn);

        var lbl=$("<label></label>");
        lbl.prop("id","lblAvantiIndietro");
        lbl.css({"margin-right": "20px","margin-left":"20px"});
        $("#divAvantiIndietro").append(lbl);

        btn=$("<button></button>");
        btn.text("NEXT");
        btn.prop("type","button");
        btn.prop("id","NEXT");
        btn.on("click",function(){
            if(pagina!=pagineTotali){
                daStampare+=3;
                pagina++;
                $("#lblAvantiIndietro").text(pagina+"/"+pagineTotali);
                inviaRichiesta("elencoConcerti.php","POST",{"codGenere":codGenere,"codCitta":codCitta},aggiornaConcerti);
            }
            else{
                $(this).disabled=true;
            }
        });
        $("#divAvantiIndietro").append(btn);

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
        daStampare=0;
        pagina=1;
        inviaRichiesta("elencoConcerti.php","POST",{'codGenere':codGenere,'codCitta':codCitta},aggiornaConcerti);
    })
    function aggiornaConcerti(responseText) {
        console.log(responseText);
        var tbody=$("#tBody");
        tbody.empty();
        pagineTotali=0;
        pagineTotali=Math.ceil(responseText.length/3);
        for(var i=daStampare;i<(daStampare+3);i++){
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
        $("#lblAvantiIndietro").text(pagina+"/"+pagineTotali);
    }
    function visualizzaDettagli(responseText) {
        alert(responseText[0]["dettagli"]);
    }
})