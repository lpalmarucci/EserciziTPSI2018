$(document).ready(function()
{
	$("#btnInvia").on("click",function () {
		var files=$("#txtFile");
		var formData=new FormData();
		for(var i=0;i<files.length;i++)
			formData.append("txtFile[]",files[i]);
		inviaRichiesta("upload.php","POST",formData,function (text) {
			if(text["ris"]=="OK"){
				alert("andato a buon fine");
			}
			else{
				alert(text["ris"]);
			}
		});
	});
});
