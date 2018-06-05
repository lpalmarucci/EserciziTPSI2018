<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sondaggi</title>
    <script type="text/javascript" src="../jquery/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="sondaggi.js"></script>
</head>
<body>
<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
try{
    $con = new mysqli('localhost', 'root', '', 'db_VerificaSondaggi');
}
catch (mysqli_sql_exception $ex) {
    die ("Errore connessione db: <br>" . $ex->getMessage());
}
#2. lettura parametri
#3 esecuzione della query
try{
    $con->set_charset("utf8");
    $con->query("set names 'utf8'");
}
catch (mysqli_sql_exception $exception) {
    $con->close();
    die("Errore codifica UTF-8: $exception");
}
$argomento=$_POST['menu'];
echo "<h1>Sondaggi su: $argomento</h1><hr>";
#query deve cercare la domanda relativa a quell'argomento;
try {
    $sql="SELECT * FROM sondaggi WHERE titolo='$argomento'";
    $rs=mysqli_query($con,$sql);
} catch (mysqli_sql_exception $exception) {
    $con->close();
    die("Errore query: $exception");
}
$riga=mysqli_num_rows($rs);
if(!$riga){
    echo "Nessun record trovato";
}
else{
    $record=mysqli_fetch_assoc($rs);
    $img=$record['img'];
    echo "<img src='img/$img' style='width: 150px;height: 150px'>";
    echo "<div>Rispondi alla seguente domanda</div>";
    $domanda=$record['domanda'];
    echo "<form>";
    echo "<div style='border: 1px solid black;width: 40%'>$domanda</div>";
    echo "<input type='radio' value='si' name='risposta'>Si<br>";
    echo "<input type='radio' value='no' name='risposta'>No<br>";
    echo "<input type='radio' value='non so' name='risposta'>Non so<br>";
    echo "<button type='submit' id='btnInvia'>INVIA</button>";
    echo "</form>";
}
?>
</body>
</html>








