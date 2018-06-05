/**
 * Created by l.palmarucci.0117 on 21/02/2017.
 */

var btnV=document.getElementById("btnVerifica");
var co=document.getElementsByName("btnSposta");
var s=document.getElementsByName("txtLettera");
function invia() {
    var txtNome = document.getElementById("txtNome").value;
    var lst = document.getElementById("lstResidenza").value;
    var ind = document.getElementsByName("optIndirizzo");
    var hob = document.getElementsByName("chkHobbies");
    var z = "";
    var ap;
    var i;
    for ( i = 0; i < 4; i++){
        if(ind[i].checked != false)
            ap +=   ind[i].value + " - ";
    }
    for (i = 0; i < 4; i++){
        if(hob[i].checked != false)
            z +=   hob[i].value + " - ";
    }
    document.getElementById("txtArea").innerHTML = "NOME: " + txtNome + "<br>" + "RESIDENZA: " + lst + "<br>" + "INDIRIZZO: " + ap + "<br>" + "HOBBIES: " + z;
}

function genera() {

    var txtL = document.getElementsByName("txtLettera");
    co[7].disabled=false;
    var vet = new Array(7);
    for ( var i = 0; vet.length < 8; i++){
        vet[i] = 0;
        s[i].value="";
    }
    for (i = 0; i < 7; i++){
        vet[i] = Math.floor((90-65+1) * Math.random()) + 65;
    }
    for (i = 0; i < 7; i++){
        txtL[i].value = String.fromCharCode(vet[i]);
    }
}
function sposta(j) {
    for(i=0;i<8;i++){
        if(s[i].value==""){
            s[i].value=s[j].value;
            s[j].value="";
        }
    }
}
function verifica() {
    var esci=false;
    var s2;
    var s1;
    var aus;
    var v;
    for (i = 0; i < 7; i++){
        v=s[i].value;
    }
    for(var i=1;i<8;i++){
        s1=v.charCodeAt(i);
        var j=i-1;
        s2=v.charCodeAt(j);
        if(s2>s1)
            esci=true;
    }
    if(esci==true)
        alert("Hai perso");
    else
        alert("Hai vinto");
}