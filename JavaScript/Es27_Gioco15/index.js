/**
 * Created by l.palmarucci.0117 on 13/05/2017.
 */
var righe
var colonne;
window.onload=function () {
    righe=4;
    colonne=4;
    var body=document.getElementsByTagName("body")[0];
    var wrapper=document.createElement("div");
    wrapper.setAttribute("id","wrapper");
    wrapper.style.float="left";
    wrapper.style.margin="0 auto";
    wrapper.style.width="160px"; //440
    body.appendChild(wrapper);
    for(var i=0;i<righe;i++){
        for(var j=0;j<colonne;j++){
            var div=document.createElement("div");
            div.style.width="35px";
            div.style.height="35px"
            div.setAttribute("id","btn"+i+";"+j);
            div.setAttribute("class","pulsante");
            div.setAttribute("onclick","sposta(this)");
            div.style.backgroundColor="rgb(127, 127, 127)"
            div.setAttribute("num","0");
            div.style.float="left";
            //div.innerHTML=i+";"+j;
            div.style.margin="2px";
            div.style.padding="0px";
            wrapper.appendChild(div);
        }
    }
    i=0;
    var n=1;
    var divs=document.getElementsByClassName("pulsante");
    do{
        do{
            var pos=Math.floor(16*Math.random());
            if(divs[pos].getAttribute("num")==="0"){
                divs[pos].setAttribute("num",n);
                divs[pos].style.fontWeight="bold";
                divs[pos].style.lineHeight="35px";
                divs[pos].style.color="white";
                divs[pos].style.backgroundColor="blue";
                divs[pos].style.textAlign="center";
                divs[pos].innerHTML=n;
                n++;
                i++;
            }
        }while(divs[pos].getAttribute("num")==="0");
    }while(i<(righe*colonne)-1);
}
function sposta(sender) {
    var oggetto=sender.getAttribute("id").substr(3);
    var v=new Array(2);
    var divs=document.getElementsByClassName("pulsante");
    v=oggetto.split(';');
    var i=parseInt(v[0]);
    var j=parseInt(v[1]);
    if(i==0) {
        if (i == 0 && j == 0) {
            if (divs[(i * 4) + (j + 1)].style.backgroundColor == "rgb(127, 127, 127)")
                spostaDestra(i, j);
            else if (divs[((i + 1) * 4) + j].style.backgroundColor == "rgb(127, 127, 127)")
                spostaGiu(i, j);
        }
        else {
            if (i == 0 && j == 3) {
                if (divs[(i * 4) + (j - 1)].style.backgroundColor == "rgb(127, 127, 127)")
                    spostaSinistra(i,j);
                else if (divs[((i + 1) * 4) + (j)].style.backgroundColor == "rgb(127, 127, 127)")
                    spostaGiu(i,j);
            }
            else{
                if(divs[(i * 4) + (j - 1)].style.backgroundColor == "rgb(127, 127, 127)")
                    spostaSinistra(i,j);
                else if(divs[((i + 1) * 4) + (j)].style.backgroundColor == "rgb(127, 127, 127)")
                    spostaGiu(i,j)
                else if(divs[(i * 4) + (j + 1)].style.backgroundColor == "rgb(127, 127, 127)")
                    spostaDestra(i,j);
            }
        }
    }
    else if(i==3){
            if (i == 3 && j == 0) {
                if (divs[((i-1) * 4) + (j)].style.backgroundColor == "rgb(127, 127, 127)")
                    spostaSu(i, j);
                else if (divs[(i * 4) + (j+1)].style.backgroundColor == "rgb(127, 127, 127)")
                    spostaDestra(i, j);
            }
            else{
                if(i==3 && j==3){
                    if(divs[((i-1)*4)+j].style.backgroundColor=="rgb(127, 127, 127)")
                        spostaSu(i,j);
                    else if(divs[(i*4)+(j-1)].style.backgroundColor=="rgb(127, 127, 127)")
                        spostaSinistra(i,j);
                }
                else{
                    if(divs[(i * 4) + (j - 1)].style.backgroundColor == "rgb(127, 127, 127)")
                        spostaSinistra(i,j);
                    else if(divs[((i - 1) * 4) + (j)].style.backgroundColor == "rgb(127, 127, 127)")
                        spostaSu(i,j)
                    else if(divs[(i * 4) + (j + 1)].style.backgroundColor == "rgb(127, 127, 127)")
                        spostaDestra(i,j);
                }
            }
    }
    else if(j==0){
        if(divs[(i * 4) + (j + 1)].style.backgroundColor == "rgb(127, 127, 127)")
            spostaDestra(i,j);
        else if(divs[((i - 1) * 4) + (j)].style.backgroundColor == "rgb(127, 127, 127)")
            spostaSu(i,j)
        else if(divs[((i+1) * 4) + (j)].style.backgroundColor == "rgb(127, 127, 127)")
            spostaGiu(i,j);
    }
    else if(j==3){
        if(divs[(i * 4) + (j - 1)].style.backgroundColor == "rgb(127, 127, 127)")
            spostaSinistra(i,j);
        else if(divs[((i - 1) * 4) + (j)].style.backgroundColor == "rgb(127, 127, 127)")
            spostaSu(i,j)
        else if(divs[((i+1) * 4) + (j)].style.backgroundColor == "rgb(127, 127, 127)")
            spostaGiu(i,j);
    }
    else{
        if(divs[(i * 4) + (j - 1)].style.backgroundColor == "rgb(127, 127, 127)")
            spostaSinistra(i,j);
        else if(divs[((i - 1) * 4) + (j)].style.backgroundColor == "rgb(127, 127, 127)")
            spostaSu(i,j)
        else if(divs[((i+1) * 4) + (j)].style.backgroundColor == "rgb(127, 127, 127)")
            spostaGiu(i,j);
        else if(divs[((i) * 4) + (j+1)].style.backgroundColor == "rgb(127, 127, 127)")
            spostaDestra(i,j);
    }
    verifica();
}
function verifica() {
    var cont=1;
    var divs=document.getElementsByClassName("pulsante");
    for(var i=0;i<(righe*colonne)-1;i++){
        if(divs[i].innerHTML==cont)
            cont++;
        else
            break;
    }
    if(cont==16){
        alert("Hai vinto")
        window.location.reload();
    }

}
function spostaSu(i,j) {
    var divs=document.getElementsByClassName("pulsante");
    var aus=divs[(i*4)+j].innerHTML;
    divs[(i*4)+j].style.backgroundColor="rgb(127, 127, 127)";
    divs[((i-1)*4)+j].style.backgroundColor="blue";
    divs[((i-1)*4)+j].innerHTML=aus;
    divs[((i-1)*4)+j].style.fontWeight="bold";
    divs[((i-1)*4)+j].style.lineHeight="35px";
    divs[((i-1)*4)+j].style.color="white";
    divs[((i-1)*4)+j].style.backgroundColor="blue";
    divs[((i-1)*4)+j].style.textAlign="center";
    divs[(i*4)+j].innerHTML="";
}
function spostaSinistra(i,j) {
    var divs=document.getElementsByClassName("pulsante");
    var aus=divs[(i*4)+j].innerHTML;
    divs[(i*4)+j].style.backgroundColor="rgb(127, 127, 127)";
    divs[(i*4)+(j-1)].style.backgroundColor="blue";
    divs[(i*4)+(j-1)].innerHTML=aus;
    divs[(i*4)+(j-1)].style.fontWeight="bold";
    divs[(i*4)+(j-1)].style.lineHeight="35px";
    divs[(i*4)+(j-1)].style.color="white";
    divs[(i*4)+(j-1)].style.backgroundColor="blue";
    divs[(i*4)+(j-1)].style.textAlign="center";
    divs[(i*4)+j].innerHTML="";
}
function spostaGiu(i,j) {
    var divs=document.getElementsByClassName("pulsante");
    var aus=divs[(i*4)+j].innerHTML;
    divs[(i*4)+j].style.backgroundColor="rgb(127, 127, 127)";
    divs[((i+1)*4)+(j)].style.backgroundColor="blue";
    divs[((i+1)*4)+(j)].innerHTML=aus;
    divs[((i+1)*4)+(j)].style.fontWeight="bold";
    divs[((i+1)*4)+(j)].style.lineHeight="35px";
    divs[((i+1)*4)+(j)].style.color="white";
    divs[((i+1)*4)+(j)].style.backgroundColor="blue";
    divs[((i+1)*4)+(j)].style.textAlign="center";
    divs[(i*4)+j].innerHTML="";
}
function spostaDestra(i,j) {
    var divs=document.getElementsByClassName("pulsante");
    var aus=divs[(i*4)+j].innerHTML;
    divs[(i*4)+j].style.backgroundColor="rgb(127, 127, 127)";
    divs[(i*4)+(j+1)].style.backgroundColor="blue";
    divs[(i*4)+(j+1)].innerHTML=aus;
    divs[(i*4)+(j+1)].style.fontWeight="bold";
    divs[(i*4)+(j+1)].style.lineHeight="35px";
    divs[(i*4)+(j+1)].style.color="white";
    divs[(i*4)+(j+1)].style.backgroundColor="blue";
    divs[(i*4)+(j+1)].style.textAlign="center";
    divs[(i*4)+j].innerHTML="";
}
