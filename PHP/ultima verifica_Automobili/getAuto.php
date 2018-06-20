<?php
header("Content-Type: text/plain; charset=utf-8");//restituiamo dati testuali in utf-8
if(isset($_POST["idMarca"])){
    require_once "connection.php";

    $idMarca=$dbConn->real_escape_string($_POST["idMarca"]);
    try{
        $sql="SELECT automobili.id AS idAuto,modelli.nome AS nomeModello, nPorte,cilindrata,targa,colore,anno,prezzo,km,img
              FROM automobili,modelli,marche
              WHERE automobili.codModello = modelli.idModello AND modelli.codMarca=marche.idMarca AND marche.idMarca = $idMarca;";
        $rs=$dbConn->query($sql);
    }catch (mysqli_sql_exception $exception){
        die("Errore esecuzione query");
    }
    $vet=[];
    while($record=$rs->fetch_assoc()){
        array_push($vet,$record);
    }
    echo (json_encode($vet));
}