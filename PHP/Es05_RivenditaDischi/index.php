<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <title>Rivendita dischi</title>
    <link rel="stylesheet" href="index.css">
    <script type="text/javascript" src="../jquery/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="index.js"></script>
</head>
<body>
    <h1>Elenco dischi disponibili</h1>
    <table class="row" style="margin: 0 auto">
        <thead>
            <tr>
                <th>ID</th>
                <th>Autore</th>
                <th>Titolo</th>
                <th>Anno</th>
                <th>Salva</th>
                <th>Cancella</th>
            </tr>
        </thead>
        <tbody id="dischi">
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
            #3. Esecuzione della query
            try{
                $con->set_charset("utf8");
                $con->query("set names 'utf8'");
            }
            catch (mysqli_sql_exception $exception){
                $con->close();
                die("Errore codifica UTF-8: $exception");
            }
            try{
                $sql="SELECT * FROM dischi";
                $rs=mysqli_query($con,$sql);
            }
            catch (mysqli_sql_exception $exception){
                $con->close();
                die("Errore query: $exception");
            }
            #4. Elaborazione dei dati
            $qta=mysqli_num_rows($rs);
            if(!$qta){
                echo "Nessun record trovato!";
            }
            else{
                while ($riga = mysqli_fetch_assoc($rs)){
                    #stampo dentro la tabella
                    $id=$riga["id"];
                    echo "<tr>";
                    echo "<td><input  type='text' readonly value='".$riga["id"]."' onkeyup='keyup($id)'> </td>";
                    $titolo=htmlentities($riga['titolo']);#caratteri speciali tradotti da &egrave e queste cose qua
                    echo "<td><input type='text' value=\"$titolo\" onkeyup='keyup($id)'></td>";#\" indica che eventuali apici nella variabile non indicano la chiusura della stringa
                    echo "<td><input type='text' value='".$riga["autore"]."' onkeyup='keyup($id)' > </td>";
                    echo "<td><input type='text' value='".$riga["anno"]."' onkeyup='keyup($id)'> </td>";
                    echo "<td><form style='margin: 0;padding: 0;'><input type='button' id='btn$id' value='SALVA' disabled></form></td>";
                    echo "<td><form style='margin: 0;padding: 0;' method='post' action='elimina.php?id=$id' ><input type='submit' value='ELIMINA'></form></td>";
                    echo "</tr>";
                }
            }
            #5. Chiusura connessione
            $con->close();
            ?>
        </tbody>
    </table>
<div style="padding: 4px;margin: 0 auto;text-align: center"><a href="inserisci.html" >INSERISCI NUOVO RECORD</a></div>
</body>
</html>