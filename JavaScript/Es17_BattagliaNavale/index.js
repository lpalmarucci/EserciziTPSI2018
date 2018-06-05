var vet=new Array(25)
var cont=1;
var casella;
window.onload=function () {
    for(var i=0;i<vet.length;i++)
        vet[i]=0;
    var pos=0;
    for (i=0;i<5;i++){
        pos=Math.floor(25*Math.random())+0;
        if(vet[pos]==0)
            vet[pos]=-1;
        else
            i--;
    }
    casella=document.getElementsByClassName("casella");
    for(var i=0;i<vet.length;i++){
        if(vet[i]==-1)
            casella[i].setAttribute("nave","true");
        else
            casella[i].setAttribute("nave","false");
        casella[i].style.fontSize="20pt";
        casella[i].style.fontWeight="bold";
    }
    alert(vet);
    document.getElementById("btnSpara").setAttribute("onclick","spara()");
}
function spara() {
    var txt=document.getElementById("txtCoordinate");
    var x=parseInt(txt.value.substr(0,1));
    var y=parseInt(txt.value.substr(2,1));
    var v=txt.value.substr(1,1);
    casella=document.getElementsByClassName("casella");
    var indice=0;
    if(x<0 || x>4){
        alert("Reinserire le coordinate");
        txt.value="";

    }
    else{
        if(y<0 || y>4){
            alert("Reinserire le coordinate");
            txt.value="";
        }
        if(v!=","){
            alert("Reinserire le coordinate");
            txt.value="";
        }
        else{
            txt.value="";
            indice=parseInt((x*5)+y);
            if(cont==5){
                cont=0;
                casella[indice].value="X";
                alert("Hai vinto");
                document.getElementById("btnSpara").disabled=true;
            }
            else{
                if(casella[indice].value=="X" || casella[indice].value=="O")
                    alert("Posizione già colpita");
                else{
                    if(casella[indice].getAttribute("nave"==true)){
                        cont++;
                        casella[indice].value="X";
                    }
                    else
                        casella[indice].value="O"
                }
            }

        }
    }
}