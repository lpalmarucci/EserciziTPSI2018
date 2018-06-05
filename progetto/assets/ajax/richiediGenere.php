<?php
	header('Content-type: application/json; charset=utf-8');

	$risultati = [];
	$risultati['result'] = 'OK';
	$risultati['data'] = 'NO DATA';

	if(isset($_POST['genere'])){
        mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
        //1. Connessione
        require_once('instauraConnessione.php');

        //2. Parametri
        $genere = $_POST['genere'];

        //3. Query
        $sql="select * from brani where genere='".$genere."' order by RAND();";
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
    }
    else{
        $risultati['result'] = 'NOTOK';
        $risultati['data'] = 'MANCANO PARAMETRI';
    }

	echo (json_encode($risultati));
?>