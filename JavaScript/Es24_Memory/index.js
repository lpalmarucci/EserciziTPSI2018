/**
 * Created by l.palmarucci.0117 on 29/04/2017.
 */
var primoClick=false;
var DIM;
var btnPrec;
window.onload=function () {
    DIM=6;
    var body = document.getElementsByTagName("body")[0];
    var table = document.createElement("table");
    body.appendChild(table);
    table.style.margin = "0 auto";
    for (var i = 0; i < DIM; i++) {
        var tr = document.createElement("tr");
        table.appendChild(tr);
        for (var j = 0; j < DIM; j++) {
            var td = document.createElement("td");
            table.appendChild(td);
            var btn = document.createElement("button");
            btn.setAttribute("type", "button");
            btn.setAttribute("id", "btn" + i + ";" + j);
            td.appendChild(btn);
            btn.style.width="35px";
            btn.style.height="35px";
            btn.setAttribute("class", "btnStyle");
            //btn.setAttribute("onclick","visualizza(this)");
            btn.addEventListener("click", visualizza);
            btn.innerHTML = "";
        }
    }
    var buttons = document.getElementsByClassName("btnStyle")
    var rnd;
    for (var k = 1; k <= 18; k++) {
        for (var j=0;j<2;j++) {
            do {
                rnd = Math.floor(36 * Math.random());
            } while (buttons[rnd].innerHTML != '');
            buttons[rnd].innerHTML = k;
        }

    }
}
function visualizza() {
    if(!primoClick)
    {
        btnPrec=this;
        primoClick=true;
        this.disabled=true;
        this.style.backgroundColor="rgb(255, 0, 0)";
    }
    else {

        btnPrec.style.backgroundColor = "rgb(255, 0, 0)";
        this.style.backgroundColor = "rgb(255, 0, 0)";
        setTimeout(function () {confronta(this,btnPrec)},500);
    }
}
function confronta(sender, btnPrec) {
    if(sender.innerHTML==btnPrec.innerHTML){
        sender.style.backgroundColor="rgb(0, 0, 255)";
        btnPrec.style.backgroundColor="rgb(0, 0, 255)";
    }
    else{
        sender.style.backgroundColor="rgb(127, 127, 127)";
        btnPrec.style.backgroundColor="rgb(127, 127, 127)";
        btnPrec.disabled=true;
        sender.disabled=true;
    }
}