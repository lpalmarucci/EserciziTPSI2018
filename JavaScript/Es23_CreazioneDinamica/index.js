/**
 * Created by l.palmarucci.0117 on 24/04/2017.
 */
window.onload=function () {
    var dim=10;
    var body=document.getElementsByTagName("body")[0];
    var table=document.createElement("table");
    table.style.margin="0 auto";
    body.appendChild(table);
    for(var i=0;i<dim;i++){
        var tr=document.createElement("tr");
        table.appendChild(tr);
        for(var j=0;j<dim;j++){
            var td=document.createElement("td");
            tr.appendChild(td);
            var btn=document.createElement("input");
            btn.setAttribute("type","button");
            td.appendChild(btn);
            btn.setAttribute("class","btnStyle");
            //btn.setAttribute("onclick","visualizza(this)");
            btn.addEventListener("click",visualizza);
            btn.setAttribute("id","btn"+i+";"+j);
            //Nel caso di addEventListener la funzione richiamata può accedere al chiamante tramite this
        }
    }
}

function visualizza() {
    var sender=this;
    var id=sender.getAttribute("id").substr(3);
    var vet=id.split(';');
    var riga=vet[0];
    var colonna=vet[1];
    sender.style.backgroundColor="rgb(255, 0, 0)";
    sender.value=riga+" "+ colonna;
}