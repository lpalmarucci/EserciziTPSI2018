var vet=new Array(10);
var div;
var contatore=0;
window.onload=function () {
    for(var i=0;i<vet.length;i++)
        vet[i]=false;
}
function gioca() {
    setTimeout(disegna,10);
}
function disegna() {
    div=document.getElementById("imgCarta");
    do{
        var nNuovo=Math.floor(10*Math.random())+1;
    }while(vet[nNuovo-1]===true);
    vet[nNuovo-1]=true;
    div.style.backgroundImage="url(img/bg_d"+nNuovo+".gif)";
    document.getElementById("btnGioca").disabled=true;
    contatore++;
    document.getElementById("lblCarte").innerHTML=contatore;
    if(contatore<3)
        setTimeout(disegna, 2000);
    var punteggio=document.getElementById("lblSomma");
    if(nNuovo>=8)
        punteggio.innerHTML=parseFloat(punteggio.innerHTML)+0.5;
    else
        punteggio.innerHTML=parseFloat(punteggio.innerHTML)+nNuovo;
}