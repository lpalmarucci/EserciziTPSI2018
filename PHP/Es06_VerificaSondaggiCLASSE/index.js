"use strict";
$(document).ready(function () {
    $("#vai").on("click",function () {
        $("form").prop("action","sondaggi.php?");
        $("form").submit();
    })
})