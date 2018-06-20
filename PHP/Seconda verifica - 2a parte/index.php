<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Index</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="../jquery/jquery-3.2.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="index.js"></script>
    <script src="libreria.js"></script>
    <style>
        h1{
            text-align: center;
        }
        th{
            height: 50px;
            line-height: 50px;
            padding-right: 30px;
            padding-left: 30px;
            border: 1px solid black;
        }
        table{
            margin: 0 auto;
        }
        #divAvantiIndietro{
            width: 200px;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <h1>Concerti 2018</h1>
    <br>
    <br>
    <div style="">
    <div class="dropdown" style="margin-right: 5px;float:left">
        <button class="btn btn-primary dropdown" type="button" data-toggle="dropdown">CITTA'
            <span class="caret"></span></button>
        <ul class="dropdown-menu"  id="dropCitta">
            <li value="0">TUTTE</li>
            <?php
            //            require_once "connessione.php";

            mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
            try
            {
                $connection = new mysqli("localhost", "root", "", "4b_concerti");
                $connection->set_charset("utf8");
            }
            catch(mysqli_sql_exception $ex)
            {
                http_response_code(500);//internal server error
                die("Errore connessione ".$ex->getMessage());
            }

            $sql="SELECT * FROM citta";
            try{
                $rs=$connection->query($sql);
            }
            catch(mysqli_sql_exception $ex)
            {
                die("Errore query ".$ex->getMessage());
            }
            if($rs->num_rows != 0){
                while($record=$rs->fetch_assoc()){
                    $id=$record["id"];
                    $citta=$record["citta"];
                    echo "<li value='$id'>$citta</li>";
                }
            }
            else{
                die("Nessun record trovato");
            }
            $connection->close();
            ?>
        </ul>
    </div>
    <div class="dropdown" style="margin-right: 5px;float:left" >
        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">GENERI
            <span class="caret"></span></button>
        <ul class="dropdown-menu" id="dropGenere">
            <li value="0">TUTTI</li>
            <?php
            mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
            try
            {
                $connection = new mysqli("localhost", "root", "", "4b_concerti");
                $connection->set_charset("utf8");
            }
            catch(mysqli_sql_exception $ex)
            {
                http_response_code(500);//internal server error
                die("Errore connessione ".$ex->getMessage());
            }

            $sql="SELECT * FROM generi";
            try{
                $rs=$connection->query($sql);
            }
            catch(mysqli_sql_exception $ex)
            {
                die("Errore query ".$ex->getMessage());
            }
            if($rs->num_rows != 0){
                while($record=$rs->fetch_assoc()){
                    $id=$record["id"];
                    $genere=$record["genere"];
                    echo "<li value='$id'>$genere</li>";
                }
            }
            else{
                die("Nessun record trovato");
            }
            $connection->close();
            ?>
        </ul>
    </div>
    <input type="button" value="FILTRA" class="btn" style="margin-right: 5px;float:left" id="btnFiltra">
    </div>
    
    
    <table class="table-hover table" id="tabella">
        <thead>
            <tr>
                <th>ID</th>
                <th>Cantante</th>
                <th>Data</th>
                <th>Genere</th><!-- CODICE-->
                <th>Città</th><!-- CODICE-->
                <th>Struttura</th>
                <th>nPosti</th>
                <th>Dettagli</th>
            </tr>
        </thead>
        <tbody id="tBody">
        </tbody>
    </table>
    <br>
    <br>
    <br>
    <div id="divAvantiIndietro">

    </div>
</body>
</html>