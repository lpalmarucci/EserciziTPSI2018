<?php
header("Content-Type: text/plain; charset=utf-8");//restituiamo dati testuali in utf-8
if (isset($_GET["codFiliale"])){
    require_once "connection.php";
    $json=[];
    $codFiliale=$dbConn->real_escape_string($_GET["codFiliale"]);
    try{
        $sql="SELECT correntisti.cCorrentista AS codCorrentista,
                 correntisti.Nome AS nomeCorrentista,
                 comuni.Nome AS nomeComune,
                 Telefono,
                 cConto,
                 Saldo
          FROM conti,correntisti,comuni 
          WHERE conti.cCorrentista=correntisti.cCorrentista
          AND correntisti.cComune = comuni.cComune
          AND conti.cFiliale=$codFiliale"; //prodotto scalare tutte le possibili combinazioni

        $rs=$dbConn->query($sql);
    }
    catch (mysqli_sql_exception $ex){
        http_response_code(500);
        die("errore esecuzione query");
    }
    if ($rs->num_rows != 0){
        while ($record = $rs->fetch_assoc()){
            array_push($json,$record);
        }
    }
    else{
        die("Nessun record trovato");
    }
    echo (json_encode($json));
}