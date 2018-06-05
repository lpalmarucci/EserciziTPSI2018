/**
 * Created by l.palmarucci.0117 on 28/03/2017.
 */
var wrapper;
var bordo=false;
window.onload= function () {
    var btn=document.getElementById("btnColore");
    btn.setAttribute("onclick", "cambiaColore()");

    btn=document.getElementById("btnDimensione");
    btn.setAttribute("onclick", "cambiaDimensione()");

    btn=document.getElementById("btnSfondo");
    btn.addEventListener("click", cambiaSfondo);

    btn=document.getElementById("btnBordo");
    btn.addEventListener("click", cambiaBordo);

    wrapper = document.getElementById("wrapper");
    btn.addEventListener("click", cambiaBordo);
    /*Impostazione listener btn immagini*/
    var btns=document.getElementsByClassName("img");
    for(var i=0;i<btns.length;i++){
        /*btns[i].addEventListener("click", function() {visualizzaImg2(this)})
        /*btns[i].setAttribute("onclick", "visualizzaImg("+(i+1)+ ")");*/
        btns[i].addEventListener("click", visualizzaImg2);
    }
    btn=document.getElementsByClassName("clear")[0];
    btn.setAttribute("onclick", "clear()");
    wrapper = document.getElementById("wrapper");
}
function clear() {
    var img=document.getElementsByTagName("img")[0];
    img.style.visibility="hidden";
}
function visualizzaImg(n) {
    var img=document.getElementsByTagName("img")[0];
    img.setAttribute("src", "img/img"+ n +".jpg");
}

function visualizzaImg2() {
    var sender=this; //Nel caso di addEventListener posso non passare il parametro this
    var img=document.getElementsByTagName("img")[0];
    var n=sender.innerHTML.substr(sender.innerHTML.length-1,1);
    img.setAttribute("src", "img/img"+ n +".jpg");
}
function cambiaColore() {
    var wrapper = document.getElementById("wrapper");
    var colore=getComputedStyle(wrapper).color;
    if(colore=="rgb(255, 255, 0)")
    {
        wrapper.style.color="rgb(0, 0, 255)";
        wrapper.style.backgroundColor="rgb(255, 255, 0)";
    }
    else
    {
        wrapper.style.color="rgb(255, 255, 0)";
        wrapper.style.backgroundColor="rgb(0, 0, 255)";
    }
}
function cambiaSfondo() {
    var body=document.getElementsByTagName("body")[0];
    var sfondo= getComputedStyle(body).backgroundImage;
    if(sfondo=="none")
    {
        body.style.background="url(img/bg.gif) #eaeaea center repeat-y";
    }
    else
    {
        body.style.backgroundColor="white";
        body.style.backgroundImage="none";
    }
        
}

function cambiaDimensione() {
    var txt=document.getElementById("txtSize")
    if(txt.value>=24)
    {
        wrapper.style.paddingTop="50px"
        wrapper.style.lineHeight="50px";
    }
    else
    {
        wrapper.style.lineHeight="200px";
        wrapper.style.paddingTop="0px";
    }
    wrapper.style.fontSize=txt.value + "pt";

}
function cambiaBordo() {
    var img=document.getElementsByTagName("img")[0]; /*Retituisce i puntatori ai tag con quel nome. RESTITUISCE UN VETTORE*/
    if(bordo){
        img.style.border="5px black";
        bordo=false;
    }
    else{
        img.style.border="5px solid black";
        bordo=true;
    }
        
        
}