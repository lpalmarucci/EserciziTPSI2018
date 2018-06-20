"use strict";
$(document).ready(function () {
    inviaRichiesta("elencoBanche.php","GET","",aggiornaBanche);
    var lstBanche=$("#lstBanche");
    var lstFiliali=$("#lstFiliali");
    function aggiornaBanche(responseText) {
       // console.log(responseText);
       var json=JSON.parse(responseText);
       for(var i=0;i<json.length;i++){
           var codiceBanca=json[i]["cBanca"];
           var nomeBanca=json[i]["Nome"];
           var option=$("<option></option>");
           option.prop("value",codiceBanca);
           option.text(nomeBanca);
           lstBanche.append(option);
       }
       lstBanche.prop("selectedIndex",-1);

    }
    lstBanche.on("change",function () {
        $("#wrapFiliali").show();
        var codBanca=lstBanche.val();
        inviaRichiesta("elencoFiliali.php","POST","codBanca="+codBanca,aggiornaFiliali);
    })
    function aggiornaFiliali(responseText) {
        // alert(responseText);
        var json=JSON.parse(responseText);
        for(var i =0; i< json.length;i++){
            var codFiliale=json[i]["cFiliale"];
            var nomeFiliale=json[i]["Nome"];

            var option=$("<option></option>");
            option.prop("value",codFiliale);
            option.text(nomeFiliale);
            lstFiliali.append(option);
        }
        lstFiliali.prop("selectedIndex",-1);
    }
    lstFiliali.on("change",function () {
        var codFiliale=lstBanche.val();
        $("#wrapCorrentisti").show();
        inviaRichiesta("elencoCorrentisti.php","GET","codFiliale="+codFiliale,aggiornaCorrentisti);
    })
    function aggiornaCorrentisti(responseText) {
        console.log(responseText);
        var json=JSON.parse(responseText);
        var body=$("#tabCorrentisti > tbody");
        for(var i =0; i< json.length;i++){
            var codCorrentista=json[i]["codCorrentista"];
            var nomeCorrentista=json[i]["nomeCorrentista"];
            var nomeComune=json[i]["nomeComune"];
            var Telefono=json[i]["Telefono"];
            var Saldo=json[i]["Saldo"];
            var cConto=json[i]["cConto"];

            var tr=$("<tr></tr>");

            var td=$("<td></td>");
            td.text(codCorrentista);
            tr.append(td);

            td=$("<td></td>");
            td.text(nomeCorrentista);
            tr.append(td);

            td=$("<td></td>");
            td.text(nomeComune);
            tr.append(td);

            td=$("<td></td>");
            td.text(Telefono);
            tr.append(td);

            td=$("<td></td>");
            td.text(cConto);
            tr.append(td);

            td=$("<td></td>");
            td.text(Saldo);
            tr.append(td);


            tr.append(td);
            body.append(tr);
        }
    }
})