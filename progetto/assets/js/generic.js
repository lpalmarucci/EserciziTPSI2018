$(document).ready(function () {

    $(".link").on("click",function () {
        $(this).children("input").prop("name","id");
        $("form").prop("method","get");
        $("form").prop("action","generic.php");
        $("form").submit();
        });


    $("#btnRicerca").on("click", function () {
        var ok = true;
        if($("#txtRicerca").val()===""){
            ok = false;
            alert("Valore mancante");
        }
        var ricerca=$("#txtRicerca").val();
        var genere=$("#genere").prop("value");

        if(ok){
            var form = $("#ricerca");
            form.prop("method","post");
            form.prop("action","ricerca.php?txtRicerca="+ricerca+"&txtGenere="+genere);
            form.submit();
        }
    });


    //caricamento section 2

});

//form video singolo
function generic() {
    $(this).children("input").prop("name","id");

    $("form").prop("method","get");
    $("form").prop("action","generic.php");
    $("form").submit();
}

function inviaRichiesta(url, method, parameters) {
    var request = $.ajax({
        url: url, //default: currentPage
        type: method.toUpperCase(),
        data: parameters,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        async: true, // default
        timeout: 5000
    });
    return request;
}
