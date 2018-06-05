<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <title>Rivendita dischi</title>
    <link rel="stylesheet" href="index.css">
    <script type="text/javascript" src="index.js"></script>
    <script type="text/javascript" src="../jquery/jquery-3.2.1.js"></script>
</head>
<body>
<?php
#1.CONNESSIONE
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
try{
    $con = new mysqli('localhost', 'root', '', '4b_dischi');
}
catch (mysqli_sql_exception $ex) {
    die ("Errore connessione db: <br>" . $ex->getMessage());
}
//INSERIRE NUOVO RECORD
//            $sql1="INSERT INTO dischi(id,autore,titolo,anno) VALUES (NULL,'Annalisa','Bye Bye','2018')";
//            $rs1=mysqli_query($con,$sql1);
//            if($rs1){
//                echo "QUERY ANDATA A BUON FINE";
//            }
#2. Lettura Parametri
if(!isset($_GET['id'])){
    die("Errore, nessun id inviato");
}
$id=$con->real_escape_string($_GET['id']);
#3. Esecuzione della query

try{
    $sql="DELETE FROM dischi WHERE id=$id";
    $rs=mysqli_query($con,$sql);
}
catch (mysqli_sql_exception $exception){
    $con->close();
    die("Errore privilegi o query errata: $exception");
}
echo "<div> record cancellato correttamente</div>";
echo "<a href='index.php'>Ritorna alla pagina principale</a>";

#4. Elaborazione dei dati

#5. Chiusura connessione
$con->close();
?>
</body>
</html>