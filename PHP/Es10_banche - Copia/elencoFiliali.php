<?php
header("Content-Type: text/plain; charset=utf-8");//restituiamo dati testuali in utf-8
if(isset($_POST["codBanca"])){
    require_once "connection.php";
    $json=[];
    $codBanca=$dbConn->real_escape_string($_POST["codBanca"]);

    try{
        $sql="SELECT * FROM filiali WHERE cBanca=$codBanca";
        $rs=$dbConn->query($sql);
    }
    catch (mysqli_sql_exception $ex){
        http_response_code(500);
        die("errore esecuzione query");
    }
    if ($rs->num_rows != 0){
        while ($record = $rs->fetch_assoc()){
            array_push($json,$record);
        }
    }
    else{
        die("Nessun record trovato");
    }
    echo (json_encode($json));
}