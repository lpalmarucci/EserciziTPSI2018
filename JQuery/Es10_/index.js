var utenti = [ {"user":"pippo",  "pwd":"pwdPippo"},
               {"user":"pluto",  "pwd":"pwdPluto"},
			   {"user":"minnie", "pwd":"pwdMinnie"} ];
$(document).ready(function() {
   $("#txtUser").change(function(){
   	var val=$("#txtUser").val();
   	//alert(val);
   	changeUsername(val);
   })
   $("#txtPwd").change(function(){
   	var pwd=$("#txtPwd").val();
   	changePassword(pwd);
   })
   $("#frmLogin p:last-child").on("click",function(){
   	if(uguaglianza($("#txtUser").val(),$("#txtPwd").val()))
   		alert("Il login verrà effettuato");
   	else
   		alert("c'è stato un problema");
   })
   function uguaglianza(usr,psw) {
        var u, p;
        var ug = false;
        for (var i = 0; i < 3; i++){
            u = utenti[i]["user"];
            p = utenti[i]["pwd"];
            if ((usr == u) && (psw == p)){
                ug = true;
            }
        }
        if (ug)
            return true;
        else
            return false;
    }
});
var x;
function changeUsername(val){
	var i=0;
	//var aus;
	for(i=0;i<3;i++)
	{
		//aus=utenti[i]["user"];
		if(val==utenti[i]["user"])
		{
			x=i;
			$("p span#msgUser").fadeIn(1000);
			$("p span#msgUser").text("OK");
			$("p span#msgUser").css({"color":"green"});
			$("p input#txtUser").css({"border":"1px solid black"});
		}
	}	
}
function changePassword(pwd)
{
	var i=0
	//alert(pwd.length);
	if(pwd.length>=8)
	{
		//alert(pwd);
		//alert(utenti[x]["pwd"]);
		if(trovaLetteNumeri())
		{
			/*if(pwd==utenti[x]["pwd"])
			{
				$("p span#msgPwd").fadeIn(1000);
				$("p span#msgPwd").text("OK");
				$("p span#msgPwd").css({"color":"green"});
				$("p input#msgPwd").css({"border":"1px solid black"});
			}*/
			$("p span#msgPwd").text("OK");
			$("p span#msgPwd").css({"color":"green"})
		}
		else
		{
			$("p span#msgPwd").text("Password Errata");
			$("p span#msgPwd").css({"color":"red"})
		}
	}
	else
	{
		$("p span#msgPwd").text("Password Errata");
		$("p span#msgPwd").css({"color":"red"})
	}
}
function trovaLetteNumeri()
{
		var num = false;
    	var char = false;
        var l = $("#txtPwd").val().length;
        var ch;
        for (var i = 0; i < l; i++){
            ch = $("#txtPwd").val().charCodeAt(i);
            if (((ch >= 65) && (ch <= 90)) || (ch >= 97) && (ch <= 122)) {
                char = true;
            }
            else if ((ch >= 49) && (ch <= 57)){
                num = true;
            }
        }
        if ((char == true) && (num == true)){
            return true;
        }
        else{
            return false;
        }
}
