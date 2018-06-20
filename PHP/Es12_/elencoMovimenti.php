<?php
header("Content-Type: text/plain; charset=utf-8");//restituiamo dati testuali in utf-8
///require_once "controlloSession.php";
$json=array();
if((isset($_POST["cConto"]))&& isset($_POST["importo"]) && isset($_POST["data"]) && isset($_POST["codiceOperazione"])){
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
    try
    {
        $connection= new mysqli("127.0.0.1", "root", "", "4b_banche");
        $connection->set_charset("utf8");
    }
    catch(mysqli_sql_exception $ex)
    {
        //http_response_code(500);//internal server error
        $json["error"]=true;
    }
    //2. Lettura parametri
    $codiceConto=$connection->real_escape_string($_POST["cConto"]);
    $importo=$connection->real_escape_string($_POST["importo"]);
    $data=$connection->real_escape_string($_POST["data"]);
    $codiceOperazione=$connection->real_escape_string($_POST["codiceOperazione"]);
    try
    {
        $sql="INSERT INTO movimenti(cConto,cOperazione,DataMovimenti,Importo) VALUES ($codiceConto,$codiceOperazione,'$data',$importo)";
        $rs=$connection->query($sql);
    }
    catch(mysqli_sql_exception $ex)
    {
        $connection->close();
       // http_response_code(500);
        $json["error"]=true;
    }
    try{
        $sql="SELECT cMov FROM movimenti ORDER BY cMov DESC"; //
        $rs=$connection->query($sql);
        if($rs->num_rows != 0){
            $record=$rs->fetch_assoc();
            $cMov=$record["cMov"];
            $json["cMov"]=$cMov;
        }
    }
    catch (mysqli_sql_exception $exception){
        $connection->close();
        //http_response_code(500);
        $json["error"]=true;
    }


    echo (json_encode($json));
}