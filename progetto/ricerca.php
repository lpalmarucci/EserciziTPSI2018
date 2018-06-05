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


    try{
        $conn = new mysqli("127.0.0.1",'root','','dischi');
        $conn -> set_charset('utf8');
    }
    catch (mysqli_sql_exception $exception){
        error("errore connessione DB", $exception->getMessage());
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
</style>
<body>

<!-- Header -->

<form name="ricerca" id="ricerca">
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
    <!-- Nav -->
    <nav id="menu">

        <ul class="links">
            <li><a href="index2.php">Home</a></li>
            <li><a href="logout.php">Logout</a></li>
            <li><a href="inserisci.php">Inserisci</a></li>
        </ul>
    </nav>


    <!--$sql="select * from brani where titolo like \"%".$_POST["txtRicerca"]."%\" order by ID desc;";-->
    <form name="cambioPagina">
        <section id="banner" style="height: auto;">
            <div class="inner" align="center">

                <h3>Risultati della ricerca</h3>
                <div style="margin: 10px; margin-top:30px; float:left">
                    <?php
                    if($_POST["txtGenere"]=="Tutti"){
                        $sql="select * from brani where titolo like \"%".$_POST["txtRicerca"]."%\" or autore like \"%".$_POST["txtRicerca"]."%\" order by ID desc;";
                    }
                    else{
                        $sql="select * from brani where (titolo like \"%".$_POST["txtRicerca"]."%\" or autore like \"%".$_POST["txtRicerca"]."%\") and genere = '".$_POST['txtGenere']."' order by ID desc;";

                    }
                     try{
                        $rs=$conn->query($sql);
                    }
                    catch (mysqli_sql_exception $exception){
                        //qua non devo chiudere la connessione perché non l'ho ancora attivata
                        error("errore esecuzione query",$exception->getMessage());
                    }
                    //query


                    if($rs->num_rows==0){
                        $conn->close();
                        echo "<h2>Siamo spiacenti. La ricerca non ha dato risultati.</h2>";
                    }
                    $numPerFila=0;

                    /*if($rs->num_rows<3){
                        $numPerFila=$rs->num_rows;
                    }
                    else{
                        $numPerFila=1;
                    }*/

                    echo '<div class="flex flex-'."1".'">';
                    while($riga = mysqli_fetch_assoc($rs)) {
                        $id = $riga["ID"];
                        $idyt = $riga["IDYT"];

                        $autore = htmlentities($riga["autore"]);
                        $titolo = htmlentities($riga["titolo"]);
                        //echo "$autore - $titolo<br>";
                        echo'
                            <div class="video col" style="overflow: hidden; background-size: cover;">
                                <div class="image" style="overflow: hidden; background-size: cover;">                                
                                    <img width="200px" src="';

                        //devo mettere l'immagine
                        echo 'http://i.ytimg.com/vi/'.$idyt.'/maxresdefault.jpg';
                        echo'" alt=""/>
                            <div class="arrow">
                                <div class="icon fa-play"></div>
                            </div>
                        </div>
                        ';
                        echo '<div id=\'';
                        echo $id;
                        echo '\' class="link" value="ciao" name="registrazione"><input type="hidden" value="';
                        echo $id.'"></div>';
                        echo "<h5>".$titolo."</h5> <h6>".$autore."</h6>".'</div>';

                    }
                    echo '</div>';

                    ?>
                </div>
            </div>
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
</html>