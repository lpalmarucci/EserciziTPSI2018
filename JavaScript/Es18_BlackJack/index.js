
var vet=new Array(5);
var vetB=new Array(5);
var vetAppoggio=new Array(5);
var char;
var num;
var numB;
var charB;
var ntent;
var cont=0,contB=0
window.onload=function () {
    for(var q=0;q<vetAppoggio.length;q++){
        vetAppoggio[q]=0;
    }
    var annulla;
    ntent=4;
    char=Math.floor(4*Math.random())+97;
    num=Math.floor(13*Math.random())+1;
    vet[0]=String.fromCharCode(char)+num;
    charB=Math.floor(4*Math.random())+97;
    numB=Math.floor(13*Math.random())+1;
    vetB[0]=String.fromCharCode(charB)+numB;
    for (var i=1;i<vet.length;i++){
        annulla=false;
        char=Math.floor(4*Math.random())+97;
        num=Math.floor(13*Math.random())+1;
        vet[i]=String.fromCharCode(char)+num;
        if(controlla(i,vet)==true){
            annulla=true;
            vet[i]="";
        }
        charB=Math.floor(4*Math.random())+97;
        numB=Math.floor(13*Math.random())+1;
        vetB[i]=String.fromCharCode(charB)+numB;
        if((controlla(i,vetB)==true) && (controlla2(i)==true)){
            vetB[i]="";
            annulla=true;
        }
        if(annulla==true)
            i--;
    }
    //var carte=document.getElementsByClassName("giocatore");

}
function controlla2(i) {
    var trovato=false;
    for(var j=0;j<vet.length;j++){
        if(vetB[i]==vet[j]){
            trovato=true;
            break;
        }
    }
    if(trovato)
        return true;
    else
        return false;
}
function controlla(i,vett) {
    var trovato=false;
    for(var j=0;j<i;j++){
        if(vett[j]==vett[i]){
            trovato=true;
            break;
        }
    }
    if(trovato)
        return true;
    else
        return false;
}
function giocatore(i,sender) {
    var s = parseInt(vet[i].substr(1, 2));
    var sB = parseInt(vetB[i].substr(1, 2));
    var carte = document.getElementsByClassName("giocatore");
    var carteB = document.getElementsByClassName("banco");
    carte[i].style.backgroundImage = "url(img1/" + vet[i] + ".gif)";
    carteB[i].style.backgroundImage = "url(img1/" + vetB[i] + ".gif)";
    if(ntent==0)
        verifica();
    else{
        ntent--;
        if (vetAppoggio[i] != -1) {
            vetAppoggio[i] = -1;
            if (s > 9)
                cont += 0.5;
            else
                cont += s;
            if (sB > 9)
                contB += 0.5;
            else
                contB += sB;
        }
        else
            sender.removeAttribute("onclick");
    }



}
function verifica() {
    if (cont > contB)
        document.getElementById("txtRisultato").innerText = "Ha vinto il giocatore";
    else {
        if (contB > cont)
            document.getElementById("txtRisultato").innerText = "Ha vinto il banco";
    }
}