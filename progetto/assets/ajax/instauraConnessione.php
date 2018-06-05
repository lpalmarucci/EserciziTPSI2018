<?php
	try
	{
        $conn = new mysqli('127.0.0.1', 'root', '', 'dischi');
        $conn->set_charset('utf8');
    } 
    catch (mysqli_sql_exception $exception) 
    {
        $risultati['result'] = 'NOTOK';
		$risultati['data'] = $exception->getMessage();
    }
?>