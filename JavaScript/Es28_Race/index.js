/**
 * Created by lucap on 11/05/2017.
 */
var righe;
var colonne;
var primaVolta=true;
var j1=0,j2=0;
var r1=0;
var r2=0;
var esci=false;
window.onload=function () {
    righe=20;
    colonne=30;
    var body=document.getElementsByTagName("body")[0];
    var wrapper=document.createElement("div");
    wrapper.setAttribute("id","wrapper");
    wrapper.style.float="left";
    wrapper.style.width="540px"; //440
    body.appendChild(wrapper);
    for(var i=0;i<righe;i++){
        for(var j=0;j<colonne;j++){
            var div=document.createElement("div");
            div.style.width="10px";
            div.style.height="15px"
            div.setAttribute("id","btn"+i+";"+j);
            div.setAttribute("class","pulsante");
            div.style.backgroundColor="rgb(127, 127, 127)"
            div.style.float="left";
            //div.innerHTML=i+";"+j;
            div.style.margin="2px";
            div.style.border="2px solid black"
            wrapper.appendChild(div);
        }
    }
    var r1=0;
    var c1=0;
    var divs=document.getElementsByClassName("pulsante");
    for(i=0;i<25;i++){
        r1=Math.floor(20*Math.random());
        c1=Math.floor(29*Math.random())+1;
        var h=-1;
        do{
           h++
        }while(divs[h].getAttribute("id")!="btn"+r1+";"+c1);
        if(divs[h].style.backgroundColor!="rgb(255, 0, 0)")
            divs[h].style.backgroundColor="rgb(255, 0, 0)";
    }
    var button=document.createElement("input");
    button.setAttribute("type","button");
    button.addEventListener("click",avvia);
    button.value="AVVIA";
    body.appendChild(button);
}
function avvia() {
    if(primaVolta){
        r1=Math.floor(15*Math.random())
        r2=Math.floor(15*Math.random())
        if(r1!=r2){
            var div=ricercaDiv(r1,0);
            div.style.backgroundColor="rgb(0, 0, 255)";
            div.innerHTML="2";
            div.style.color="white";
            div=ricercaDiv(r2,0);
            div.style.backgroundColor="rgb(0, 0, 255)";
            div.innerHTML="1";
            div.style.color="white";
            primaVolta=false;
        }
    }
    else{
        var rnd1=Math.floor(100*Math.random())+1;
        var rnd2=Math.floor(100*Math.random())+1;
        if(rnd1<=70){
            div=ricercaDiv(r1,j1+1);
            if(div.style.backgroundColor=="rgb(255, 0, 0)"){
                div=ricercaDiv(r1+1,j1);
                div.style.backgroundColor="rgb(0, 0, 255)";
                r1++;
                if(r1==r2){
                    esci=true;
                    alert("Il giocatore 2 ha perso")
                }
            }
            else{
                div.style.backgroundColor="rgb(0, 0, 255)";
                j1++;
            }
        }
        if(rnd2<=70){
            div=ricercaDiv(r2,j2+1);
            if(div.style.backgroundColor=="rgb(255, 0, 0)"){
                div=ricercaDiv(r2+1,j2);
                div.style.backgroundColor="rgb(0, 0, 255)";
                r2++;
                if(r2==r1){
                    esci=true;
                    alert("Il giocatore 1 ha perso");
                }
            }
            else{
                div.style.backgroundColor="rgb(0, 0, 255)";
                j2++;
            }
        }
    }
    if(!esci){
        if(j1<29 && j2<29)
            setTimeout(avvia,150);
        else{
            if(j1==29)
                alert("Ha vinto il giocatore 2");
            else
            if(j2==29)
                alert("ha vinto il giocatore 1");
        }
    }


}
function ricercaDiv(i,j) {
    var divs=document.getElementsByClassName("pulsante");
    var h=-1;
    do{
        h++;
    }while (divs[h].getAttribute("id")!="btn"+i+";"+j);
    return divs[h];
}