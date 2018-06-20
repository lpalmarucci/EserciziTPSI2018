<?php
header("Content-Type: text/plain; charset=utf-8");
if(isset($_POST["codConcerto"])){
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
    try
    {
        $connection = new mysqli("localhost", "root", "", "4b_concerti");
        $connection->set_charset("utf8");
    }
    catch(mysqli_sql_exception $ex)
    {
        http_response_code(500);//internal server error
        $json["error"]=true;
    }
    $codConcerto=$connection->real_escape_string($_POST["codConcerto"]);
    try
    {
        $sql="SELECT dettagli FROM concerti
              WHERE concerti.id=$codConcerto ";
        $rs=$connection->query($sql);
    }
    catch(mysqli_sql_exception $ex)
    {
        http_response_code(500);//internal server error
        $json["error"]=true;
    }
    if($rs->num_rows!=0){
        $vet=[];
        while($record=$rs->fetch_assoc())
        {
            //carichiamo ogni record in coda a un vettore enumerativo
            array_push($vet, $record);
        }
    }
    else{
        $json["error"]=true;
    }
    if(!isset($json)){
        echo (json_encode($vet));
    }
    else if(!isset($vet)){
        echo (json_encode($json));
    }
    //5.Chiusura
    $connection->close();
}