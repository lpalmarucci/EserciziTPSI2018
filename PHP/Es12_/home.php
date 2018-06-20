<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Theme Made By www.w3schools.com - No Copyright -->
    <title>HOME</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="home.js"></script>
    <script type="text/javascript" src="libreria.js"></script>
    <link rel="stylesheet" type="text/css" href="home.css">
    <style>
        table{
            width: 100%;
        }
        td,th{
            border: 1px solid #f4511e;
            width: 50%;
        }
        th{
            text-align: center;
        }
    </style>
    <?php
    require_once "session.php";
    ?>
</head>

<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">

<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="#myPage">LA MIA BANCA E' DIFFERENTE</a>
        </div>
        <div style="float:right;margin-top: 8px">
            <input type="button" value="LOGOUT" id="btnLogOut" class="btn">
        </div>
    </div>
</nav>

<div id="pricing" class="container-fluid">
    <div class="text-center">
        <h2>ONLINE PAYMENT</h2>
    </div>
    <div class="row">
        <div class="col-sm-4 col-xs-12">
            <div class="panel panel-default text-center">
                <div class="panel-heading">
                    <h1 style="font-size: 10pt">OPZIONI PAGAMENTO</h1>
                </div>
                <div class="panel-body">
                    <div id="divRadio">
                        <!--tipo-->
                        <input type="radio" name="rdbPagamento" checked="checked" value="1">
                        <label>PAGAMENTO</label>
                        <input type="radio" name="rdbPagamento" value="2">
                        <label>VERSAMENTO</label>
                    </div>

                    <br>

                    <div>
                        <label>DATA : </label>
                        <input type="date" name="dataPagamento">
                    </div>

                    <br>

                    <div>
                        <label>FILIALI: </label>
                        <select name="lstFiliali" id="lstFiliali">
                            <?php
                            mysqli_report(MYSQLI_REPORT_ERROR|MYSQLI_REPORT_STRICT);
                            try
                            {
                                $dbConn = new mysqli("127.0.0.1",'root','','4b_banche');
                                $dbConn -> set_charset('utf8');
                            }
                            catch (mysqli_sql_exception $exception)
                            {
                                error("errore connessione DB", $exception->getMessage());
                            }
                            session_start();
                            $id=$_SESSION["userId"];
                            try{
                                $sql="SELECT DISTINCT filiali.Nome,conti.cConto FROM correntisti,conti,filiali WHERE filiali.cFiliale = conti.cFiliale AND conti.cCorrentista = $id";
                                $rs=$dbConn->query($sql);
                            }
                            catch (mysqli_sql_exception $ex){
                                error("Errore esecuzione query",$ex->getMessage());
                            }
                            if($rs->num_rows == 0){
                                error("Nessun record trovato","FAIL");
                            }
                            while($vet=$rs->fetch_assoc()){
                                $codiceConto=$vet["cConto"];
                                $nomeFiliale=$vet["Nome"];
                                echo "<option value='$codiceConto'>$nomeFiliale</option>";
                            }
                            $dbConn->close();
                            ?>
                        </select>
                    </div>

                    <br>

                    <div>
                        <label>IMPORTO</label>
                        <input type="number" name="importoPagamento" min="1" value="1">
                    </div>

                    <br>

                    <div class="panel-footer">
                        <button class="btn btn-lg" id="btnPagamento">INVIA PAGAMENTO</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-8 col-xs-12">
            <div class="panel panel-default text-center">
                <div class="panel-heading">
                    <h1 style="font-size: 10pt">RISULTATO OPERAZIONI</h1>
                </div>
                <div class="panel-body">
                    <table id="tableResult">
                        <tr>
                            <th>CODICE MOVIMENTO</th>
                            <th>RISULTATO</th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</body>

</html>
