<?php
header("Content-Type: text/plain; charset=utf-8");//restituiamo dati testuali in utf-8
$json=array();
$json["ris"]="OK";
try{
    session_start();
    session_unset();
    session_destroy();
}
catch (mysqli_sql_exception $exception){
    $json["ris"]="NOK";
}
echo (json_encode($json));