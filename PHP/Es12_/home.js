"use strict";
$(document).ready(function () {
    $("#btnPagamento").on("click",function () {
        var tipoPagamento=$("input[type=radio]:checked").val();
        var data=$("input[type=date]").val();
        var codiceConto=$("#lstFiliali").val();
        var importo=$("input[type=number]").val();
        if(data!="" && codiceConto!="" && importo!=""){
            inviaRichiesta("elencoMovimenti.php","POST",{'cConto':codiceConto,'importo':importo,'data':data,'codiceOperazione':tipoPagamento},aggiornaMovimenti);
        }
        else{
            alert("Manca qualche dato")
        }
    })
    function aggiornaMovimenti(json) {
        if(json.hasOwnProperty("error")||json["error"]===true){
            alert("C'è stato un problema nel servizio");
        }
        else{
            var tr=$("<tr></tr>");
            var td=$("<td></td>");
            td.text(json["cMov"]);
            $("#tableResult").append(tr);
            tr.append(td);

            td=$("<td></td>");
            td.text("TUTTO OK");
            tr.append(td);
            console.log(json);
        }
    }
    $("#btnLogOut").on("click",function () {
        inviaRichiesta("servizioLogout.php","GET","",redirectLogout);
    })
    function redirectLogout(responseText) {
        if(responseText["ris"]==="OK"){
            window.location.href="index.php";
        }
        else{
            alert("Errore durante il logout");
        }
    }
})