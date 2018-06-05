<!DOCTYPE HTML>
<!--
	Broadcast by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
-->
<html>
<head>
    <title>STRAMUSYC by CLAUSY</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="assets/css/main.css" />
    <script type="text/javascript" src="jqueryui/jquery.js"></script>
    <script type="text/javascript" src="jqueryui/jquery-ui.js"></script>
    <script type="application/javascript" src="inserisci.js"></script>
    <?php
    if($_SERVER["REQUEST_METHOD"]=="POST"){
        if(   (isset($_POST["txtTitolo"]))   &&  (isset($_POST["txtAutore"]))  &&  (isset($_POST["txtTesto"])) &&  (isset($_POST["txtIDYT"]))&&  (isset($_POST["txtGenere"]))){
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
            $titolo=$conn->real_escape_string($_POST["txtTitolo"]); //real escape mi serve per ricopiare bene la stringa
            $autore=$conn->real_escape_string($_POST["txtAutore"]);
            $testo=$conn->real_escape_string($_POST["txtTesto"]);
            $IDYT=$conn->real_escape_string($_POST["txtIDYT"]);
            $genere=$conn->real_escape_string($_POST["txtGenere"]);

            //3 query
            //nel secondo campo mi serve un indice univoco, lo rendo "unica"
            //il confronto tra stringhe in mysql è case unsensative  quindi PIPPO= pippo

            $sql="insert into brani (titolo, autore, testo, IDYT, genere) values('$titolo','$autore','$testo','$IDYT','$genere')";

            //4 esecuzione query
            try{
                $rs=$conn->query($sql);
            }
            catch (mysqli_sql_exception $exception){
                //qua non devo chiudere la connessione perché non l'ho ancora attivata
                error("errore esecuzione query",$exception->getMessage());
            }

            //header("location: index2.php");
        }
    }
    ?>
</head>
<body>

<!-- Header -->
<form id="ricerca">
    <header id="header">
        <h1><a href="#">STREAMUSYC <span>by Clausy & Palma</span></a></h1>
        <a>
            <select name="txtGenere" style="150px" id="genere">
                <option value="Tutti">- Genere -</option>
                <option value="Alternative">Alternative</option>
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
                <option value="Punk">Punk</option>
                <option value="Trap">Trap</option>
            </select>
        </a>
        <a><input class="small" height="20px" id="txtRicerca"  name="txtRicerca" type="text"></a>
        <a><input type="button" value="cerca" id="btnRicerca" name="ricerca"></a>
        <a href="#menu">Menu</a>

    </header>
</form>

<!-- Nav -->

<nav id="menu">

    <ul class="links">
        <li><a href="index2.php">Home</a></li>
        <li><a href="logout.php">Logout</a></li>
        <li><a href="inserisci.php">Inserisci</a></li>
    </ul>
</nav>
<!--parte con immagine-->
<section id="banner">
    <video id="videobcg" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0">
        <source src="images/Octagon%20-%205192.mp4" type="video/mp4">
        Sorry, your browser does not support HTML5 video.
    </video>
    <div class="inner" align="center">
        <div class="container">
            <form name="registrazione" class="form-group" style="padding-left:40%; padding-top:0%">
                <div class="row">
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4" style="width: 300px">

                        <h2>Nuovo video:</h2>

                        <input name="txtIDYT" id="txtIDYT" type="text" placeholder="inserisci l'ID di youtube">
                        <input name="txtTitolo" id="txtTitolo" type="text" placeholder="Titolo">
                        <input name="txtAutore" id="txtAutore" type="text" placeholder="Autore">
                        <input name="txtGenere" id="txtGenere" type="text" placeholder="Genere">
                        <textarea name="txtTesto" id="txtTesto" type="text" placeholder="Testo"></textarea>
                        <br>

                        <div class="col-sm-4"></div>
                        <div class="col-sm-4"><button name="registrazione" id="btnInvia" class="button fit" type="button">Inserisci</button></div>
                        <div class="col-sm-4"></div>
                    </div>
            </form>
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