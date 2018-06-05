/**
 * Created by Luca_Palmarucci on 10/02/2017.
 */

var n1;
var n2;
var n3;

function genera() {
    n1=Math.floor(9 * Math.random())+1;
    n2=Math.floor(9 * Math.random())+1;
    n3=Math.floor(9 * Math.random())+1;
    alert(n1 + "" + n2 + "" + n3);
}

function controlla() {
    var txt=document.getElementsByName("txt");
    var chk=document.getElementsByName("chk");
    var trovato=false;
    var cont;
    var j=0;
    /*for (var i=0;i<9;i++){
        cont=txt[j].value;
        chko=chk[j];
        if (n1==cont){
            trovato=true;
            chk.checked=true;
        }
        if(j==3)
            j=1;
        else
            j++;
    }*/
    do{
        cont=txt[j].value;
        if (n1==cont){
            trovato=true;
            chk[0].checked=true;
        }
        j++;
    }while((!trovato)&&(j!=3));
    j=0;
    trovato=false;
    do{
        cont=txt[j].value;
        if (n2==cont){
            trovato=true;
            chk[1].checked=true;
        }
        j++;
    }while((!trovato)&&(j!=3));
    j=0;
    trovato=false;
    do{
        cont=txt[j].value;
        if (n3==cont){
            trovato=true;
            chk[2].checked=true;
        }
        j++;
    }while((!trovato)&&(j!=3));

}


