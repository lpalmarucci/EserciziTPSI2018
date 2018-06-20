$(document).ready(function()
{
	$("#btnInvia").on("click", function()
	{
		var nok=false;
		if($("#username").val() == "")
		{
			$("form").children("div").eq(0).addClass("has-error");
			nok=true;
		}
		if($("#pwd").val() == "")
		{
			$("form").children("div").eq(1).addClass("has-error");
			nok=true;
		}
		if(!nok)
		{
			$("form").prop("method","post");
			$("form").prop("action","index.php");
			$("form").submit();
		}

	});

	$("form").children("div").eq(1).children("input").eq(0).on("keyup", function(){ //user
		$("form").children("div").eq(0).removeClass("has-error"); //error
		//$("form").children("div").eq(1).addClass("has-error");    //error
	});

	$("form").children("div").eq(1).children("input").eq(0).on("keyup", function(){ //password
		$(this).parent().removeClass("has-error");
		//$("form").children("div").eq(1).addClass("has-error");    //error
	});


});
