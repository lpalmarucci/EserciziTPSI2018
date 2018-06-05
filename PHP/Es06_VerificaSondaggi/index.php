<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Index</title>
    <script type="text/javascript" src="../jquery/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="index.js"></script>
</head>
<body>
<h1>Selezionare il sondaggio a cui si desidera partecipare</h1>
<hr>
<div>
    Sondaggi disponibili<br><br>
    <form method="post">
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
    catch (mysqli_sql_exception $exception){
        $con->close();
        die("Errore codifica UTF-8: $exception");
    }
    try{
        $sql="SELECT DISTINCT titolo FROM Sondaggi";
        $rs=mysqli_query($con,$sql);
    }
    catch (mysqli_sql_exception $exception){
        $con->close();
        die("Errore query: $exception");
    }
    $qta=mysqli_num_rows($rs);
    if(!$qta){
        echo "Nessun record trovato!";
    }
    else{
        echo "<select name='menu'>";
        while ($riga = mysqli_fetch_assoc($rs)){
            $argomento=$riga['titolo'];
            echo "$argomento";
            echo "<option name='$argomento' value='$argomento'>$argomento</option>";
        }
    }
    echo "</select>";
    echo "<input type='submit' value='VAI' style='margin-left: 10px' id='vai'>";
    $con->close();
    ?>
    </form>
</div>
</body>
</html>
