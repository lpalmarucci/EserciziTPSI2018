<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script type="text/javascript" src="../jquery/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="../bootstrap-3.3.7/js/bootstrap.js"></script>

    <script type="application/javascript" src="libreria.js"></script>
    <script type="application/javascript" src="home.js"></script>
    <title>Title</title>
    <?php
    //controllo login
    require_once "session.php";
    setcookie("cCorrentista", $_SESSION["userId"], 0);//nome, valore, durata
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
                    <li><input type="submit" id="btnLogOut"><span class="glyphicon glyphicon-log-out"></span>Log Out</li>
                </ul>
            </div>
        </nav>
        <div class="panel panel-default">
            <div class="panel-heading">Filtri di selezione</div>
            <div class="panel-body">
                <div class="col-sm-4"></div>
                <div class="col-sm-6" id="optFiliali">
                    <label>Filiali:</label>
                    <div class="radio-inline">
                        <label>
                            <input type="radio" name="optFiliali" value="1" >
                            <span>Unicredit</span>
                        </label>
                    </div>
                    <div class="radio-inline">
                        <a href="#">Visualizza dettagli contocorrente</a>
                    </div>
                </div>
                <div class="col-sm-2"></div>
            </div>
        </div>
    </div>
</body>
</html>