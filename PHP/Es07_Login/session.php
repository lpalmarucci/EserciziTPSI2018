<?php
    //devo controllare la sessione
    //session_set_cookie_params(time()+3600,"/","localhost",false,true);
    define("timeOut", 60);//constante di timeout espressa in secondi
    session_start();
    setcookie(session_name(),session_id(),time()+3600,"/");
    if(!isset($_SESSION["userId"]))
    {
        header("Location:error.php?titolo=Ciccio,non sei loggato!&error=devi fare il login!");
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