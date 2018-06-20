<?php
try
{
    session_start();
    session_unset();
    session_destroy();
    echo('{"ris":true}');
    exit();
}
catch(mysqli_sql_exception $ex)
{
    echo('{"ris":false}');};
    exit();
?>