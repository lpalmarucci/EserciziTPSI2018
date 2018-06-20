<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Dettagli</title>
    <link rel="stylesheet" href="../jquery-ui-1.12.1/jquery-ui.css">
    <script type="application/javascript" src="../jquery/jquery-3.2.1.js"></script>
    <script type="application/javascript" src="ritornaHomePage.js"></script>
    <style>
        td, th{
            border: 1px solid black;
        }
        table{
            width:520px;
            margin:0 auto;
        }
        table th:nth-of-type(1), table td:nth-of-type(1) {
            width:10%;
            text-align:center;
            background-color:#AFA;
        }
        table th:nth-of-type(2), table td:nth-of-type(2){
            width:30%;
            text-align:center;
            background-color:#EEE;
        }
        table th:nth-of-type(3), table td:nth-of-type(3){
            width:22%;
            text-align:center;
            background-color:#AFA;
        }
        table th:nth-of-type(4),table td:nth-of-type(4){
            width:10%;
            text-align:center;
            background-color:#EEE;
        }
        table th:nth-of-type(5), table td:nth-of-type(5){
            width:28%;
            text-align:center;
            background-color:#AFA;
        }

        table input[type=text]{
            width:40px;
        }
        #button > td{
            width: 50px;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>titolo</th>
                <th>ultimoContratto</th>
                <th>Denaro</th>
                <th>Lettera</th>
                <th>Volumi</th>
            </tr>
        </thead>
        <tbody>
            <?php

            mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
            try{
                $con = new mysqli('localhost', 'root', '', '4b_borsa');
                $con->set_charset("utf8");
            }
            catch (mysqli_sql_exception $ex) {
                die ("Errore connessione db: <br>" . $ex->getMessage());
            }

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
                while ($riga = mysqli_fetch_assoc($rs)){
                    #stampo dentro la tabella
                    $titolo=$riga['titolo'];
                    $id=$riga['id'];
                    $ultimoContratto=$riga['ultimoContratto'];
                    //lente.jpg
                    $idRiga="ID".$id;
                    $denaro=$riga['denaro'];
                    $lettera=$riga['lettera'];
                    $volumi=$riga['volumi'];
                    echo "<tr id='$idRiga'>";
                    echo "<td>$id</td>";
                    echo "<td>$titolo</td>";
                    echo "<td>$ultimoContratto</td>";
                    echo "<td>$denaro</td>";
                    echo "<td>$lettera</td>";
                    echo "<td>$volumi</td>";
                    //echo "<td><a href='dettagli.php' ><img src='lente.jpg' width='25px' id='img'></a></td>";
                    echo "</tr>";
                }
            }
            ?>
        <tr id="button"><td colspan="6"><button class="ui-button" id="ritornaPag">Ritorna alla pagina principale</button></td></tr>
        </tbody>
    </table>
    <br>
    <br>
</body>
</html>

