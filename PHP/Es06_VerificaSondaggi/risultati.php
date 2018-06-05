<?php
GLOBAL $con;
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

print_r($_POST);
print_r("<br>");
print_r($_GET);
echo "<br><br><br>";
switch ($_POST['risposta']) {
    case "si":
        try {
            $domanda=$_GET['domanda'];

            #GESTIRE DOMANDA CON APICE

            $sql="SELECT id FROM sondaggi WHERE domanda='$domanda'";
            $rs=mysqli_query($con,$sql);
            $sql="SELECT nSi FROM sondaggi WHERE domanda='$domanda'";
            $rs2=mysqli_query($con,$sql);
        } catch (mysqli_sql_exception $exception) {
            $con->close();
            die("Errore query dove prende l'id: $exception");
        }
        $aus=mysqli_fetch_assoc($rs);
        $id=$aus['id'];
        $aus=mysqli_fetch_assoc($rs2);
        $nSi=$aus['nSi'];
        $nSi++;
        try {
            $sql="UPDATE sondaggi SET nSi=$nSi WHERE id=$id";
            $rs=mysqli_query($con,$sql);
        } catch (mysqli_sql_exception $exception) {
            $con->close();
            die("Errore query: $exception");
        }
        break;
    case "no":
        try {
            $domanda=$_GET['domanda'];
            $sql="SELECT id FROM sondaggi WHERE domanda='$domanda'";
            $rs=mysqli_query($con,$sql);
            $sql="SELECT nNo FROM sondaggi WHERE domanda='$domanda'";
            $rs2=mysqli_query($con,$sql);
        } catch (mysqli_sql_exception $exception) {
            $con->close();
            die("Errore query dove prende l'id: $exception");
        }
        $aus=mysqli_fetch_assoc($rs);
        $id=$aus['id'];
        $aus=mysqli_fetch_assoc($rs2);
        $nNo=$aus['nNo'];
        $nNo++;
        try {
            $sql="UPDATE sondaggi SET nNo=$nNo WHERE id=$id";
            $rs=mysqli_query($con,$sql);
        } catch (mysqli_sql_exception $exception) {
            $con->close();
            die("Errore query: $exception");
        }
        break;
    case "non so":
        try {
            $domanda=$_GET['domanda'];
            $sql="SELECT id FROM sondaggi WHERE domanda='$domanda'";
            $rs=mysqli_query($con,$sql);
            $sql="SELECT nNs FROM sondaggi WHERE domanda='$domanda'";
            $rs2=mysqli_query($con,$sql);
        } catch (mysqli_sql_exception $exception) {
            $con->close();
            die("Errore query dove prende l'id: $exception");
        }
        $aus=mysqli_fetch_assoc($rs);
        $id=$aus['id'];
        $aus=mysqli_fetch_assoc($rs2);
        $nNs=$aus['nNs'];
        $nNs++;
        try {
            $sql="UPDATE sondaggi SET nNs=$nNs WHERE id=$id";
            $rs=mysqli_query($con,$sql);
        } catch (mysqli_sql_exception $exception) {
            $con->close();
            die("Errore query: $exception");
        }
        break;

}
echo "invio dei dati riuscito";
echo "<a href='index.php'>RITORNA ALLA PAGINA PRINCIPALE</a>"
?>