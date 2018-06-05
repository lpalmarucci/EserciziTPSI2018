"use strict";
function keyup(id) {
    $("#btn"+id).prop("disabled",false);
}

$(document).ready(function () {
    var tr;
    $("form > input[type=button]").on("click",function () {
        tr=$(this).parent().parent().parent();//parent prende il genitore
        var id=tr.children("td").eq(0).children("input").eq(0).val();
        var titolo=tr.children("td").eq(1).children("input").eq(0).val();
        var autore=tr.children("td").eq(2).children("input").eq(0).val();
        var anno=tr.children("td").eq(3).children("input").eq(0).val();

        var form=$(this).parent();
        form.prop("method","post");
        form.prop("action","aggiorna.php?id="+id+
                            "&autore="+autore+
                            "&titolo="+titolo+
                            "&anno="+anno);
        form.submit();
    })
})