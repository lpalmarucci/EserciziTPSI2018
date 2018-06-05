/**
 * Created by n.gazzera.9926 on 26/03/2018.
 */

$(document).ready(function () {
   $("#btnInvia").on("click",function () {
       var nok=false;
       if($("#txtCognome").val() == ""){
           $("#txtCognome").css("border-color", "red");
           nok=true;
       }
       if($("#txtUsername").val() == ""){
           $("#txtUsername").css("border-color", "red");
           nok=true;
       }
       if($("#txtNome").val() == ""){
           $("#txtNome").css("border-color", "red");
           nok=true;
       }
       if($("#txtPassword").val() == ""){
           $("#txtPassword").css("border-color", "red");
           nok=true;
       }
       if($("#txtConfermaPassword").val() == ""){
           $("#txtConfermaPassword").css("border-color", "red");
           nok=true;
       }
       if($("#txtConfermaPassword").val() != $("#txtPassword").val()){
           $("#txtConfermaPassword").css("border-color", "red");
           nok=true;
       }
       if(!nok){
           $("form").prop("method","post");
           $("form").prop("action","registrazione.php");
           $("form").submit();
       }

   });

    $("#txtCognome").on("keyup", function(){ //cognome
        $("#txtCognome").css("border-color","rgba(255, 255, 255, 0.15)");
    });
    $("#txtNome").on("keyup", function(){ //cognome
        $("#txtNome").css("border-color","rgba(255, 255, 255, 0.15)");
    });

    $("#txtUsername").on("keyup", function(){
        $("#txtUsername").css("border-color","rgba(255, 255, 255, 0.15)");
    });

    $("#txtPassword").on("keyup", function(){ //password
        $("#txtPassword").css("border-color","rgba(255, 255, 255, 0.15)");
    });
    $("#txtConfermaPassword").on("keyup", function(){ //password
        if($("#txtConfermaPassword").val() != $("#txtPassword").val())
            $("#txtConfermaPassword").css("border-color","rgba(255, 255, 255, 0.15)");
    });
});