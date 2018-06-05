<?php
header('Content-type: text/html; charset=utf-8');

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
try{
    $con = new mysqli('localhost', 'root', '', '4b_dischi');
}
catch (mysqli_sql_exception $ex) {
    die ("Errore connessione db: <br>" . $ex->getMessage());
}
if(!isset($_GET['id'])&&(!isset($_GET['autore']))&&(!isset($_GET['titolo']))&&(!isset($_GET['anno']))){
    $con->close();
    die("Errore, nessun id inviato");
}
#2. Lettura Parametri

$id=$con->real_escape_string($_GET['id']);
$autore=$con->real_escape_string($_GET['autore']);
$titolo=$con->real_escape_string($_GET['titolo']);
$anno=$con->real_escape_string($_GET['anno']);

#3 Esecuzione della query
try{
    $sql="UPDATE dischi SET anno='$anno',autore='$autore',titolo='$titolo' WHERE id=$id";
    $rs=mysqli_query($con, $sql);
}
catch (mysqli_sql_exception $exception){
    $con->close();
    die("Errore query: $exception");
}
#4 Elaborazione
header("location:index.php");//REDIRECT 
$con->close();
#echo "<div style='font-size: 20pt; color: red;'>Salvataggio avvenuto con successo</div>";
#echo "<a href='index.php'>Ritorna alla pagina principale</a>";
?>