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
    <script type="application/javascript" src="assets/js/index2.js"></script>
    <?php
    if($_SERVER["REQUEST_METHOD"]=="POST"){
        if(isset($_POST["id"])){
            try{
                $conn = new mysqli("127.0.0.1",'root','','dischi');
                $conn -> set_charset('utf8');
            }
            catch (mysqli_sql_exception $exception){
                error("errore connessione DB", $exception->getMessage());
            }
        }
        else{
            error("errore ID non esistente", $exception->getMessage());;
        }
    }
    ?>
</head>
<style>
    h4{
        color: #990754;
    }
    ::-webkit-scrollbar{
        width:0.8em;
        height:0.8em;
        background: rgba(340,210,50,0);
        margin-right: 10px;
    }
    ::-webkit-scrollbar:hover{
        background-color:rgba(340,210,50,0);
        border: none;
    }
    ::-webkit-resizer{
        -webkit-border-radius:4px;
        background-color:#990754;
        border: none;
    }
    ::-webkit-scrollbar-thumb{
        min-height:0.8em;
        min-width:0.8em;
        -webkit-border-radius:4px;
        background-color: #990754;
        border: none;
    }
    ::-webkit-scrollbar-thumb:hover{
        background-color: #D80067;
        border: none;
    }
    ::-webkit-scrollbar-thumb:active{
        background-color:#990754;
        border: none;
    }
    h3{
        text-align: center;
        /*margin: 0 auto;*/
    }

</style>
<body>

<!-- Header -->
<form name="ricerca" id="ricerca">
    <header id="header">
        <h1><a href="#">STREAMUSYC <span>by Clausy & Palma</span></a></h1>
        <a href="login.php">Login</a>
        <a href="#menu">Menu</a>

    </header>
    <!-- Nav -->
    <nav id="menu">

        <ul class="links">
            <li><a href="index.php">Home</a></li>
            <li><a href="logout.php">Logout</a></li>
        </ul>
    </nav>


    <form name="cambioPagina">
        <section id="banner" style="padding-top: 0">
            <?php
            $smg=$_GET["error"];
            $titolo=$_GET["titolo"];
            echo "<h3>ERROR: ".$titolo." ".$smg."</h3>";
            ?>
        </section>
    </form>

</form>

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


