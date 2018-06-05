/**
 * Created by l.palmarucci.0117 on 02/05/2017.
 */
var DIM;
var dim;
var livello=0;
window.onload=function () {
    DIM=10;
    dim=DIM-1;
    var wrapper=document.getElementById("wrapper");
    for (var i = 0; i < DIM; i++) {
        for (var j = 0; j < DIM; j++) {
            var div=document.createElement("div");
            wrapper.appendChild(div);
            div.setAttribute("class","pulsante");
            div.setAttribute("id","div"+i+";"+j);
        }
    }
    //visualizzaCornice();
}
function visualizzaCornice() {
    var divs=document.getElementsByClassName("pulsante");
    for(var div of divs){
        var id=div.getAttribute("id").substr(3);
        var vet=id.split(';');
        var r=vet[0];
        var c=vet[1];
        if(r==livello || c==livello || r==dim || c==dim)
            div.style.backgroundColor="rgb(255, 0, 0)";
        else
            div.style.backgroundColor="rgb(127, 127, 127)";
        if(r<livello || c<livello || r>dim || c>dim)
            div.style.backgroundColor="rgb(127, 127, 127)";
    }
    dim--;
    livello++;
    if(livello>5){
        livello=0;
        dim=DIM-1
    }
    if(dim<5){
        livello=0;
        dim=DIM-1;
    }
    setTimeout(visualizzaCornice, 100)
}