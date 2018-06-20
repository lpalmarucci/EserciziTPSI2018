<?php
    define("TIMEOUT", 30);
    //session_set_cookie_params(time()+3600, "/", "localhost", false, true);
    //devo controllare la sessione
    session_start();
    setcookie(session_name(), session_id(), time()+3600, "/");
    if(!isset($_SESSION["userId"])) {
        /*$json=array("success"=>false);
        echo(json_encode($json));*/
        echo('{"error":true}');
        exit();
    }
    if(!(isset($_SESSION["ultimoAccesso"]) && ((time() - $_SESSION["ultimoAccesso"]) < TIMEOUT))) {
        echo('{"error":true}');
        exit();
    }
    //devo aggiornare l'ultimo accesso, in modo da avere 30 secondi in più
    $_SESSION["ultimoAccesso"]=time();
?>