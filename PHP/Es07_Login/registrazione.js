/**
 * Created by l.palmarucci.0117 on 26/03/2018.
 */
$(document).ready(function () {
    $("#btnInvia").on("click",function () {
        var nok=false;
        if($("#txtUsername").children("input").val() == "")
        {
            $("#txtUsername").addClass("has-error");
            nok=true;
        }
        if($("#txtPassword").children("input").val() == "") {
            $("#txtPassword").addClass("has-error");
            nok = true;
        }
        else if($("#txtConfermaPassword").children("input").val() != $("#txtPassword").children("input").val())
        {
            $("#txtConfermaPassword").addClass("has-error");
            $("#txtPassword").addClass("has-error");
            nok=true;
        }
        if($("#txtMail").children("input").val() == "") {
            $("#txtMail").addClass("has-error");
            nok = true;
        }
        if(!nok)
        {
            $("form").prop("method","post");
            $("form").prop("action","registrazione.php");
            $("form").submit();
        }
    })
    $("#txtMail").children("input").on("keyup", function(){ //user
        $("#txtMail").removeClass("has-error"); //error
        //$("form").children("div").eq(1).addClass("has-error");    //error
    });
    $("#txtUsername").children("input").on("keyup", function(){ //user
        $("#txtUsername").removeClass("has-error"); //error
        //$("form").children("div").eq(1).addClass("has-error");    //error
    });
    $("#txtConfermaPassword").children("input").on("keyup", function(){ //user
        $("#txtConfermaPassword").removeClass("has-error"); //error
        //$("form").children("div").eq(1).addClass("has-error");    //error
    });
    $("#txtPassword").children("input").on("keyup", function(){ //user

        $("#txtPassword").removeClass("has-error"); //error
        //$("form").children("div").eq(1).addClass("has-error");    //error
    });
})