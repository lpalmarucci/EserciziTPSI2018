<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
try{
    $con = new mysqli('localhost', 'root', '', '4b_verificasondaggi');
    $con->set_charset("utf8");
}
catch (mysqli_sql_exception $ex) {
    die ("Errore connessione db: <br>" . $ex->getMessage());
}

if(isset($_POST['lstSondaggio'])){
    $id=$con->real_escape_string($_POST['lstSondaggio']);
}
else{
    die("Nessun parametro settato come lstSondaggio");
}
#echo "$id";
try{
    $sql="SELECT * FROM sondaggi WHERE id=$id";
    $rs=$con->query($sql);
}
catch (mysqli_sql_exception $exception){
    $con->close();
    die("Errore query: $exception->getMessage()");
}
if(($record=$rs->fetch_assoc())){
    echo "<h2>Sondaggio su: $record[titolo]</h2>";
    echo "<hr>";
    echo "<img src='$record[img]' style='width: 250px'>";
    echo "<div>Rispondi alla seguente domanda</div>";
    echo "<div style='border: 1px solid grey'>$record[domanda]</div>";
    echo "<form method='get' action='risultati.php'>";
    echo "<input type='hidden' name='idDomanda' value='$record[id]'>";
    echo "<label><input type='radio' value='nSi' name='optVoto'>Si</label><br>";
    echo "<label><input type='radio' value='nNo' name='optVoto'>No</label><br>";
    echo "<label><input type='radio' value='nNs' name='optVoto' checked>Non so</label><br>";
    echo "<button type='submit'>Invia</button>";
    echo "</form>";
}
else{
    echo "Record non trovato";
}
?>
</body>
</html>