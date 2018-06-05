/**
 * Created by l.palmarucci.0117 on 25/03/2017.
 */
var txt;
var numero;
var numero2;
var operatore;
var cancella=false;
window.onload= function() {
    var btns = document.getElementsByClassName("btn");
    /*for(var i=0;i<btns.length;i++){
        /*this è puntatore all'oggetto che ha scatenato l'evento*/
        /*btns[i].setAttribute("onclick", "elabora(this)");
    }*/
    for(var btn of btns)
    {
        btn.setAttribute("onclick", "elabora(this)");
    }
}

function elabora(sender) {
    txt=document.getElementById("txtDisplay");
    /*if((sender.value.charCodeAt(0)>=48)&&(sender.value.charCodeAt(0)<=57)){
        txt.value+=sender.value;
    }*/
    var puntino=document.getElementById("txtPuntino");
    switch (sender.value){
        case "c":
            txt.value="";
            numero=0;
            operatore="";
            break;
        case "+":
        case "-":
        case "/":
        case "*":
            numero=parseFloat(txt.value);
            operatore=sender.value;
            cancella=true;
            break;
        case "=":
            numero2=parseFloat(txt.value);
            txt.value="";
            switch (operatore){
                case "+":
                    txt.value=parseFloat(numero+numero2);
                    break;
                case "-":
                    txt.value=parseFloat(numero-numero2);
                    break;
                case "/":
                    txt.value=parseFloat(numero/numero2);
                    break;
                case "*":
                    txt.value=parseFloat(numero*numero2);
                    break;
            }
            break;
        default:
            if(cancella){
                cancella=false;
                txt.value="";
            }
            if(sender.value==".")
            {
                if((txt.value.indexOf(".")==-1)&&(txt.value!=""))
                    txt.value+=sender.value;
                else
                    puntino.disabled=true;
            }
            else
                txt.value+=sender.value;
    }
}