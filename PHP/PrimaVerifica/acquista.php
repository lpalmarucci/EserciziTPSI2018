<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Acquista</title>
    <script type="application/javascript" src="../jquery/jquery-3.2.1.js"></script>
    <link rel="stylesheet" href="../jquery-ui-1.12.1/jquery-ui.css">
    <script type="application/javascript" src="ritornaHomePage.js"></script>
</head>
<body>
    <?php
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
    try{
        $con = new mysqli('localhost', 'root', '', '4b_Borsa');
        $con->set_charset("utf8");
    }
    catch (mysqli_sql_exception $ex) {
        die ("Errore connessione db: <br>" . $ex->getMessage());
    }
    #prendo il valore contenuto in volumi prima di aggiornarlo
    $id=$con->real_escape_string($_GET['id']);
    try{
        $sql="SELECT * FROM titoli WHERE id='$id'";
        $rs=mysqli_query($con, $sql);
    }
    catch (mysqli_sql_exception $exception){
        die("Errore query: $exception");
    }
    $numRighe=mysqli_num_rows($rs);
    if($numRighe==0){
        die("Nessun record trovato");
    }
    else{
        if(isset($_GET['importo']) && $_GET['importo']!=""){
            $riga=mysqli_fetch_assoc($rs);
            $volumi=$riga['volumi'];
            //echo $volumi;
            $nuovoVolumi=$volumi+$_GET['importo'];
            //echo $nuovoVolumi;
            try{
                $sql="UPDATE titoli SET volumi='$nuovoVolumi' WHERE id='$id'";
                $rs=mysqli_query($con, $sql);
            }
            catch (mysqli_sql_exception $exception){
                die("Errore query: $exception");
            }
            echo "Operazione eseguita correttamente <br>";
        }
        else{
            echo "Campo importo vuoto<br><h3>Impossibile effettuare la richiesta</h3><br>";
        }
    }
    ?>
    <button class="ui-button" id="ritornaPag">Ritorna alla pagina principale</button>
</body>
</html>

