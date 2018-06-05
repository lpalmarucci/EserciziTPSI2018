<?php
header('Content-type: application/json; charset=utf-8');

$risultati = [];
$risultati['result'] = 'OK';
$risultati['data'] = 'NO DATA';

    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
    //1. Connessione
    require_once('instauraConnessione.php');

    //2. Parametri

    //3. Query
    $sql="select * from brani  order by ID desc;";
    try
    {
        $rs = $conn->query($sql);
    }
    catch (mysqli_sql_exception $exception)
    {
        $conn->close();
        $risultati['result'] = 'NOTOK';
        $risultati['data'] = $exception->getMessage();
    }

    //4. Elaborazione
    if ($rs->num_rows == 0) {
        $risultati['result'] = 'NOTOK';
        $risultati['data'] = 'NESSUN RECORD';
    }
    else{
        $risultati['data'] = [];
        while ($record = $rs->fetch_assoc()) {
            array_push($risultati['data'], $record);
        }
    }
    //5. Chiusura connessione
    $conn->close();


echo (json_encode($risultati));
?>