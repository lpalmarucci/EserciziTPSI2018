<?php
header('Content-Type: text/plain; charset=utf-8');
if(isset($_POST['codBanca'])){
    require_once "connection.php";
    $codBanca=$dbConn->real_escape_string($_POST['codBanca']);
    if(!is_numeric($codBanca)){
        $dbConn->close();
        http_response_code(422);
        die("Parametro non corretto. codBanca deve essere numerico");
    }
    $sql="SELECT * FROM filiali WHERE cBanca=$codBanca";
    try{
        $rs=$dbConn->query($sql);
    }
    catch (mysqli_sql_exception $ex){
        $dbConn->close();
        http_response_code(500);
        die("Errore esecuzione query ".$ex->getMessage());
    }
//4 elaborazione dati
    $vett=[];
    while ($record=$rs->fetch_assoc()){
        array_push($vett, $record);
    }
    echo json_encode($vett);

}
else{
    http_response_code(422);
    die("Parametri mancati. Atteso il codice della banca");
}