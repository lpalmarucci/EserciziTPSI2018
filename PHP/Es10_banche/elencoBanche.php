<?php

header('Content-Type: text/plain; charset=utf-8');
//1 connessione
require_once "connection.php";
//2 connessione
//NO PARAMETRI
//3 esecuzione della query
$sql="SELECT * FROM banche";
try{
    $rs=$dbConn->query($sql);
}
catch (mysqli_sql_exception $ex){
    $rs->close();
    http_response_code(500);
    die("Errore esecuzione query ".$ex->getMessage());
}
//4 elaborazione dati
$vett=[];
while ($record=$rs->fetch_assoc()){
    array_push($vett, $record);
}
echo json_encode($vett);

//5 chiusura connessione
$dbConn->close();