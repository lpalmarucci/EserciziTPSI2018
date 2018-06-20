<?php
mysqli_report(MYSQLI_REPORT_ERROR|MYSQLI_REPORT_STRICT);
try
{
    $dbConn = new mysqli("127.0.0.1",'root','','4b_automobili');
    $dbConn -> set_charset('utf8');
}
catch (mysqli_sql_exception $exception)
{
    http_response_code(500);
    die("Errore connessione: ".$exception->getMessage());
}