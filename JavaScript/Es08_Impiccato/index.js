/**
 * Created by l.palmarucci.0117 on 18/02/2017.
 */
var s= prompt("Inserire una stringa lunga massimo 10 caratteri: ");
var vetChk=document.getElementsByName("chkRis");
var vetTxt=document.getElementsByName("txtCar");

window.onload=function () {
    document.getElementById("btnInvia").disabled=true;
    document.getElementById("btnRispondi").disabled=true;
}
function inizializza() {
    s=s.toUpperCase();/*LE STRINGHE SONO IMMUTABILI, CIOE' NON POSSONO ESSERE MODIFICATE, NE RESTITUISCONO UNA NUOVA*/
    
    for(var i=0;i<s.length;i++){
        vetTxt[i].value='*';
        vetTxt[i].disabled=false;
        vetChk[i].disabled=false;
        vetChk[i].checked=false;
    }
    for(var i=s.length;i<vetTxt.length;i++){
        vetTxt[i].value="";
        vetTxt[i].disabled=true;
        vetChk[i].disabled=true;
        vetChk[i].checked=false;
        document.getElementById("btnInvia").disabled=false;
        document.getElementById("btnRispondi").disabled=false;
    }
}

function confronta() {
    var ch=document.getElementById("txtIns").value;
    ch=ch.toUpperCase();
    var l=s.length;
    for(var i=0;i<l;i++){
        if(ch==s.charAt(i)){
            vetTxt[i].value=s.charAt(i);
            vetChk[i].checked=true;
        }
    }
    var txtPunti=document.getElementById("txtPunti");
    var punti=parseInt(txtPunti.value)-50;
    txtPunti.value=punti;
}