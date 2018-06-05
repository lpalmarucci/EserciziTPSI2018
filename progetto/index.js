$(document).ready(function(){
	$("#btnInvia").on("click", function(){

		var nok=false;
		if($("#username").val() == ""){
            $("#username").css("border-color", "red");
			nok=true;
		}
		if($("#pwd").val() == ""){
			$("#pwd").css("border-color", "red");
			nok=true;
		}
		if(!nok){
			$("form").prop("method","post");
			$("form").prop("action","login.php");
			$("form").submit();
		}

	});

    $("#username").on("keyup", function(){ //user
		$("#username").css("border-color","rgba(255, 255, 255, 0.15)"); //error

		//$("form").children("div").eq(1).addClass("has-error");    //error
	});

	$("#pwd").on("keyup", function(){ //password
		$(this).css("border-color","rgba(255, 255, 255, 0.15)");
        //$("form").children("div").eq(1).addClass("has-error");    //error
	});


});