<?php
//è un servizio quindi niente body o header; restituisce sempre una stringa
//questa stringa può essere:
//1. Una stringa generica tipo OK oppure NONOK
//2. Stringa XML
//3. Stringa JSON

//
if(isset($_GET['nome']))
{
    header('Content-Type: text/plain; charset=utf-8');
    //1.Connessione
    mysqli_report(MYSQLI_REPORT_ERROR|MYSQLI_REPORT_STRICT);
    try
    {
        $dbConn = new mysqli("127.0.0.1",'root','','db_dischi');
        $dbConn -> set_charset('utf8');
    }
    catch (mysqli_sql_exception $exception)
    {
        die("Errore connessione: ".$exception->getMessage());
    }
    //2. Lettura parametri, devo usare il NAME
    $nome=$dbConn->real_escape_string($_GET["nome"]);
    //3.Esecuzione Query
    $sql="SELECT * FROM utenti WHERE username='$nome'";
    //il nomr utente può essere scritto maiuscolo o minuscolo
    try
    {
        $rs=mysqli_query($dbConn, $sql);
    }
    catch(mysqli_sql_exception $exception)
    {
        $dbConn->close();
        die("errore query". $exception->getMessage());
    }

    //4 elaborazione dati
    if($rs->num_rows==0)
    {
        die("OK");
    }
    else{
        die("Ci sono già utenti con questo nome");
    }
    //5 chiusura
    $dbConn->close();
}
else{
    die("Parametro non valido, manca il nome utente");
}
