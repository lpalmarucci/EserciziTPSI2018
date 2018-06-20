/**
 * Created by a.boschero.0184 on 06/02/2018.
 */

$(document).ready(function () {
    $("#btnInvia").on("click",function () {
        var ok = true;
        if($("#txtNome").val() == ""){
            ok = false;
        }
        if($("#form1 > input[name=rdbIndirizzo]:checked").val() == ""){
            ok = false;
        }
        if(ok){
            var _form = $("#form1");
            _form.prop("method","GET");
            _form.prop("action","registrazione.php");
            _form.submit();
        }
        else {
          $("#msg").text("Errore nella compilazione dei campi!");
          $("#msg").animate("blind",{},100);
          $("#msg").focus();
        }
    });
});
