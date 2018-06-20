"use strict";
$(document).ready(function () {
    inviaRichiesta("getMarche.php","POST","",aggiornaMarche);
    
    function aggiornaMarche(responseText) {
        //console.log(responseText);
        var listaMarce=$("#lstAutomobili");
        for(var i=0;i<responseText.length;i++){
            var current=responseText[i];
            var option=$("<option></option>");
            option.val(current["idMarca"]);
            option.text(current["nome"]);
            listaMarce.append(option)
        }
        listaMarce.prop("selectedIndex",-1);
    }
    $("#lstAutomobili").on("change",function () {
        var idMarca=$(this).val();
        inviaRichiesta("getAuto.php","POST","idMarca="+idMarca,aggiornaAuto);
    })
    
    function aggiornaAuto(responseText) {
        console.log(responseText);
        $("tbody").empty();
        for(var i=0;i<responseText.length;i++){
            var current=responseText[i];
            var tr=$("<tr></tr>");
            var td=$("<td></td>");
            td.text(current["idAuto"]);
            tr.append(td);

            td=$("<td></td>");
            td.text(current["nomeModello"]);
            tr.append(td);

            td=$("<td></td>");
            td.text(current["nPorte"]);
            tr.append(td);

            td=$("<td></td>");
            td.text(current["cilindrata"]);
            tr.append(td);

            td=$("<td></td>");
            td.text(current["targa"]);
            tr.append(td);

            td=$("<td></td>");
            td.text(current["colore"]);
            tr.append(td);

            td=$("<td></td>");
            td.text(current["anno"]);
            tr.append(td);

            td=$("<td></td>");
            var inp=$("<input>");
            inp.prop("type","text");
            inp.val(current["prezzo"]);
            td.append(inp);
            tr.append(td);

            td=$("<td></td>");
            inp=$("<input>");
            inp.prop("type","text");
            inp.val(current["km"]);
            td.append(inp);
            tr.append(td);

            td=$("<td></td>");
            var img=$("<img>");
            img.css({"width":"150px","height":"70px"});
            img.prop("src","img/"+current["img"]);
            td.append(img);
            tr.append(td);


            td=$("<td></td>");
            var btn=$("<button></button>");
            btn.text("ACQUISTA");
            td.append(btn);
            tr.append(td);

            $("tbody").append(tr)
        }
    }
})