<?php
    //devo controllare la sessione
    define("timeOut", 10);//constante di timeout espressa in secondi
    session_start();
    if(!isset($_SESSION["userId"]))
    {
        header("Location:index.php");
        //header("Location:error.php?titolo=Ciccio,non sei loggato!&error=devi fare il login!");
        exit();
    }
    $tempoAttuale=time();
    if (!(isset($_SESSION["ultimoAccesso"])&& (time() - $_SESSION["ultimoAccesso"])<timeOut)){
        header("Location:error.php?titolo=sessione scaduta!&error=rifare il login");
        exit();
    }
    $_SESSION["ultimoAccesso"]=time();
    //session_abort();
?>