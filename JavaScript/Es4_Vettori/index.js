/**
 * Created by Luca_Palmarucci on 07/02/2017.
 */
var vet=new Array(10);
var DIM;
DIM=10;
function start() {
    for(var i=0;i<DIM;i++)
       vet[i]=0;
}
function lanciaDado() {
    start();
    do {
        var n = Math.floor(10 * Math.random()) + 1;
        vet[n - 1]++;
    } while (n != 10);
    /*Soluzione 1*/
    /*for(var i=0;i<DIM;i++){

     /*var txtDiv=document.getElementById("txt" + (i+1));
     txtDiv.value=vet[i+1];*/
    var txt = document.getElementsByName("txt");
    /*Restituisce un vettore di elementi, aventi il nome indicato*/
    for(var i=0;i<DIM;i++) {
        txt[i].value=vet[i];
    }
}
