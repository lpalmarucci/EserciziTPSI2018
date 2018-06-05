<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
try{
    $con = new mysqli('localhost', 'root', '', '4b_dischi');
    $con->set_charset("utf8");
}
catch (mysqli_sql_exception $ex) {
    die ("Errore connessione db: <br>" . $ex->getMessage());
}
if(!(isset($_POST['txtInterprete'])&&isset($_POST['txtTitolo'])&&isset($_POST['txtAnno'])))
{
    $con->close();
    die("Errore, alcuni parametri errati");
}
$autore=$con->real_escape_string($_POST['txtInterprete']);
$titolo=$con->real_escape_string($_POST['txtTitolo']);
$anno=$con->real_escape_string($_POST['txtAnno']);

try{
    $sql1="INSERT INTO dischi(id,autore,titolo,anno) VALUES (NULL,'$autore','$titolo','$anno')";
    $rs1=mysqli_query($con,$sql1);
}
catch (mysqli_sql_exception $exception){
    die("Errore nella query: $exception");
}
if($rs1){
    echo "<h1>Record inserito correttamente</h1>";
}
header("location:index.php");#non interrompe lo script
$rs1->close();
