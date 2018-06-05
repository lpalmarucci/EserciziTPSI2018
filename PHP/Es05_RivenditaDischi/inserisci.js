$(document).ready(function () {
    $("#btnInvia").on("click",function () {
        var ok=true;
        if($("#txtTitolo").val()==""){
            ok=false;
            $("#lblMessaggio").text("Titolo mancante");
        }
        if($("#txtInterprete").val()==""){
            ok=false;
            $("#lblMessaggio").text("Interprete mancante");
        }
        if(ok){
            alert("INSERISCI.PHP");
            $("form").prop("method","post");
            $("form").prop("action","inserisci.php");
            $("form").submit();

        }
    })
})
