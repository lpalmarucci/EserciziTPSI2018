<?php
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