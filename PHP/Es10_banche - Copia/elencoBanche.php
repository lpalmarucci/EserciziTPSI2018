<?php
header("Content-Type: text/plain; charset=utf-8");//restituiamo dati testuali in utf-8
require_once "connection.php";
$json=[];
try{
    $sql="SELECT cBanca,Nome FROM banche";
    $rs=$dbConn->query($sql);
}
catch (mysqli_sql_exception $exception){
    http_response_code(500);
    die("errore esecuzione query");
}
if($rs->num_rows != 0){
    while($record=$rs->fetch_assoc()){
        array_push($json,$record);
    }
}
else{
    http_response_code(500);
    die("errore esecuzione query");
}
echo (json_encode($json));