"use strict";
$(document).ready(function () {
    $("#btnInvia").on("click",function () {
        // var risposta;
        // if($("input[type=radio]").eq(0).checked)
        //     risposta="si";
        // else if($("input[type=radio]").eq(1).checked){
        //     risposta="no";
        // }
        // else{
        //     risposta="non so";
        // }
        var domanda=$("form > div").text();
        var form=$("form");
        form.prop("method","post");
        form.prop("action","risultati.php?domanda="+domanda);
        form.submit();
    })
})