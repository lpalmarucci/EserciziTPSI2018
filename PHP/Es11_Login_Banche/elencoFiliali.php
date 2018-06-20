<?php
header("Content-Type: text/plain; charset=utf-8");//restituiamo dati testuali in utf-8
require_once "controlloSession.php";
if(isset($_POST["cCorrentista"]))
{
    //1.Connessione
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
    try
    {
        $connection = new mysqli("localhost", "root", "", "4b_banche");
        $connection->set_charset("utf8");
    }
    catch(mysqli_sql_exception $ex)
    {
        http_response_code(500);//internal server error
        die("Errore connessione ".$ex->getMessage());
    }
    //2.Lettura Parametri
    $cCorrentista=$connection->real_escape_string($_POST["cCorrentista"]);
    if(!is_numeric($cCorrentista))
    {
        $connection->close();
        http_response_code(422);
        die("Parametro non corretto, codBanca deve essere numerico");
    }
    //3.QUERY
    $sql="SELECT filiali.Nome AS NomeFiliale, filiali.cFiliale AS CodiceFiliale
          FROM conti, filiali 
          WHERE conti.cFiliale = filiali.cFiliale
          AND conti.cCorrentista=$cCorrentista;";
    try
    {
        $rs=$connection->query($sql);
    }
    catch(mysqli_sql_exception $ex)
    {
        $connection->close();
        http_response_code(500);
        die("errore query ".$ex->getMessage());
    }
    //4.Elaborazione dati
    $vet=[];
    while($record=$rs->fetch_assoc())
    {
        //carichiamo ogni record in coda a un vettore enumerativo
        array_push($vet, $record);
    }
    echo(json_encode($vet));
    //5.Chiusura
    $connection->close();
}
else
{
    http_response_code(422);
    die("Parametri mancanti. Manca il parametro cCorrentista");
}

?>