/**
 * Created by Luca_Palmarucci on 07/03/2017.
 */
window.onload = function(){
    var lst1=document.getElementById("lstCifra1");
    var lst2=document.getElementById("lstCifra2");
    var lstF=document.getElementById("lstFattore");
    var lstT=document.getElementById("lstTolleranza");
    lst1.selectedIndex=-1;
    lst2.selectedIndex=-1;
    lstF.selectedIndex=-1;
    lstT.selectedIndex=-1;
}

function calcola() {
    var div=document.getElementById("txtRisultato");
    var lst1=document.getElementById("lstCifra1");
    var lst2=document.getElementById("lstCifra2");
    var lstF=document.getElementById("lstFattore");
    var lstT=document.getElementById("lstTolleranza");
    var i1=lst1.selectedIndex;
    var i2=lst2.selectedIndex;
    var i3=lstF.selectedIndex;
    var i4=lstT.selectedIndex;
    var s="";
    var i=0;
    var veta= new Array(13);
    veta[0]=-1;
    veta[1]=-1;
    for(var j=2;j<12;j++)
    {
        veta[j]=i;
        i++;
    }
    alert(veta)
    var vetb= new Array(13);
    vetb[0]="-1";
    vetb[1]="0";
    vetb[2]="1";
    vetb[3]="1";
}