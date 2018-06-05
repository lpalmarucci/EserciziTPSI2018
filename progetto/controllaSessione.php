<?php

if($_SERVER["REQUEST_METHOD"]==="POST"){
    if(isset($_POST["username"])&&isset($_POST["pwd"])){
        mysqli_report(MYSQLI_REPORT_ERROR|MYSQLI_REPORT_STRICT);
        try{
            $conn = new mysqli("127.0.0.1",'root','','dischi');
            $conn -> set_charset('utf8');
        }
        catch (mysqli_sql_exception $exception){
            error("errore connessione DB", $exception->getMessage());
        }
        //connessione andata bene
        //lettura parametri
        $user=$conn->real_escape_string($_POST["username"]); //real escape mi serve per ricopiare bene la stringa
        $password=$conn->real_escape_string($_POST["pwd"]);

        //nel secondo campo mi serve un indice univoco, lo rendo "unica"
        //il confronto tra stringhe in mysql è case unsensative  quindi PIPPO= pippo
        $sql="select * from utenti where username='$user';";
        try{
            $rs=$conn->query($sql);
        }
        catch (mysqli_sql_exception $exception){
            //qua non devo chiudere la connessione perché non l'ho ancora attivata
            error("errore esecuzione query",$exception->getMessage());
        }

        if($rs->num_rows==0){
            $conn->close();
            error("username non valido","");
        }
        $record=$rs->fetch_assoc(); //restituisce record in vettore associativo
        $passwordDB=htmlentities($record["pwd"]);

        $id=$record["id"];
        //echo $record["password"];
        //echo $record["ID"];

        //controllo criptografato
        if($passwordDB != md5($password))
        {
            $conn->close();
            error("password non valida", "");
        }

        session_start();
        setcookie(session_name(), session_id(), time()+3600, "/");
        //crea una variabile session di nome userId con valore dell'id corrente
        $_SESSION["userID"]=$id;
        //il momento in cui fai l'accesso
        $_SESSION["ultimoaccesso"]=time();//espresso in secondi
        header("Location:ricerca.php");
        $conn->close();
    }
    else{
        error("parametri mancanti","username o password mancanti");
    }
}


function error($titolo,$messaggio){
    header("Location:error.php?titolo=$titolo&error=$messaggio");
    exit();
}
include 'session.php';
?>