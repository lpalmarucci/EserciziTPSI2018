<!DOCTYPE HTML>
<!--
	Broadcast by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
-->
<html>
<head>
    <title>STREAMUSYC by CLAUSY</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="assets/css/main.css" />
    <script type="text/javascript" src="jqueryui/jquery.js"></script>
    <script type="text/javascript" src="jqueryui/jquery-ui.js"></script>
    <script type="application/javascript" src="registrazione.js"></script>
    <?php
    if($_SERVER["REQUEST_METHOD"]=="POST"){
        if(   (isset($_POST["username"]))   &&  (isset($_POST["mail"]))  &&  (isset($_POST["password"]))){
            //1 connessione
            mysqli_report(MYSQLI_REPORT_ERROR|MYSQLI_REPORT_STRICT);
            try{
                $conn = new mysqli("127.0.0.1",'root','','dischi');
                $conn -> set_charset('utf8');
            }
            catch (mysqli_sql_exception $exception){
                error("errore connessione DB", $exception->getMessage());
            }
            //connessione andata bene


            //2 lettura parametri
            $user=$conn->real_escape_string($_POST["username"]); //real escape mi serve per ricopiare bene la stringa
            $password=md5($conn->real_escape_string($_POST["password"]));
            $mail=$conn->real_escape_string($_POST["mail"]);

            //3 query
            //nel secondo campo mi serve un indice univoco, lo rendo "unica"
            //il confronto tra stringhe in mysql è case unsensative  quindi PIPPO= pippo
            $sql="insert into utenti (username, pwd, mail) values('$user','$password','$mail')";

            //4 esecuzione query
            try{
                $rs=$conn->query($sql);
            }
            catch (mysqli_sql_exception $exception){
                //qua non devo chiudere la connessione perché non l'ho ancora attivata
                error("errore esecuzione query",$exception->getMessage());
            }
            header("location: index2.php");
        }
    }
    ?>
</head>
<body>

<!-- Header -->
<header id="header">
    <h1><a href="#">STREAMUSYC <span>by Clausy</span></a></h1>

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
<br>
<section id="banner">
    <video id="videobcg" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0">
        <source src="images/banner.mp4" type="video/mp4">
        Sorry, your browser does not support HTML5 video.
    </video>
    <div class="inner" align="center">
        <div class="container">
            <form name="registrazione" class="form-group" style="padding-left:43%; padding-top:0%">
                <div class="row">
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4">

                        <h2>Registrati:</h2>

                            <input id="txtCognome" type="text" placeholder="Cognome">
                            <input id="txtNome" type="text" placeholder="Nome">
                            <input id="txtTelefono" type="text" placeholder="Telefono">
                            <input id="txtMail" type="text" placeholder="Mail" name="mail">
                            <input id="txtUsername" type="text" placeholder="Username" name="username">
                            <input id="txtPassword" type="password" placeholder="Password" name="password">
                            <input id="txtConfermaPassword" type="password" placeholder="Password" name="confermaPassword">
                        <br>

                        <div class="col-sm-4"></div>
                        <div class="col-sm-4"><button name="registrazione" id="btnInvia" class="button fit" type="button">Registrati</button></div>
                        <div class="col-sm-4"></div>
                    </div>
            </form>
        </div>font-awesome.min.css
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