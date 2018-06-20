<?php
if(isset($_POST['codFiliale'])){
    header('Content-Type: text/plain; charset=utf-8');
    require_once "connection.php";
    $codFiliale=$dbConn->real_escape_string($_POST['codFiliale']);
    if(!is_numeric($codFiliale)){
        $dbConn->close();
        http_response_code(422);
        die("Parametro non corretto. codFiliale deve essere numerico");
    }
    //FACCIO L'ALIAS SUI CAMPI NON UNIVOCI!!!!
    
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
        $dbConn->close();
        http_response_code(500);
        die("Errore esecuzione query ".$ex->getMessage());
    }
//4 elaborazione dati
    $vett=[];
    while ($record=$rs->fetch_assoc()){
        array_push($vett, $record);
    }
    echo json_encode($vett);

}
else{
    $dbConn->close();
    http_response_code(422);
    die("Parametri mancati. Atteso il codice della filiale  ");
}