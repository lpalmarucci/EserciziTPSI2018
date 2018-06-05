/**
 * Created by l.palmarucci.0117 on 22/04/2017.
 */
window.onload=function () {
    var btn = document.getElementById("btn");
    btn.setAttribute("onclick", "genera()");
    //btn.addEventListener("click",genera());

}

function genera() {
    //var rnd=Math.floor((b-a+1)*Math.random())+a;
    var wrapper=document.getElementById("wrapper");
    for(var i=0;i<100;i++){
        var w=Math.floor(100*Math.random())+1;
        var h=Math.floor(100*Math.random())+1;
        var x=Math.floor((401-h)*Math.random());
        var y=Math.floor((601-w)*Math.random());
        var r=Math.floor(256*Math.random());
        var g=Math.floor(256*Math.random())+1;
        var b=Math.floor(256*Math.random())+1; 
        //creazione dinamica di un nuovo elemento
        var div=document.createElement("div");
        div.style.width=w+"px";
        div.style.height=h+"px";
        div.style.position="absolute";
        div.style.top=x;
        div.style.left=y;
        var rgb="rgb("+r+", "+g+", "+b+")";
        div.style.backgroundColor=rgb;
        wrapper.appendChild(div);
    }

}