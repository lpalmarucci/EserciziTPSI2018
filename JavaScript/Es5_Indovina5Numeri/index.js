/**
 * Created by Luca_Palmarucci on 07/02/2017.
 */
var DIM;
DIM=10;
var vs= new Array(5);
window.onLoad=function () {
    var chk = document.getElementsByName("chk"); /*Vettore di elementi*/
    var pos=0;
    var i;
    for(i=0;i<DIM;i++){
        chk[i].disabled=true;
        vs[i]=0;
    }
    for (i=1;i<=DIM;i++){
        do {
            pos=Math.floor(5 * Math.random());
        } while(vs[pos]!=0);
        vs[pos]=i;
    }
    alert(vs);
}