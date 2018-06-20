<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script type="text/javascript" src="../jquery/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <title>Title</title>
    <?php
    //controllo login
    require_once "session.php";
    ?>
</head>
<body>
    <div class="container-fluid">
        <div class="alert alert-info alert-dismissible">
            <img src="img/Koala.jpg" style="width: 120px" class="img-circle"><span style="margin-left: 10px; font-size: 5vw">Hello koala!</span>
        </div>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">Koala</a>
                </div>
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Home</a></li>
                    <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Page 1-1</a></li>
                            <li><a href="#">Page 1-2</a></li>
                            <li><a href="#">Page 1-3</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Page 2</a></li>
                    <li><a href="#">Page 3</a></li>
                    <li><a href="#">Page 4</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="logOut.php"><span class="glyphicon glyphicon-log-out"></span> Log Out</a></li>
                    <li><a href="changePassword.php"><span class="glyphicon glyphicon-lock"></span> Cambia password</a></li>
                </ul>
            </div>
        </nav>
        <div class="panel panel-default">
            <div class="panel-heading">Filtri di selezione</div>
            <div class="panel-body">
                <div class="col-sm-6"></div>
                <div class="col-sm-3">
                    <label>Gender:</label>
                    <div class="radio-inline"><label><input type="radio" name="gender" checked>M</label></div>
                    <div class="radio-inline"><label><input type="radio" name="gender" >F</label></div>
                </div>
                <div class="col-sm-3">
                    <span class="glyphicon glyphicon-calendar">
                        <input type="date" style="width: 120px;">
                    </span>
                </div>
            </div>
        </div>
        <h2>Table</h2>
        <p>The .table-responsive class creates a responsive table which will scroll horizontally on small devices (under 768px). When viewing on anything larger than 768px wide, there is no difference:</p>
        <div class="container-table">
            <div class="container-table-row">
                <div class="container-table-cell">
                        <div class="table-responsive" >
                            <table class="table table-hover" style="table-layout: fixed">
                                <thead>
                                <tr>
                                    <th>Titolo</th>
                                    <th>Autore</th>
                                    <th>Anno</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <?php
                                    //carica dinamicamente la tabella
                                    //1.Connessione
                                    mysqli_report(MYSQLI_REPORT_ERROR|MYSQLI_REPORT_STRICT);
                                    try
                                    {
                                        $dbConn = new mysqli("127.0.0.1",'root','','dischi');
                                        $dbConn -> set_charset('utf8');
                                    }
                                    catch (mysqli_sql_exception $exception)
                                    {
                                        error("errore connessione DB", $exception->getMessage());
                                    }
                                    //2.NO Parametri
                                    //3.Query
                                    $sql="SELECT * FROM dischi;";
                                    try
                                    {
                                        $rs=$dbConn->query($sql);
                                    }
                                    catch(mysqli_sql_exception $exception)
                                    {
                                        $dbConn->close();
                                        error("errore esecuzione query", $exception->getMessage());
                                    }
                                    while($record=$rs->fetch_assoc())
                                    {
                                        $id=htmlentities($record["id"]);
                                        $titolo=htmlentities($record["Titolo"]);
                                        $autore=htmlentities($record["Autore"]);
                                        $data=htmlentities($record["Data"]);


                                        echo("<tr>");
                                        echo("<td>$titolo</td>");
                                        echo("<td>$autore</td>");
                                        echo("<td>$data</td>");
                                        echo("</tr>");
                                    }
                                    //4.Elaborazione dati

                                    //5.Chiusura connessione
                                    $dbConn->close();
                                    function error($titolo, $messaggio)
                                    {
                                        header("Location:error.php?titolo=$titolo&error=$messaggio");
                                        exit();//termina lo script senza scrivere niente
                                    }
                                    ?>
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>