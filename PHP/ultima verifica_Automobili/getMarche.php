<?php
header("Content-Type: text/plain; charset=utf-8");//restituiamo dati testuali in utf-8
require_once "connection.php";
try{
    $sql="SELECT * FROM marche";
    $rs=$dbConn->query($sql);
}catch (mysqli_sql_exception $exception){
    die("Errore esecuzione query");
}
$vet=[];
while($record=$rs->fetch_assoc()){
    array_push($vet,$record);
}
echo (json_encode($vet));