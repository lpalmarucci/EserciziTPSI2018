<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Index</title>
</head>
<body>
<h1 style="text-align: center">Seleziona il sondaggio</h1>
<hr>
<h3>Sondaggi disponibili</h3>
<form method="post" action="sondaggi.php">
    <select name="lstSondaggio">
        <?php
        #1.Connessione
        mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
        try{
            $con = new mysqli('localhost', 'root', '', '4b_verificasondaggi');
            $con->set_charset("utf8");
        }
        catch (mysqli_sql_exception $ex) {
            die ("Errore connessione db: <br>" . $ex->getMessage());
        }
        #2.Lettura dei parametri
        #3.Query
        try{
            $sql="SELECT * FROM sondaggi";
            $rs=mysqli_query($con, $sql);
        }
        catch (mysqli_sql_exception $exception){
            die("Errore query: $exception");
        }
        if(($numRighe=$rs->num_rows)!=0){
            while ($record = $rs->fetch_assoc()){
                echo "<option value='$record[id]'>$record[titolo]</option>";
            }
        }
        
        #5. Chiusura connessione
        $con->close();
        ?>
    </select>
    <button type="submit">Invia</button>

</form>
</body>
</html>