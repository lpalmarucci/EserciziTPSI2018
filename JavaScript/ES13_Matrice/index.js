/**
 * Created by Alessandro Boschero on 20/03/2017.
 */

var i, j;
var mat;

function carica() {
    mat = new Array(10);
    for(i = 0; i < mat.length; i++)
        mat[i] = new Array(10);

    for(i = 0;i<mat.length;i++)
        for(j=0;j<mat[i].length;j++)
            mat[i][j]=0;for(i=0;i<mat.length;i++)

    var aus;
    for(i = 0; i < mat.length; i++){
        for(j = 0; j < mat[i].length; j++){
            var trovato;
            do
            {
                aus=Math.floor(-200*Math.random()) + 100;
                trovato=false;
                for(var y=0;y<mat.length;y++)
                    for(var z=0;z<mat[y].length;z++){
                        if(mat[y][z] == aus)
                            trovato=true;
                    }
            }while(trovato);
            mat[i][j] = aus;
        }
    }
    visualizza();
}

function visualizza(){
    //visualizzazione matrice
    var s="";
    for(i = 0; i < mat.length; i++){
        for(j = 0; j < mat[i].length; j++){
            s += mat[i][j] + "  ";
        }
        s += "<br>"
    }
    document.getElementById("txtArea").innerHTML = s;
}function cercaMax() {
    var max = -101;
    var ii, jj;

    for(i = 0; i < mat.length; i++){
        for(j = 0; j < mat[i].length; j++){
            if(mat[i][j] > max){
                max = mat[i][j];
                ii = i;
                jj = j;
            }
        }
    }
    alert("“Il max si trova nella riga " + (ii+1) + " colonna " + (jj+1) + " e vale " + max);

    var media;
    var somma = 0;

    if((ii == 0) || (ii == 9) || (jj == 0) || (jj == 9)){
        if((ii == 0) && (jj == 0)){
            media = mat[ii][jj+1] + mat[ii+1][jj];
            media = media / 2;
            alert("Media celle adiacenti: " + media);
        }
        else if((ii == 0) && (jj == 9)){
            media = mat[ii+1][jj] + mat[ii][jj-1];
            media = media / 2;
            alert("Media celle adiacenti: " + media);
        }
        else if((ii == 9) && (jj == 0)){
            media = mat[ii-1][jj] + mat[ii][jj+1];
            media = media / 2;
            alert("Media celle adiacenti: " + media);
        }
        else if((ii == 9) && (jj == 9)){
            media = mat[ii-1][jj] + mat[ii][jj-1];
            media = media / 2;
            alert("Media celle adiacenti: " + media);
        }
        else if(ii == 0){
            media = mat[ii][jj+1] + mat[ii+1][jj] + mat[ii][jj-1];
            media = media / 3;
            alert("Media celle adiacenti: " + media);
        }
        else if(ii == 9){
            media = mat[ii][jj+1] + mat[ii-1][jj] + mat[ii][jj-1];
            media = media / 3;
            alert("Media celle adiacenti: " + media);
        }
        else if(jj == 0) {
            media = mat[ii + 1][jj] + mat[ii][jj + 1] + mat[ii - 1][jj];
            media = media / 3;
            alert("Media celle adiacenti: " + media);
        }
        else if(jj == 9){
                media = mat[ii+1][jj] + mat[ii][jj-1] + mat[ii-1][jj];
                media = media / 3;
                alert("Media celle adiacenti: " + media);
        }
    }
    else{
        media = mat[ii-1][jj] + mat[ii][jj+1] + mat[ii+1][j] + mat[ii][jj-1];
        media = media / 4;
        alert("Media celle adiacenti: " + media);
    }
}
