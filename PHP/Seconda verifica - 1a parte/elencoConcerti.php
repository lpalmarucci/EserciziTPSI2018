<?php
header("Content-Type: text/plain; charset=utf-8");
if((isset($_POST["codGenere"]) && isset($_POST["codCitta"]))){
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
    try
    {
        $connection = new mysqli("localhost", "root", "", "4b_concerti");
        $connection->set_charset("utf8");
    }
    catch(mysqli_sql_exception $ex)
    {
        http_response_code(500);//internal server error
        die("errore connessione al database");
    }
    $codGenere=$connection->real_escape_string($_POST["codGenere"]);
    $cCitta=$connection->real_escape_string($_POST["codCitta"]);
    if($codGenere==0 && $cCitta==0){
        $sql="SELECT concerti.id AS codConcerti,
                cantante,
                concerti.data AS dataConcerto,
                generi.genere AS nomeGenere,
                citta.citta AS nomeCitta,
                struttura,
                nPosti
            FROM concerti,citta,generi 
            WHERE concerti.codGenere=generi.id
            AND concerti.codCitta = citta.id"; //prodotto scalare tutte le possibili combinazioni
    }
    else if($cCitta==0 && $codGenere!=0){
        $sql="SELECT concerti.id AS codConcerti,
                cantante,
                concerti.data AS dataConcerto,
                generi.genere AS nomeGenere,
                citta.citta AS nomeCitta,
                struttura,
                nPosti
            FROM concerti,citta,generi 
            WHERE concerti.codGenere=generi.id
            AND concerti.codCitta = citta.id
            AND generi.id=$codGenere"; //prodotto scalare tutte le possibili combinazioni
    }
    else if($cCitta!=0 && $codGenere==0){
        $sql="SELECT concerti.id AS codConcerti,
                cantante,
                concerti.data AS dataConcerto,
                generi.genere AS nomeGenere,
                citta.citta AS nomeCitta,
                struttura,
                nPosti
            FROM concerti,citta,generi 
            WHERE concerti.codGenere=generi.id
            AND concerti.codCitta = citta.id
            AND citta.id=$cCitta"; //prodotto scalare tutte le possibili combinazioni
    }
    else{
        $sql="SELECT concerti.id AS codConcerti,
                cantante,
                concerti.data AS dataConcerto,
                generi.genere AS nomeGenere,
                citta.citta AS nomeCitta,
                struttura,
                nPosti
            FROM concerti,citta,generi 
            WHERE concerti.codGenere=generi.id
            AND concerti.codCitta = citta.id
            AND generi.id=$codGenere
            AND citta.id=$cCitta"; //prodotto scalare tutte le possibili combinazioni
    }
    
    try
    {
        $rs=$connection->query($sql);
    }
    catch(mysqli_sql_exception $ex)
    {
        http_response_code(500);//internal server error
        die("errore query");
    }
    $vet=[];
    while($record=$rs->fetch_assoc())
    {
        //carichiamo ogni record in coda a un vettore enumerativo
        array_push($vet, $record);
    }
    echo (json_encode($vet));
    $connection->close();
}
