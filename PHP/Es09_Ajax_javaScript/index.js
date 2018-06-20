var richiesta;
function verifica(){
    var txtNome=document.getElementById("txtNome");
    var testo=$("#txtNome").val();
    if(testo.length>4){
        // $("#btnInvia").disabled=false;
        var url="controlla.php?nome="+testo;//risorsa da richiedere
        richiesta=new XMLHttpRequest(); //permette di inviare delle richieste AJAX
        richiesta.open("GET",url,true);//true -> richiesta asincrona; false -> richiesta sincrona
        richiesta.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8");//Content-type -> formato con cui vengono mandati i dati
        richiesta.onreadystatechange=aggiorna;//funzione callback che verrà chiamata quando arriveranno dati dal server relativi a questa richiesta
        richiesta.send(null); //ha 1 parametro di tipo stringa; indica eventuali parametri di richiesta POST
    }
}
function aggiorna() {
    if(richiesta.readyState == 4)//request finished and response is ready
    {
        var risposta=richiesta.responseText; //all'interno mi ritrovo la stringa che il server mi ha mandato indietro
        if(risposta=="OK"){
            $("#msg").text();
            $("#btnInvia").prop("disabled",false);
        }
        else{
            $("#msg").text(risposta);
            $("#btnInvia").prop("disabled",true);
        }
    }
}