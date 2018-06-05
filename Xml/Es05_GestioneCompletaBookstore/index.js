//"use strict";
var jsonDoc;
var nLibri;
var pos;
var indiceDiv;
window.onload=function(){
    var json = localStorage.getItem("bookstoreJSON");
    jsonDoc =JSON.parse(json);
    //console.log(jsonDoc);
    visualizza();
}

function visualizza(){
    var tBody = document.getElementById("tabLibri");
    for(var i=0;i<jsonDoc.length;i++)
    {
        var titolo,autore="",categoria,prezzo;
        var tr = document.createElement("tr");
        tBody.appendChild(tr);
        var td;
        for(var key in jsonDoc[i])
        {
            if(key === "title")
                titolo=jsonDoc[i][key];
            else if(key=="author")
                autore=jsonDoc[i][key];
            else if(key=="category")
                categoria=jsonDoc[i][key];
            else if(key=="price")
                prezzo=jsonDoc[i][key];
        }
        //creazione celle per titolo,categoria, autore e prezzo
        td = document.createElement("td");
        td.innerHTML=titolo;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML=autore;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML=categoria;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML=prezzo;
        tr.appendChild(td);

        td = document.createElement("td");
        var btn = document.createElement("input");
        btn.type="button";
        btn.value="Eliminare";
        btn.setAttribute("id",i);
        btn.className="delete";
        btn.addEventListener('click',elimina(this));
        td.appendChild(btn);
        tr.appendChild(td);
    }//Fine ciclo for creazione righe
}
function creaTabella(){

}
function elimina(sender){
    //console.log("RICHIAMA LA FUNZIONE ELIMINA");
    var indice = sender.getAttribute("id");
    console.log(indice);
}
function primo(){
    var div=document.getElementById("contenuto");
    var titolo,categoria,autori,prezzo;
    for(var key in jsonDoc[0])
    {
        if(key === "title")
            titolo=jsonDoc[0][key];
        else if(key=="author")
            autore=jsonDoc[0][key];
        else if(key=="category")
            categoria=jsonDoc[0][key]; 
        else if(key=="price")
            prezzo=jsonDoc[0][key];
    }
    div.innerHTML="TITOLO: "+titolo+"<br>"+"AUTORI: "+ autore+"<br>"+"CATEGORIA: "+categoria+"<br>"+"PREZZO: "+prezzo;
    document.getElementById("indietro").disabled=true;
    document.getElementById("avanti").disabled=false;
    indiceDiv=0;
}
function ultimo(){
    var div=document.getElementById("contenuto");
    var titolo,categoria,autori,prezzo;
    for(var key in jsonDoc[jsonDoc.length-1])
    {
        if(key === "title")
            titolo=jsonDoc[jsonDoc.length-1][key];
        else if(key=="author")
            autore=jsonDoc[jsonDoc.length-1][key];
        else if(key=="category")
            categoria=jsonDoc[jsonDoc.length-1][key]; 
        else if(key=="price")
            prezzo=jsonDoc[jsonDoc.length-1][key];
    }
    div.innerHTML="TITOLO: "+titolo+"<br>"+"AUTORI: "+ autore+"<br>"+"CATEGORIA: "+categoria+"<br>"+"PREZZO: "+prezzo;
    document.getElementById("avanti").disabled=true;
    document.getElementById("indietro").disabled=false;
    indiceDiv=jsonDoc.length-1;
}
function spostaAvanti(){
    var div=document.getElementById("contenuto");
    var titolo,categoria,autori,prezzo;
    if(indiceDiv+1<jsonDoc.length)
    {
        for(var key in jsonDoc[indiceDiv+1])
        {
            if(key === "title")
                titolo=jsonDoc[indiceDiv+1][key];
            else if(key=="author")
                autore=jsonDoc[indiceDiv+1][key];
            else if(key=="category")
                categoria=jsonDoc[indiceDiv+1][key]; 
            else if(key=="price")
                prezzo=jsonDoc[indiceDiv+1][key];
        }
        div.innerHTML="TITOLO: "+titolo+"<br>"+"AUTORI: "+ autore+"<br>"+"CATEGORIA: "+categoria+"<br>"+"PREZZO: "+prezzo;
        indiceDiv++;
    }
    
    if(indiceDiv==jsonDoc.length-1)
    {
        document.getElementById("avanti").disabled=true;
        document.getElementById("indietro").disabled=false;
    }
    else
    {
        document.getElementById("avanti").disabled=false;
        document.getElementById("indietro").disabled=false;
    }
}
function spostaIndietro(){
    var div=document.getElementById("contenuto");
    var titolo,categoria,autori,prezzo;
    if(indiceDiv-1>=0)
    {
        for(var key in jsonDoc[indiceDiv-1])
        {
            if(key === "title")
                titolo=jsonDoc[indiceDiv-1][key];
            else if(key=="author")
                autore=jsonDoc[indiceDiv-1][key];
            else if(key=="category")
                categoria=jsonDoc[indiceDiv-1][key]; 
            else if(key=="price")
                prezzo=jsonDoc[indiceDiv-1][key];
        }
        div.innerHTML="TITOLO: "+titolo+"<br>"+"AUTORI: "+ autore+"<br>"+"CATEGORIA: "+categoria+"<br>"+"PREZZO: "+prezzo;
        indiceDiv--;
    }

    if(indiceDiv==0)
    {
        document.getElementById("avanti").disabled=false;
        document.getElementById("indietro").disabled=true;
    }
    else
    {
        document.getElementById("avanti").disabled=false;
        document.getElementById("indietro").disabled=false;
    }
}
