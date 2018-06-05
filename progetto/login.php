<!DOCTYPE HTML>
<!--
	Broadcast by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
-->
<html>
<head>
    <title>Streamusyc</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="assets/css/main.css" />
    <script type="text/javascript" src="jqueryui/jquery.js"></script>
    <script type="text/javascript" src="jqueryui/jquery-ui.js"></script>
    <script type="application/javascript" src="index.js"></script>
</head>
<body>

<!-- Header -->
<header id="header">
    <h1><a href="#">STREAMUSYC <span>by Clausy & Palma</span></a></h1>

    <a href="login.php">Login</a>
    <a href="#menu">Menu</a>

</header>

<!-- Nav -->

<nav id="menu">

    <ul class="links">
        <li><a href="index.php">Home</a></li>
        <li><a href="generic.php">Generic</a></li>
        <li><a href="elements.html">Elements</a></li>
    </ul>
</nav>
<!--parte con immagine-->
    <section id="banner">
        <video id="videobcg" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0">
            <source src="images/banner.mp4" type="video/mp4">
            Sorry, your browser does not support HTML5 video.
        </video>
    <div class="inner" align="center">
        <?php
        if($_SERVER["REQUEST_METHOD"]==="POST"){
            if(isset($_POST["username"])&&isset($_POST["pwd"])){
                mysqli_report(MYSQLI_REPORT_ERROR|MYSQLI_REPORT_STRICT);
                try{
                    $conn = new mysqli("127.0.0.1",'root','','dischi');
                    $conn -> set_charset('utf8');
                }
                catch (mysqli_sql_exception $exception){
                    error("errore connessione DB", $exception->getMessage());
                }
                //connessione andata bene
                //lettura parametri
                $user=$conn->real_escape_string($_POST["username"]); //real escape mi serve per ricopiare bene la stringa
                $password=$conn->real_escape_string($_POST["pwd"]);

                //nel secondo campo mi serve un indice univoco, lo rendo "unica"
                //il confronto tra stringhe in mysql è case unsensative  quindi PIPPO= pippo
                $sql="select * from utenti where username='$user';";
                try{
                    $rs=$conn->query($sql);
                }
                catch (mysqli_sql_exception $exception){
                    //qua non devo chiudere la connessione perché non l'ho ancora attivata
                    error("errore esecuzione query",$exception->getMessage());
                }

                if($rs->num_rows==0){
                    $conn->close();
                    error("username non valido","");
                }
                $record=$rs->fetch_assoc(); //restituisce record in vettore associativo
                $passwordDB=htmlentities($record["pwd"]);

                $id=$record["id"];

                //controllo criptografato
                if($passwordDB != md5($password))
                {
                    $conn->close();
                    error("password non valida", "");
                }

                session_start();
                setcookie(session_name(), session_id(), time()+3600, "/");
                //crea una variabile session di nome userId con valore dell'id corrente
                $_SESSION["userID"]=$id;
                //il momento in cui fai l'accesso
                $_SESSION["ultimoaccesso"]=time();//espresso in secondi
                header("Location:index2.php");
                $conn->close();
            }
            else{
                error("parametri mancanti","username o password mancanti");
            }
        }


        function error($titolo,$messaggio){
            header("Location:error.php?titolo=$titolo&error=$messaggio");
            exit();
        }
        ?>


        <h1>STREAMUSYC</h1>
        <!--Login-->
        <div id="login" align="center">
            <div class="col-sm-4">
                <!--Con questo div Saltiamo 4 celle Vuote all'inizio-->
            </div>
            <div class="col-sm-4">
                <form>
                    <div class="input-group form-group">
                        <span class="input-group-addon">
                            <i class="glyphicon glyphicon-user"></i>
                        </span>
                        <input type="text" class="form-control" placeholder="Username" id="username" name="username">
                    </div>
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="glyphicon glyphicon-lock"></i>
                        </span>
                        <input type="password" class="form-control" placeholder="Password" id="pwd" name="pwd">
                    </div>
                    <br>
                    <div class="form-group">
                        <input type="button" class="button fit" value="Login" id='btnInvia'>
                    </div>
                    <div class="form-group">
                        <input type="button" class="button alt small" onclick="location.href='registrazione.php'" style="text-align: left;padding-bottom: 0" value="Registrati">
                        <input type="button" class="button  alt small" style="text-align: left;padding-top: 0" value="Password Dimenticata">
                    </div>
                </form>
            </div>
            <div class="col-sm-4">
                <!--Con questo div Saltiamo 4 celle Vuote al fondo-->
            </div>
        </div>
    </div>
</section>

<!-- Footer -->
<footer id="footer">
    <div class="copyright">
        <ul class="icons">
            <li><a href="https://twitter.com/niklaus91200" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/nicole.gazzera.3" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/clausy__/" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
            <li><a href="https://www.snapchat.com/add/clausy_00" class="icon fa-snapchat"><span class="label">Snapchat</span></a></li>
        </ul>
        &copy; Clausy&Palma Design: <a href="http://clausy.altervista.org/presentazione">Sito</a>. Images: <a href="http://clausy.altervista.org">Clausy</a>. Video: <a href="https://pixabay.com">Pixarbay</a>.
    </div>
</footer>

<!-- Scripts -->
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/jquery.scrolly.min.js"></script>
<script src="assets/js/skel.min.js"></script>
<script src="assets/js/util.js"></script>
<script src="assets/js/main.js"></script>

</body>
</html>

<!-- Scripts -->
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/jquery.scrolly.min.js"></script>
<script src="assets/js/skel.min.js"></script>
<script src="assets/js/util.js"></script>
<script src="assets/js/main.js"></script>

</body>
</html>