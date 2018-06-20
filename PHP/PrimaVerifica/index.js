"use strict";
$(document).ready(function () {
    $("div").on("click",function () {
        var id=$(this).parent().parent().children("td").eq(0).text();
        //alert(id);
        var form=$("tbody > form");
        form.prop("action","dettagli.php?id="+id);
        form.submit();
    })
    $(".acquista").on("click",function () {
        var id=$(this).parent().parent().children("td").eq(0).text();
        var importo=$(this).parent().children().eq(0).val();
        var form=$("tbody > form");
        form.prop("action","acquista.php?id="+id+"&importo="+importo);
        form.submit();
    })
})
// function acquista(i) {
//     var id=$(this).parent().parent().prop("id");
//     alert(id);
// }
//function acquista(sender) {
//     var id=$(sender).parent().parent().children("td").eq(0).text();
//     var importo=$(sender).parent().children().eq(0).val();
//     alert(id);
//     alert(importo);
//     var form=$("tbody > form");
//     form.prop("action","acquista.php?id="+id+"&importo="+importo);
//     //form.submit();
// }
