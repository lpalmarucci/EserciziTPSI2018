function invia() {
    /*Puntatori controlli della form*/
    var txt=document.getElementById("txtNome");
    var lst=document.getElementById("lstResidenza");
    var opt=document.getElementsByName("optIndirizzo");
    var chk=document.getElementsByName("chkHobbies");
    /*Lettura del contenuto*/
    var nome=txt.value;
    var residenza=lst.value;
    var indirizzo="";
    for(var i=0;i<opt.length;i++){
        if(opt[i].checked) {
            indirizzo = opt[i].value;
            break;
        }
    }
    var hobbies="";
    for(var i=0;i<chk.length;i++){
        if(chk[i].checked) 
            hobbies += chk[i].value + " - ";
    }
    hobbies=hobbies.substr(0,hobbies.length-2);
    document.getElementById("txtArea").innerHTML="Nome:  "+ nome + "<br>" + "Residenza: " + residenza + "<br>" + "Indirizzo: " + indirizzo + "<br>" + "Hobbies: " + hobbies;
}

function genera() {
    var txt=document.getElementsByName("txtLettera");
    var btn=document.getElementsByName("btnSposta");
    var i=0;
    var trovato=false;
    do{
        var rnd=Math.floor(26*Math.random())+65;
        s=String.fromCharCode(rnd);
        trovato=false;
        for(var j=0;j<=i;j++){
            if(s==txt[j].value){
                trovato=true;
                break;
            }
        }
        if(!trovato){
            txt[i].value=String.fromCharCode(rnd);
            btn[i].disabled=false;
            i++;
        }
        

    }while(i<(txt.length-1));
    btn[7].disabled=true;
    txt[7].value="";
    txt[7].disabled=true;
}

var libero=7;

function sposta(i) {
    var txt=document.getElementsByName("txtLettera");
    var btn=document.getElementsByName("btnSposta"); 
    txt[libero].value=txt[i].value;
    txt[i].value="";
    btn[i].disabled=true;
    btn[libero].disabled=false;
    libero=i;
    if(libero==7)
        document.getElementById("btnVerifica").disabled=false;
    else
        document.getElementById("btnVerifica").disabled=true;
}

function verifica() {
    var txt=document.getElementsByName("txtLettera");
    var esci=false;
    for(var i=0;i<(txt.length-2);i++){
        if(txt[i].value>txt[i+1].value){
            esci=true;
            break;
        }
    }
    if(esci)
        alert("Ordinamento non correto, Retry!");
    else
        alert("Congratulations! You win");
}