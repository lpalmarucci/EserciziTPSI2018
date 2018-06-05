/**
 * Created by lucap on 05/05/2017.
 */
var r;
var c;
var turno;
window.onload=function(){
    var wrapper=document.getElementById("wrapper");
    r=7;
    var img=document.getElementById("nextPlayer");
    img.style.backgroundColor="yellow";
    img.style.height="40px"
    //img.style=img.style.backgroundColor;
    img.style.borderRadius="20px";
    turno=0;
    c=6;
    var titolo=document.getElementsByTagName("h1")[0];
    titolo.style.fontWeight="900px";
    titolo.style.fontSize="100px";
    var table=document.createElement("table");
    table.style.backgroundColor="white"
    wrapper.appendChild(table);
    for(var i=0;i<c;i++){
        var tr=document.createElement("tr");
        table.appendChild(tr);
        tr.style.width="300px"
        tr.style.marginBottom="25px"
        for(var j=0;j<r;j++){
            var td=document.createElement("td");
            var btn=document.createElement("input")
            btn.setAttribute("type","button")
            tr.appendChild(td);
            td.appendChild(btn);
            btn.style.width="40px";
            btn.style.height="40px";
            btn.style.border="2px solid grey";
            btn.style.borderRadius="20px";
            btn.style.backgroundColor="rgb(127, 127, 127)";
            btn.setAttribute("id","div"+i+";"+j);
            btn.style.color="rgb(127, 127, 127)"
            btn.setAttribute("value",i+";"+j)
            btn.addEventListener("click",function () {
                colora(this);
            });
            btn.style.margin="0 auto";
        }
    }
    table.style.margin="0 auto";
}
function colora(sender) {
    var oggetto=sender.value;
    var a=oggetto.split(";")
    var r=parseInt(a[0]);
    var c=parseInt(a[1]);
    if(r==5  || r==6){
        if(turno==0){
            if(getComputedStyle(sender).backgroundColor=="rgb(255, 0, 0)")
                alert("Mossa non valida");
            else{
                turno=1;
                sender.style.backgroundColor="yellow";
                document.getElementById("nextPlayer").style.backgroundColor="red"
            }
        }
        else{
            if(getComputedStyle(sender).backgroundColor=="rgb(255, 255, 0)")
                alert("Mossa non valida");
            else{
                turno=0;
                sender.style.backgroundColor="red";
                document.getElementById("nextPlayer").style.backgroundColor="yellow"
            }
        }
    }
    else{
        var grigio="rgb(127, 127, 127)"
        var pulsanteS=document.getElementById("div"+(r+1)+";"+(c));
        //((document.getElementById("div"+(r+1)+";"+(c+1)).style.backgroundColor=="red")||(document.getElementById("div"+(r+1)+";"+(c+1)).style.backgroundColor=="yellow"))
        var coloreSfondo=getComputedStyle(pulsanteS).backgroundColor;
        if(coloreSfondo=="rgb(127, 127, 127)")
            alert("Mossa non valida");
        else{
            if(turno==0){
                if(getComputedStyle(sender).backgroundColor=="rgb(255, 0, 0)")
                    alert("Mossa non valida");
                else{
                    turno=1;
                    sender.style.backgroundColor="yellow";
                    document.getElementById("nextPlayer").style.backgroundColor="red"
                }
            }
            else{
                if(getComputedStyle(sender).backgroundColor=="rgb(255, 255, 0)")
                    alert("Mossa non valida");
                else{
                    turno=0;
                    sender.style.backgroundColor="red";
                    document.getElementById("nextPlayer").style.backgroundColor="yellow"
                }
            }
        }
    }
    verificaVittoria(sender);
}
function verificaVittoria(chiamante) {
    var oggetto=chiamante.value;
    var a=oggetto.split(";")
    var r=parseInt(a[0]);
    var c=parseInt(a[1]);
    var cont=0;
    if(turno==0){
        var ii=r+3
        for(var i=0;i<4;i++){
            var btn=document.getElementById("div"+ii+";"+c);
            if(getComputedStyle(btn).backgroundColor=="rgb(255, 0, 0)")
                cont++;
            else
                break;
            ii--;
        }
        if(cont==4){
            document.getElementById("nextPlayer").style.backgroundColor="white";
            alert("Ha vinto il giocatore con le pedine rosse");
        }

        else{
            cont=0;
            var jj=c+3
            for(var j=0;j<4;j++){
                var btn=document.getElementById("div"+r+";"+jj);
                if(getComputedStyle(btn).backgroundColor=="rgb(255, 0, 0)")
                    cont++;
                else
                    break;
                jj--;
            }
            if(cont==4){
                document.getElementById("nextPlayer").style.backgroundColor="white";
                alert("Ha vinto il giocatore con le pedine rosse");
            }

        }
    }
    else{
        cont=0;
        var ii=r+3
        for(var i=0;i<4;i++){
            var btn=document.getElementById("div"+ii+";"+c);
            if(getComputedStyle(btn).backgroundColor=="rgb(255, 255, 0)")
                cont++;
            else
                break;
            ii--;
        }
        if(cont==4){
            document.getElementById("nextPlayer").style.backgroundColor="white";
            alert("Ha vinto il giocatore con le pedine gialle");
        }
        else{
            cont=0;
            var jj=c+3
            for(var j=0;j<4;j++){
                var btn=document.getElementById("div"+(r)+";"+(jj));
                if(getComputedStyle(btn).backgroundColor=="rgb(255, 255, 0)")
                    cont++;
                else
                    break;
                jj--;
            }
            if(cont==4){
                document.getElementById("nextPlayer").style.backgroundColor="white";
                alert("Ha vinto il giocatore con le pedine gialle");
            }

        }
    }
}