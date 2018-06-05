/**
 * Created by l.palmarucci.0117 on 13/03/2017.
 */
var mat;
var vet=new Array(25);
window.onload=function () {
    mat=new Array(5);
    for(var i=0;i<mat.length;i++)
        mat[i]=new Array(5);
    //azzeramento della matrice
    for(i=0;i<mat.length;i++)
        for(var j=0;j<mat[i].length;j++)
            mat[i][j]=0;
    
    var aus;
    for(i=0;i<mat.length;i++){
        for(var j=0;j<mat[i].length;j++){
            var trovato;
            do
            {
                aus=Math.floor(25*Math.random())+65;
                trovato=false;
                for(var y=0;y<mat.length;y++)
                    for(var z=0;z<mat[y].length;z++){
                        if(mat[y][z]==String.fromCharCode(aus))
                            trovato=true;
                    }
                
            }while(trovato);
            mat[i][j]=String.fromCharCode(aus);
        }
    }
    visualizza();
    var cont=65;
    for(i=0;i<25;i++){
        vet[i]=String.fromCharCode(cont++);
    }
}

function visualizza(){
    //visualizzazione matrice
    var s="";
    for(i=0;i<mat.length;i++){
        for(j=0;j<mat[i].length;j++){
            s+=mat[i][j]+"  ";
        }
        s+="<br>"
    }
    document.getElementById("txtArea").innerHTML=s;
}

function scrambler() {
    var txt1=document.getElementById("txt1");
    var txt2=document.getElementById("txt2");
    txt2.value="";
    var s=txt1.value.toUpperCase();
    for(var i=0;i<s.length;i++){
        var c1=s.charCodeAt(i); //restituisce il codice ascii del carattere corrente
        var c2;
        if((c1>=65)&&(c1<=89)){
            c1-=65; //calcolo posizione alfabetica del carattere
            var riga=Math.floor(c1/5);//tronca l'intero più basso. Divido per il numero di colonne
            var colonna=c1%5;
            c2=mat[riga][colonna]
        }
        else
            c2=s.charAt(i);
        txt2.value+=c2;
    }
}

function descrambler() {
    var txt1=document.getElementById("txt1");
    var txt2=document.getElementById("txt2");
    txt2.value="";
    var i,j;
    var trovato;
    for(var z=0;z<txt1.value.length;z++){
        trovato=false;
        i=0;
        while(i<mat.length && trovato==false){
            j=0;
            while(j<mat[i].length && trovato ==false){
                if((txt1.value.charAt(z))==mat[i][j]){
                    txt2.value += String.fromCharCode(((i*5)+j)+65);
                    trovato=true;
                }
                else
                    j++;
            }
            i++;
        }
    }
}