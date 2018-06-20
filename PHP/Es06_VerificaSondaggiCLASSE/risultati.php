<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php
#1 Connessione
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
try{
    $con = new mysqli('localhost', 'root', '', '4b_verificasondaggi');
    $con->set_charset("utf8");
}
catch (mysqli_sql_exception $ex) {
    die ("Errore connessione db: <br>" . $ex->getMessage());
}
#2 Lettura parametri
if(isset($_GET['idDomanda'])&&isset($_GET['optVoto'])){
    $id=$con->real_escape_string($_GET['idDomanda']);
    $campo=$con->real_escape_string($_GET['optVoto']);
}
else{
    $con->close();
    die("Parametri non corretti");
}
try {
    $sql = "UPDATE sondaggi SET $campo=$campo+1 WHERE id=$id";
    $rs = $con->query($sql);
}
catch (mysqli_sql_exception $ex){
    $con->close();
    die( "errore esecuzione query <br> $ex->getMessage()");
}
setcookie("sondaggio$id",true,time()+30,"/"); #settaggio cookie

?>

<div>
    <?php
    try {
        $sql = "SELECT * FROM sondaggi WHERE id=$id";
        $rs=$con->query($sql);
    }
    catch (mysqli_sql_exception $ex){
        $con->close();
        die( "Errore esecuzione query <br> $ex->getMessage()");
    }
    if($record=$rs->fetch_assoc()){
        $nSi=$record['nSi'];
        $nNo=$record['nNo'];
        $nNs=$record['nNs'];
        $tot=$nSi+$nNo+$nNs;
        $pernSi=($nSi*100)/$tot;
        $pernNo=($nNo*100)/$tot;
        $pernNs=($nNs*100)/$tot;
        echo "<h4>Risultati della domanda: $record[domanda]</h4>";
        echo "<p>Totale Votanti: $tot</p><br>";
        echo "<p>Percentuale si: $pernSi %</p><br>";
        echo "<p>Percentuale no: $pernNo %</p><br>";
        echo "<p>Percentuale astenuti: $pernNs %</p><br>";
    }
    ?>
</div>
</body>
</html>