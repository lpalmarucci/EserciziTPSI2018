<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script type="text/javascript" src="../jquery/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script type="application/javascript" src="index.js"></script>
    <!--<script type="application/javascript" src="inserisci.js"></script>-->
    <title>Login</title>
</head>
<body>
    <?php
        if($_SERVER["REQUEST_METHOD"]==="POST")//se la richiesta è in POST
        {
            if(isset($_POST["username"])&&isset($_POST["pwd"]))
            {
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
                //connessione andata bene
                //2. Lettura parametri, devo usare il NAME
                $username=$dbConn->real_escape_string($_POST["username"]);
                $password=$dbConn->real_escape_string($_POST["pwd"]);

                //3.Esecuzione Query
                $sql="SELECT * FROM utenti WHERE username='$username';";
                //il confronto tra stringhe in mysql per default è CASE UNSENSITIVE
                //il nomr utente può essere scritto maiuscolo o minuscolo
                try
                {
                    $rs=mysqli_query($dbConn, $sql);
                }
                catch(mysqli_sql_exception $exception)
                {
                    $dbConn->close();
                    error("errore esecuzione query", $exception->getMessage());
                }
                //4.Elaborazione dati
                if($rs->num_rows ==0)
                {
                    $dbConn->close();
                    error("username non valido", "");
                }
                $record=$rs->fetch_assoc();//restituisce il record come vettore associativo
                $passwordDb=htmlentities($record["pwd"]);
                $id=$record["id"];
                //il confronto NON IN SQL è case SENSITIVE
                if($passwordDb != md5($password))
                {
                    $dbConn->close();
                    error("password non valida", "");
                }
                //devo creare la sessione, almeno posso accedere alle variabili session

                session_start();
                setcookie(session_name(),session_id(),time()+3600,"/");
                //crea una variabile session di nome userId con valore dell'id corrente
                $_SESSION["userId"]=$id;
                //il momento in cui fai l'accesso
                $_SESSION["ultimoAccesso"]=time();
                header("Location:home.php");
                $dbConn->close();
            }
            else
            {
                error("parametri mancanti", "username o password mancanti");
            }
        }
    function error($titolo, $messaggio)
    {
        header("Location:error.php?titolo=$titolo&error=$messaggio");
        exit();//termina lo script senza scrivere niente
    }
    ?>

    <div class="container-fluid">
        <!--Jumbotron-->
        <div class="row" style="margin-top: 5%">
            <div class="col-sm-4"></div>
            <!---->
            <div class="col-sm-4">
                <div class="jumbotron" data-toggle="collapse" data-target="#login">
                    <p class="text-center">
                        <img src="img/index.png" class="img-circle" width="190">
                    </p>
                    <p class="text-center">IIS Vallauri - Fossano</p>
                </div>
            </div>
            <!---->
            <div class="col-sm-4"></div>
        </div>
        <!--Login-->
        <div class="row collaps" id="login">
            <div class="col-sm-4">
                <!--Con questo div Saltiamo 4 celle Vuote all'inizio-->
            </div>
            <div class="col-sm-4">
                <form name="login">
                    <div class="input-group form-group">
                        <span class="input-group-addon">
                            <i class="glyphicon glyphicon-user"></i>
                        </span>
                        <input type="text" class="form-control" placeholder="Username" id="username" name="username">
                    </div>
                    <div class="input-group form-group">
                        <span class="input-group-addon">
                            <i class="glyphicon glyphicon-lock"></i>
                        </span>
                        <input type="password" class="form-control" placeholder="Password" id="pwd" name="pwd">
                    </div>
                    <div>
                        <!--Serve per richiamare una procedura JS, non fare il submit-->
                        <input type="button" class="btn btn-primary form-control" value="Login" id='btnInvia'>
                    </div>
                    <div class="form-group">
                        <input type="button" class="btn-link form-control" style="text-align: left;padding-bottom: 0" value="Registrati" onclick="location.href='registrazione.php'">
                        <input type="button" class="btn-link form-control" style="text-align: left;padding-top: 0" value="Password Dimenticata">
                    </div>
                </form>
            </div>
            <div class="col-sm-4">
                <!--Con questo div Saltiamo 4 celle Vuote al fondo-->
            </div>
        </div>
    </div>
</body>
</html>