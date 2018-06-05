 /**
 * Created by n.gazzera.9926 on 26/03/2018.
 */

$(document).ready(function () {

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

   $("#btnInvia").on("click",function () {

       var nok=false;
       if($("#txtTitolo").val() == ""){
           $("#txtTitolo").css("border-color", "red");
           nok=true;
       }
       if($("#txtAutore").val() == ""){
           $("#txtAutore").css("border-color", "red");
           nok=true;
       }
       if($("#txtTesto").val() == ""){
           $("#txtTesto").css("border-color", "red");
           nok=true;
       }
       if($("#txtIDYT").val() == ""){
           $("#txtIDYT").css("border-color", "red");
           nok=true;
       }
       if($("#txtGenere").val() == ""){
           $("#txtIDYT").css("border-color", "red");
           nok=true;
       }

       if(!nok){
           $("form").prop("method","post");
           $("form").prop("action","inserisci.php");
           $("form").submit();
       }

   });

    $("#txtTitolo").on("keyup", function(){ //cognome
        $("#txtTitolo").css("border-color","rgba(255, 255, 255, 0.15)");
    });
    $("#txtNome").on("keyup", function(){ //cognome
        $("#txtNome").css("border-color","rgba(255, 255, 255, 0.15)");
    });

    $("#txtTesto").on("keyup", function(){
        $("#txtTesto").css("border-color","rgba(255, 255, 255, 0.15)");
    });
    $("#txtAutore").on("keyup", function(){
        $("#txtAutore").css("border-color","rgba(255, 255, 255, 0.15)");
    });
    $("#txtGenere").on("keyup", function(){
        $("#txtGenere").css("border-color","rgba(255, 255, 255, 0.15)");
    });
    $("#txtIDYT").on("keyup", function(){
        $("#txtIDYT").css("border-color","rgba(255, 255, 255, 0.15)");
    });
});