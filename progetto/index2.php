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
        include 'session.php';
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
                    <option value="Tutti">-  TUTTI -</option>
                    <?php
                    $sql="SELECT DISTINCT genere FROM brani";
                    try{
                        $rs=$conn->query($sql);
                    }
                    catch(mysqli_sql_exception $ex){
                        header("Location:Error.php?error='errore esecuzione query'&titolo='Query sbagliata'");
                    }
                    while($riga=$rs->fetch_assoc()){
                        $genere=$riga["genere"];
                        echo ("<option value='$genere'>$genere</option>");
                    }
                    ?>
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



    <form name="cambioPagina">

    <section id="banner" style="padding-top: 0">

        <video id="videobcg" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0">
            <source src="images/479200582.mp4" type="video/mp4">
            Sorry, your browser does not support HTML5 video.
        </video>

        <div class="inner" align="center">
            <div style="margin: 10px; margin-top:170px; float:left">
                <?php
                //query
                $sql="select * from brani  order by ID desc;";
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
                $i=0;
                while(($riga = mysqli_fetch_assoc($rs))&&($i<1)) {
                    $id = $riga["ID"];
                    $idyt=$riga["IDYT"];

                    $autore = htmlentities($riga["autore"]);
                    $titolo = htmlentities($riga["titolo"]);
                    $testo=htmlentities($riga["testo"]);


                    //echo "$autore - $titolo<br>";
                    echo'<iframe style="float:left;" width="500"; height="290"; src="';
                    echo 'https://www.youtube.com/embed/'.$idyt;
                    echo'?autoplay=1"></iframe></div>';

                    //testo

                    echo '<div style="margin: 10px; margin-top:170px;"><h4>';
                    echo $titolo;
                    echo'</h4><div style="width: 490px; overflow: auto; height: 237px; padding:0 30px; margin-bottom:30px; ">';

                    echo'<p style="font-size: 10pt;">';
                    echo $testo;
                    echo '</p></div>';
                    $i++;
                }

                ?>
            </div>
            <div style="margin: 10px; margin-top:30px; float:left">
                <h5>usciti di recente</h5>
                <div class="flex flex-5">
                    <?php
                    $sql="select * from brani where ID <> ".$id." and ID>".($rs->num_rows-20) ." order by Rand();";
                    try{
                        $rs=$conn->query($sql);
                    }
                    catch (mysqli_sql_exception $exception){
                        //qua non devo chiudere la connessione perché non l'ho ancora attivata
                        error("errore esecuzione query",$exception->getMessage());
                    }
                    $i=0;
                    while(($riga = mysqli_fetch_assoc($rs))&&($i<5)) {

                        $id = $riga["ID"];
                        $idyt=$riga["IDYT"];
                        $autore = htmlentities($riga["autore"]);
                        $titolo = htmlentities($riga["titolo"]);
                        //echo "$autore - $titolo<br>";
                        echo'
                            <div class="video col" style="overflow: hidden; background-size: cover;">
                                <div class="image" style="overflow: hidden; background-size: cover;">                                
                                    <img width="200px" src="http://i.ytimg.com/vi/'.$idyt.'/maxresdefault.jpg" alt=""/>
                                    <div class="arrow">
                                        <div class="icon fa-play"></div>
                                    </div>
                                </div>                        
                                <div id='.$id.' class="link" value="ciao" name="registrazione">
                                    <input type="hidden" value="'.$id.'">
                                </div>
                                <h5>'.$titolo.'</h5> <h6>'.$autore.'</h6>
                            </div>';
                        $i++;
                    }

                    ?>
                </div>
            </div>
        </div>
    </section>

    <!-- Main -->
    <div id="main">


        <a href="generic.php" ><span><input type="hidden" value="ciao"></span></a>
        <!-- Two -->
        <section class="wrapper style1">
            <div class="inner">
                <header>
                    <h2>Generi musicali</h2>
                    <p>Scopri nuovi artisti seguendo i generi musicali.</p>
                </header>
                <!-- Tabbed Video Section -->
                <div class="flex flex-tabs">
                    <ul class="tab-list">

                        <li><a href="#" data-tab="tab-1" class="active">Alternative</a></li>
                        <li><a href="#" data-tab="tab-2">Rock</a></li>
                        <li><a href="#" data-tab="tab-3">Pop</a></li>
                        <li><a href="#" data-tab="tab-4">Punk</a></li>
                        <li><a href="#" data-tab="tab-5">Trap</a></li>
                    </ul>
                    <div class="tabs">

                                <!-- Tab 1 -->
                                <div class="genere tab tab-1 flex flex-3 active" id="alternative">
                                </div>
                                <!-- Tab 1 -->
                                <div class="genere tab tab-2 flex flex-3" id="Rock">
                                </div>
                                <!-- Tab 3 -->
                                <div class="genere tab tab-3 flex flex-3" id="Pop">
                                </div>
                                <!-- Tab 4 -->
                                <div class="genere tab tab-4 flex flex-3" id="Punk">
                                </div>

                                <div class="genere tab tab-5 flex flex-3" id="Trap">
                                </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Three -->


    </div>

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