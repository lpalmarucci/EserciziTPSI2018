/**
 * Created by a.boschero.0184 on 13/03/2017.
 */

function calcola(){
    var ris = "";

    var pc = document.getElementById("lstCifra1").value
    var sc = document.getElementById("lstCifra2").value;
    var n = pc + sc;
    var ftp = document.getElementById("lstFattore").value;
    var to = document.getElementById("lstTolleranza").value;
    alert(ftp);
    var ft = "";

    if(ftp > 0){
        for(var i = 0; i < ftp; i++)
            ft += "0";
    }
    else if(ftp == -1)
        ft = n / 10;
    else if(ftp == -2)
        ft = n / 100;
    var div = document.getElementById("txtRisultato");
    div.innerHTML = pc + sc + ft + to;
}