/**
 * Created by l.palmarucci.0117 on 20/02/2017.
 */
var nBanco=Math.floor(((20-16)+1)*Math.random())+16;
var nVet=new Array(9);
var txtUtente;
var chk;
var nUtente;
function avvia() {
    /*alert(nBanco);*/
    document.getElementById("txtBanco").style.backgroundColor= "white";
    document.getElementById("txtUser").style.backgroundColor= "white";
    document.getElementById("txtBanco").value="*";
    txtUtente=document.getElementsByName("txtNum");
    chk=document.getElementsByName("chkNum");
    txtUtente.value="";
    for(var i=0;i<9;i++){
        nVet[i]=Math.floor(5*Math.random())+1;
        txtUtente[i].value="*";
        txtUtente[i]=nVet[i];
        chk[i].disabled=false;
        chk[i].checked=false;
    }
    document.getElementById("btnConfronta").disabled=false;
    nUtente=0;
}

function somma(i) {
    chk[i].disabled=true;
    txtUtente[i].value=nVet[i];
    nUtente+= parseInt(nVet[i]);
    document.getElementById("txtUser").value=nUtente;
    if(document.getElementById("txtUser").value>21){
        alert("Hai perso");
        document.getElementById("btnConfronta").disabled=true;
        for (i=0;i<9;i++){
            chk[i].disabled=true;
            chk[i].checked=false;
        }
    }
}

function confronta() {
    document.getElementById("txtBanco").value=nBanco;
    if (document.getElementById("txtBanco").value>document.getElementById("txtUser").value){
        
        document.getElementById("txtBanco").style.backgroundColor= "green";
        document.getElementById("txtUser").style.backgroundColor= "red";
        alert("Il banco ha vinto");
    }
    else {
        if (document.getElementById("txtBanco").value<document.getElementById("txtUser").value){
            
            document.getElementById("txtBanco").style.backgroundColor= "red";
            document.getElementById("txtUser").style.backgroundColor= "green";
            alert("Hai vinto");
        }
        else{
            
            document.getElementById("txtBanco").style.backgroundColor= "green";
            document.getElementById("txtUser").style.backgroundColor= "red";
            alert("Il banco ha vinto");
        }

    }


}