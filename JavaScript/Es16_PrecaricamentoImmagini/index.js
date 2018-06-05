


var vet=new Array(4);
var img1;
var img2;
window.onload=function () {
    for(var i=0;i<vet.length;i++){
        //istanzio un nuovo oggetto Image
        vet[i]=new Image();
        vet[i].src="img/img" + (i+1) +".jpg";
    }
    img1=document.getElementById("imgBox1");
    img1.src=vet[0].src;
}

function cambiaImmagine() {
    var voceSelez=document.getElementById("lstImmagini").value;
    img1.src=vet[voceSelez].src;
}
function roll() {
    var n=Math.floor(3*Math.random())+1
}